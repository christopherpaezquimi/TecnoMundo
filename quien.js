const teamMembers = document.querySelectorAll('.team-member');
teamMembers.forEach(member => {
    member.addEventListener('click', () => {
        member.classList.toggle('active');
    });
});
