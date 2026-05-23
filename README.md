# MiroFish-learn

一本面向初学者的 **MiroFish Agent 项目学习书**。

本仓库围绕开源项目 [666ghj/MiroFish](https://github.com/666ghj/MiroFish) 编写中文教学材料。目标是把一个真实的多 Agent 预测沙盘项目拆开讲清楚，帮助读者从零理解 Agent 工程、知识图谱记忆、多智能体模拟、Report Agent、前后端协作和长任务编排。

## 在线阅读

推荐直接阅读网页版：

[https://howarddong711.github.io/MiroFish-learn/](https://howarddong711.github.io/MiroFish-learn/)

完整 Markdown 源稿：

[book.md](./book.md)

## 适合谁

- 正在入门 Agent 项目的初学者
- 具备一点 Python 或 JavaScript 基础，正在阅读完整 AI 应用源码的开发者
- 想理解多 Agent 模拟完整工程形态的读者
- 想学习 Flask + Vue + LLM + Zep + OASIS 如何组合成真实产品的人

## 你会学到什么

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

## 内容目录

本书目前包含这些章节：

1. MiroFish 是什么
2. 先看目录，不急着看代码
3. 运行前你需要知道什么
4. 后端入口与 API 总览
5. 上传材料到本体生成
6. 构建 Zep 知识图谱
7. 从图谱实体到 Agent Profile
8. OASIS 双平台并行模拟
9. Report Agent 写报告
10. 前端工作台怎么组织复杂流程
11. 数据如何保存
12. 小白排错指南
13. 学习者应该重点读哪些文件
14. 建议的动手练习
15. 从 MiroFish 提炼一个最小 Agent 项目

## 和 MiroFish 原项目的关系

原项目仓库：

[https://github.com/666ghj/MiroFish](https://github.com/666ghj/MiroFish)

本仓库聚焦学习材料和源码导读。阅读本书时，建议同时打开原项目代码，对照章节中提到的文件路径学习。

## 仓库结构

```text
MiroFish-learn/
  README.md          # 仓库介绍
  book.md            # 完整教材源稿
  index.html         # GitHub Pages 入口
  assets/
    app.js           # Markdown 加载与目录生成
    style.css        # 阅读页样式
```

## 本地阅读

如果想在本地预览网页版，克隆仓库后启动一个静态服务器：

```bash
git clone https://github.com/howarddong711/MiroFish-learn.git
cd MiroFish-learn
python3 -m http.server 8080
```

然后打开：

```text
http://localhost:8080
```

推荐使用本地静态服务器预览网页版本，这样页面可以稳定读取 `book.md`。

## 参与改进

欢迎提交 Issue 或 Pull Request：

- 修正文档错误
- 补充更适合小白的解释
- 增加源码图解
- 增加实践练习
- 增加常见问题和排错案例

## 许可说明

本仓库是学习资料仓库。MiroFish 原项目的版权和许可证以 [666ghj/MiroFish](https://github.com/666ghj/MiroFish) 为准。
