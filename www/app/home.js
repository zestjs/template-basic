define(['zest', 'app/Dialog/dialog'], function ($z, Dialog) {
  return {
    title: 'Home page',
    body: {
      render: Dialog,
      load: function(o) {
        if (o.name)
          o.content = '<p>' + $z.esc(o.name, 'htmlText') + '</p>'
      },
      options: {
        width: 300,
        height: 50,
        content: "<p>Welcome to ZestJS.</p>",
        confirmText: 'Close'        
      }
    }
  };
});
