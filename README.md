# MiroFish-learn

一本面向小白的 MiroFish Agent 项目学习书。

## 在线阅读方式

如果发布到 GitHub Pages，入口是：

```text
https://你的用户名.github.io/MiroFish-learn/
```

本地也可以直接打开：

[index.html](./index.html)

完整教材源稿：

[book.md](./book.md)

## 这本书讲什么

它会从零解释：

- Agent 是什么
- 多 Agent 模拟是什么
- MiroFish 为什么需要知识图谱
- 前端和后端如何协作
- 上传材料如何变成本体
- 本体如何进入 Zep 图谱
- 图谱实体如何变成 OASIS Agent
- OASIS 如何运行 Twitter / Reddit 双平台模拟
- Report Agent 如何检索图谱并生成报告
- 初学者应该怎么读源码、运行项目、做练习

## 原项目

MiroFish 原仓库：

```text
https://github.com/666ghj/MiroFish
```

本学习仓库是源码导读和教学材料，不是原项目的替代品。

## 本地阅读

在本目录启动一个静态服务器：

```bash
python3 -m http.server 8080
```

然后打开：

```text
http://localhost:8080
```

## GitHub Pages 发布

推到 GitHub 后：

1. 打开仓库 Settings
2. 找到 Pages
3. Source 选择 `Deploy from a branch`
4. Branch 选择 `main`
5. Folder 选择 `/root`
6. 保存后访问 GitHub Pages 地址

