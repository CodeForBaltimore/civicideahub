import express from 'express';
import webpack from 'webpack';
import WebpackMiddleware from 'webpack-dev-middleware';
import WebpackHotMiddleware from 'webpack-hot-middleware';
import http from 'http';

const app = express();

(() => {
  const webpackConfig =  require(process.env.WEBPACK_CONFIG ? process.env.WEBPACK_CONFIG : './webpack.config');
  const compiler = webpack(webpackConfig);

  app.use((WebpackMiddleware)(compiler, {
    log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
  }));

  app.use((WebpackHotMiddleware)(compiler, {
    log: console.log 
  }));
})();

app.get("/", (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

const server = http.createServer(app);
  server.listen(process.env.PORT || 3000, '0.0.0.0', () => {
    console.log("Listening on %j", server.address(3000, '0.0.0.0'))
});
