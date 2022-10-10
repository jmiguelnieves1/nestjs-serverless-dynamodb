import { Test, TestingModule } from '@nestjs/testing';
import { AlumnosController } from './alumnos.controller';
import { AlumnosModule } from './alumnos.module';

describe('AlumnosController', () => {
  let alumnoController: AlumnosController;
  let idAlumno: string;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [AlumnosModule]
    }).compile();

    alumnoController = app.get<AlumnosController>(AlumnosController);
  });

  describe('Alumnos', () => {
    it('Deberia retornar definido', () => {
      expect(alumnoController).toBeDefined();
    });

    it('Crear alumno', async () => {
      const result = await alumnoController.crearAlumno({nombre: 'Jose', apellido: 'Nieves', rut: '26621693-9', telefono: '+56957655044'});
      expect(result.status).toEqual(true);
      expect(result.alumno).not.toBeNull();
      idAlumno = result.alumno.id;
    });

    it('Obtener alumnos', async () => {
      const result = await alumnoController.obtenerTodos();
      expect(result.status).toEqual(true);
      expect(result.alumnos.Count).toBeGreaterThan(0);
    });

    it('Actualizar alumno', async () => {
      const nombre = 'Nombre actualizado';
      const result = await alumnoController.actualizar(idAlumno, {nombre});
      expect(result.status).toEqual(true);
      expect(result.alumno.nombre).toEqual(nombre);
    });

    it('Obtener alumno', async () => {
      const result = await alumnoController.obtenerPorId(idAlumno);
      expect(result.status).toEqual(true);
      expect(result.alumno.id).toEqual(idAlumno);
    });

    it('Eliminar alumno', async () => {
      const result = await alumnoController.eliminarPorId(idAlumno);
      expect(result.status).toEqual(true);
      expect(result.alumno.id).toEqual(idAlumno);
    });

  });
});
