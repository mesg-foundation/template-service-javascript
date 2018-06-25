const MESG = require('mesg-js').service()

MESG.listenTask({
  taskX: require('./tasks/taskX')
})

MESG.emit("started", { x: true })