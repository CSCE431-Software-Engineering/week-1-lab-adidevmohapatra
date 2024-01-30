document.addEventListener('DOMContentLoaded', function() {
    var deleteButton = document.getElementById('delete-book-btn');
  
    deleteButton.addEventListener('click', function(event) {
      var confirmation = confirm('Are you sure you want to delete this book?');
      if (!confirmation) {
        event.preventDefault(); // Prevent the form from submitting if the user clicks 'Cancel'
      }
    });
  });