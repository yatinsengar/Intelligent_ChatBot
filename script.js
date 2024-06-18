const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

const responses = {
    "hello": "Hi there! How can I help you today?",
    "how are you": "I'm just a bot, but I'm here to help you with your technical questions.",
    "what is machine learning": "Machine learning is a branch of artificial intelligence (AI) focused on building applications that learn from data and improve their accuracy over time without being programmed to do so.",
    "what is cloud computing": "Cloud computing is the delivery of computing services over the internet, including storage, processing, and networking, among others.",
    "what is data analytics": "Data analytics involves examining data sets to draw conclusions about the information they contain, often with the aid of specialized systems and software.",
    "what is ai": "AI, or artificial intelligence, refers to the simulation of human intelligence in machines that are programmed to think and learn like humans.",
    
    // Add more predefined responses here
};

function sendMessage() {
    const message = userInput.value.trim();
    if (message === "") return;

    appendMessage(message, 'user-message');
    userInput.value = '';

    const botResponse = getBotResponse(message.toLowerCase());
    setTimeout(() => appendMessage(botResponse, 'bot-message'), 500);
}

function appendMessage(message, className) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-message', className);
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(message) {
    for (let key in responses) {
        if (message.includes(key)) {
            return responses[key]
        
        }
    }
    return "Hi there! How can I help you today you can ask technical question from me like 1) what is AI, 2) What is data analytics etc. Because as of now I am a limted chatbot 😀"
  "I'm just a bot, but I'm here to help you with      your technical questions."
  "Machine learning is a branch of artificial     intelligence (AI) focused on building applications that learn from data and improve their accuracy over time without being programmed to do so."
 "Cloud computing is the delivery of computing services over the internet, including storage, processing, and networking, among others."
  "Data analytics involves examining data sets to draw conclusions about the information they contain, often with the aid of specialized systems and software."
  "AI, or artificial intelligence, refers to the simulation of human intelligence in machines that are programmed to think and learn like humans."
  "Quantum computing harnesses the principles of quantum mechanics to process information. Unlike classical computers that use bits (0 or 1), quantum computers use qubits, which can represent and store multiple states simultaneously through superposition and entanglement. This enables quantum computers to perform complex calculations at unprecedented speeds, potentially revolutionizing fields like cryptography, optimization, and material science.";
  

}
