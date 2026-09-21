import React from "react";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Jose Acosta Aldrete",
  description: "Jose Acosta Aldrete - Portfolio",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#000000",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <React.StrictMode>
          <Analytics />
          <div id="root">{children}</div>
        </React.StrictMode>
      </body>
    </html>
  );
}
