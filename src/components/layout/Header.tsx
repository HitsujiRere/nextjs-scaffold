import Head from 'next/head';

type Props = {
  title?: string;
};

export const Header = ({ title }: Props) => {
  const headerTitle = title ? `Header - ${title}` : 'Header';

  return (
    <>
      <Head>
        <title>{headerTitle}</title>
      </Head>

      <div className="m-1 flex justify-between  border-2 border-amber-500 p-1">
        <p className="text-2xl">{headerTitle}</p>
      </div>
    </>
  );
};
