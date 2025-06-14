# ⚡ Physics Learning Platform

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

An interactive web application designed to help students learn physics concepts through visualization and interactive simulations. Built with React and Vite.

## 🚀 Features

- **Interactive Physics Simulations**
  - Electric Charge Visualization
  - Electric Field Demonstrations
  - Electric Potential Calculations
  - Capacitors and Circuits
  - Ohm's Law Simulator
  - Maxwell's Equations Visualization

- **Interactive Tools**
  - Built-in Desmos Calculator
  - Visual Learning Materials
  - Interactive Examples
  - Responsive Design

## 🛠️ Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm (comes with Node.js) or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/scarfer14/CCPHYS2L_Project.git
   cd CCPHYS2L_Project
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in your browser**
   The application will be available at `http://localhost:5173`

## 📂 Project Structure

```
src/
├── assets/           # Static assets (images, icons, etc.)
├── astartsc/         # Start screen components
├── bdashsc/          # Dashboard screen components
├── components/       # Reusable UI components
├── lessons/          # Lesson components
│   ├── book.jsx      # Lesson viewer
│   ├── email.jsx     # Email component
│   ├── folder1.jsx   # Lesson folder
│   └── telescope.jsx # Telescope visualization
├── physics/          # Physics simulation components
│   ├── capacitors/   # Capacitors simulation
│   ├── charger/      # Charge simulation
│   ├── fields/       # Electric fields
│   ├── maxwell/      # Maxwell's equations
│   ├── ohms/         # Ohm's law
│   └── potential/    # Electric potential
├── App.jsx           # Main application component
└── main.jsx          # Application entry point
```

## 📝 Changelog

### [Unreleased]
- Fixed import case sensitivity issues
- Updated README documentation

### [0.4.0] - 2025-06-15
- Added comprehensive test suite
- Performance optimizations for physics simulations
- Mobile responsiveness improvements
- Added user guide and documentation

### [0.3.0] - 2025-06-01
- Implemented Maxwell's Equations visualization
- Added interactive circuit builder
- Enhanced electric field visualization
- Improved UI/UX with new theme

### [0.2.0] - 2025-05-15
- Added Ohm's Law simulator
- Implemented capacitor simulation
- Created electric potential calculator
- Added interactive examples

### [0.1.0] - 2025-05-01
- Initial project setup with Vite + React
- Added core physics simulation components
- Implemented interactive dashboard
- Added lesson viewer and email components

## 👥 Contributors

- **Brian Carlo De Vera** ([@scarfer14](https://github.com/scarfer14))
  - Project Lead
  - Core Architecture
  - Physics Simulations

- **Lovely Joy** ([@luvr1](https://github.com/luvr1))
  - UI/UX Design
  - Interactive Components
  - Documentation

- **Yoshydal** ([@Yoshydal](https://github.com/Yoshydal))
  - Lesson Content
  - Testing
  - Bug Fixes

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Vite](https://vitejs.dev/)
- Powered by [React](https://reactjs.org/)
- Icons from [Material Icons](https://fonts.google.com/icons)
