import { z } from 'zod';

export const healthStatusSchema = z.object({
  status: z.enum(['ok', 'degraded', 'down']),
  service: z.string(),
  version: z.string(),
  uptime: z.number(),
  timestamp: z.string(),
});

export type HealthStatusInput = z.infer<typeof healthStatusSchema>;
