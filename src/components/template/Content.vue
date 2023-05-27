<template>
    <div :class="{ 'content': user, 'content-login': !user }">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'Content',
    computed: {
        user() {
            return this.$store.state.user
        }
    }
}
</script>

<style>
    .content {
        grid-area: content;
        background-color: #efefef;
        padding: 20px;
    }

    .content-login {
        grid-area: content;
        /* background-color: #4a7077; */
        background: linear-gradient(90deg, rgb(3, 3, 3) 0%, rgb(36, 36, 41) 39%, rgb(32, 31, 44) 100%);
        /* background-color: linear-gradient(to right, #3cacc0, #353a9b); */
        padding: 5px;
        padding-left: 15px;
    }
</style>
