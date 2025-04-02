# 🎵 MIDI Parser MCP

<div align="center">
  
![version](https://img.shields.io/badge/version-0.1.0-blue)
![license](https://img.shields.io/badge/license-MIT-green)
[![tonejs](https://img.shields.io/badge/tonejs-midi-orange)](https://github.com/Tonejs/Midi)
[![MCP](https://img.shields.io/badge/MCP-ModelContextProtocol-purple)](https://modelcontextprotocol.ai/)

</div>

<div align="center">
  <strong>A powerful MCP tool for parsing and manipulating MIDI files based on Tone.js</strong>
</div>

<br>

<div align="center">
  <img src="https://via.placeholder.com/500x150?text=MIDI+Parser+MCP" alt="MIDI Parser MCP Logo" width="500">
</div>

---

## 📖 Introduction

This is a MIDI file parsing and manipulation tool based on Tone.js and the @tonejs/midi library, providing functionality through MCP (Model Context Protocol) services. This tool allows you to easily read, analyze and modify MIDI files without delving into the complexities of the MIDI file format.

## ✨ Features

- Read MIDI file information
- Get and modify track, note, control change, and pitch bend information
- Set MIDI file tempo (BPM)
- Add new notes, control changes, and pitch bends to specific tracks
- Add new tracks
- Comprehensive error handling

## 📥 Prerequisites
1. Install **Node.js**: Ensure that the npx command can run normally. It is recommended to install the latest stable version from the [Node.js official website](https://nodejs.org/)


## 🔧 Usage
Use with an MCP client, supported clients include but are not limited to:
   - [Cursor](https://www.cursor.com)
   - [Cherry Studio](https://github.com/CherryHQ/cherry-studio)
   - Claude Desktop

### Cursor Configuration Example

Configure midi-file-mcp in Cursor:

```json
"midi-file-mcp": {
    "command": "npx",
    "args": [
        "-y",
        "midi-file-mcp"
    ]
}
```

## 📄 License

This project is licensed under the MIT License. See the LICENSE file for details.

## 🙏 Acknowledgements

Thanks to the following projects and libraries, without which this tool would not be possible:
- [Tone.js](https://tonejs.github.io/) - Web Audio Framework
- [@tonejs/midi](https://github.com/Tonejs/Midi) - MIDI file parsing and manipulation library
- [MCP (Model Context Protocol)](https://modelcontextprotocol.ai/) - Makes tool integration into AI assistants possible 