define(['com!app/Dialog/dialog'], function (Dialog) {
  return {
    title: 'Home page',
    body: {
      render: Dialog,
      options: {
        width: 300,
        height: 50,
        content: "<p>Welcome to ZestJS.</p>",
        confirmText: 'Close'        
      }
    }
  };
});
