const User_controller  = require('../controllers/User_controller');
const DT_SensorsRecord_controller  = require('../controllers/DT_SensorsRecord_controller');
// const middleware= require('./middleware');
module.exports = (app) =>{
  

  app.post('/api/sendmailto',
  DT_SensorsRecord_controller.SendMailTo);
  app.get('/api/sendsmsto',
  DT_SensorsRecord_controller.SendSMSTo);

}
