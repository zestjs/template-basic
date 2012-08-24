define ['zest', 'jade!./hello-world', 'css!./hello-world'], ($z, helloWorld) ->
  $z.create [$z.Page],
    body: helloWorld
