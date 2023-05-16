<template>
    <div class="alert alert-dismissible fades" v-bind:class="[ type, isVisible == true ? 'd-block': 'd-none']" role="alert">
        <strong>{{ title }}:</strong> 
        {{ desc }}
        <button type="button" class="btn-close" v-on:click="close" aria-label="Close"></button>
    </div>
</template>

<script>
export default{
    props : {
        type: String,
        title: String,
        desc: String,
        isVisible: Boolean
    },
    methods : {
        close(){
            this.$emit("isVisible",false);
        }
    }
}
</script>

<style scoped>

</style>