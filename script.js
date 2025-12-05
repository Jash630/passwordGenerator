const generateBtn = document.getElementById("generateBtn")
const pass1 = document.getElementById("pass1")
const pass2 = document.getElementById("pass2")
const copied = document.getElementById("copied")

const characters = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
    "0","1","2","3","4","5","6","7","8","9",
    "@","#","$","%","&","*","(",")","_","-","+","=","{","}","[","]",";",":","<",">","?", "/", "!", "^","|","~"
];
let charLength = characters.length


generateBtn.addEventListener("click",function() {
    const passwordLength = Number(document.getElementById("inputLength").value) || 0;
    let a = ""
    let b = ""
    copied.textContent = ""
    for( let i=0; i<passwordLength ; i++){
        let randNum = Math.floor(Math.random()*charLength)
        a+=characters[randNum]
    }

    for( let i=0; i<passwordLength ; i++){
        let randNum = Math.floor(Math.random()*charLength)
        b+=characters[randNum]
    }

    pass1.textContent = a
    pass2.textContent = b
    a=""
    b=""
})


function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
        .then(() => copied.textContent = "Copied")
        .catch(err => console.error("Copy failed:", err));
}

pass1.addEventListener("click", () => {
    if (pass1.textContent.trim() !== "") {
        copyToClipboard(pass1.textContent);
    }
});

pass2.addEventListener("click", () => {
    if (pass2.textContent.trim() !== "") {
        copyToClipboard(pass2.textContent);
    }
});

