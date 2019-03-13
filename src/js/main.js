$( document ).ready(function() {
  $('.input-group__text-area').limitLettersMessage(
    {
      elementToShowMessage: '.input-group__message'
    }
  );
});
