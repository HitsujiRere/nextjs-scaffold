import { ReactNode } from 'react';
import { Header } from 'src/components/layout/Header';

type Props = {
  title?: string;
  children: ReactNode;
};

export const DefaultLayout = ({ title, children }: Props) => {
  return (
    <>
      <header>
        <Header title={title} />
      </header>
      <main>{children}</main>
      <footer></footer>
    </>
  );
};
