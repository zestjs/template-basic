/*
 * ZestJS NodeJS Server Example
 *
 * 
 * For more info, and configuration options such as how to alter 
 * client code paths, and disable Zest Server file serving, see:
 * http://zestjs.org/docs#Using%20Zest%20Server%20within%20a%20NodeJS%20Application
 *
 */

var connect = require('connect');
var zest = require('zest-server');

var app = connect();

zest.init('dev', function() {
  app.use(zest.server);
  app.listen(8080);
});



/*

// Native ZestJS example:

var zest = require('zest-server');
var http = require('http');

zest.init('dev', function() {
  zest.require(['zoe'], function(zoe) {
    var handler = zoe.fn('ASYNC');

    // custom handler - if it doesn't call 'next'
    // then zest won't do routing
    handler.on(function(req, res, next) {
      if (someCondition)
        return next();

      // custom render call
      zest.renderPage({
        title: 'Page Title',
        structure: 'my/component/id',
        options: {}
      });
    });

    handler.on(zest.server);

    http.createServer(handler).listen(8085);
  });
});

*/