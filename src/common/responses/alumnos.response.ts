/* eslint-disable prettier/prettier */
export const alumnoResponses = {
  noPermisos: {
    status: false,
    mensaje: 'No tienes los permisos necesario para ejecutar esta acción.',
  },
  crear: {
    error: {
      status: false,
      mensaje: 'El alumno no pudo ser creado, un error ha ocurrido.',
    },
    exito: {
      status: true,
      mensaje: 'El alumno fue creado satisfactoriamente.',
    },
  },
  obtener: {
    noExiste: {
      status: false,
      mensaje: 'El usuario que deseas obtener no existe',
    },
    error: {
      status: false,
      mensaje: 'No se pudo obtener el/los alumnos, un error ha ocurrido.',
    },
    exito: {
      status: true,
      mensaje: 'El/Los alumnos fueron listados correctamente.',
    },
  },
  eliminar: {
    noExiste: {
      status: false,
      mensaje: 'El usuario que deseas eliminar no existe',
    },
    error: {
      status: false,
      mensaje: 'No se pudo eliminar el alumno, un error ha ocurrido.',
    },
    exito: {
      status: true,
      mensaje: 'El alumno fue eliminado correctamente.',
    },
  },
  actualizar: {
    noExiste: {
      status: false,
      mensaje: 'El usuario que deseas actualizar no existe',
    },
    error: {
      status: false,
      mensaje: 'No se pudo actualizar el alumno, un error ha ocurrido.',
    },
    exito: {
      status: true,
      mensaje: 'El alumno fue actualizado correctamente.',
    },
  }
};
