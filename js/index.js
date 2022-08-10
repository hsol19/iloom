

$(function(){
  let windowW = $(window).width();
  
  // RESIZE
  $(window).on('resize',function(e){
    window.location.reload();
  })
  // mainGallery

  gal()
setInterval(timerAni, 4500)
  if(window > 1440){

   
  }
  else if(window <= 1439 && windowW >980){
  
    
  }
  else if(windowW <= 980 && windowW > 580){
    gallery()
    tnav()
    tfoot()
    tabletNabClose()
  }
  else if( windowW <= 580){
    gallery()
    tnav()
    tfoot()
    tabletNabClose()
  }
})
// 함수


function timerAni(){
  const figW = $('.al>ul>li').width();
  console.log(figW)
  $('#box00 .nex,#box00 .pre').hide();
  $('#box00 .al>ul').animate({marginLeft:'-='+figW+'px'},1500,function(){
    $('#box00 .al>ul>li:first').appendTo('#box00 .al>ul');
    $('#box00 .al>ul').css('margin-left','-'+figW+'px')
    $('#box00 .nex,#box00 .pre').delay(600).show();
  })
}

function gal(){
  const figW = $('.al>ul>li').width();
  console.log(figW)
  $('#box00 .al>ul>li:last').prependTo('#box00 .al>ul');
  $('#box00 .al>ul').css('margin-left','-'+figW+'px');

  $('#box00 .nex').on('click', function(e){
    $('#box00 .nex,#box00 .pre').hide();
    $('#box00 .al>ul').animate({marginLeft:'+='+figW+'px'},1500,function(){
      $('#box00 .al>ul>li:last').prependTo('#box00 .al>ul');
      $('#box00 .al>ul').css('margin-left','-'+figW+'px');
      $('#box00 .nex,#box00 .pre').delay(600).show();
    })
  })

  $('#box00 .pre').on('click',function(e){
    $('#box00 .nex,#box00 .pre').hide();
    $('#box00 .al>ul').animate({marginLeft:'-='+figW+'px'},1500,function(){
      $('#box00 .al>ul>li:first').appendTo('#box00 .al>ul');
      $('#box00 .al>ul').css('margin-left','-'+figW+'px')
      $('#box00 .nex,#box00 .pre').delay(600).show();
    })
  })
}



function gallery(){
  const figureW = $('#box01 .all figure').outerWidth(true);
  // console.log(figureW)

  $('#box01 .all figure:last').prependTo('#box01 .all');
  $('#box01 .all').css('margin-left','-'+figureW+'px');

  $('#box01 .prev').on('click',function(e){
  $('#box01 .all').animate({marginLeft:'+='+figureW+'px'},600,function(){
    $('#box01 .all figure:last').prependTo('#box01 .all');
    $('#box01 .all').css('margin-left','-'+figureW+'px')
  })
  })

  $('#box01 .next').on('click',function(e){
    $('#box01 .all').animate({marginLeft:'-='+figureW+'px'},600,function(){
      $('#box01 .all figure:first').appendTo('#box01 .all');
      $('#box01 .all').css('margin-left','-'+figureW+'px')
    })
  })
}



function tnav(){
  $('header .btn').on('click',function(e){
    $(this).hide()
    $('nav').animate({left:0},500);
  })
}
function tableNav(){
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
function tabletNabClose(){
  $('nav .close').on('click',function(e){
    let navW = $('nav').innerWidth();
    console.log(navW)
    let windowW = $(window).width();
    let num = navW + 35;
    $('nav').animate({left:'-'+num+'px'},500)
    $('header .btn').show();
  })
}



// $('nav .close').on('click',function(e){
//   $(this).hide()
//   $('nav').hide();
// })


function tfoot(){

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