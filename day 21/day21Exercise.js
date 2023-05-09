
let paras = document.querySelector('p')

paras.style.fontSize = '34px'

let allParas = document.querySelector('#para') 

let allParasByTagName = document.querySelectorAll('p')

allParasByTagName.forEach(function(para) {
  para.style.fontSize = '50px';
});

let fourthPara = document.querySelectorAll('p')[3]

fourthPara.textContent = 'Fourth Paragraph'

// Using setAttribute() method to set the "id" attribute of all paragraphs
let paras1 = document.querySelectorAll('p');

paras1.forEach(function(para) {
  para.setAttribute('id', 'para-');
});

// Using dot notation to set the "class" attribute of all paragraphs
let paras2 = document.getElementsByTagName('p');

for (let i = 0; i < paras2.length; i++) {
  paras2[i].className = 'my-paragraph';
}

let paras3 = document.querySelectorAll('.my-paragraph');

paras3.forEach(function(para) {
  // set random color
  let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  para.style.color = randomColor;

  // set random font family
  let fontFamilies = ['Arial', 'Helvetica', 'Verdana', 'Times New Roman', 'Georgia'];
  let randomFont = fontFamilies[Math.floor(Math.random() * fontFamilies.length)];
  para.style.fontFamily = randomFont;

  // set random background color
  let randomBgColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  para.style.backgroundColor = randomBgColor;
});
