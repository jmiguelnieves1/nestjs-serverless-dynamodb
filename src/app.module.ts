import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlumnosModule } from './modules/alumnos/alumnos.module';
import { DatabaseModule } from './modules/database/database.module';

@Module({
  imports: [DatabaseModule, AlumnosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
