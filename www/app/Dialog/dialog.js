define(['zest', './button', 'css!./dialog'], function($z, Button) {
  return {
    className: 'SimpleDialog',
    options: {
      width: 400,
      height: 300
    },
    // note it is better to use a template plugin here - 
    render: function(o) {
      return ''
        + '<div>\n'
        + '  {`content`}\n'
        + '  <div class="button">{`button`}</div>\n'
        + '</div>';
    },
    button: function(o) {
      return {
        render: Button,
        options: {
          text: o.confirmText
        }
      };
    },
    style: function(o) {
      return '#' + o.id + '{ \n'
        + '  width: ' + $z.esc(o.width, 'num', this.options.width) + 'px;\n'
        + '  height: ' + $z.esc(o.height, 'num', this.options.height) + 'px;\n'
        + '}';
    },
    attach: './dialog-attach'
  };
});
