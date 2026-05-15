import "./globals.css";

export const metadata = {
  title: "Marlon Merjos",
  description: "Marlon Merjos — Data Scientist. Brooklyn, NY.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
