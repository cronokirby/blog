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

## Assembly

### References
- https://undisbeliever.net/snesdev/65816-opcodes.html

# Resources

# Docs
- https://novasquirrel.github.io/SnesInstructionCycleTool/
	- Good information about the timing of each CPU instruction.

## Tests
- https://github.com/SingleStepTests/65816
	- Contains instruction tests for the [[65816 Processor]].

# Reference Emulators
- https://github.com/MiSTer-devel/SNES_MiSTer
	- Verilog implementation that claims to be cycle accurate.