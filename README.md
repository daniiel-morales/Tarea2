# Tarea 2
Aplicación SOA que simula un servicio de crowdsourcing de comida a domicilio

## Instalation
First, clone the repository

run $ cd Tarea2

$ npm install

the package will install the modules requiered to run de web services

## Usage
First of all we need to start the restaurant.js service

run $ node restaurant.js

next start the courier.js service

run $ node courier.js

next start the esb.js service

run $ node esb.js

then when can start the client.js service

run $ node client.js

Next the service will ask 'what you want to order?'

write in terminal << input value >> 

Then press enter for send the order to ESB that will comunicate to restaurant

go to the restaurant service you will see

You have an order: << value >> is ready? (Y/n)?

Press Y for send and update status of order to the client

and send a order delivery to courier

go to the courier service you will see

You have to deliver: << value >> submited? (Y/n)?

Press Y for send and end status of order to the client

And the client finish the service order