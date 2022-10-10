/* eslint-disable prettier/prettier */
import { IsNotEmpty, MaxLength, IsPhoneNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CrearAlumnoDTO {
  @ApiProperty({
    type: String,
    description: 'Esta propiedad es requerida',
  })
  @IsNotEmpty()
  @MaxLength(100)
  nombre: string;

  @ApiProperty({
    type: String,
    description: 'Esta propiedad es requerida',
  })
  @IsNotEmpty()
  @MaxLength(100)
  apellido: string;

  @ApiProperty({
    type: String,
    description: 'Esta propiedad es requerida',
  })
  @IsNotEmpty()
  @MaxLength(100)
  rut: string;

  @ApiProperty({
    type: String,
    description: 'Esta propiedad es requerida',
  })
  @IsNotEmpty()
  @IsPhoneNumber()
  telefono: string;
}
