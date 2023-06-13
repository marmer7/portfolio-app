import "./globals.css";
import Footer from "./components/Footer";
import { Inter } from "next/font/google";
import NavBar from "./components/NavBar";
import { ThemeProvider } from "./context";

require("dotenv").config();

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Marlon's Portfolio - Data Analytics & Software Development",
  description:
    "Explore Marlon's professional journey in the field of data analytics and software development. Discover his skills, experience, projects, and how he can contribute to your business.",
  url: "https://marlonm.dev",
  author: "Marlon",
  keywords:
    "Marlon, Data Analysis, Software Development, JavaScript, Python, SQL, PostgreSQL, Web Development, Full Stack Developer, Freelance, Portfolio",
  // image: "https://marlon.dev/images/preview.jpg",
  // twitterUsername: "@username", // Replace with your Twitter username
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <html lang="en">
        {/* I want to spread out the nav main and footer content */}
        <body
          className={`flex flex-col justify-between min-h-screen ${inter.className}`}
        >
          <NavBar />
          <main className="flex flex-col items-center w-full flex-grow">
            {children}
          </main>
          <Footer />
        </body>
      </html>
    </ThemeProvider>
  );
}
