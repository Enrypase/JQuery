// To method - Final state of the selected element
gsap.to("#webpageTitle", {
    opacity: 1,
    top: "25%",
    duration: 3,
    ease: Power3.easeOut
});
gsap.to("#firstImgDescription", {
    opacity: 1,
    duration: 1,
    delay: 0.5
});
// Dinamically fix the container height
$("#fixFirstImg").css("height", $("#firstImg").height + $("#firstImg").height + 0.03)
// TimeLine
let timeline = gsap.timeline({ease: Power3.easeOut})
// Stagger - Multiple elements animation
timeline.from("#menu *",{
    opacity: 0,
    y: 20,
    duration: 1.5,
    ease: Power3.easeOut,
    stagger: 0.25
}).from("#firstImg", {
    scale: 0.7,
    duration: 1,
    ease: Power3.easeOut
}, "-=2")