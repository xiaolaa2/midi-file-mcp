# 🎵 MIDI File MCP

<div align="center">
  
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

### 🎹 Using MIDI Parser MCP with Absolute Paths

All operations in MIDI Parser MCP require the absolute path to the MIDI file. This ensures that the tool can correctly locate and manipulate your MIDI files regardless of the current working directory.

#### Example Prompts

Here are some example prompts you can use with your AI assistant:

1. **Get MIDI File Information**:
   ```
   Can you show me information about the MIDI file at D:\path\to\your\file.mid?
   ```

2. **Analyzing Tracks**:
   ```
   Please analyze all tracks in D:\path\to\your\file.mid and tell me how many notes are in each track.
   ```

3. **Setting Tempo**:
   ```
   Change the tempo of D:\path\to\your\file.mid to 120 BPM.
   ```

4. **Working with Notes**:
   ```
   Show me all notes in track 1 of D:\path\to\your\file.mid.
   ```

5. **Adding Notes**:
   ```
   Add a C4 note at position 0 with a duration of 1 beat to track 0 in D:\path\to\your\file.mid.
   ```

#### Available Operations

| Operation | Description | Parameters |
|-----------|-------------|------------|
| get_midi_info | Get general MIDI file information | filePath |
| set_tempo | Set the tempo (BPM) of a MIDI file | filePath, bpm |
| get_tracks_info | Get information about all tracks | filePath |
| get_track_info_by_index | Get information about a specific track | filePath, trackIndex |
| get_notes_by_index | Get all notes from a specific track | filePath, trackIndex |
| get_pitchbends_by_index | Get all pitch bends from a specific track | filePath, trackIndex |
| get_controlchanges_by_index | Get all control changes from a specific track | filePath, trackIndex |
| add_notes_by_index | Add notes to a specific track | filePath, trackIndex, notes |
| add_controlchanges_by_index | Add control changes to a specific track | filePath, trackIndex, controlchanges |
| add_pitchbends_by_index | Add pitch bends to a specific track | filePath, trackIndex, pitchbends |
| add_track | Add a new track to the MIDI file | filePath |

**Note**: Always use double backslashes (`\\`) or forward slashes (`/`) in file paths when working with Windows paths to avoid errors.

## 📄 License

This project is licensed under the MIT License. See the LICENSE file for details.

## 🙏 Acknowledgements

Thanks to the following projects and libraries, without which this tool would not be possible:
- [Tone.js](https://tonejs.github.io/) - Web Audio Framework
- [@tonejs/midi](https://github.com/Tonejs/Midi) - MIDI file parsing and manipulation library
- [MCP (Model Context Protocol)](https://modelcontextprotocol.ai/) - Makes tool integration into AI assistants possible 