
var redzilla = require('../index')

redzilla.start()
  .then(function() {
      return redzilla.getServerManager().app()
  })
  .then(function(app) {
      return redzilla.instances.start('demo')
  })
  .catch((e)=> {
      console.warn('An error occured: %j', e)
      return redzilla.stop().finally(process.exit)
  })