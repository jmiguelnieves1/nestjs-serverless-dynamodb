require('dotenv').config();
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'

@Injectable()
export class ApiKeyGuard implements CanActivate {

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest();
    const key = req.headers['api-key'] ? req.headers['api-key'] : null;
    return key === process.env.API_KEY;
  }
}
