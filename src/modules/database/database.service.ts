import { Injectable, InternalServerErrorException } from '@nestjs/common';
import * as AWS from 'aws-sdk';
import { databaseResponses } from '../../common/responses/database.response';

@Injectable()
export class DatabaseService {

    private readonly responses = { ...databaseResponses };
    private dynamoDB = process.env.IS_OFFLINE
    ? new AWS.DynamoDB.DocumentClient({
        region: 'localhost',
        endpoint: 'http://localhost:5000/shell',
      })
    : new AWS.DynamoDB.DocumentClient();

    /**
     * Hace un select all a la bd
     * @param {string} tabla - Tabla a consultar
     * @returns {Promise<any>}
     */
    async scan(tabla: string): Promise<any> {
        try {
            return await this.dynamoDB
              .scan({
                TableName: tabla,
              })
              .promise();
          } catch {
            throw new InternalServerErrorException(this.responses.error);
          }
    }

    /**
     * Crea o actualiza un campo en la base de datos
     * @param {string} tabla - Nombre de la tabla 
     * @param {any} item - Objeto a actualizar/crear 
     * @returns {Promise<any>}
     */
    async put(tabla: string, item: any): Promise<any> {
        try {
            await this.dynamoDB
              .put({
                TableName: tabla,
                Item: item,
              })
              .promise();
          } catch(e) {
            console.log(e);
            throw new InternalServerErrorException(this.responses.error);
          }

          return item;
    }

    /**
     * Obtener un item por la PK
     * @param {String} tabla - Tabla a consultar
     * @param {String} id - Parametro de busqueda
     * @returns {Promise<any>}
     */
    async getById(tabla: string, id: string): Promise<any> {
        try {
            return await this.dynamoDB
              .get({
                TableName: tabla,
                Key: { id },
              })
              .promise();
      
          } catch {
            throw new InternalServerErrorException(this.responses.error);
          }
    }

    /**
     * Elimina un elemento de la BD
     * @param {String} tabla - Tabla a consultar
     * @param {String} id - Parametro a eliminar 
     * @returns {Promise<any>}
     */
    async delete(tabla: string, id: string): Promise<any> {
        try {
            return await this.dynamoDB
              .delete({
                TableName: tabla,
                Key: { id },
              })
              .promise();
          } catch {
            throw new InternalServerErrorException(this.responses.error);
          }
    }
}
