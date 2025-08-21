export default function PortfolioLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <div className=" bg-[var(--color-gray-900)] text-[var(--color-gray-300)]">
        {children}
      </div>
    </main>
  );
}
