// Exercise 3 - Filterable Card Grid
// Combines closest() and matches() in a delegated handler

const filterBar = document.querySelector('#filter-bar');
const cards = document.querySelectorAll('.card');
const filterBtns = document.querySelectorAll('.filter-btn');

filterBar.addEventListener('click', function(event) {
    // 1. Guard: if event.target does not match '.filter-btn', return
    if (!event.target.matches('.filter-btn')) return;
    
    // 2. Update active class on all buttons
    filterBtns.forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // 3. Read the filter value from event.target.dataset.filter
    const filterValue = event.target.dataset.filter;
    
    // 4. Loop through cards and show/hide based on filter
    cards.forEach(card => {
        const cardCategory = card.dataset.category;
        
        if (filterValue === 'all') {
            // Remove hidden class from all cards
            card.classList.remove('hidden');
        } else {
            // Use classList.toggle with second boolean argument
            // Add hidden if categories don't match, remove if they match
            card.classList.toggle('hidden', cardCategory !== filterValue);
        }
    });
});