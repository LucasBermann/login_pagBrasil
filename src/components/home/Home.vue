<template>
    <div class="home">
        <PageTitle icon="fa fa-home" main="Dashboard"
            sub="Usuários" />

        <b-table
            sort-icon-left
            table-variant="secondary"
            bordered
            small
            responsive
            head-variant="dark"
            hover
            striped
            :items="users"
            :fields="fields"
        >
        </b-table>
    </div>
</template>

<script>
import PageTitle from '../template/PageTitle'
import { showError, decrypt } from '@/helper'

export default {
    name: 'Home',
    components: { PageTitle },
    data: function() {
        return {
            users: [],
            fields: [
                { key: "username", label: "Usuário", sortable: false },
                { key: "openPassword", label: "Senha Des.", sortable: false, formatter: value => decrypt(value) },
                { key: "password", label: "Senha", sortable: false },
            ],
        }
    },
    methods: {
        getUsers() {
            fetch('/usuarios.json')
                .then(response => response.json())
                .then(data => {
                    this.users = data.map(user => {
                        user.openPassword = user.password;
                        return user;
                    });
                })
                .catch((error) => {
                    showError(error)
                });
        }
    },
    mounted() {
        this.getUsers();
    }
}
</script>

<style>
</style>
