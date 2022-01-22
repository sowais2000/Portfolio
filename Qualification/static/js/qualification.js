tl = gsap.timeline()

tl.from('.maintitle', {
    y: gsap.utils.random([200, -200, 100, -100], true),
    x: gsap.utils.random([200, -200, 100, -100], true),
    opacity: 0,
    stagger: 0.1,

})
tl.from('.certheader', {

    opacity: 0,

})
tl.from('#scrolldownbtn', {
    opacity: 0
})
tl.from('#topsvg', {
    x: '100%',
    y: '-100%',
    duration: 1,
})


// Certificates

var cer_tl = gsap.timeline()

gsap.registerPlugin(ScrollTrigger);

// GSAP Array Elements for Images

gsap.utils.toArray(".rightimg").forEach(img => {
    var tl = gsap.timeline({
        scrollTrigger: {
            scroller: '.container',
            trigger: img,
            toggleActions: "restart none none none",
            start: "top bottom",
            end: 'top 200px',
            // markers: true,
            scrub: 2,
        }
    });

    tl.from(img, {
        x: '100%',
    });
});
gsap.utils.toArray(".leftimg").forEach(img => {
    var tl = gsap.timeline({
        scrollTrigger: {
            scroller: '.container',
            trigger: img,
            toggleActions: "restart none none none",
            start: "top bottom",
            end: 'top 200px',
            // markers: true,
            scrub: 2,
        }
    });

    tl.from(img, {
        x: '-100%',
    });
});


// GSAP Array Elements for Text contents

if ($(window).width() > 800) {

    gsap.utils.toArray(".pcontrev").forEach(para => {
        var tl = gsap.timeline({
            scrollTrigger: {
                scroller: '.container',
                trigger: para,
                toggleActions: "restart none none none",
                start: "top bottom",
                end: 'top 200px',
                // markers: true,
                scrub: 2,
            }
        });

        tl.from(para, {
            x: '-100%',
            opacity: 0,
            // delay: 1,
        });
    });
    gsap.utils.toArray(".pcont").forEach(para => {
        var tl = gsap.timeline({
            scrollTrigger: {
                scroller: '.container',
                trigger: para,
                toggleActions: "restart none none none",
                start: "top bottom",
                end: 'top 200px',
                // markers: true,
                scrub: 2,
            }
        });

        tl.from(para, {
            x: '100%',
            opacity: 0,
            // delay: 1,
        });
    });

} else {

    gsap.utils.toArray(".pcontrev").forEach(para => {
        var tl = gsap.timeline({
            scrollTrigger: {
                scroller: '.container',
                trigger: para,
                toggleActions: "restart none none none",
                start: "top bottom",
                end: 'bottom bottom',
                // markers: true,
                scrub: 2,
            }
        });

        tl.from(para, {
            x: '-100%',
            opacity: 0,
            // delay: 1,
        });
    });
    gsap.utils.toArray(".pcont").forEach(para => {
        var tl = gsap.timeline({
            scrollTrigger: {
                scroller: '.container',
                trigger: para,
                toggleActions: "restart none none none",
                start: "top bottom",
                end: 'bottom bottom',
                // markers: true,
                scrub: 2,
            }
        });

        tl.from(para, {
            x: '100%',
            opacity: 0,
            // delay: 1,
        });
    });

}


// make DBMS short in 900px
if ($(window).width() < 850) {
    $('.dbms').text('DBMS')
} else {
    $('.dbms').text('Database management system')
}

// Hide Certificate paragraph when the width enters between 500 and 800
if ($(window).width() < 800 && $(window).width() > 500) {
    // alert('working')
    $('.certificatecontent').css('display', 'none')
}