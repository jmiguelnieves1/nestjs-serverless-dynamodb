/* eslint-disable prettier/prettier */
import { MaxLength, IsPhoneNumber, IsOptional } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class ActualizarAlumnoDTO {
  @ApiPropertyOptional({
    type: String,
    description: 'Esta propiedad es opcional',
  })
  @IsOptional()
  @MaxLength(100)
  nombre?: string;

  @ApiPropertyOptional({
    type: String,
    description: 'Esta propiedad es opcional',
  })
  @IsOptional()
  @MaxLength(100)
  apellido?: string;

  @ApiPropertyOptional({
    type: String,
    description: 'Esta propiedad es opcional',
  })
  @IsOptional()
  @MaxLength(100)
  rut?: string;

  @ApiPropertyOptional({
    type: String,
    description: 'Esta propiedad es opcional',
  })
  @IsOptional()
  @IsPhoneNumber()
  telefono?: string;
}
