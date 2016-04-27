# Charge-sdk-win-browser

SDK to integrate Ezetap Device on windows platform for Browser(JavaScript)/REST.

#Architecture
There are 3 components involved :-

1. Client(Browser)
2. Server(NodeJS)
3. Driver(Ezetap Device)

Ezetap Server (NodeJS) hosts a bunch of REST APIs to communicate with the Ezetap device, these REST APIs can be used directly or through JS APIs. 

## Getting Started
1. Download ````Server.zip```` and ````ChargeSDK.js```` from the server and client sections.
2. Ezetap app key (Demo/Prod keys)
3. Windows compatible Ezetap Device 

##Initial Setup
Unzip ````server.zip```` and Run ````install.bat````, this will install NodeJS server and forever module in windows globally.</br> This is required step as the scripts run on <b>Node Forever Module</b> 
##Server Setup
First start the server, to start **Ezetap** server unzip ````server.zip```` and double click on **Ezetap.exe**. This will start up a cli interface.

By default, Ezetap Server runs on 8081 port <a>http://localhost:8081</a>, it also makes use of <a href="https://en.wikipedia.org/wiki/WebSocket">WebSockets</a> to push **Notifications** from Device, by default websocket pushes to **1337** port. Both these ports are configurable.

###JSON Configuration 
To configure **Ezetap Server** port and **Websocket** port. Go to **config** folder inside **server** folder and change the default configuration.



	{
		"httpPort":"8081",
		"wsPort":"1337"
	}

>**Note**:- If you change the ports on server side, make sure you use the same ports on client side as well.


#Usage
There are two ways to integrate Ezetap device with your solution to start taking payments.
##Javascript Usage

You can include ````ChargeSDK.js```` in your project and start calling the APIs. For ````ChargeSDK```` Docs, please refer to <a href="http://developers.ezetap.com/api/?javascript#initialize">API Docs Section</a>


 
>Note:- ChargeSDK.js is dependent on Jquery, so dont forget to include jquery in your project.


##REST
You can also call REST services directly from your project. For ````REST```` ,please refer to <a href="http://developers.ezetap.com/api/?conf#initialize">REST API Docs</a>

