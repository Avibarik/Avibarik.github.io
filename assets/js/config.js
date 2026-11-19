/**
 * PORTFOLIO CONFIGURATION - AVINASH BARIK
 * 
 * Hardware, VLSI, RISC-V & Embedded Systems Portfolio
 */

const PORTFOLIO_CONFIG = {
  // Personal Info
  personal: {
    name: "Avinash Barik",
    role: "ECE Student | VLSI, RISC-V & Embedded Systems",
    titles: [
      "ECE Undergraduate",
      "VLSI & Digital Design Enthusiast",
      "RISC-V Computer Architecture",
      "FPGA & Hardware Engineer"
    ],
    bio: "Electronics & Communication Engineering (ECE) student specializing in digital IC design, computer architecture, and embedded systems. Experienced in designing synthesizable processor architectures with Verilog HDL, performing static timing analysis (STA), and deploying designs onto Intel Cyclone V FPGAs.",
    avatar: "assets/images/chip-graphic.svg",
    location: "India | Open to Remote & On-site Hardware Roles",
    statusBadge: "Open to VLSI / Embedded Hardware Opportunities",
    resumeUrl: "#", // Update with your resume link
  },

  // Social Links
  socials: {
    github: "https://github.com/avibarik",
    linkedin: "https://linkedin.com/in/avibarik",
    twitter: "https://twitter.com/avibarik",
    email: "mailto:barikavinash2003@gmail.com", // You can update with your exact email
    displayEmail: "barikavinash2003@gmail.com"
  },

  // Key Hardware Highlights / Stats
  stats: [
    { label: "FPGA Max Clock (Fmax)", value: "92.78 MHz" },
    { label: "Datapath Architecture", value: "32-Bit RV32I" },
    { label: "Timing Slack (SDC)", value: "+9.22 ns" },
    { label: "Target FPGA Device", value: "Cyclone V" }
  ],

  // Skills organized by Hardware / VLSI domain
  skills: [
    {
      category: "Hardware Description & Verification",
      items: [
        { name: "Verilog HDL (Synthesizable)", level: "Advanced" },
        { name: "SystemVerilog (Basics)", level: "Intermediate" },
        { name: "Testbench Writing", level: "Advanced" },
        { name: "Icarus Verilog (iverilog)", level: "Advanced" },
        { name: "GTKWave & VCD Waveform Analysis", level: "Advanced" }
      ]
    },
    {
      category: "Digital Design & Computer Architecture",
      items: [
        { name: "RISC-V Architecture (RV32I)", level: "Advanced" },
        { name: "Single-Cycle & Pipelined Datapath", level: "Advanced" },
        { name: "ALU, Decoders & Register File", level: "Advanced" },
        { name: "Read-After-Write (RAW) Hazard Handling", level: "Intermediate" },
        { name: "FSM & Control Unit Design", level: "Advanced" }
      ]
    },
    {
      category: "EDA Tools & FPGA Synthesis",
      items: [
        { name: "Intel Quartus Prime (Lite 25.1)", level: "Advanced" },
        { name: "TimeQuest Static Timing Analysis (STA)", level: "Advanced" },
        { name: "Synopsys Design Constraints (SDC)", level: "Advanced" },
        { name: "Intel Cyclone V (5CSEBA6U19C6)", level: "Advanced" },
        { name: "ModelSim / QuestaSim", level: "Intermediate" }
      ]
    },
    {
      category: "Embedded Systems & Electronics",
      items: [
        { name: "C / Embedded C", level: "Advanced" },
        { name: "Python for Hardware Automation", level: "Intermediate" },
        { name: "Serial Protocols (UART / SPI / I2C)", level: "Intermediate" },
        { name: "Linear Integrated Circuits (LIC)", level: "Intermediate" },
        { name: "Analog Electronics & Control Systems", level: "Intermediate" }
      ]
    }
  ],

  // Featured Projects
  projects: [
    {
      id: "project-riscv",
      title: "32-Bit Single-Cycle RISC-V (RV32I) Processor",
      category: "Computer Architecture",
      description: "A complete synthesizable 32-bit RISC-V integer core written in Verilog HDL. Features a Harvard architecture, 32-entry dual-read register file, two-level control decoding (Main + ALU Decoder), and signed overflow correction. Synthesized and placed-and-routed on an Intel Cyclone V FPGA achieving 92.78 MHz Fmax with zero timing violations and +9.22 ns slack.",
      tags: ["Verilog HDL", "RISC-V (RV32I)", "Intel Quartus Prime", "Cyclone V FPGA", "SDC Timing Closure", "GTKWave"],
      image: "assets/images/riscv-datapath.png",
      liveUrl: "https://github.com/avibarik/RISC---V",
      githubUrl: "https://github.com/avibarik/RISC---V",
      featured: true,
      metrics: "92.78 MHz Fmax | 186 ALMs | 334 Regs"
    },
    {
      id: "project-verification",
      title: "RISC-V Functional Verification & Waveform Analysis",
      category: "Digital Verification",
      description: "Modular verification testbench suite exercising arithmetic operations (ADD, SUB), logical bitwise manipulation (AND, OR), signed branch conditions (SLT), and Read-After-Write (RAW) data hazard dependencies loaded dynamically via $readmemh hex memory files.",
      tags: ["Icarus Verilog", "GTKWave", "VCD Dump", "Hazard Verification", "Assembly Test"],
      image: "assets/images/riscv-waveform.png",
      liveUrl: "https://github.com/avibarik/RISC---V#testing-and-verification",
      githubUrl: "https://github.com/avibarik/RISC---V",
      featured: true,
      metrics: "8 Instructions Verified | Zero Hazards"
    },
    {
      id: "project-ic-graphic",
      title: "VLSI Architecture & Microarchitecture Exploration",
      category: "VLSI / Digital IC",
      description: "Exploration of modular sub-blocks including 32-bit parameterized multiplexers, immediate sign-extension generators (I-type, S-type, B-type), asynchronous PC adders, and Harvard architecture memory buses designed for ASIC and FPGA flows.",
      tags: ["Digital IC", "Microarchitecture", "Verilog", "RTL Design"],
      image: "assets/images/chip-graphic.svg",
      liveUrl: "https://github.com/avibarik",
      githubUrl: "https://github.com/avibarik",
      featured: false,
      metrics: "Area-efficient RTL"
    }
  ],

  // Academic and Engineering Journey
  experiences: [
    {
      period: "Undergraduate (Current)",
      role: "B.Tech in Electronics & Communication Engineering (ECE)",
      company: "Core Focus: VLSI & Digital System Design",
      description: "Coursework and hands-on lab projects spanning Digital Electronics, Computer Organization & Architecture, Linear Integrated Circuits (LIC), Microprocessors & Microcontrollers, Signals & Systems, and Control Systems."
    },
    {
      period: "Hardware Project",
      role: "Digital Design & FPGA Synthesis Engineer",
      company: "Single-Cycle RISC-V Processor Core",
      description: "Designed from ground up in Verilog HDL. Verified architectural accuracy with iverilog/GTKWave. Implemented SDC timing constraints in Quartus Prime, achieving 92.78 MHz clock closure on Intel Cyclone V FPGA."
    }
  ]
};

// Export to window object for browser access
if (typeof window !== "undefined") {
  window.PORTFOLIO_CONFIG = PORTFOLIO_CONFIG;
}
