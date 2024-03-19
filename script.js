var main = document.querySelector("#main");
const cursor = document.querySelector('.cursor');
main.addEventListener('mousemove', (e) => {
    cursor.style.backgroundColor = "white";
    cursor.style.left = e.x + 'px';
    cursor.style.top = e.y + 'px';
});
function a(){
    gsap.from("#nav img", {
        y: -80,
        opacity: 0,
        duration:0.5,
        delay:0.5,
    
    });
    gsap.from(".headings h1", {
        y: 80,
        opacity: 0,
        duration:1,
        delay:1,
    
    });
}
a();