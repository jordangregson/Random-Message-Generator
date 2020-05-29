var button = document.getElementById("button");

button.addEventListener('click', function(){
    var messages = ["is great", "is awesome", "is spectacular"];

    var outputMessage = document.getElementById("message");

    var inputText = document.getElementById("textbox");

    outputMessage.textContent = inputText.value + " " + messages[Math.floor(Math.random() * 3)];
})