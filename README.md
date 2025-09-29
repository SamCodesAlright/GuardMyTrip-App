# GuardMyTrip - Travel Safety Application

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0.0-3178C6.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-4.4.5-646CFF.svg)](https://vitejs.dev/)

GuardMyTrip is a modern web application designed to enhance travel safety by providing real-time safety information, emergency contacts, and location-based alerts for travelers worldwide.

## ✨ Features

- 🌍 Interactive map showing safety ratings for destinations
- 🔔 Real-time travel alerts and advisories
- 🚨 Emergency contact information by country
- 📱 Responsive design for all devices
- 🔒 Secure user authentication and data protection
- 📊 Safety statistics and travel recommendations

## 🚀 Getting Started

### Prerequisites

- Node.js 16.14.0 or later
- npm 8.0.0 or later
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/guardmytrip.git
   cd guardmytrip
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory and add the required environment variables:
   ```env
   VITE_API_BASE_URL=your_api_base_url
   VITE_MAPBOX_ACCESS_TOKEN=your_mapbox_access_token
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`

## 🛠 Built With

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

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📧 Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter) - your.email@example.com

Project Link: [https://github.com/yourusername/guardmytrip](https://github.com/yourusername/guardmytrip)

## 🙏 Acknowledgments

- [Mapbox](https://www.mapbox.com/) for the mapping services
- [Shadcn UI](https://ui.shadcn.com/) for the beautiful components
- All the open-source libraries that made this project possible
