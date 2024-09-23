# Laman.js + React Skeleton

A minimal skeleton project to quickly start building web applications using **Laman.js** with **React**. This setup supports SSR (Server-Side Rendering) and leverages React for modern component-based development.

## Features

- 🛠 **Laman.js** for simplified server-side rendering (SSR)
- ⚛️ **React** for dynamic, component-based architecture
- 🚀 **Vite** for fast development and build tooling
- 📦 Seamless deployment on **LamanHub**

## Getting Started

### Installation

1. Initialize a new project using the Laman.js + React skeleton:

   ```bash
   npm init lamanjs -- -s lamanhub/lamanjs-react
   ```

2. Navigate to the project directory:

   ```bash
   cd your-project-name
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### Development

Start the development server:

```bash
npm run dev
```

Your app will be running on `http://localhost:3000`, and the page will automatically reload as you make changes.

### Build for Production

To build the project for production:

```bash
npm run build
```

The build files will be generated in the `dist/` folder.

### Deploy to LamanHub

You can deploy the project directly to **LamanHub** using the following command:

```bash
npm run deploy
```

This will build the project and push it to LamanHub for hosting.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
