const tl = gsap.timeline({
  repeat: -1,
  repeatRefresh: true,
  onRepeat: checkDistance,
});
tl.to(".dot", {
  x: "+=150",
  ease: "power1.inOut ",
  stagger: {
    each: 0.03,
    from: "end",
  },
});


  tl.to(".dot", {
    y: -60,
    ease: "sine.inOut ", duration:0.25,
    stagger: {
      each: 0.03,
      from: "end",
      repeat: 1,
      yoyo:true,
    },
  }, 0);

function checkDistance() {
  if (gsap.getProperty(".dot:nth-of-type(1)", "x") > window.innerWidth) {
    gsap.set("body", { background: "lightblue" });
    tl.pause();
  }
}
