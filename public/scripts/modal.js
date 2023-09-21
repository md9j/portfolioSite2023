// const modal = document.getElementById('description-modal');
// const btn = document.getElementById('open-modal-btn');
// const span = document.getElementById('close-btn');

// btn.onclick = function() {
//     modal.style.display = 'block';
// }

// span.onclick = function() {
// modal.style.display = 'none';
// }

// window.onclick = function(event) {
//     if(event.target === modal) {
//         modal.style.display = 'none';
//     }
// }

// modal.js
const modal = document.getElementById('description-modal');
const btn = document.getElementById('open-modal-btn');
const span = document.getElementById('close-btn');

// Hide the modal when the page loads
window.onload = function() {
    hideModal();
  }

// Function to show the modal
function showModal() {
  modal.style.display = 'block';
}

// Function to hide the modal
function hideModal() {
  modal.style.display = 'none';
}

// Show the modal when the "Contact" button is clicked
btn.onclick = showModal;

// Hide the modal when the close button is clicked
span.onclick = hideModal;

// Hide the modal when clicking anywhere outside the modal
window.onclick = function(event) {
  if (event.target === modal) {
    hideModal();
  }
}
