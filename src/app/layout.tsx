import "./globals.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

export const metadata = {
  title: "Marlon Merjos - Data Analytics Leader",
  description:
    "Portfolio for Marlon Merjos, a data analytics leader specializing in predictive modeling, SQL, Python, and business impact analytics.",
  url: "https://marlonm.dev",
  author: "Marlon Merjos",
  keywords:
    "Marlon Merjos, Data Analytics, Revenue Analytics, Python, SQL, Predictive Modeling, dbt, Airflow, Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* I want to spread out the nav main and footer content */}
      <body
        suppressHydrationWarning
        className="app-body flex min-h-screen flex-col justify-between"
      >
        <NavBar />
        <main className="mb-10 flex w-full flex-grow flex-col items-center px-4 pt-8 sm:px-6">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
