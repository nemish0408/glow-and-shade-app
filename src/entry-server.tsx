// src/entry-server.tsx
import React from "react";
import { renderToString } from "react-dom/server";
import App from "./App";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "./components/theme/ThemeProvider";

export async function render() {
  const helmetContext: any = {};
  const appHtml = renderToString(
    <HelmetProvider context={helmetContext}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </HelmetProvider>
  );

  const { helmet } = helmetContext;

  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        ${helmet.link.toString()}
      </head>
      <body>
        <div id="root">${appHtml}</div>
        <script type="module" src="/src/main.tsx"></script>
      </body>
    </html>
  `;
}
