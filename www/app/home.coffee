define ['cs!app/com/page-template'], (PageTemplate) ->
  $z.create([PageTemplate],
    options:
      arg: ' to ZestJS'
    content: (o) -> 
      "Welcome #{o.arg}"
  )
