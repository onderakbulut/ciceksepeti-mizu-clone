<template>
    <div class="container">
        <AlertComp v-bind:isVisible='true' :type="'alert-warning'" :title="'Success'" :desc="'Logout success, redirecting..'"></AlertComp>
    </div>
</template>

<script>
import AlertComp from '../components/AlertComp.vue';
import { useUser } from '../stores/user';

export default {
    setup() {
        const user = useUser();
        return { user }
    },
    components: {
        AlertComp
    },
    methods: {
        redirect() {
            sessionStorage.clear();
            this.user.userLogged = false;
            setTimeout(() => {
                this.$router.push('/')
            },2000);
        }
    },
    mounted() {
        this.redirect();
    }
    
}
</script>

<style lang="scss" scoped>

</style>