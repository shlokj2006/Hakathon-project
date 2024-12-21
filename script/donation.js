// Handle donation form submission
document.getElementById('donationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission for demonstration

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const amount = document.getElementById('amount').value;
    const paymentMethod = document.getElementById('paymentMethod').value;

    // Simple validation
    if (name && email && amount && paymentMethod) {
        // Simulate a successful donation submission
        alert(`Thank you, ${name}! Your donation of RS${amount} has been received via ${paymentMethod}.`);
        // change dollar symbol
        // Reset the form
        document.getElementById('donationForm').reset();
    } else {
        alert('Please fill in all fields.');
    }
});

// Handle feedback form submission
document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission for demonstration

    // Get feedback form values
    const feedbackName = document.getElementById('feedbackName').value;
    const feedbackMessage = document.getElementById('feedbackMessage').value;

    // Simple validation
    if (feedbackName && feedbackMessage) {
        // Simulate a successful feedback submission
        alert(`Thank you, ${feedbackName}! Your feedback has been received.`);
        
        // Reset the feedback form
        document.getElementById('feedbackForm').reset();
    } else {
        alert('Please fill in all fields.');
    }
});