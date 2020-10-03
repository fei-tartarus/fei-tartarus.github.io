<template>
    <footer class="p-3">
        &copy; {{ year }}, <a href="https://github.com/fei-tartarus/" target="_blank">Fei-Tartarus</a>, <a href="https://github.com/zukydesigns/" target="_blank">ZukyDesigns</a>
    </footer>
</template>

<style lang="scss">
    footer{
        position: fixed;
        bottom: 0;
        right: 0;

        a{
            display: inline;
        }
    }
</style>

<script>
    export default {
        data(){
            return {
                'year': new Date().getFullYear()
            }
        }
    }
</script>