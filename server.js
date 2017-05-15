import express from 'express';
import webpack from 'webpack';
import WebpackMiddleware from 'webpack-dev-middleware';
import WebpackHotMiddleware from 'webpack-hot-middleware';
import http from 'http';
import fs from 'fs'
import log4js from 'log4js'

log4js.loadAppender('file');
log4js.addAppender(log4js.appenders.file('logs/server.log'), 'server');

let logger = log4js.getLogger('server')
logger.setLevel('INFO')

// logger.trace();
// logger.debug();
// logger.info();
// logger.warn();
// logger.error();
// logger.fatal();


const server = () =>{

  let self = this;

  self.setupVariables = () =>{
    self.port = process.env.PORT || 3000
    self.webpackConfig =  require(process.env.WEBPACK_CONFIG ? process.env.WEBPACK_CONFIG : './webpack.config');
    self.compiler = webpack(webpackConfig);

  };


  self.populateCache = () =>{
    if (typeof self.pCache === "undefined") {
      self.pCache = {
        'index.ejs': ''
      };
    }
    //  Local cache for static content.
    self.pCache['index.ejs'] = fs.readFileSync('./views/index.ejs');
  };

  self.cacheGet = (key) =>{
    return self.pCache[key];
  };


  self.terminator = (sig) =>{
    if (typeof sig === "string") {
      logger.info('%s: Received %s - terminating sample app ...',
        Date(Date.now()), sig);
      process.exit(1);
    }
    logger.info('%s: Node server stopped.', Date(Date.now()));
  }


  self.setupTerminationHandlers = () => {
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

  self.createRoutes = () => {
    self.routes = {};

    self.routes['/'] = (req, res) => {
      res.render(self.cacheGet('index.ejs'),  {reactOutput: reactHtml});
    };



  };

  self.initializeServer = () => {
    self.createRoutes();
    self.app = express();
    self.app.use(express.static('public'));
    self.app.use((WebpackMiddleware)(compiler, {
      log: logger.info, path: '/__webpack_hmr', heartbeat: 10 * 1000
    }));

    app.use((WebpackHotMiddleware)(compiler, {
      log: logger.info
    }));


    self.app.set('view engine', 'ejs');

    //  Add handlers for the app (from the routes).
    for (var r in self.routes) {
      self.app.get(r, self.routes[r]);
    }
  };

  self.initialize = () => {
    self.setupVariables();
    self.populateCache();
    self.setupTerminationHandlers();
    self.initializeServer();
  };

  self.start = () => {
    //  Start the app on the specific interface (and port).
    self.app.listen(self.port, () => {
      logger.info('%s: Node server started on %d ...',
        Date(Date.now()),  self.port);
    });
  };


}

let app = new server();
app.initialize();
app.start();
