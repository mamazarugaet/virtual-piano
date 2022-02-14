
document.addEventListener("keydown", function (event) {
    if (event.key == 'a') {
        let audio = new Audio("sounds/A.mp3")
        audio.play()
        console.log("The \'a\' key is pressed.")
    } else if (event.key == 's') {
        let audio = new Audio("sounds/S.mp3")
        audio.play()
        console.log("The \'s\' key is pressed.")
    } else if (event.key == 'd') {
        let audio = new Audio("sounds/D.mp3")
        audio.play()
        console.log("The \'d\' key is pressed.")
    } else if (event.key == 'f') {
        let audio = new Audio("sounds/F.mp3")
        audio.play()
        console.log("The \'f\' key is pressed.")
    } else if (event.key == 'g') {
        let audio = new Audio("sounds/G.mp3")
        audio.play()
        console.log("The \'g\' key is pressed.")
    } else if (event.key == 'h') {
        let audio = new Audio("sounds/H.mp3")
        audio.play()
        console.log("The \'h\' key is pressed.")
    } else if (event.key == 'j') {
        let audio = new Audio("sounds/J.mp3")
        audio.play()
        console.log("The \'j\' key is pressed.")
    } else if (event.key == 'w') {
        let audio = new Audio("sounds/W.mp3")
        audio.play()
        console.log("The \'w\' key is pressed.")
    } else if (event.key == 'e') {
        let audio = new Audio("sounds/E.mp3")
        audio.play()
        console.log("The \'e\' key is pressed.")
    } else if (event.key == 't') {
        let audio = new Audio("sounds/T.mp3")
        audio.play()
        console.log("The \'t\' key is pressed.")
    } else if (event.key == 'y') {
        let audio = new Audio("sounds/Y.mp3")
        audio.play()
        console.log("The \'y\' key is pressed.")
    } else if (event.key == 'u') {
        let audio = new Audio("sounds/U.mp3")
        audio.play()
        console.log("The \'u\' key is pressed.")
    } else {
        console.log("wrong key")
    }
});
