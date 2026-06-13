// Lightweight health endpoint for container/Coolify healthchecks.
// Resource route (no default export) — does no external calls.
export const loader = () => new Response('ok', {status: 200});
