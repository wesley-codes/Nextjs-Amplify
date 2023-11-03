import "@aws-amplify/ui-react/styles.css";

import { Inter } from "next/font/google";
import AmplifyProvider from "./lib/Provider";
import Link from "next/link";
export const metadata = {
  title: "Amplify & Nextjs",
  description: "NextJs Auth with Amplify",
};

const inter = Inter({ subsets: ["latin"] });
export default function layout({ children }) {
  return (
    <html lang="en">
      <AmplifyProvider>
        <body className={inter.className} suppressHydrationWarning={true}>
          <div
            style={{
              width: "40%",
              justifyContent: "space-around",
              display: "flex",
            }}
          >
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
          </div>
          {children}
        </body>
      </AmplifyProvider>
    </html>
  );
}
