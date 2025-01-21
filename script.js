const navbar = document.getElementById('nav-main');
const navOption = document.querySelectorAll('.list__link');

const navSecBtn = document.getElementById('nav-sec__button');
const navSmall = document.getElementById('navSmall');

navOption.forEach(button => button.addEventListener('click', ()=> {
    navbar.classList.add('option__clicked');

    setTimeout(() => {
        navbar.classList.remove('option__clicked');
    }, 100)
}))

window.onscroll = function() {disOnScroll()};

function disOnScroll() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        navbar.classList.add('disappear_on-scroll');

        for (i = 0; i < navOption.length; i++) {
            navOption[i].setAttribute("tabindex", "-1");
        }

        navSecBtn.classList.add('nav-sec-btn__appear');
        navSecBtn.setAttribute("tabindex", "0")

    } else {
        navbar.classList.remove('disappear_on-scroll');

        for (i = 0; i < navOption.length; i++) {
            navOption[i].setAttribute("tabindex", "0");
        }

        navSecBtn.classList.remove('nav-sec-btn__appear');
        navSecBtn.setAttribute("tabindex", "-1")
        navSmall.classList.remove('nav-sec__appear');
        navSmall.style.display = 'none';
    }
}

function toggleSmallNav() {
    if (navSmall.style.display === 'none') {
        navSmall.style.display = 'block';
        setTimeout(() => {
            navSmall.classList.add('nav-sec__appear');
        }, 1)
    } else {
        navSmall.classList.remove('nav-sec__appear');
        navSmall.style.display = 'none';
    }
}

document.addEventListener('click', (e) => {
    if (!navSmall.contains(e.target) && navSmall.classList.contains('nav-sec__appear')){
        navSmall.classList.remove('nav-sec__appear');
        navSmall.style.display = 'none';
    }
})

document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                return;
            }
        })
    })

    const allAnimatableElems = document.querySelectorAll('.animatable');

    allAnimatableElems.forEach((elem) => observer.observe(elem))
});

const submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
})