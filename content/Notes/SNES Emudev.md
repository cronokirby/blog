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

## Opcodes

Table:

|         | \_0 | \_1   | \_2 | \_3     | \_4 | \_5 | \_6 | \_7   | \_8 | \_9 | \_a | \_b | \_c   | \_d | \_e | \_f  |
| ------- | --- | ----- | --- | ------- | --- | --- | --- | ----- | --- | --- | --- | --- | ----- | --- | --- | ---- |
| 0\_     | BRK | ORA   | COP | ORA     | TSB | ORA | ASL | ORA   | PHP | ORA | ASL | PHD | TSB   | ORA | ASL | ORA  |
|         | s   | (d,x) | s   | d,s     | d   | d   | d   | [d]   | s   | #   | A   | s   | a     | a   | a   | al   |
| **1\_** | BPL | ORA   | ORA | ORA     | TRB | ORA | ASL | ORA   | CLC | ORA | INC | TCS | TRB   | ORA | ASL | ORA  |
|         | r   | (d),y | (d) | (d,s),y | d   | d,x | d,x | [d],y | i   | a,y | A   | i   | a     | a,x | a,x | al,x |
| **2\_** | JSR | AND   | JSL | AND     | BIT | AND | ROL | AND   | PLP | AND | ROL | PLD | BIT   | AND | ROL | AND  |
|         | a   | (d,x) | al  | d,s     | d   | d   | d   | [d]   | s   | #   | A   | s   | a     | a   | a   | al   |
| **3\_** | BMI | AND   | AND | AND     | BIT | AND | ROL | AND   | SEC | AND | DEC | TSC | BIT   | AND | ROL | AND  |
|         | r   | (d),y | (d) | (d,s),y | d,x | d,x | d,x | [d],y | i   | a,y | A   | i   | a,x   | a,x | a,x | al,x |
| **4\_** | RTI | EOR   | WDM | EOR     | MVP | EOR | LSR | EOR   | PHA | EOR | LSR | PHK | JMP   | EOR | LSR | EOR  |
|         | s   | (d,x) | i   | d,s     | xyc | d   | d   | [d]   | s   | #   | A   | s   | a     | a   | a   | al   |
| **5\_** | BVC | EOR   | EOR | EOR     | MVN | EOR | LSR | EOR   | CLI | EOR | PHY | TCD | JMP   | EOR | LSR | EOR  |
|         | r   | (d),y | (d) | (d,s),y | xyc | d,x | d,x | [d],y | i   | a,y | s   | i   | al    | a,x | a,x | al,x |
| **6\_** | RTS | ADC   | PER | ADC     | STZ | ADC | ROR | ADC   | PLA | ADC | ROR | RTL | JMP   | ADC | ROR | ADC  |
|         | s   | (d,x) | s   | d,s     | d   | d   | d   | [d]   | s   | #   | A   | s   | (a)   | a   | a   | al   |
| **7\_** | BVS | ADC   | ADC | ADC     | STZ | ADC | ROR | ADC   | SEI | ADC | PLY | TDC | JMP   | ADC | ROR | ADC  |
|         | r   | (d),y | (d) | (d,s),y | d,x | d,x | d,x | [d],y | i   | a,y | s   | i   | (a,x) | a,x | a,x | al,x |
| **8\_** | BRA | STA   | BRL | STA     | STY | STA | STX | STA   | DEY | BIT | TXA | PHB | STY   | STA | STX | STA  |
|         | r   | (d,x) | rl  | d,s     | d   | d   | d   | [d]   | i   | #   | i   | s   | a     | a   | a   | al   |
| **9\_** | BCC | STA   | STA | STA     | STY | STA | STX | STA   | TYA | STA | TXS | TXY | STZ   | STA | STZ | STA  |
|         | r   | (d),y | (d) | (d,s),y | d,x | d,x | d,y | [d],y | i   | a,y | i   | i   | a     | a,x | a,x | al,x |
| **a\_** | LDY | LDA   | LDX | LDA     | LDY | LDA | LDX | LDA   | TAY | LDA | TAX | PLB | LDY   | LDA | LDX | LDA  |
|         | #   | (d,x) | #   | d,s     | d   | d   | d   | [d]   | i   | #   | i   | s   | a     | a   | a   | al   |
| **b\_** | BCS | LDA   | LDA | LDA     | LDY | LDA | LDX | LDA   | CLV | LDA | TSX | TYX | LDY   | LDA | LDX | LDA  |
|         | r   | (d),y | (d) | (d,s),y | d,x | d,x | d,y | [d],y | i   | a,y | i   | i   | a,x   | a,x | a,y | al,x |
| **c\_** | CPY | CMP   | REP | CMP     | CPY | CMP | DEC | CMP   | INY | CMP | DEX | WAI | CPY   | CMP | DEC | CMP  |
|         | #   | (d,x) | #   | d,s     | d   | d   | d   | [d]   | i   | #   | i   | i   | a     | a   | a   | al   |
| **d\_** | BNE | CMP   | CMP | CMP     | PEI | CMP | DEC | CMP   | CLD | CMP | PHX | STP | JML   | CMP | DEC | CMP  |
|         | r   | (d),y | (d) | (d,s),y | s   | d,x | d,x | [d],y | i   | a,y | s   | i   | (a)   | a,x | a,x | al,x |
| **e\_** | CPX | SBC   | SEP | SBC     | CPX | SBC | INC | SBC   | INX | SBC | NOP | XBA | CPX   | SBC | INC | SBC  |
|         | #   | (d,x) | #   | d,s     | d   | d   | d   | [d]   | i   | #   | i   | i   | a     | a   | a   | al   |
| **f\_** | BEQ | SBC   | SBC | SBC     | PEA | SBC | INC | SBC   | SED | SBC | PLX | XCE | JSR   | SBC | INC | SBC  |
|         | r   | (d),y | (d) | (d,s),y | s   | d,x | d,x | [d],y | i   | a,y | s   | i   | (a,x) | a,x | a,x | al,x |

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