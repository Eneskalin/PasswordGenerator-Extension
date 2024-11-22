const getRandomLower = () => String.fromCharCode(Math.floor(Math.random() * 26) + 97);
const getRandomUpper = () => String.fromCharCode(Math.floor(Math.random() * 26) + 65);
const getRandomNumber = () => String.fromCharCode(Math.floor(Math.random() * 10) + 48);
const getRandomSymbol = () => {
    const symbols = '!@-_&%*';
    return symbols[Math.floor(Math.random() * symbols.length)];
};

const randomFunctions = {
    getRandomLower,
    getRandomUpper,
    getRandomNumber,
    getRandomSymbol,
};


const uppercaseCheckbox = document.getElementById('uppercase');
const lowercaseCheckbox = document.getElementById('lowercase');
const symbolsCheckbox = document.getElementById('symbols');
const numbersCheckbox = document.getElementById('numbers');


const generatePassword = () => {
    const length = 16;
    let generatedPassword = '';
    const selectedFunctions = [];
    if (uppercaseCheckbox.checked) selectedFunctions.push(randomFunctions.getRandomUpper);
    if (lowercaseCheckbox.checked) selectedFunctions.push(randomFunctions.getRandomLower);
    if (symbolsCheckbox.checked) selectedFunctions.push(randomFunctions.getRandomSymbol);
    if (numbersCheckbox.checked) selectedFunctions.push(randomFunctions.getRandomNumber);

    if (selectedFunctions.length === 0) {
        return 'Select at least one option'; // Hiçbir checkbox seçilmezse uyarı döner
    }
    for (let i = 0; i < length; i++) {
        const randomFunc = selectedFunctions[Math.floor(Math.random() * selectedFunctions.length)];
        generatedPassword += randomFunc();
    }
    return generatedPassword;
};

const spanResult = document.getElementById('result');
const generateButton = document.getElementById('generate');
const clipboardButton = document.getElementById('clipboard');
const icon = document.getElementById('icon');

generateButton.addEventListener('click', () => {
    spanResult.innerText = generatePassword();
});

clipboardButton.addEventListener('click', () => {
    const password = spanResult.innerText;
    if (!password || password === 'Select at least one option') {
        return;
    }
    const textarea = document.createElement('textarea');
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    icon.className = 'fa-solid fa-clipboard';
    setTimeout(() => {
        icon.className = 'fa-regular fa-clipboard';
    }, 500);
});

const githubIcon=document.getElementById('github');
githubIcon.addEventListener('click',()=>{
    window.open('https://github.com/Eneskalin', '_blank');

})