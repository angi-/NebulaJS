import Nebula from './Nebula.class';

const app = new Nebula(4323, { routesPrefix: 'v1' });

app.start();
