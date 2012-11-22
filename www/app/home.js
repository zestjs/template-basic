define(['zest', 'app/com/page-template'], function ($z, PageTemplate) {
  return {
    render: PageTemplate,
    options: {
      arg: ' to ZestJS',
      content: function(o) {
        // content returns whatever the page content should be
        // this could be a separately loaded component from another file
        // the options of the page can be mapped in this function to the
        // options of that next component through a sub-renderable
        // eg:
        // return {
        //   render: ImageGallery
        //   options: {
        //     autoStart: true,
        //     images: o.someImageList //etc
        //   }
        // };
        //
        return "Welcome " + o.arg;
      }
    }
  };
});
