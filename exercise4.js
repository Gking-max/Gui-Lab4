// Exercise 4 - Inline Edit List
// Double-click delegation with edit mode switching

const editList = document.querySelector('#edit-list');

editList.addEventListener('dblclick', function(event) {
    // 1. Find closest .edit-item from event.target; return if null
    const item = event.target.closest('.edit-item');
    if (!item) return;
    
    // 2. Return early if item already has .editing class
    if (item.classList.contains('editing')) return;
    
    // 3. Save original text, clear item, create and append input
    const originalText = item.textContent;
    item.textContent = '';
    
    const input = document.createElement('input');
    input.type = 'text';
    input.value = originalText;
    input.className = 'edit-input';
    
    item.appendChild(input);
    item.classList.add('editing');
    input.focus();
    
    // Helper: commit the edit
    function commitEdit() {
        const newText = input.value.trim() || originalText;
        item.textContent = newText;
        item.classList.remove('editing');
        // Clean up event listeners to prevent memory leaks
        input.removeEventListener('keydown', handleKeyDown);
        input.removeEventListener('blur', handleBlur);
    }
    
    // Helper: cancel the edit
    function cancelEdit() {
        item.textContent = originalText;
        item.classList.remove('editing');
        // Clean up event listeners
        input.removeEventListener('keydown', handleKeyDown);
        input.removeEventListener('blur', handleBlur);
    }
    
    // Event handlers
    function handleKeyDown(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            commitEdit();
        } else if (e.key === 'Escape') {
            cancelEdit();
        }
    }
    
    function handleBlur() {
        commitEdit();
    }
    
    // 6. Listen for 'keydown' on input
    input.addEventListener('keydown', handleKeyDown);
    
    // 7. Listen for 'blur' on input
    input.addEventListener('blur', handleBlur);
});