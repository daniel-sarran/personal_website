let button = document.getElementById("rubric");
let footer = "footer";

button.onclick = () => {
  const yOffset = -50; 
  const element = document.getElementById(footer);
  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

  window.scrollTo({top: y, behavior: 'smooth'});
}