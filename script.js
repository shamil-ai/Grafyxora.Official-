document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const closeBtn = document.getElementById('close-all'); // Select the new close button
    const cards = document.querySelectorAll('.glass-card');

    // Existing filter logic...
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            button.classList.add('active');
            const filter = button.getAttribute('data-filter');

            cards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // New Close Logic
    closeBtn.addEventListener('click', () => {
        // Hide all cards
        cards.forEach(card => card.style.display = 'none');
        
        // Remove active class from all buttons
        filterButtons.forEach(b => b.classList.remove('active'));
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('projectModal');
    const modalImg = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');
    const closeBtn = document.querySelector('.close-modal');

    // Open Modal when clicking a card
    document.querySelectorAll('.glass-card').forEach(card => {
        card.addEventListener('click', () => {
            modal.style.display = 'block';
            modalImg.src = card.getAttribute('data-image'); // Loads image from data-image attribute
            modalTitle.innerText = card.querySelector('h3').innerText;
            modalDesc.innerText = card.querySelector('p').innerText;
        });
    });

    // Close Modal
    closeBtn.addEventListener('click', () => { modal.style.display = 'none'; });
    window.addEventListener('click', (e) => { if (e.target == modal) modal.style.display = 'none'; });
});
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('projectModal');
    const modalImg = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');
    const closeBtn = document.querySelector('.close-modal');

    // This loop attaches the click event to EVERY card on your page
    const cards = document.querySelectorAll('.glass-card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            modal.style.display = 'block';
            
            // Automatically pulls data from the specific card you clicked
            modalImg.src = card.getAttribute('data-image'); 
            modalTitle.innerText = card.querySelector('h3').innerText;
            modalDesc.innerText = card.querySelector('p').innerText;
        });
    });

    // Close the modal when clicking the 'X' or outside the box
    closeBtn.addEventListener('click', () => { modal.style.display = 'none'; });
    window.addEventListener('click', (e) => { if (e.target == modal) modal.style.display = 'none'; });
});
