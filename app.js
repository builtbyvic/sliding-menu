barba.init({
  transitions: [{
    name:'opacity-transition',
    leave(data) {
      // create your leave animation here
      return gsap.to(data.current.container,{opacity:0});
    },
    enter(data) {
      // create your enter animation here
      return gsap.to(data.next.container,{opacity:1});
    },
  }]
});