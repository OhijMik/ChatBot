
var sendButton = document.getElementById('sendButton');
var textbox = document.getElementById('textbox');
var chatContainer = document.getElementById('chatContainer');

var user = {message: ""};

var arrayOfPossibleMessages = [
    {message:"hi", response:"hello"},
    {message:"how are you?", response:"I'm great!"},
    {message:"what is your name?", response:"I am Chatbot!"}
];


function sendMessage(userMessage){
    var messageElement = document.createElement('div');
    messageElement.style.textAlign = "right";
    messageElement.style.margin = "10px";

    messageElement.innerHTML = "<span> You: </span>"+
                               "<span>" +userMessage+ "</span>";

    chatContainer.appendChild(messageElement);
}


function chatbotResponse(userMessage){
    var chatbotMessage = "";

    if (userMessage.length > 5 || userMessage == "hi"){
        var result = arrayOfPossibleMessages.filter(val => val.message.includes(userMessage.toLowerCase()));
    
        if (result.length > 0){
            var response = result[0].response;
            chatbotMessage = response
        } else{
            chatbotMessage = "Please send another message";
        }
    } else{
        chatbotMessage = "Please send another message";
    }

    var messageElement = document.createElement('div');
    messageElement.style.margin = "10px";

    messageElement.innerHTML = "<span> Chatbot: </span>"+
                               "<span>" +chatbotMessage+ "</span>";


    setTimeout(()=>{
        messageElement.animate([{easing:"ease-in", opacity:0.4}, {opacity:1}], {duration:1000});
        chatContainer.appendChild(messageElement);
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }, 1000)
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
        chatbotResponse(userMessageText);
    }
})