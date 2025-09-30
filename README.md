# GuardMyTrip - Travel Safety Application For Tourists

[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0.0-3178C6.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-4.4.5-646CFF.svg)](https://vitejs.dev/)

Note: This is a UI prototype of GuardMyTrip WebApp. It represents the design and user flow of our future application but does not yet include backend services, real-time data, or production-ready features.

UI Prototype Link: [https://guardmytripp.netlify.app/](https://guardmytripp.netlify.app/)


## GuardMyTrip App Prototype Features (UI Only)
GuardMyTrip is envisioned as a modern travel safety platform that will help tourists stay safe and informed during their journeys.

- Interactive map (mock safety ratings for destinations)
- Placeholder travel alerts and advisories   
- Responsive design for desktop and mobile
- Responsive design for all devices
- Mock authentication flow
- Sample statistics and travel recommendations

This prototype demonstrates the look, feel, and navigation flow of the upcoming application.


## Future Scope
The following features will be implemented in future releases:

- Generating Blockhain-based Digital ID at the arrival of tourists at Airport / Hotels using Passport / Aadhar Card
- Secure user authentication & profile management
- Real-time travel alerts & Geo-location tracking for personalized safety updates   
- Integrating AI features to generate alerts and e-fir when any anomalies are detected.
- Database integration for storing user data & reports
- Integrating of AI agents to automate anomaly detection, incident response, and multilingual assistance, making the system more proactive, intelligent, and user-friendly


## Getting Started

### Prerequisites

- Node.js 16.14.0 or later
- npm 8.0.0 or later
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/GuardMyTrip-App.git
   cd GuardMyTrip-App
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:8081/`

## Built With

- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript
- [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- [shadcn/ui](https://ui.shadcn.com/) - Beautifully designed components
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [React Map GL](https://visgl.github.io/react-map-gl/) - React components for Mapbox GL JS
- [Zustand](https://github.com/pmndrs/zustand) - State management

## 📂 Project Structure

```
guardmytrip/
├── public/            # Static files
├── src/
│   ├── assets/        # Images, fonts, and other assets
│   ├── components/    # Reusable UI components
│   ├── hooks/         # Custom React hooks
│   ├── lib/           # Utility functions and configurations
│   ├── pages/         # Page components
│   ├── store/         # State management
│   ├── styles/        # Global styles and theme
│   ├── types/         # TypeScript type definitions
│   ├── App.tsx        # Main application component
│   └── main.tsx       # Application entry point
├── .eslintrc.js       # ESLint configuration
├── .gitignore         # Git ignore file
├── index.html         # HTML template
├── package.json       # Project dependencies and scripts
├── tailwind.config.js # Tailwind CSS configuration
└── tsconfig.json      # TypeScript configuration
```


