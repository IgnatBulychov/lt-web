import "./styles/global.scss";
import Header from "@/components/app/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="container mx-auto">{children}</div>
      </body>
    </html>
  );
}
