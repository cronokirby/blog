---
created: 2025-10-05
tags:
  - emulation
  - programming
---
This page is intended to collect information about developing emulators for the [[SNES]].

# Architecture

## CPU
Uses a [[Ricoh 5A22]] CPU, which is based on the [[WDC W65C816S]], in turn an evolution of the classic [[6502 ISA]], with 16 bit functionality.

# Startup
The CPU, upon initialization, will go to the reset vector at `fffc`

# Resources

## Docs
- https://novasquirrel.github.io/SnesInstructionCycleTool/
	- Good information about the timing of each CPU instruction
- https://problemkaputt.de/fullsnes.htm
    - General spec sheet.
- https://wiki.superfamicom.org/uploads/snes_schematic_color.pdf
    - Schematic.
## References
- https://undisbeliever.net/snesdev/65816-opcodes.html
## Tests
- https://github.com/SingleStepTests/65816
	- Contains instruction tests for the [[65816 Processor]].

# Reference Emulators
- https://github.com/MiSTer-devel/SNES_MiSTer
	- Verilog implementation that claims to be cycle accurate.