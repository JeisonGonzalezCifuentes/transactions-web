# Tenpo Transactions Frontend

This project is the frontend user interface for the Tenpo Technical Challenge. It allows users to create, view, edit, and delete transactions by interacting with the [backend API](../backend/README.md).

Built with React, TypeScript, and Vite for a fast and modern development experience.

## Features
-   View a list of transactions.
-   Create new transactions.
-   Edit existing transactions.
-   Delete transactions.
-   User-friendly interface.

## Prerequisites

Before you begin, ensure you have the following installed:
-   **Node.js:** (LTS version recommended, e.g., v18.x or v20.x). You can download it from [nodejs.org](https://nodejs.org/).
-   **npm** (comes with Node.js) or **yarn** (optional, can be installed via npm: `npm install --global yarn`).

You can verify your Node.js and npm installations by running:
```bash
node -v
npm -v
```

## Getting Started

Follow these steps to get the frontend application running locally:

1.  **Clone the Repository (if you haven't already):**
    ```bash
    git clone <repository-url> # e.g., git clone https://github.com/your-username/technical-challenge-tenpo.git
    cd technical-challenge-tenpo/frontend
    ```
    If you've already cloned and are in the `technical-challenge-tenpo` directory, just `cd frontend`.

2.  **Install Dependencies:**
    Navigate to the `frontend` directory and install the project dependencies.
    Using npm:
    ```bash
    npm install
    ```
    Or using yarn:
    ```bash
    yarn install
    ```

3.  **Configure Backend API URL (if necessary):**
    The application will attempt to connect to the backend API. By default, it might assume the backend is running on `http://localhost:8080`. If your backend is running on a different URL or port, you may need to configure this.
    Check for an environment variable configuration, typically in a `.env` file at the root of the `frontend` directory (e.g., `VITE_API_BASE_URL`).
    Example `.env` file content:
    ```env
    VITE_API_BASE_URL=http://localhost:8080/api
    ```
    *Note: Ensure the backend server is running before starting the frontend.*

4.  **Run the Development Server:**
    Once dependencies are installed, you can start the Vite development server.
    Using npm:
    ```bash
    npm run dev
    ```
    Or using yarn:
    ```bash
    yarn dev
    ```
    This will typically start the application on `http://localhost:5173` (Vite's default port, but check your terminal output for the exact URL). The application will automatically reload if you make changes to the code.

## Building for Production

To create an optimized production build of the application:
Using npm:
```bash
npm run build
```
Or using yarn:
```bash
yarn build
```
This command will generate static assets in the `dist` folder, which can then be deployed to any static file hosting service.

## Key Technologies

-   **React:** A JavaScript library for building user interfaces.
-   **TypeScript:** A superset of JavaScript that adds static typing.
-   **Vite:** A next-generation frontend tooling that provides a faster and leaner development experience.
-   **[Other libraries/frameworks used, e.g., Tailwind CSS, Axios, React Router, Zustand/Redux, etc.]** (Update this list as applicable)
