document.addEventListener('DOMContentLoaded', () => {
    const toggleSkillsButton = document.getElementById('toggleSkills');
    const skillsList = document.getElementById('skillsList');

    toggleSkillsButton.addEventListener('click', () => {
        if (skillsList.classList.contains('expanded')) {
            skillsList.classList.remove('expanded');
            toggleSkillsButton.textContent = 'Show More Skills';
        } else {
            skillsList.classList.add('expanded');
            toggleSkillsButton.textContent = 'Show Less Skills';
        }
    });

    // Form submission handling
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Thank you for your message. I will get back to you soon!');
        contactForm.reset();
    });
});
