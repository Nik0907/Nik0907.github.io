const elements = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {
    elements.forEach(el => {
        const position = el.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (position < screenHeight - 100) {
            el.classList.add('show');
        }
    });
});

const plans = document.querySelectorAll('.plan');

window.addEventListener('scroll', () => {
    plans.forEach(plan => {
        const position = plan.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (position < screenHeight - 100) {
            plan.classList.add('show');
        }
    });
});