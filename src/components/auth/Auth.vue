<template>
    <div class="auth-content">
        <div class="auth-modal">
            <img
                width="230"
                height="41"
                alt="Bem-vindo à PagBrasil - Inovação e segurança em pagamentos online"
                src="https://cdn-gbfkg.nitrocdn.com/qWaIHDgUQRMDlBQnqhULpUWpqSjWqvuk/assets/images/optimized/rev-afe8eb0/wp-content/themes/pagbrasil_next/images/logo-pagbrasil-color-v3-230x.svg"
                id="logo"
            >
            <hr>

            <input v-model="user.name" name="name" type="text" placeholder="Usuário">
            <input v-model="user.password" name="password" type="password" placeholder="Senha">

            <b-button variant="primary" @click="signin">Entrar</b-button>
        </div>
    </div>
</template>

<script>
import { baseApiUrl, showError, userKey, encrypt } from '@/helper'
import axios from 'axios'

export default {
    name: 'Auth',
    data: function() {
        return {
            user: {}
        }
    },
    methods: {
        reset() {
            this.user = {};
        },
        signin() {
            fetch('/usuarios.json')
                .then(response => response.json())
                .then(data => {
                    if (this.match(data).length > 0) {
                        this.$store.commit('setUser', data[0])
                        localStorage.setItem(userKey, JSON.stringify(data[0]))
                        this.$router.push({ path: '/' })
                    } else {
                        showError('Usuário e/ou senha inválidos')
                    }
                })
        },
        match(data) {
            return data.filter(
                user => user.username === this.user.name
                    && user.password === encrypt(this.user.password)
            );
        }
    },
}
</script>

<style>
    .auth-content {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .auth-modal {
        border-radius: 10px;
        background-color: rgb(243, 243, 243);
        width: 350px;
        padding: 35px;
        box-shadow: 0 1px 5px rgba(95, 202, 104, 0.15);

        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .auth-title {
        font-size: 1.2rem;
        font-weight: 100;
        margin-top: 10px;
        margin-bottom: 15px;
    }

    .auth-modal input {
        border: 1px solid #BBB;
        width: 100%;
        margin-bottom: 15px;
        padding: 3px 8px;
        outline: none;
    }

    .auth-modal button {
        align-self: flex-end;
        background-color: #2460ae;
        color: #FFF;
        padding: 5px 15px;
    }

    .auth-modal a {
        margin-top: 35px;
    }

    .auth-modal hr {
        border: 0;
        width: 100%;
        height: 1px;
        background-image: linear-gradient(to right,
            rgba(120, 120, 120, 0),
            rgba(120, 120, 120, 0.75),
            rgba(120, 120, 120, 0));
    }
</style>
