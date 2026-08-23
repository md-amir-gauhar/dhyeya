import { Injectable } from '@nestjs/common';
import { APP_NAME, type HealthStatus } from '@dhyeya/shared';

@Injectable()
export class HealthService {
  check(): HealthStatus {
    return {
      status: 'ok',
      service: `${APP_NAME.toLowerCase()}-api`,
      version: '0.0.1',
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
    };
  }
}
