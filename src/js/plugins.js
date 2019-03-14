/* eslint-disable */
// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function () {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());

// Place any jQuery/helper plugins in here.
(function($) {
  $.fn.limitLettersMessage = function(options) {
    let settings = $.extend({
      elementToShowMessage : ''
    }, options);
    const maxLengthLimit = this.attr('data-max-length-message-number');
    const {elementToShowMessage} = settings;
    const processMessage = () => {
      if(elementToShowMessage) {
        const currentLettersLength = this.val().length;
        const messageToShow = (currentLettersLength  < maxLengthLimit) ?
          (maxLengthLimit - currentLettersLength) + ' characters left':
          'No more characters left';
        $(elementToShowMessage).html(messageToShow);
      }
    };
    this.change(processMessage);
    this.keyup(processMessage);
    this.keydown(processMessage);
    this.focus(processMessage);
    this.focusout(processMessage);
  };
}(jQuery));
