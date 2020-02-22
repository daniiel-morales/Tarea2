/*************************
    ┌────────────────────┐
    │ ╔═══╗[SA]201314810 │▒
    │ ╚═╦═╝  @danii_mor  │▒
    └────────────────────┘▒
**************************/

// Modules required
const http = require('http')
const input = require('readline-sync')
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest

// Service parameters
const host = '127.0.0.1'
const port = '48101'

var order

// create a server for wait orders
var rst = http.createServer(function (req, res) {
  while (true) {
    order = input.question('Tienes un pedido de:' + req.url + '/\nse encuentra listo (S/n)?\n')
    if (order === 'S') {
      // notify ESB that order is ready for update status to client and notify courier
      var xhr = new XMLHttpRequest()
      xhr.open('POST', 'http://' + host + ':2013/restaurant' + req.url, true)
      xhr.send()

      res.end()
      break
    }
  }
  console.log('Bienvenido esperando ordenes...')
})

// the server order listens on port
rst.listen(port, host)
console.log('Bienvenido esperando ordenes...')
