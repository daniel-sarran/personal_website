let one = document.getElementById("btn1");
let two = document.getElementById("btn2");
let three = document.getElementById("btn3");

let p1 = "project1";
let p2 = "project2";
let p3 = "project3";

buttons = [btn1, btn2, btn3]
projects = [p1, p2, p3]

for (let i = 0; i < buttons.length; i++) {
  buttons[i].onclick = () => {
    const id = projects[i];
    const yOffset = -50; 
    const element = document.getElementById(id);
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({top: y, behavior: 'smooth'});
  }
}
