gsap.registerPlugin(ScrollTrigger);
// gsap.to('.box', {
//   borderRadius: 50,
//   x: 100,
//   scale: 1.5,
//   duration: 1,
// });

// ScrollTrigger.defaults({
//   toggleActions: 'restart pause resume pause',
//   scroller: '.container',
// });

// gsap.to('.orange p', {
//   scrollTrigger: '.orange',
//   duration: 2,
//   rotation: 360,
// });

// gsap.to('.red', {
//   scrollTrigger: {
//     trigger: '.red',
//     toggleActions: 'restart pause reverse pause',
//   },
//   duration: 1,
//   backgroundColor: '#FFA500',
//   ease: 'none',
// });

// gsap.to('.yoyo p', {
//   scrollTrigger: '.yoyo',
//   scale: 2,
//   repeat: -1,
//   yoyo: true,
//   ease: 'power2',
// });gsap.registerPlugin(ScrollTrigger);

let container = document.querySelector('.portfolio');
let tl = gsap.timeline({
  scrollTrigger: {
    pin: true,
    scrub: 1,
    trigger: container,
    end: () => container.scrollWidth - document.documentElement.clientWidth,
  },
  defaults: { ease: 'none', duration: 1 },
});

tl.to('.parallax', { x: 300 })
  .to(
    '.panel',
    {
      x: () => -(container.scrollWidth - document.documentElement.clientWidth),
    },
    0
  )
  .from(
    '.secondAn',
    {
      opacity: 0,
      scale: 0.5,
      duration: 0.2,
      stagger: {
        amount: 0.8,
      },
    },
    0
  );

gsap.from('.firstAn', {
  duration: 1,
  opacity: 0,
  scale: 0.5,
  scrollTrigger: {
    trigger: container,
    start: 'top 90%',
    end: 'bottom 10%',
    toggleActions: 'play none none reverse',
  },
});
