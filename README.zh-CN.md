# 🎵 MIDI文件解析器

<div align="center">
  
![版本](https://img.shields.io/badge/版本-0.1.0-blue)
![许可证](https://img.shields.io/badge/许可证-MIT-green)
[![tonejs](https://img.shields.io/badge/tonejs-midi-orange)](https://github.com/Tonejs/Midi)
[![MCP](https://img.shields.io/badge/MCP-ModelContextProtocol-purple)](https://modelcontextprotocol.ai/)

</div>

<div align="center">
  <strong>基于Tone.js和MCP协议的MIDI文件解析与操作工具</strong>
</div>

<br>

---

## 📖 简介

这是一个基于Tone.js和@tonejs/midi库的MIDI文件解析和操作工具，通过MCP(Model Context Protocol)服务提供功能。这个工具使您能够轻松读取、分析和修改MIDI文件，无需深入了解MIDI文件格式的复杂性。

## ✨ 功能特点

- 读取MIDI文件信息
- 获取和修改MIDI文件的轨道、音符、控制器变化和弯音信息
- 设置MIDI文件的速度(BPM)
- 向特定轨道添加新的音符、控制器变化和弯音信息
- 添加新的轨道

## 📥 安装准备
1. 安装 **Node.js**：确保 npx 命令可以正常运行，建议前往 [Node.js 官网](https://nodejs.org/) 安装最新的稳定版本

## 🔧 使用方法
使用 MCP 客户端连接，支持的客户端包括但不限于：
   - [Cursor](https://www.cursor.com)
   - [Cherry Studio](https://github.com/CherryHQ/cherry-studio)
   - Claude Desktop

### Cursor 配置示例

在 Cursor 中配置 midi-file-mcp：

```json
"midi-file-mcp": {
    "command": "npx",
    "args": [
        "-y",
        "midi-file-mcp"
    ]
}
```

## 📄 许可证

本项目采用MIT许可证。详情请参阅LICENSE文件。

## 🙏 致谢

感谢以下项目和库，没有它们这个工具将无法实现：
- [Tone.js](https://tonejs.github.io/) - Web音频框架
- [@tonejs/midi](https://github.com/Tonejs/Midi) - MIDI文件解析和操作库
- [MCP (Model Context Protocol)](https://modelcontextprotocol.ai/) - 使工具集成到AI助手成为可能 