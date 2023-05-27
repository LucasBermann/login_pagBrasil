<template>
    <footer :class="{ 'footer': user, 'footer-login': !user }">
        <span class="ocult">{{user? ocult : '' }}</span><span> Desenvolvido por <strong>Lucas Bermann</strong></span>
    </footer>
</template>

<script>
export default {
    name: "Footer",
    data: function () {
        return {
            currentYear: '',
            // ocult: '***Diga hoje o quanto ama, pois talvez o amanhã não chegue***'
            ocult: ''
        };
    },
    methods: {
        setCurrentYear() {
            const startingYear = 2021;
            const endYear = new Date().getFullYear();

            this.currentYear = startingYear == endYear
                ? startingYear
                : `${startingYear}-${endYear}`;
        }
    },
    mounted() {
        this.setCurrentYear()
    },
    computed: {
        user() {
            return this.$store.state.user
        }
    }
}
</script>

<style>
    .ocult {
        color: #DDD;
    }
    .footer {
        grid-area: footer;
        background-color: rgb(211, 206, 206);
        color: rgb(41, 56, 65);
        font-size: 13px;

        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding-right: 10px;
    }
    .footer-login {
        grid-area: footer;
        background-color: rgb(79, 78, 87);
        color: rgb(186, 201, 199);
        font-size: 13px;

        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding-right: 10px;
    }
</style>
