$('input').on('validate', function(event, el) {
  $el = $(el);
  if($el.val().length == 0){
    $el.css({backgroundColor: 'red'});
  }
});


$('form').on('submit', function() {
  $('input').trigger('validate', this);
});
