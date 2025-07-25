import Nav from "@/components/organisms/Nav/Nav";

export default function ToursLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="w-full h-screen">
      <Nav />
      {children}
    </main>
  );
}
