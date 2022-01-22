// Navbar Animation

// if (screen.availWidth >= 1360) {
gsap.from('.navli, .navtitle', {
    y: -50,
    duration: .5,
    opacity: 0,
    stagger: 0.1
})

gsap.from('.content', {
    duration: 1,
    y: -50,
    opacity: 0,
    stagger: 0.5
})

gsap.from('#triangler', {
    left: '-500px',
    duration: 3,
    opacity: 0,
})
gsap.from('#rectangler', {
    left: '700px',
    duration: 5,
    opacity: 0,
})

gsap.from('.wave', {
    duration: 1,
    y: 100,
    opacity: .3,

})
gsap.from('.wave2', {
    duration: 1,
    y: 300,
    opacity: .5,
    delay: .2
})

// Navbar Color changer after scrolling  (scroll Trigger)
// let tl1 = gsap.timeline({
//     scrollTrigger: {
//         trigger: '.navbarheader',

//         start: 'top 0px',
//         end: '200px 50px',
//         scrub: 1,
//         duration: 2
//     }
// })

// tl1.to('.navbarheader', { backgroundColor: 'rgba(245, 245, 245, 0.5)' })



// swype down and first content slides left

if (screen.availWidth > 800) {
    gsap.timeline().to('#contenttitle', {
        scrollTrigger: {
            trigger: '#contenttitle',
            scrub: 1,
            toggleActions: 'play pause reverse reset',
            start: 'center 66',
            end: '400 top',
            // markers:'true'

        },
        x: -1000,
        stagger: 100,

    })

    gsap.timeline().to('.content', {
        scrollTrigger: {
            trigger: '.content',
            scrub: 1,
            toggleActions: 'play pause reverse reset',
            start: 'center 66',
            end: '400 top',
            // markers:'true'

        },
        x: -1000,
        stagger: 100,
        duration: 1000,

    })
}

// gsap.from('.contactmeicon', {
//     scrollTrigger: {
//         scrub: 1,
//         trigger: '.contactmeicon',
//         start: '100 center',
//         end: 'center 500',


//     },
//     x: -400,
//     opacity: 0,
//     duration: 0.5
// })

// Skills
var tll = gsap.timeline()

tll.from('.skilltitle', {
    scrollTrigger: {
        trigger: '.skilltitle',
        scrub: 1,
        start: 'top bottom',
        end: 'top top',
    },
    x: '70%',
    backgroundColor: '#6190ce',
    duration: 1,

})

tll.to('.skills', {
    scrollTrigger: {
        trigger: '.skills',
        scrub: 1,
        start: 'top top',
        end: 'top top',
    },
    backgroundColor: '#5884be',
    duration: 0.1
})

tll.from('#skillp', {
    scrollTrigger: {
        trigger: '#skillp',
        scrub: 2,
        start: 'top bottom',
        end: 'top top',
        // markers: true,
    },

    x: '100%',

})


// Skill boxes
tl2 = gsap.timeline()
if (screen.availWidth > 600) {

    tl2.from('.boxes1', {
        scrollTrigger: {
            trigger: '.boxcontainer',
            scrub: 1,
            start: 'top bottom',
            end: 'bottom bottom'
        },
        stagger: 0.25,
        x: '-100%',
    })


    tl2.from('.boxes2', {
        scrollTrigger: {
            trigger: '.boxcontainer',
            scrub: 1,
            start: 'top bottom',
            end: 'bottom bottom'
        },
        stagger: 0.25,
        x: '100%',
    })
} else {
    tl2.from('.box', {
        scrollTrigger: {
            trigger: '.box',
            scrub: 1,
            start: 'top bottom',
            end: 'bottom center'
        },
        stagger: 0.25,
        x: '-100%',
    })

}

// Skewing skill boxes

let proxy = {
        skew: 0
    },
    skewSetter = gsap.quickSetter(".skewElem", "skewY", "deg"), // fast
    clamp = gsap.utils.clamp(-20, 10); // don't let the skew go beyond 20 degrees.

