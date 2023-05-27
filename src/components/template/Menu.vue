<template>
    <aside class="menu" v-show="isMenuVisible">
        <!-- <b-button variant="danger" class="mt2">Sair</b-button> -->
    </aside>
</template>

<script>
import { mapState } from 'vuex'
import { userKey } from '@/helper'

export default {
    name: 'Menu',
    computed: mapState(['isMenuVisible', 'user']),
    data: function() {
        return {
        }
    },
    methods: {
        logout() {
            localStorage.removeItem(userKey)
            this.$store.commit('setUser', null)
            this.$router.push({ name: 'auth' })
        },
    },
    mounted() {

    }
}
</script>

<style>
    .menu {
        grid-area: menu;
        /* background: linear-gradient(to right, #232526, #414345); */
        background: linear-gradient(to bottom, #2a3346, #20434d);
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    }
</style>
