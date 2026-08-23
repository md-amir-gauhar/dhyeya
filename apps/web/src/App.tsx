import { useEffect, useState } from 'react';
import { APP_NAME, type HealthStatus } from '@dhyeya/shared';
import './App.css';

export default function App() {
  const [health, setHealth] = useState<HealthStatus | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    fetch('/api/health', { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error(`API responded with ${res.status}`);
        return res.json() as Promise<HealthStatus>;
      })
      .then(setHealth)
      .catch((err: unknown) => {
        if (err instanceof Error && err.name === 'AbortError') return;
        setError(err instanceof Error ? err.message : 'Unknown error');
      });

    return () => controller.abort();
  }, []);

  return (
    <main className="shell">
      <header className="header">
        <h1>{APP_NAME}</h1>
        <p>React + Vite application workspace</p>
      </header>

      <section className="panel">
        <h2>API status</h2>
        {error && <p className="status status--down">Unreachable — {error}</p>}
        {!error && !health && <p className="status">Checking…</p>}
        {health && (
          <dl className="details">
            <dt>Status</dt>
            <dd className="status status--ok">{health.status}</dd>
            <dt>Service</dt>
            <dd>{health.service}</dd>
            <dt>Version</dt>
            <dd>{health.version}</dd>
            <dt>Uptime</dt>
            <dd>{health.uptime.toFixed(1)}s</dd>
          </dl>
        )}
      </section>
    </main>
  );
}
