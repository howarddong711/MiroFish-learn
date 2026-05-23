const contentEl = document.querySelector("#content");
const tocEl = document.querySelector("#toc");
const topBtn = document.querySelector("#backToTop");

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function slugify(text) {
  return text
    .trim()
    .toLowerCase()
    .replace(/[^\w\u4e00-\u9fa5]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function inlineMarkdown(text) {
  return escapeHtml(text)
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
}

function renderMarkdown(markdown) {
  const lines = markdown.split(/\r?\n/);
  const html = [];
  const headings = [];
  let inCode = false;
  let codeLang = "";
  let codeBuffer = [];
  let listOpen = false;
  let quoteOpen = false;
  let sectionOpen = false;

  function closeList() {
    if (listOpen) {
      html.push("</ul>");
      listOpen = false;
    }
  }

  function closeQuote() {
    if (quoteOpen) {
      html.push("</blockquote>");
      quoteOpen = false;
    }
  }

  function closeSection() {
    closeList();
    closeQuote();
    if (sectionOpen) {
      html.push("</section>");
      sectionOpen = false;
    }
  }

  for (const line of lines) {
    const codeMatch = line.match(/^```(.*)$/);
    if (codeMatch) {
      if (inCode) {
        html.push(`<pre><code class="language-${escapeHtml(codeLang)}">${escapeHtml(codeBuffer.join("\n"))}</code></pre>`);
        inCode = false;
        codeLang = "";
        codeBuffer = [];
      } else {
        closeList();
        closeQuote();
        inCode = true;
        codeLang = codeMatch[1].trim();
      }
      continue;
    }

    if (inCode) {
      codeBuffer.push(line);
      continue;
    }

    if (/^---+$/.test(line.trim())) {
      closeSection();
      continue;
    }

    const heading = line.match(/^(#{1,3})\s+(.+)$/);
    if (heading) {
      closeList();
      closeQuote();
      const level = heading[1].length;
      const title = heading[2].trim();
      const id = slugify(title);
      if (level === 1) {
        closeSection();
        html.push(`<section id="${id}">`);
        sectionOpen = true;
      }
      headings.push({ id, title, level });
      html.push(`<h${level} id="${id}">${inlineMarkdown(title)}</h${level}>`);
      continue;
    }

    if (!line.trim()) {
      closeList();
      closeQuote();
      continue;
    }

    if (line.startsWith("> ")) {
      closeList();
      if (!quoteOpen) {
        html.push("<blockquote>");
        quoteOpen = true;
      }
      html.push(`<p>${inlineMarkdown(line.slice(2))}</p>`);
      continue;
    }

    const bullet = line.match(/^\s*-\s+(.+)$/);
    if (bullet) {
      closeQuote();
      if (!listOpen) {
        html.push("<ul>");
        listOpen = true;
      }
      html.push(`<li>${inlineMarkdown(bullet[1])}</li>`);
      continue;
    }

    closeList();
    closeQuote();
    html.push(`<p>${inlineMarkdown(line)}</p>`);
  }

  closeSection();
  return { html: html.join("\n"), headings };
}

async function loadBook() {
  const response = await fetch("./book.md");
  if (!response.ok) {
    throw new Error(`无法加载 book.md: ${response.status}`);
  }
  const markdown = await response.text();
  const { html, headings } = renderMarkdown(markdown);
  contentEl.innerHTML = html;
  tocEl.innerHTML = headings
    .filter((heading) => heading.level <= 2)
    .map((heading) => `<a class="level-${heading.level}" href="#${heading.id}">${inlineMarkdown(heading.title)}</a>`)
    .join("");
}

topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

loadBook().catch((error) => {
  contentEl.innerHTML = `
    <section>
      <h1>教材加载失败</h1>
      <p>${escapeHtml(error.message)}</p>
      <p>如果你是直接双击打开 HTML，请改用静态服务器：</p>
      <pre><code>python3 -m http.server 8080</code></pre>
      <p>然后访问 <code>http://localhost:8080</code>。</p>
    </section>
  `;
});

