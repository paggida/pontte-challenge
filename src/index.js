const server = require('./server');
const appConfig = require('./config/app')

server.listen(appConfig.ApiPort || 3000);
console.log(`API url: http://localhost:${appConfig.ApiPort || 3000}`);
