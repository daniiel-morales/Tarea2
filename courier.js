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
const port = '18104'

var order

// create a server for wait orders
var cor = http.createServer(function (req, res) {
  while (true) {
    order = input.question('Debes entregar el pedido de:' + req.url + '/\nterminado (S/n)?\n')
    if (order === 'S') {
      // update status order tu client
      var xhr = new XMLHttpRequest()
      xhr.open('POST', 'http://' + host + ':14810/0', true)
      xhr.send()

      res.end()
      break
    }
  }
  console.log('Listo para entregar ordenes...')
})

// the server order listens on port
cor.listen(port, host)
console.log('Listo para entregar ordenes...')
