import Vue from 'vue'
const moment = require('moment');
import axios from "axios";

export const userKey = '__user_info'
export const baseApiUrl = 'https://www.pagbrasil.com/fb831484f9611648f05411b3746466b6/usuarios.json'
const secretValue = 57;

export function showError(e) {
    if(e && e.response && e.response.data && e.response.data.message) {
        Vue.toasted.global.defaultError({ msg : e.response.data.message })
    } else if(typeof e === 'string') {
        Vue.toasted.global.defaultError({ msg : e })
    } else {
        Vue.toasted.global.defaultError()
    }
}

export function encrypt(text) {
    const asciiFormated = Array.from(text).map(
        (caractere, index) => `${text.charCodeAt(index) * secretValue}|`
    );
    return window.btoa(asciiFormated.join(''));
}
export function decrypt(text) {
    const asciiArr = window.atob(text).split('|');
    const pass = asciiArr.map(c => {
        const div = parseInt(c) / secretValue;
        return isNaN(div) ? '' : String.fromCharCode(div);
    })
    return pass.join('');
}