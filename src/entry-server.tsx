// src/entry-server.tsx
import React from "react";
import { renderToString } from "react-dom/server";
import App from "./App";
// import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "./components/theme/ThemeProvider";

export async function render() {
  const appHtml = renderToString(
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );

  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>Biomedical Equipment</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body>
        <div id="root">${appHtml}</div>
        <script type="module" src="/src/main.tsx"></script>
      </body>
    </html>
  `;
}
