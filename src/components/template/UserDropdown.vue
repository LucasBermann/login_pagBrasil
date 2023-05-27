<template>
    <div class="user-dropdown">
        <div class="user-button">
            <span class="d-none d-sm-block">{{ getFirstName() }}</span>
            <div class="user-dropdown-img">
                <!-- <Gravatar :email="user.email" alt="User" /> -->
                <!-- <b-avatar src="https://pbs.twimg.com/profile_images/2485441175/vdv4qf591g829rxb7utn_400x400.jpeg"></b-avatar> -->
                <b-avatar variant="info" :text="getInitiallysUserName()"></b-avatar>
            </div>
            <i class="fa fa-angle-down"></i>
        </div>
        <div class="user-dropdown-content">
            <!-- <router-link to="/admin" v-if="user.admin"> -->
            <!-- <router-link to="/admin">
                <i class="fa fa-cogs"></i> Administração
            </router-link> -->
            <!-- <img :src="user.company.imageLogo" height="40" alt="Logo"> -->
            <!-- <a v-if="user.admin" v-b-modal.modal-1><i class="fas fa-pencil-alt"></i> Alterar logo</a> -->
            <div class="full-name" >{{ getToNames() }}</div>
            <div v-if="user.company_id" class="company-name" >{{ getCompanyName() }}</div>
            <a href @click.prevent="logout"><i class="fas fa-sign-out-alt"></i> Sair</a>
        </div>
    </div>
</template>

<script>
import { userKey, limitString } from '@/helper'
import { mapState } from 'vuex'

export default {
    name: 'UserDropdown',

    computed: mapState(['user']),
    methods: {
        logout() {
            localStorage.removeItem(userKey)
            this.$store.commit('setUser', null)
            this.$router.push({ name: 'auth' })
        },
        getFirstName() {
            let firstName = this.user.name;
            if (firstName) {
                firstName = firstName.split(' ')[0];
                firstName = firstName.toLowerCase();
                firstName = firstName[0].toUpperCase() + firstName.substr(1);
            }
            return firstName;
        },
        getToNames() {
            let name = this.user.name;
            if (name) {
                const nameSplited = name.split(' ');

                let firstName = nameSplited[0].toLowerCase();
                firstName = firstName[0].toUpperCase() + firstName.substr(1);

                let lastName = '';
                if (nameSplited.length > 1) {
                    lastName = nameSplited[nameSplited.length -1].toLowerCase();
                    lastName = lastName[0].toUpperCase() + lastName.substr(1);
                }

                name = firstName + ' ' + lastName
            }
            return limitString(name, 20);
        },
        getCompanyName() {
            let name = this.user.company.name;
            if (name) {
                const nameSplited = name.split(' ');

                let firstName = nameSplited[0].toLowerCase();
                firstName = firstName[0].toUpperCase() + firstName.substr(1);

                let lastName = '';
                if (nameSplited.length > 1) {
                    lastName = nameSplited[nameSplited.length -1].toLowerCase();
                    lastName = lastName[0].toUpperCase() + lastName.substr(1);
                }

                name = firstName + ' ' + lastName
            }
            return limitString(name, 20);
        },
        getInitiallysUserName() {
            let name = this.user.name;
            let initially = '';
            if (name) {
                name = name.split(' ');
                initially = name[0][0].toUpperCase();
                initially += name.length > 1? name[name.length-1][0].toUpperCase() : '';
            }
            return initially;
        },
    }
}
</script>

<style>
    .user-dropdown {
        position: relative;
        height: 100%;
    }

    .user-button {
        display: flex;
        align-items: center;
        color: #fff;
        font-weight: 100;
        height: 100%;
        padding: 0px 20px;
    }

    .user-dropdown:hover {
        background-color: rgba(0, 0, 0, 0.2);
    }

    .user-dropdown-img {
        margin: 0px 10px;
    }

    .user-dropdown-img > img {
        max-height: 37px;
        border-radius: 5px;
    }


    .user-dropdown-content {
        position: absolute;
        right: 0px;
        background-color: #f9f9f9;
        min-width: 170px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        padding: 10px;
        z-index: 1;

        display: flex;
        flex-direction: column;
        flex-wrap: wrap;

        visibility: hidden;
        opacity: 0;
        transition: visibility 0s, opacity 0.5s linear;
    }

    .user-dropdown:hover .user-dropdown-content {
        visibility: visible;
        opacity: 1;
    }

    .user-dropdown-content a {
        text-decoration: none;
        color: #000;
        padding: 10px;
    }

    .user-dropdown-content a:hover {
        text-decoration: none;
        color: #000;
        background-color: #EDEDED;
    }

    .company-name {
        font-weight: bold;
        color: #108da3;
    }
</style>
