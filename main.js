window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
    showNavOnScroll()
    showBackToTopButtonOnScroll()

    activateMenuAtCurrentSection(home)
    activateMenuAtCurrentSection(services)
    activateMenuAtCurrentSection(about)
    activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
    // linha alvo
   const targetLine = scrollY + innerHeight / 2



   // verificar se a seção passou da linha
   // quais dados vou precisar?

   //topo da seção
    const sectionTop = section.offsetTop

    // a altura da seção
    const sectionHeight = section.offsetHeight

    // o top da seção chegou ou ultrapassou a linha alvo
    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

    //verificar se a base está abaixo da linha alvo
    //quais dados vou precisar?

    //a seção termina onde?
    const sectionEndsAt = sectionTop + sectionHeight


    //o final da seção passou da linha alvo
    const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

    //limites da seção 
    const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

    const sectionId = section.getAttribute('id')
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

    menuElement.classList.remove('active')
    if (sectionBoundaries) {
        menuElement.classList.add('active');
    }



}




function showNavOnScroll() {
    if (scrollY > 0) {
        document.querySelector('#navigation').classList.add('scroll')
    } else {
        document.querySelector('#navigation').classList.remove('scroll')

    }
}

function showBackToTopButtonOnScroll() {
    if (scrollY > 400) {
        document.querySelector('#backToTopButton').classList.add('show')
    } else {
        document.querySelector('#backToTopButton').classList.remove('show')

    }
}


function openMenu () {
    document.body.classList.add('menu-expanded')
}

function closeMenu () {
    document.body.classList.remove('menu-expanded')
}



ScrollReveal({
    origin: 'bottom',
    distance: '30px',
    duration: 700,
}).reveal(`#home, 
    #home img, 
    #home .stats, 
    #services,
    #services header,
    #services .card,
    #about,
    #about header,
    #about .content,
    #about img,
    #contact,
    #contact header,
    #contact .content,
    #contact img`
    )


