const races = document.querySelector(".races");


//define the scroll amount
function scrollAmount() {
    let racesWidth = races.scrollWidth
    return -(racesWidth - window.innerWidth) //negative makes it animate to the left
};


//define how we want to scroll 
const tween = gsap.to(races, {
    x: scrollAmount,
    // duration: 3,
    ease: "none"
});


ScrollTrigger.create({
    trigger: ".racesWrapper",
    start: "top 20%",
    end: () => `+=${scrollAmount() * -1}`,
    animation: tween,
    pin: true,
    invalidateOnRefresh: true, //this tells scrollTrigger to re-calculate the start and end position whenever user resize's page
    scrub: true,
    // markers: true
});