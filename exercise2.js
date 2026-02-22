// Exercise 2 - Live Tag Builder
// Demonstrates delegation on dynamically added elements

const tagInput = document.querySelector('#tag-input');
const tagContainer = document.querySelector('#tag-container');

// Add a tag when Enter is pressed
tagInput.addEventListener('keydown', function(event) {
    if (event.key !== 'Enter') return;
    
    // Prevent default form submission behavior
    event.preventDefault();
    
    const value = tagInput.value.trim();
    if (!value) return;
    
    // 1. Create a div with class "tag"
    const tag = document.createElement('div');
    tag.className = 'tag';
    
    // 2. Set its innerHTML to include the label text and remove button
    // Using innerHTML for simplicity, but could also use textContent + createElement
    tag.innerHTML = `${value} <span class="tag-remove">&times;</span>`;
    
    // 3. Append the tag to tagContainer
    tagContainer.appendChild(tag);
    
    // 4. Clear the input
    tagInput.value = '';
});

// Remove a tag via delegation - single listener on parent container
tagContainer.addEventListener('click', function(event) {
    // 1. Check if the clicked element matches '.tag-remove'
    if (event.target.matches('.tag-remove')) {
        // 2. If true, find the closest '.tag' and remove it
        const tag = event.target.closest('.tag');
        if (tag) {
            tag.remove();
        }
    }
});

// Note: The delegated listener works for all tags, even those added dynamically
// because the event bubbles up to the parent container