ScrollTrigger.create({
    onUpdate: (self) => {
        let skew = clamp(self.getVelocity() / -300);
        // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
        if (Math.abs(skew) > Math.abs(proxy.skew)) {
            proxy.skew = skew;
            gsap.to(proxy, {
                skew: 0,
                duration: 0.8,
                ease: "power3",
                overwrite: true,
                onUpdate: () => skewSetter(proxy.skew)
            });
        }
    }
});

// make the right edge "stick" to the scroll bar. force3D: true improves performance
gsap.set(".skewElem", {
    transformOrigin: "right center",
    force3D: true
});


//Microsoft Certification
var tl3 = gsap.timeline();

tl3.from('.back', {
    scrollTrigger: {
        scrub: 1,
        start: 'top bottom',
        trigger: '.back',
        end: 'top top',
        // markers:true
    },
    x: '-100%',

})

// if (screen.availWidth < 800) {
//     tl3.from('.mimage', {
//         scrollTrigger: {
//             trigger: '.mimage',
//             scrub: 1,
//             start: 'top bottom',
//             end: 'center center',
//             // markers: true
//         },
//         opacity: '0',
//     })
// }
if (screen.availWidth > 800) {
    tl3.from('.mimage', {
        scrollTrigger: {
            trigger: '.mimage',
            scrub: 1,
            start: 'top bottom',
            end: 'center center',
        },
        x: '100%'
    })

    tl3.from('.microsoftcontent', {
        scrollTrigger: {
            trigger: '.microsoftcontent',
            scrub: 1,
            start: 'top bottom',
            end: 'center center',

        },
        x: "-50%",
    })
}



//REsume
var tl4 = gsap.timeline()

// Back text
tl4.from('.resumebackp', {
    scrollTrigger: {
        scrub: 1,
        start: 'top bottom',
        trigger: '.resumebackp',
        end: 'top top',
        // markers:true
    },
    x: '100%',

})

// Blue Background
tl4.from('.rname', {
    scrollTrigger: {
        trigger: '.rname',
        scrub: 1,
        start: 'top bottom',
        end: 'top center',

    },
    x: '100%',
    stagger: 1,
})
// Right button (Checkout my resume)
// tl4.from('.btnresume', {
//     scrollTrigger: {
//         trigger: '.btnresume',
//         scrub: 1,
//         start: 'top bottom',
//         end: 'bottom bottom',
//         markers: true
//     }, x: '100%',
//     stagger: 1,
//     duration:0.5,
// })

//COntact

//Back To Top
var backToTop = document.getElementById('backToTop')
backToTop.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

var tlcopyright = gsap.timeline()
tlcopyright.to('.contact', {
    scrollTrigger: {
        trigger: '.contact ',
        scrub: 1,
        start: 'top center',
        end: 'top top'
    },
    backgroundColor: 'black'
})


//Contact

var contactTimeLine = gsap.timeline()

if (screen.availWidth > 800) {
    contactTimeLine.from('.talk', {
        scrollTrigger: {
            trigger: '.talk',
            scrub: 1,
            start: 'top bottom',
            end: 'top top',
            // markers:true
        },
        left: '-50%',
    })
} else {
    contactTimeLine.from('.talk', {
        scrollTrigger: {
            trigger: '.talk',
            scrub: 1,
            start: 'top bottom',
            end: 'top top',
            // markers:true
        },
        opacity: 0,
    })
}
contactTimeLine.from('.map', {
    scrollTrigger: {
        trigger: '.map',
        scrub: 1,
        start: 'top bottom',
        end: 'top top',
        // markers:true
    },
    left: '50%'
})

// }

var emailcontact = document.querySelector('.emailcontactme')
var contactmeiconimage = document.querySelector('.contactmeiconimage');

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    emailcontact.style.display = 'none'
    contactmeiconimage.style.opacity = 1;

    // $('#qualifybtn').html(`<a class='qualifya' href="/downloadCerti"></a>Download Certificate`)

}
// else{
//     $('#qualifybtn').html(`<a class='qualifya' href="/qualifications"></a>More Qualifications`)
// }
