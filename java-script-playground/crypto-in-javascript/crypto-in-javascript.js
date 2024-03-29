// =====================================================================================================================
const encryptionKey = "thekey";

let dynamicKey = "";

let encryptedValue = CryptoJS.AES.encrypt('themessage', encryptionKey);
console.log('encrypted', encryptedValue);
console.log(encryptedValue.toString());

let encryptButton = document.getElementById("encryptButton");
encryptButton.addEventListener("click", performEncryption);

let valueToEncryptTextInputElement = document.getElementById("encryptTextInputField");
let encryptedValueElement = document.getElementById("encryptedValue");

let decryptButton = document.getElementById("decryptButton");
decryptButton.addEventListener("click", performDecryption);
let decryptionDivWithShowAndHideElement = document.getElementById("decryptionDivWithShowAndHide");
decryptionDivWithShowAndHideElement.style.display = "none";
let decryptedValueElement = document.getElementById("decryptedValue");

function performEncryption() {
    const textToEncrypt = valueToEncryptTextInputElement.value;
    console.log("Performing encryption for...")
    console.log(textToEncrypt)
    encryptedValue = CryptoJS.AES.encrypt(textToEncrypt, 'thekey');
    encryptedValueElement.textContent = encryptedValue.toString();
    decryptionDivWithShowAndHideElement.style.display = "block";
}

function performDecryption() {
    console.log("Performing decryption...");
    let decryptedValue = CryptoJS.AES.decrypt(encryptedValue, encryptionKey);
    decryptedValueElement.textContent = decryptedValue.toString(CryptoJS.enc.Utf8);
    setKey();
    encryptUsingIV();
}

function setKey() {
    console.log("Setting key using PBKDF2...");
    dynamicKey = CryptoJS.PBKDF2("passphrase", CryptoJS.lib.WordArray.random(128/8), { 
        keySize: 256/32, 
        iterations: 10000 
    });
    console.log(dynamicKey.toString());
}

function encryptUsingIV() {
    let cipherData = CryptoJS.AES.encrypt("saurabh", dynamicKey, { 
        iv: CryptoJS.enc.Hex.parse("iv") 
    });
    console.log("Calculated cipherData...");
    console.log(cipherData.toString());
}