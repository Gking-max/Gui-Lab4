// Exercise 1 - Accordion Menu
// Single delegated click listener on the parent .accordion element

const accordion = document.querySelector('.accordion');

accordion.addEventListener('click', function(event) {
    // 1. Find the closest trigger from event.target
    const trigger = event.target.closest('.accordion-trigger');
    
    // If null, the click was not on a trigger - return early
    if (!trigger) return;
    
    // 2. From the trigger, find the closest .accordion-item
    const currentItem = trigger.closest('.accordion-item');
    if (!currentItem) return;
    
    // 3. Close ALL accordion items first
    const allItems = document.querySelectorAll('.accordion-item');
    allItems.forEach(item => {
        item.classList.remove('open');
    });
    
    // 4. Toggle .open on the clicked item
    // If the clicked item was already open, it stays closed (since we removed all open classes)
    // If it was closed, we add the open class
    currentItem.classList.add('open');
    
    // Note: To allow closing an open item by clicking it again,
    // we need to check if it was previously open
    // But since we removed all open classes, we need a different approach:
});

// Alternative implementation that allows closing the currently open item
const accordionAlt = document.querySelector('.accordion');

accordionAlt.addEventListener('click', function(event) {
    const trigger = event.target.closest('.accordion-trigger');
    if (!trigger) return;
    
    const currentItem = trigger.closest('.accordion-item');
    if (!currentItem) return;
    
    // Check if the clicked item is currently open
    const isOpen = currentItem.classList.contains('open');
    
    // Close all items
    const allItems = document.querySelectorAll('.accordion-item');
    allItems.forEach(item => {
        item.classList.remove('open');
    });
    
    // If the clicked item wasn't open, open it
    if (!isOpen) {
        currentItem.classList.add('open');
    }
    // If it was open, we leave it closed (all items are closed)
});