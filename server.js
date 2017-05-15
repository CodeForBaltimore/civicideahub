import express from 'express';
import webpack from 'webpack';
import WebpackMiddleware from 'webpack-dev-middleware';
import WebpackHotMiddleware from 'webpack-hot-middleware';
import http from 'http';
import fs from 'fs'
var log4js =require('log4js')
// import React from "react"
// import ReactDOMServer from 'react-dom/server'
// import App from './src/components/App.jsx'





log4js.loadAppender('file');
log4js.addAppender(log4js.appenders.file('./logs/server.log'), 'server');

var logger = log4js.getLogger('server')
logger.setLevel('INFO')

// logger.trace();
// logger.debug();
// logger.info();
// logger.warn();
// logger.error();
// logger.fatal();


var server = function() {


  var self = this;

  self.setupVariables = function() {
    self.port = process.env.PORT || 3000
    self.webpackConfig =  require(process.env.WEBPACK_CONFIG ? process.env.WEBPACK_CONFIG : './webpack.config');
    self.compiler = webpack(self.webpackConfig);

  };


  self.populateCache = function() {
    if (typeof self.pCache === "undefined") {
      self.pCache = {
        'index.ejs': ''
      };
    }
    //  Local cache for static content.
    self.pCache['index.ejs'] = fs.readFileSync('./views/index.ejs');
  };

  self.cacheGet = function(key) {
    return self.pCache[key];
  };


  self.terminator = function(sig) {
    if (typeof sig === "string") {
      logger.info('%s: Received %s - terminating sample app ...',
        Date(Date.now()), sig);
      process.exit(1);
    }
    logger.info('%s: Node server stopped.', Date(Date.now()));
  }


  self.setupTerminationHandlers = function() {
    //  Process on exit and signals.
    process.on('exit', function() {
      self.terminator();
    });

    ['SIGHUP', 'SIGINT', 'SIGQUIT', 'SIGILL', 'SIGTRAP', 'SIGABRT',
      'SIGBUS', 'SIGFPE', 'SIGUSR1', 'SIGSEGV', 'SIGUSR2', 'SIGTERM'
    ].forEach(function(element, index, array) {
      process.on(element, function() {
        self.terminator(element);
      });
    });
  };

  self.createRoutes = function() {
    self.routes = {};

    self.routes['/'] = function(req, res) {
      const reactHtml = "You are looking nice today"
      // place holder for future isomorphic rendering
       //ReactDOMServer.renderToString(<App />);

      res.render('index.ejs',  {reactOutput: reactHtml});
    };



  };

  self.initializeServer = function() {
    self.createRoutes();
    self.app = express();
    self.app.use(express.static('public'));
    self.app.use((WebpackMiddleware)(self.compiler, {
      log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
    }));

    self.app.use((WebpackHotMiddleware)(self.compiler, {
      log: console.log
    }));


    self.app.set('view engine', 'ejs');

    //  Add handlers for the app (from the routes).
    for (var r in self.routes) {
      self.app.get(r, self.routes[r]);
    }
  };

  self.initialize = function() {
    self.setupVariables();
    self.populateCache();
    self.setupTerminationHandlers();
    self.initializeServer();
  };

  self.start = function() {
    //  Start the app on the specific interface (and port).
    self.app.listen(self.port, function() {
      logger.info('%s: Node server started on %d ...',
        Date(Date.now()),  self.port);
    });
  };


}

let app = new server();
app.initialize();
app.start();
