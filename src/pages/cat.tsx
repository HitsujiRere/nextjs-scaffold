import { Layout } from '@/components/templates/layout';

export default function CatPage() {
  return (
    <Layout title="Cat">
      <article className="prose max-w-full break-words">
        <h1>Welcome to Cat!</h1>
        <p>Nyan</p>
        <div>
          {[...Array(50)].map((_, i) => (
            <p key={i}>にゃ{'～'.repeat((Math.sin(i / 3) + 1) * 8)}ん ฅ•ω•ฅ</p>
          ))}
        </div>
      </article>
    </Layout>
  );
}
