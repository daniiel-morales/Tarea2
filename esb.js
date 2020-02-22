/*************************
    ┌────────────────────┐
    │ ╔═══╗[SA]201314810 │▒
    │ ╚═╦═╝  @danii_mor  │▒
    └────────────────────┘▒
**************************/

// Modules required
const http = require('http')
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest

// Service parameters
const host = '127.0.0.1'
const port = '2013'

// create a server order
var esb = http.createServer(function (req, res) {
  // opt[0] empty
  // opt[1] who is calling esb
  // opt[2] data
  var opt = req.url.split('/')
  var xhr
  switch (opt[1]) {
    case 'client':
      xhr = new XMLHttpRequest()
      xhr.open('POST', 'http://' + host + ':48101/' + opt[2], true)
      xhr.send()
      break
    case 'restaurant':
      // update status order to client
      xhr = new XMLHttpRequest()
      xhr.open('POST', 'http://' + host + ':14810/1', true)
      xhr.send()

      // send order deliver to courier
      xhr = new XMLHttpRequest()
      xhr.open('POST', 'http://' + host + ':18104/' + opt[2], true)
      xhr.send()
      break
    case 'courier':
      // update status order tu client
      xhr = new XMLHttpRequest()
      xhr.open('POST', 'http://' + host + ':14810/0', true)
      xhr.send()
      break
  }

  res.end()
})

// the server order listens on port
esb.listen(port, host)
