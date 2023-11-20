export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <div className="flex h-[calc(100vh-80px)] overflow-scroll">
        {children}
        </div>
    </main>
  );
}