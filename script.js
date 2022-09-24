const judul = document.querySelector('.judul');
const blackWhite = document.getElementById('blackWhite');
blackWhite.onclick = () => {

  document.body.classList.toggle('bgWhite');
  judul.classList.add('judulBaru');
  };


// manipulasi node
// create element new button
const changeColor = document.createElement('button');
const textBtn = document.createTextNode('Change Color');
changeColor.appendChild(textBtn);

// create button
changeColor.setAttribute('type', 'button');
changeColor.classList.add('cClr');

// place btn
blackWhite.after(changeColor);
// edit btn
// document.button.classList('class', 'btn2');

// ---------------action random------------------------
changeColor.addEventListener('click', () => {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);

  // console.log(r);

  document.body.style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
});


// --------------------Slider--------------------------
const red = document.querySelector('input[name=red]');
const green = document.querySelector('input[name=green]');
const blue = document.querySelector('input[name=blue]');

red.addEventListener('change', () => {
  const r = red.value;
  const g = green.value;  
  const b = blue.value;

  document.body.style.backgroundColor = 'rgb('+ r +', '+g+', '+b+')';
});


green.addEventListener('change', () => {
  const r = red.value;
  const g = green.value;  
  const b = blue.value;

  document.body.style.backgroundColor = 'rgb('+ r +', '+g+', '+b+')';
});



blue.addEventListener('change', () => {
  const r = red.value;
  const g = green.value;  
  const b = blue.value;

  document.body.style.backgroundColor = 'rgb('+ r +', '+g+', '+b+')';
});
