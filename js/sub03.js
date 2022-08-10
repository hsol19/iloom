// import $ from 'jquery'

$(function(){
  let windowW = $(window).width();

  $(window).on('resize',function(e){
    window.location.reload();
  })
  imghover()
  color()
  slideA()
  Pa()
  cfoot()
  if(window > 1440){
    // imghover()
  }
  else if(window <= 1439 && windowW >980){}
  else if(windowW <= 980 && windowW > 580){
    cnav()
    ctableNav()
    ctabletNabClose()
  }
  else if(windowW <= 580){
    cnav()
    ctableNav()
    ctabletNabClose()
  }
})




function cnav(){
  $('header .btn').on('click',function(e){
    $(this).hide()
    $('nav').animate({left:0},500);
  })
}
function ctableNav(){
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
function ctabletNabClose(){
  $('nav .close').on('click',function(e){
    let navW = $('nav').innerWidth();
    console.log(navW)
    let windowW = $(window).width();
    let num = navW + 35;
    $('nav').animate({left:'-'+num+'px'},500)
    $('header .btn').show();
  })
}

function imghover(){
  $('#box01 ul.box>li>a').on('click',function(e){
    const pic = $(this).attr('href')
    $('#box01 figure>img').attr('src',pic)
    return false;
  })
}


let colorSelected = false;
function color() {
  $('.NCC>dt').on('click', function (e){
    $('.NCC>dd').toggle();
    return false;
  })
}

function slideA() {
  $('.slide>dt').on('click', function (e) {
    if (colorSelected) {
      $('.slide>dd').toggle();
    } else {
      alert('색상을 선택하세요');
    }
    return false;
  })
}

let color_count = 0;
let slide_count = 0;
let all_price = 0;
function Pa() {
  $('.NCC>dd:nth-of-type(2)').on('click', function (e) {
    colorSelected = true;
    color_count++;
    all_price += 699000;
    $('.pa1 .price').val(color_count);
    $('.pa1').show()
    $('#userAllPrice').val(all_price);
  })

  $('.pa1 .plus').on('click', function (e) {
    color_count++;
    all_price += 699000;
    $('.pa1 .price').val(color_count);
    $('#userAllPrice').val(all_price);
  })

  $('.pa1 .minus').on('click', function (e) {
    if (color_count > 0) {
      color_count--
      all_price -= 699000;
    }
    $('.pa1 .price').val(color_count);
    $('#userAllPrice').val(all_price);
  })

  $('.pa1 .btn').on('click', function (e) {
    all_price -= (699000 * color_count);
    color_count = 0;
    $('.pa1 .price').val(color_count);
    $('.pa1').hide()
    $('#userAllPrice').val(all_price);
  })

  $('.slide>dd:nth-of-type(2)').on('click',function(e){
    $('.pa2').show()
  })
  $('.slide>dd:nth-of-type(3)').on('click', function (e) {
    $('.pa2').show()
    slide_count++;
    all_price += 130000;
    $('.pa2 .price').val(slide_count);
    $('#userAllPrice').val(all_price);
  })

  $('.pa2 .plus').on('click', function (e) {
    slide_count++;
    all_price += 130000;
    $('.pa2 .price').val(slide_count);
    $('#userAllPrice').val(all_price);
  })

  $('.pa2 .minus').on('click', function (e) {
    if (slide_count > 0) {
      slide_count--;
      all_price -= 130000;
    }
    $('.pa2 .price').val(slide_count);
    $('#userAllPrice').val(all_price);
  })

  $('.pa2 .btn').on('click', function (e) {
    all_price -= (130000 * slide_count);
    slide_count = 0;
    $('.pa2 .price').val(slide_count);
    $('.pa2').hide()
    $('#userAllPrice').val(all_price);
  })
}


function cfoot(){

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