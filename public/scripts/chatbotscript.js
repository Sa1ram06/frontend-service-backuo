function returnHome() {
    const exitButton = document.getElementById("exitButton");
    if (exitButton) {
        exitButton.addEventListener('click', function() {
            window.location.href = '../homepage-pages/homepage.html';
        });
    }
}

function appendMessage(text, type, isUser = false, timestamp = null) {
    const messageContainer = document.createElement('div');
    messageContainer.className = 'message-container';

    const messageDiv = document.createElement('div');
    messageDiv.className = 'message ' + type;

    const textDiv = document.createElement('div');
    textDiv.className = 'message-text';
    textDiv.textContent = text;

    const timestampDiv = document.createElement('div');
    timestampDiv.className = 'timestamp';
    timestampDiv.textContent = formatTimestamp(timestamp);

    if (isUser) {
        // User message
        messageDiv.appendChild(textDiv);
        messageDiv.appendChild(timestampDiv);
        messageContainer.appendChild(messageDiv);
    } else {
        // Bot message with profile picture
        const profilePic = '<img src="../images/chatbot/bot-profile.png" alt="Bot" class="profile-pic">';
        messageDiv.appendChild(textDiv);
        messageDiv.appendChild(timestampDiv);
        messageContainer.innerHTML = profilePic; // Add profile picture
        messageContainer.appendChild(messageDiv);
    }

    document.getElementById('conversationArea').appendChild(messageContainer);

    // Scroll to the bottom of the chat area
    const chatArea = document.getElementById('conversationArea');
    chatArea.scrollTop = chatArea.scrollHeight;
}

async function sendMessage() {
    const inputField = document.getElementById('userInput');
    const messageText = inputField.value.trim();

    if (messageText) {
        // Append user message with timestamp
        const currentTimestamp = new Date().getTime();
        appendMessage(messageText, 'user-message', true, currentTimestamp);

        // Clear the input field
        inputField.value = '';

        // Add context to the message
        const contextMessage = //`You are a friendly chatbot named Andy. Respond to the following message with empathy and provide helpful advice. Include emojis and keep your responses short and clear. 
                                //Here is the message: ${messageText}`;
                                `${messageText} (give very simple answer that is empathetic and helpful, with some relevant emoji)`;

        try {
            // Send the message to the backend
            const response = await fetch('https://chatbot-service-backup-np.apps.innovate.sg-cna.com/api/chat', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ message: contextMessage }),
            });
      
            if (response.ok) {
              const data = await response.json();
              const botResponse = data.response;
              appendMessage(botResponse, 'bot-message', false, currentTimestamp);
            } else {
              console.error('Failed to get response from backend');
            }
        } catch (error) {
            console.error('Error during fetch:', error);
        }
    }
}

// make a container containing 3 buttons
function showButtons() {
    const outerContainer = document.createElement('div');
    outerContainer.className = 'outer-container';

    // Create a button container
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'button-container';

    // Array of button data (images and text)
    const buttonsData = [
        { image: '../images/chatbot/anxious-emoji.png', text: 'Anxious' },
        { image: '../images/chatbot/stressed-emoji.png', text: 'Stressed' },
        { image: '../images/chatbot/angry-emoji.png', text: 'Angry' }
    ];

    // Create buttons dynamically
    buttonsData.forEach(buttonData => {
        const button = document.createElement('button');
        button.className = 'button';

        // Store button text in a data attribute for later use
        button.dataset.text = buttonData.text;

        // Create image element
        const img = document.createElement('img');
        img.src = buttonData.image;
        img.alt = `${buttonData.text} Image`;

        // Create text element
        const span = document.createElement('span');
        span.textContent = buttonData.text;

        // Append image and text to the button
        button.appendChild(img);
        button.appendChild(span);

        // Add event listener for button click
        button.addEventListener('click', function() {
            handleButtonClick(this.dataset.text);
        });

        // Append button to the button container
        buttonContainer.appendChild(button);
    });

    // Append button container to the message container
    outerContainer.appendChild(buttonContainer);

    document.getElementById('conversationArea').appendChild(outerContainer);
}

async function handleButtonClick(buttonText) {
    const currentTimestamp = new Date().getTime();
    const messageText = "I am feeling " + buttonText.toLowerCase();

    console.log(messageText);

    appendMessage(messageText, 'user-message', true, currentTimestamp);
    
    // Add context to the message
    const contextMessage = `${messageText} (give very simple answer that is empathetic and helpful, with some relevant emoji)`;                     
    
    //`You are a friendly chatbot named Andy. Respond to the following message with empathy and provide helpful advice. Include emojis and keep your responses short and clear. 
                            //Here is the message: ${messageText}`;

    try {
        // Send the message to the backend
        const response = await fetch('https://chatbot-service-backup-np.apps.innovate.sg-cna.com/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message: contextMessage }),
            });
                          
            if (response.ok) {
                const data = await response.json();
                const botResponse = data.response;
                appendMessage(botResponse, 'bot-message', false, currentTimestamp);
            } else {
                console.error('Failed to get response from backend');
            }
        } catch (error) {
            console.error('Error during fetch:', error);
        }
}

function formatTimestamp(timestamp) {
    const date = new Date(timestamp);
    
    // Get day, month, hours, and minutes
    const day = String(date.getDate()).padStart(2, '0'); // Get day and pad with leading zero if needed
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Get month (0-11, so add 1) and pad
    const hours = String(date.getHours()).padStart(2, '0'); // Get hours and pad with leading zero if needed
    const minutes = String(date.getMinutes()).padStart(2, '0'); // Get minutes and pad with leading zero if needed

    // Return formatted timestamp
    return `${day}/${month} ${hours}:${minutes}`;
}

// Function to initialize the chatbot
async function initializeChatbot() {
    const initialMessage = `Hi, I'm Andy. How's your day going? 😊`;
    const currentTimestamp = new Date().getTime();
    appendMessage(initialMessage, 'bot-message', false, currentTimestamp);
    
    // Send the initial message to the backend
    /*
    try {
        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message: initialMessage }),
        });

        if (response.ok) {
            const data = await response.json();
            const botResponse = data.response;
            // Append the chatbot's response
            appendMessage(botResponse, 'bot-message', false, currentTimestamp);
        } else {
            console.error('Failed to get response from backend');
        }
    } catch (error) {
        console.error('Error during fetch:', error);
    }
    */
}

// Initialize the event listener when the page loads
document.addEventListener('DOMContentLoaded', function() {
    const inputField = document.getElementById('userInput');
    inputField.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            sendMessage();
        }
    });

    returnHome();

    // Initialize the chatbot with an initial message
    initializeChatbot();
    // Delay showing the buttons by 3 seconds (3000 milliseconds)
    setTimeout(() => {
        showButtons();
    }, 2000);
});