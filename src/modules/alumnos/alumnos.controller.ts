/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Param, UsePipes, ValidationPipe, Delete, Put, UseGuards } from '@nestjs/common';
import { AlumnosService } from './alumnos.service';
import { CrearAlumnoDTO } from './dtos/crear-alumno.dto';
import { alumnoResponses } from '../../common/responses/alumnos.response';
import { ActualizarAlumnoDTO } from './dtos/actualizar-alumno.dto';
import { ApiKeyGuard } from '../../common/guards/apiKey.guard';
import { ApiTags } from '@nestjs/swagger';

@UsePipes(new ValidationPipe())
@UseGuards(ApiKeyGuard)
@ApiTags('Alumnos')
@Controller('alumnos')
export class AlumnosController {

  private readonly responses = { ...alumnoResponses };

  constructor(private readonly alumnoService: AlumnosService) {}

  @Get()
  async obtenerTodos() {
    return {
      ...this.responses.obtener.exito,
      alumnos: await this.alumnoService.obtenerAlumnos()
    };
  }

  @Post()
  async crearAlumno(@Body() alumno: CrearAlumnoDTO) {
    return {
      ...this.responses.crear.exito, 
      alumno: await this.alumnoService.crearAlumno(alumno)
    } 
  }

  @Get(':id')
  async obtenerPorId(@Param('id') id: string) {
    return {
      ...this.responses.obtener.exito,
      alumno: await this.alumnoService.obtenerAlumno(id)
    };
  }

  @Delete(':id')
  async eliminarPorId(@Param('id') id: string) {
    return {
      ...this.responses.eliminar.exito,
      alumno: await this.alumnoService.eliminarPorId(id)
    };
  }

  @Put(':id')
  async actualizar(@Param('id') id: string, @Body() data: ActualizarAlumnoDTO) {
    
    return {
      ...this.responses.eliminar.exito,
      alumno: await this.alumnoService.actualizar(id, data)
    };
  }
}
