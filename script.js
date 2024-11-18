// Script to handle form submission and display messages
document.getElementById("message-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get values from the form
    const username = document.getElementById("username").value;
    const message = document.getElementById("message").value;

    if (username && message) {
        // Create a new message element
        const newMessage = document.createElement("div");
        newMessage.classList.add("message");

        // Set the content of the new message
        newMessage.innerHTML = `<strong>${username}:</strong><p>${message}</p>`;

        // Append the new message to the messages container
        document.getElementById("messages-container").appendChild(newMessage);

        // Clear the form inputs
        document.getElementById("username").value = "";
        document.getElementById("message").value = "";
    } else {
        alert("Please fill in both fields.");
    }
});