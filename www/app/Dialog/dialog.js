define(['zest', 'com!./button', 'css!./dialog'], function($z, Button) {
  return {
    type: 'SimpleDialog',
    options: {
      width: 400,
      height: 300
    },
    // note it is better to use a template plugin here - 
    render: function(o) {
      return ''
        + '<div style="\n'
        + '  width: ' + $z.esc(o.width, 'num', this.options.width) + 'px;\n'
        + '  height: ' + $z.esc(o.height, 'num', this.options.height) + 'px;\n'
        + '">\n'
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
    attach: './dialog-attach'
  };
});
