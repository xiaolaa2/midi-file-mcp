# 🎵 MIDI Parser MCP

<div align="center">
  
![version](https://img.shields.io/badge/version-0.0.0-blue)
![license](https://img.shields.io/badge/license-ISC-green)
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

## 🚀 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/midi-parser-mcp.git
cd midi-parser-mcp

# Install dependencies
npm install
# or
pnpm install

# Build the project
npm run build
```

## 🔍 Error Handling

All functions have comprehensive error handling mechanisms and will return clear error messages when problems occur. Common errors include:
- File does not exist
- File format error
- Specified track index does not exist

## 🛠️ Development

```bash
# Build the project
npm run build

# Debug with MCP Inspector
npm run debug

# Start the service
npm run start

# Clean the build files
npm run clean
```

## 📄 License

This project is licensed under the ISC License. See the LICENSE file for details.

## 🙏 Acknowledgements

Thanks to the following projects and libraries, without which this tool would not be possible:
- [Tone.js](https://tonejs.github.io/) - Web Audio Framework
- [@tonejs/midi](https://github.com/Tonejs/Midi) - MIDI file parsing and manipulation library
- [MCP (Model Context Protocol)](https://modelcontextprotocol.ai/) - Makes tool integration into AI assistants possible 