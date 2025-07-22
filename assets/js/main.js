/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')
const menuToggle = document.getElementById('menuToggle');
const menuOverlay = document.getElementById('menuOverlay');
const menuClose = document.getElementById('menuClose');
const menuLinks = document.querySelectorAll('.menu-content a');

menuToggle.addEventListener('click', () => {
  menuOverlay.classList.add('active');
});

menuClose.addEventListener('click', () => {
  menuOverlay.classList.remove('active');
});


  function toggleSearch() {
    const searchBox = document.getElementById("searchBox");
    const sectionList = document.getElementById("sectionList");

    // Toggle visibility
    if (searchBox.style.display === "block") {
      searchBox.style.display = "none";
      sectionList.style.display = "none";
    } else {
      searchBox.style.display = "block";
      sectionList.style.display = "block";
      searchBox.focus();
    }
  }

  function searchSection() {
    const input = document.getElementById("searchBox").value.toLowerCase();
    const items = document.querySelectorAll("#sectionList li");

    items.forEach((item) => {
      const text = item.textContent.toLowerCase();
      item.style.display = text.includes(input) ? "block" : "none";
    });
  }



// Close menu on link click
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menuOverlay.classList.remove('active');
  });
});


/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 
