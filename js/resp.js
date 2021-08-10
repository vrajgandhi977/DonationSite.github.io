burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
RightNav = document.querySelector('.RightNav')

burger.addEventListener('Click',()=>{
    RightNav.classlist.toggle('v-class-resp');
    navList.classlist.toggle('v-class-resp');
    navbar.classlist.toggle('h-nav-resp');

}

