define ['cs!app/routes'], (routes) ->
  # module can define custom zest config (require paths / base config options)
  zestConfig: {}

  # module routes loaded from public folder for sharing routes client and server side.
  routes: routes

  # standard nodejs handler for custom processing
  handler: (req, res, next) ->
    next();
