# 🎵 MIDI文件解析器

<div align="center">
  
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

### 🎹 使用绝对路径操作MIDI文件

MIDI Parser MCP的所有操作都需要提供MIDI文件的绝对路径。这确保了无论当前工作目录是什么，工具都能正确定位和操作您的MIDI文件。

#### 示例提示

以下是一些您可以与AI助手一起使用的示例提示：

1. **获取MIDI文件信息**：
   ```
   请显示D:\path\to\your\file.mid文件的信息。
   ```

2. **分析轨道**：
   ```
   请分析D:\path\to\your\file.mid中的所有轨道，并告诉我每个轨道有多少个音符。
   ```

3. **设置速度**：
   ```
   将D:\path\to\your\file.mid的速度更改为120 BPM。
   ```

4. **处理音符**：
   ```
   显示D:\path\to\your\file.mid中轨道1的所有音符。
   ```

5. **添加音符**：
   ```
   在D:\path\to\your\file.mid的轨道0的位置0添加一个持续时间为1拍的C4音符。
   ```

#### 可用操作

| 操作 | 描述 | 参数 |
|-----------|-------------|------------|
| get_midi_info | 获取MIDI文件基本信息 | filePath |
| set_tempo | 设置MIDI文件的速度(BPM) | filePath, bpm |
| get_tracks_info | 获取所有轨道的信息 | filePath |
| get_track_info_by_index | 获取特定轨道的信息 | filePath, trackIndex |
| get_notes_by_index | 获取特定轨道的所有音符 | filePath, trackIndex |
| get_pitchbends_by_index | 获取特定轨道的所有弯音 | filePath, trackIndex |
| get_controlchanges_by_index | 获取特定轨道的所有控制器变化 | filePath, trackIndex |
| add_notes_by_index | 向特定轨道添加音符 | filePath, trackIndex, notes |
| add_controlchanges_by_index | 向特定轨道添加控制器变化 | filePath, trackIndex, controlchanges |
| add_pitchbends_by_index | 向特定轨道添加弯音 | filePath, trackIndex, pitchbends |
| add_track | 向MIDI文件添加新轨道 | filePath |

**注意**：在Windows系统下使用路径时，请始终使用双反斜杠(`\\`)或正斜杠(`/`)以避免错误。

## 📄 许可证

本项目采用MIT许可证。详情请参阅LICENSE文件。

## 🙏 致谢

感谢以下项目和库，没有它们这个工具将无法实现：
- [Tone.js](https://tonejs.github.io/) - Web音频框架
- [@tonejs/midi](https://github.com/Tonejs/Midi) - MIDI文件解析和操作库
- [MCP (Model Context Protocol)](https://modelcontextprotocol.ai/) - 使工具集成到AI助手成为可能 