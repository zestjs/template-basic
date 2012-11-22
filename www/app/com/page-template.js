define(['css!./page-template'], function() {
  return {
    options: {
      content: 'No Content!'
    },
    render: function (o) {
      return '<div class="content">{`content`}</div>';
    }
  };
});
