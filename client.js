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
const port = '14810'

var order

order = input.question('Bienvenido\n Que deseas ordenar?\n')

// send request order for restaurant
var xhr = new XMLHttpRequest()
xhr.open('POST', 'http://' + host + ':48101/' + order, true)
xhr.send()

console.log('Tu orden de: ' + order + ' esta en proceso...')

// create a server order
var clnt = http.createServer(function (req, res) {
  // updates order status
  if (req.url === '/1') {
    console.log('Tu ' + order + ' va en camino!')
    res.end()
    return
  }
  // ends order status
  console.log('Orden de ' + order + ' entregada, vuelve pronto')
  res.end()
  clnt.close()
})

// the server order listens on port
clnt.listen(port, host)
