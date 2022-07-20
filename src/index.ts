import NeutronCore from './NeutronCore.class';

const app = new NeutronCore(4323, { routesPrefix: 'v1' });

app.start();
