import { defineConfig } from 'drizzle-kit';

const url = process.env.POSTGRES_URL_NON_POOLING;
if (!url) {
  throw new Error('POSTGRES_URL_NON_POOLING environment variable is not set');
}

export default defineConfig({
  out: './drizzle',
  schema: './src/db/schema/',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.POSTGRES_URL_NON_POOLING as string,
  },
});
