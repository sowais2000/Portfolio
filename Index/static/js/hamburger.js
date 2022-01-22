// var hamburger=document.querySelector('.hamburgerImg')
// var mobilenavbar=document.querySelector('.mobilenavbar')

// console.log(typeof mobilenavbar.style.width," ",mobilenavbar.style.width.length)

// hamburger.addEventListener('click',function(){

// })




$('.hamburger').click(() => {
    if ($('.mobilenavbar').css('width') == '0px') {
        if ($(window).width() > 500) {
            $('.mobilenavbar').css('width', '300px')
            window.navigator.vibrate(50);
            $('.hamburger').css('opacity', '0')
            $('.mobileNavbarContainer').css('opacity', '1')

        } else {
            $('.mobilenavbar').css('width', '200px')
            window.navigator.vibrate(50);
            $('.hamburger').css('opacity', '0')
            $('.mobileNavbarContainer').css('opacity', '1')

        }

    }
})
$('.goBackNavbar').click(() => {

    $('.mobilenavbar').css('width', '0px')

    window.navigator.vibrate(50);

    $('.hamburger').css('opacity', '1')
    $('.mobileNavbarContainer').css('opacity', '0')


})

$('.mobileNavbarContainer').click(() => {
    $('.mobilenavbar').css('width', '0px')
    $('.hamburger').css('opacity', '1')
    $('.mobileNavbarContainer').css('opacity', '0')

})

$('.container').click(() => {
    $('.mobilenavbar').css('width', '0px')

    $('.hamburger').css('opacity', '1')
    $('.mobileNavbarContainer').css('opacity', '0')

})