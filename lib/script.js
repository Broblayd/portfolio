$(document).ready(function(){

  let container =  $('.container').offset().top;
  console.log
    $(document).on('scroll', ()=>{
        console.log($(this).scrollTop());
        if ($(this).scrollTop() >= container) {
            $('header').hide();
        } else {
            $('header').show();
        }
    })

});