var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
  development: {
    db: 'mongodb://localhost/ontrack',
    rootPath: rootPath,
    port: process.env.PORT || 3000
  },
  production: {
    db: 'mongodb://sam:ontrack098@ds037185.mongolab.com:37185/ontrack',
    rootPath: rootPath,
    port: process.env.PORT || 80
  } 
}