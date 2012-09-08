define ['zest', 'jade!app/hello-world', 'css!app/hello-world'], ($z, helloWorld) ->
  $z.create [$z.Component],
    template: helloWorld
    construct: (o) ->
      @$heading = @$('h1')[0]
      setTimeout =>
        @$heading.innerHTML = 'hello world! <br />And it\'s dynamic..'
      , 2000