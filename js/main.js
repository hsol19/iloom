import $ from 'jquery'

$(function(){
  let windowW = $(window).width();

  $(window).on('resize',function(e){
    window.location.reload();
  })

  if(window > 1440){}
  else if(window <= 1439 && windowW >980){}
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

function gallery(){
  const figureW = $('#box01 .all figure').outerWidth(true);
  console.log(figureW)

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
      // if(windowW >= 580){
        
      //   navW += 35;
      // }
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

  $('#footer_top').on('click', function(e){

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
      $(this).text()
    }else{
      $('footer>div>div>dl').hide()
      // ????????? ????????????
      $(this).attr('name',',on')
      $(this).text('^')
    }

    return false;
  })
}