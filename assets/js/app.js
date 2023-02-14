// Title animation
const spanContainers = document.querySelectorAll('.title div');

spanContainers.forEach(item => {
  const letters = item.children[0].textContent.split('');
  // console.log(letters);
  item.innerHTML = ""
  letters.forEach((el, index) => {
    item.innerHTML += `<span style="transition-delay:${0.07 * index}s"> ${el}</span>`
  })
});

// Navbar animation
const navSpanContainer = document.querySelectorAll('.nav_link div');

navSpanContainer.forEach(item => {
  const linkLetters = item.children[0].textContent.split('');
  console.log(linkLetters);
  item.innerHTML = ""
  linkLetters.forEach((el, index) => {
    item.innerHTML += `<span style="transition-delay:${0.07 * index}s"> ${el}</span>`
  })
});