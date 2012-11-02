###
  PageTemplate Component
  Defines the main page template, which is used by any page in the application.

  Typically it is extended by the page component, so it acts as a base class.

  Sample usage:

    define ['zest', 'cs!com/page-template'], ($z, PageTemplate) ->
      # $z.create simply extends a new object from the base object PageTemplate
      $z.create([PageTemplate],
        content: 'Welcome' 
      )

###

define ['css!./page-template'], ->
  #extend rules tell $z.create how to extend object propery collissions
  _extend:
    content: 'REPLACE'

  template: (o) -> """
    <div class="content">
      {`content`}
    </div>
  """
  # default content
  content: 'No content' 
