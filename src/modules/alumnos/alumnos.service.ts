/* eslint-disable prettier/prettier */
import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import * as AWS from 'aws-sdk';
import Alumno from '../../common/interfaces/alumno.interface';
import { CrearAlumnoDTO } from './dtos/crear-alumno.dto';
import { alumnoResponses } from '../../common/responses/alumnos.response';
import { ActualizarAlumnoDTO } from './dtos/actualizar-alumno.dto';
import { DatabaseService } from '../database/database.service';

const dynamoDB = process.env.IS_OFFLINE
  ? new AWS.DynamoDB.DocumentClient({
      region: 'localhost',
      endpoint: 'http://localhost:5000/shell',
    })
  : new AWS.DynamoDB.DocumentClient();

@Injectable()
export class AlumnosService {

  constructor(private dbService: DatabaseService) {}

  private readonly responses = { ...alumnoResponses };

  /**
   * Obtiene la lista de todos los alumnos
   * @returns {Promise<any>}
   */
  async obtenerAlumnos(): Promise<any> {

    return await this.dbService.scan('Alumnos');
    // try {
    //   return await dynamoDB
    //     .scan({
    //       TableName: 'Alumnos',
    //     })
    //     .promise();
    // } catch {
    //   throw new InternalServerErrorException(this.responses.obtener.error);
    // }
  }

  /**
   * Crea un alumno nuevo
   * @param {CrearAlumnoDTO} alumno - Data del alumno a crear
   * @returns {Promise<Alumno>}
   */
  async crearAlumno(alumno: CrearAlumnoDTO): Promise<Alumno> {
    const alumnoObj: Alumno = {
      id: uuid(),
      ...alumno,
    };

    const result = await this.dbService.put('Alumnos', alumnoObj);

    return alumnoObj;
  }

  /**
   * Obtiene un alumno en especifico según el ID
   * @param {String} id - Id del alumno a buscar
   * @returns {Promise<Alumno>}
   */
  async obtenerAlumno(id: string): Promise<Alumno> {
    const alumno = await this.dbService.getById('Alumnos', id);

    if(!alumno || Object.entries(alumno).length === 0) {
      throw new NotFoundException(this.responses.obtener.noExiste);
    }

    return alumno.Item;
  }

  /**
   * Elimina a un alumno según su ID.
   * @param {String} id - Id del alumno a eliminar
   * @returns {Promise<Alumno>}
   */
  async eliminarPorId(id: string): Promise<Alumno> {

    const alumno = await this.obtenerAlumno(id).catch(() => {
      throw new NotFoundException(this.responses.eliminar.noExiste);
    });

    await this.dbService.delete('Alumnos', id);

    return alumno;
  }

  /**
   * Actualiza la información de un alumno
   * @param {String} id - Id del alumno a actualizar
   * @param {ActualizarAlumnoDTO} data - Data a actualizar del alumno
   * @returns {Promise<Alumno>}
   */
  async actualizar(id: string, data: ActualizarAlumnoDTO): Promise<Alumno> {

    const alumno = await this.obtenerAlumno(id).catch(() => {
      throw new NotFoundException(this.responses.actualizar.noExiste);
    });

    const alumnoObj: Alumno = {...alumno, ...data};

    await this.dbService.put('Alumnos', alumnoObj);

    return alumnoObj;
  }
}
