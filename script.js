// Function to load saved messages from local storage
function loadMessages() {
    const savedMessages = JSON.parse(localStorage.getItem('messages')) || [];
    const messagesContainer = document.getElementById('messages-container');
    messagesContainer.innerHTML = ''; // Clear the current messages

    savedMessages.forEach(message => {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        messageDiv.innerHTML = `<strong>${message.username}:</strong><p>${message.text}</p>`;
        messagesContainer.appendChild(messageDiv);
    });
}

// Handle message form submission
document.getElementById('message-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get values from the form
    const username = document.getElementById('username').value;
    const messageText = document.getElementById('message').value;

    if (username && messageText) {
        // Create a new message object
        const newMessage = { 
            username: username, 
            text: messageText 
        };

        // Get saved messages from local storage
        const savedMessages = JSON.parse(localStorage.getItem('messages')) || [];

        // Add the new message to the saved messages array
        savedMessages.push(newMessage);

        // Save the updated messages array back to local storage
        localStorage.setItem('messages', JSON.stringify(savedMessages));

        // Reload the messages on the page
        loadMessages();

        // Clear the form inputs
        document.getElementById('username').value = '';
        document.getElementById('message').value = '';
    } else {
        alert('Please fill in both fields.');
    }
});

// Load messages when the page is loaded
window.onload = loadMessages;
