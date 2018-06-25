const MESG = require('mesg-js').service()

MESG.listenTask({
  taskX: require('./tasks/taskX')
})

MESG.emitEvent("started", { x: true })
