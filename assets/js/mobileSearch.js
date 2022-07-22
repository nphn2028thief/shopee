const mobileSearchBtn = document.querySelector('.js-header__mobile-search');
const mobileSearch = document.querySelector('.js-header__search');
const container = document.querySelector('.app__container');

mobileSearchBtn.addEventListener('click', function () {
    mobileSearch.classList.add('display-mobile-search');
})

container.addEventListener('click', function () {
    mobileSearch.classList.remove('display-mobile-search');
})