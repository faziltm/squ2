var numberOfStars = 5

for (i = 0; i < (numberOfStars - 1); i++) {
  $('.starWrap').eq(0).clone().appendTo(".starWidget").attr('val', i + 2)
}
var currentVal

$('.star .inner').on("mouseover",
  function() {
    currentVal = $(this).closest('.starWrap').attr('val')
    $('.inner').closest('.starWrap').filter(function() {
      return parseInt($(this).attr('val')) <= currentVal;
    }).closest('.starWrap').addClass('active')

    $(this).on('mouseout',
      function() {
        $('.starWrap').removeClass('active');

      }
    )
  }
)

function reSetActive() {
  $('.set').removeClass('set');
  $('.active').addClass('set');
  $('.active').removeClass('active');
}

$('path').on('click',
  function() {
    // setActive()
    reSetActive()
    //alert(currentVal)
  }
)