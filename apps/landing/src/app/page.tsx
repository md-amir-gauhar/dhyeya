import { APP_NAME } from '@dhyeya/shared';
import styles from './page.module.css';

const features = [
  { title: 'NestJS API', body: 'Typed, modular backend with Swagger docs out of the box.' },
  { title: 'Next.js Landing', body: 'App Router marketing site with server components.' },
  { title: 'React App', body: 'Vite-powered product surface for authenticated users.' },
];

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <span className={styles.badge}>Bun workspace monorepo</span>
        <h1 className={styles.title}>{APP_NAME}</h1>
        <p className={styles.subtitle}>
          One repository. Every surface. Ship the API, the landing page, and the product together.
        </p>
        <div className={styles.actions}>
          <a className={styles.primary} href="http://localhost:5173">
            Open the app
          </a>
          <a className={styles.secondary} href="http://localhost:4000/docs">
            API docs
          </a>
        </div>
      </section>

      <section className={styles.grid}>
        {features.map((feature) => (
          <article key={feature.title} className={styles.card}>
            <h2>{feature.title}</h2>
            <p>{feature.body}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
