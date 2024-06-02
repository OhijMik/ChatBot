
var sendButton = document.getElementById('sendButton');
var textbox = document.getElementById('textbox');
var chatContainer = document.getElementById('chatContainer');

var user = {message: ""};


function sendMessage(userMessage){
    var messageElement = document.createElement('div');
    messageElement.style.textAlign = "right";
    messageElement.style.margin = "10px";

    messageElement.innerHTML = "<span> You: </span>"+
                               "<span>" +userMessage+ "</span>";

    chatContainer.appendChild(messageElement);
}


sendButton.addEventListener('click', function(e){
    var userMessage = textbox.value
    
    if (userMessage == ""){
        alert("Please type a message");
    } else{
        let userMessageText = userMessage.trim();
        user.message = userMessageText;
        textbox.value = "";
        sendMessage(userMessageText);
    }
})