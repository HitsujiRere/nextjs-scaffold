import { Header } from './header';

export default function TopLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />

      <main className="max-w-5xl mx-auto p-4">{children}</main>
    </>
  );
}
