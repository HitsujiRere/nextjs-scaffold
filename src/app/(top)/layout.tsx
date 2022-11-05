import { Header } from './header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />

      <main className="max-w-5xl mx-auto p-4">{children}</main>
    </>
  );
}
