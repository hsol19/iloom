$(function(){
  let windowW = $(window).width();

  $(window).on('resize',function(e){
    window.location.reload();
  })
  afoot()
  if(window > 1440){
  
  }
  else if(window <= 1439 && windowW >980){}
  else if(windowW <= 980 && windowW > 580){
    anav()
    atableNav()
    atabletNabClose()
  }
  else if(windowW <= 580){
    anav()
    atableNav()
    atabletNabClose()
  }
})

function anav(){
  $('header .btn').on('click',function(e){
    $(this).hide()
    $('nav').animate({left:0},500);
  })
}
function atableNav(){
  $('nav li>a').on('click',function(e){
    let aHref = $(this).attr('href');
    let aPos = $(aHref).offset().top;
    let headerH = $('header').innerHeight();
    let navW = $('nav').innerWidth();
    let windowW = $(window).width();
      if(windowW >= 580){
        navW += 35;
      }
   
  })
}
function atabletNabClose(){
  $('nav .close').on('click',function(e){
    let navW = $('nav').innerWidth();
    console.log(navW)
    let windowW = $(window).width();
    let num = navW + 35;
    $('nav').animate({left:'-'+num+'px'},500)
    $('header .btn').show();
  })
}



function afoot(){

  $('#footer_top>a').on('click', function(e){

    let footerName = $(this).attr('name')
    if(footerName === 'on'){
      $('footer>div>div>dl').show(),
      $('footer>div>div').show(),
      $('footer>div>div>dl>dt').show();
      const scrollH = $(document).scrollTop();
      const footerH = $('footer').innerHeight();
      console.log(footerH)
      console.log(scrollH)
      $(document).scrollTop(scrollH+footerH)
      $(this).attr('name','off')
      $(this).text('^')
    }else{
      $('footer>div>div>dl').hide()
      // 스타일 완상복구
      $(this).attr('name','on')
      $(this).text('^')
    }

    return false;
  })
}