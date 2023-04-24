const btnAboutCompany = document.querySelector('.showMore');
const infoAboutCompany = document.querySelector('.hidden');
const content = document.querySelector('.main');
const header = document.querySelector('.header');
const langButtons = document.querySelectorAll('.lang-btn');

content.addEventListener('click', (e) => {
    if(e.target == btnAboutCompany) {
        showText();
    }
});

header.addEventListener('click', (e) => {
  let target = e.target;

  if(target.classList.contains('lang-btn')) {
    for(let i = 0; i < langButtons.length; i++) {
      langButtons[i].classList.remove('active-lang')
    }
    target.classList.add('active-lang')
  }
})

function showText() {
    infoAboutCompany.classList.toggle('hidden');
    if(btnAboutCompany.textContent.trim() == 'Больше о компании') {
        btnAboutCompany.innerHTML = 'Свернуть текст о компании';
    } else {
        btnAboutCompany.innerHTML = 'Больше о компании';
    }
}

const burger = document.querySelector('.header-burger');
const navigation = document.querySelector('.site-navigation');
const btnChangeLang = document.querySelector('.lang-mobile');

burger.addEventListener('click', function(){
	burger.classList.toggle('active');
    navigation.classList.toggle('open-menu');
    btnChangeLang.classList.toggle('lang-mobile--open');
    document.body.classList.toggle('noscroll')
})

const productsNames = document.querySelectorAll('.sidebar-list--title');

productsNames.forEach(item => item.addEventListener('click', () => {
    let ul = item.nextElementSibling;
    let img = item.querySelector('.sidebar-list--route');
    img.classList.toggle('rotate')
    ul.classList.toggle('openList'); 
}))


const modal = document.getElementById('modal');
let images = document.querySelectorAll('.slider-img');
let modalImg = document.getElementById("img01");

images.forEach(img => img.addEventListener('click', () => {
  modal.style.display = "block";
  modalImg.src = img.src;
  modal.addEventListener('click', (e) => {
    if(e.target.tagName == 'IMG') {
            modal.style.display = "none"
    }
  })
}))
    