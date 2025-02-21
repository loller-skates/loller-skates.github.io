let isVisible = false;
let isVisible2 = false;
let isVisible4 = false;
let isVisible5 = false;

function methodOne()
{
    alert('LMAOOOOOOO LOSER jk i love you')
    isVisible = !isVisible;

            // Update the div visibility
            const messageDiv = document.getElementById('message');
            if (isVisible) {
                messageDiv.classList.remove('hidden');  // Show the message
            } else {
                messageDiv.classList.add('hidden');  // Hide the message
            }
}

function methodTwo() {
    alert('the button is sleeping..."(っ- ‸ - ς)ᶻ 𝗓 𐰁')
    

    isVisible2 = !isVisible2;

    // Update the div visibility
    const messageDiv2 = document.getElementById('message2');
    if (isVisible2) {
        messageDiv2.classList.remove('hidden2');  // Show the message
    } else {
        messageDiv2.classList.add('hidden2');  // Hide the message
    }
}

function methodThree(){
    const url = "https://open.spotify.com/playlist/5I26YyYS8ZVrGIh4xjXHkW?si=329f1c1052fc4d4b&pt=eb8e974e3a1f2dfedb3b45683cd444c2";
    const width = 600;
    const height = 800;
    const left = (window.screen.width - width) / 2;
    const top = (window.screen.height - height) / 2;

    window.open(
        url,
        "Spotify Playlist",
        `width=${width},height=${height},top=${top},left=${left},resizable=yes,scrollbars=yes`
    );


}

function methodFour(){
    alert('SMOOOOOOOOOOCH <3 <3 <3 <3')
    // Update the div visibility
    isVisible4 = !isVisible4;

    const messageDiv4 = document.getElementById('message4');
        if (isVisible4) {
            messageDiv4.classList.remove('hidden4');  // Show the message
        } else {
            messageDiv4.classList.add('hidden4');  // Hide the message
        }
}

function methodFive(){
    alert('gobble')
    // Update the div visibility
    isVisible5 = !isVisible5;

    const messageDiv5 = document.getElementById('message5');
        if (isVisible5) {
            messageDiv5.classList.remove('hidden5');  // Show the message
        } else {
            messageDiv5.classList.add('hidden5');  // Hide the message
        }
}