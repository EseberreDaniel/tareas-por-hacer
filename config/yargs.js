const optsCrear = {
    descripcion: {
        demand: true,
        alias: 'd'
    }
};
const optsActualizar = {
    descripcion: {
        demand: true,
        alias: 'd'
    },
    completado: {
        default: true,
        alias: 'c'
    }
};

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', optsCrear)
    .command('actualizar', 'Actualiza el estado completado de una tarea', optsActualizar)
    .command('borrar', 'Borra una tarea', optsCrear)
    .help()
    .argv;

module.exports = {
    argv
}