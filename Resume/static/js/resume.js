gsap.utils.toArray(".card, .skillcard").forEach(card => {
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: card,
        scrub:2,
        start: "top bottom",
        end:'top 100px',
      }
    });
  
    tl.from(card, {
      duration: 1,
      opacity: 0
    });
  });