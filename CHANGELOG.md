# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.1.3] - 2025-04-02

### Added
- Initial release with comprehensive MIDI file manipulation functionality
- MIDI file parsing and analysis based on Tone.js and @tonejs/midi
- Integration with Model Context Protocol (MCP) for AI assistant compatibility
- Core functionality:
  - Read and display general MIDI file information
  - Get and set MIDI file tempo (BPM)
  - Track management:
    - List all tracks in a MIDI file
    - Get detailed information about specific tracks
    - Add new tracks to existing MIDI files
  - Note operations:
    - Read all notes from specific tracks
    - Add new notes to tracks with customizable parameters
  - Control change operations:
    - Read control change events from tracks
    - Add new control change events to tracks
  - Pitch bend operations:
    - Read pitch bend events from tracks
    - Add new pitch bend events to tracks

### Changed
- N/A (Initial release)

### Fixed
- N/A (Initial release) 