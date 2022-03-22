import CryptoJS from "crypto-js";

export function encrypt(text) {
    var hash = CryptoJS.MD5(text);
    var hash2 = CryptoJS.SHA256(hash);
    var encrypted = hash2.toString(CryptoJS.enc.Hex);

    return encrypted;
}

