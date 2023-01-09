const app = require('./app');

app.set( 'port', 10000);

// Start node server
app.listen( app.get( 'port' ), function() {
  console.log( 'Node server is running on port ' + app.get( 'port' ));
  });

// app.listen(443, ()=>{
//   console.log('Running server');
//  // console.log(app);
//  // console.log(app.storeA);
// })








