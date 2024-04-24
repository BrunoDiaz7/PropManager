interface Usuario {
  nombre: string;
  apellido: string;
  calle: string;
  nombreCompletoLocador: string;
  telefono: string;
  email: string;
}

const usuarios: Usuario[] = [
  {
    nombre: 'Juan',
    apellido: 'Pérez',
    calle: 'Av. Libertador 750',
    nombreCompletoLocador: 'María González',
    telefono: '1123456789',
    email: 'juan.perez@example.com',
  },
  {
    nombre: 'Laura',
    apellido: 'Martínez',
    calle: 'Calle Falsa 123',
    nombreCompletoLocador: 'Carlos Díaz',
    telefono: '1198765432',
    email: 'laura.martinez@example.org',
  },
  {
    nombre: 'Pedro',
    apellido: 'García',
    calle: 'Rivadavia 3200',
    nombreCompletoLocador: 'Josefina Lopez',
    telefono: '1135792468',
    email: 'pedro.garcia@example.net',
  },
  {
    nombre: 'Ana',
    apellido: 'Ramirez',
    calle: 'Belgrano 980',
    nombreCompletoLocador: 'Ricardo Suarez',
    telefono: '1144534567',
    email: 'ana.ramirez@example.com',
  },
  {
    nombre: 'Miguel',
    apellido: 'Fernandez',
    calle: 'Pueyrredon 234',
    nombreCompletoLocador: 'Clara Mendez',
    telefono: '1178945612',
    email: 'miguel.fernandez@example.net',
  },
  {
    nombre: 'Sofía',
    apellido: 'Castro',
    calle: 'Moreno 1650',
    nombreCompletoLocador: 'Esteban Quito',
    telefono: '1156789123',
    email: 'sofia.castro@example.org',
  },
  {
    nombre: 'Carlos',
    apellido: 'Gomez',
    calle: 'Corrientes 345',
    nombreCompletoLocador: 'Luciana Torres',
    telefono: '1167890123',
    email: 'carlos.gomez@example.com',
  },
  {
    nombre: 'Elena',
    apellido: 'Morales',
    calle: 'Junín 760',
    nombreCompletoLocador: 'Pablo Rodriguez',
    telefono: '1198765432',
    email: 'elena.morales@example.net',
  },
];

export default usuarios;
