document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            const expanded = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', String(!expanded));
            const isHidden = navMenu.getAttribute('aria-hidden') !== 'false';
            navMenu.setAttribute('aria-hidden', isHidden ? 'false' : 'true');
        });

        navMenu.setAttribute('aria-hidden', 'true');
    }

    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    const newsletter = document.querySelector('.newsletter');
    if (newsletter) {
        newsletter.addEventListener('submit', (event) => {
            event.preventDefault();
            const emailInput = newsletter.querySelector('input[type="email"]');
            const email = emailInput?.value.trim();
            if (email) {
                alert(`Thanks for joining the Harvest Herald, ${email}!`);
                newsletter.reset();
            }
        });
    }
});
