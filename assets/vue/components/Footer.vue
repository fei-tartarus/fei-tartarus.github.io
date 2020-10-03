<template>
    <footer class="p-3">
        &copy; {{ year }} <a class="p-1" href="https://github.com/fei-tartarus/" target="_blank">Fei-Tartarus</a> <a class="p-1" href="https://github.com/zukydesigns/" target="_blank">ZukyDesigns</a>
    </footer>
</template>

<style lang="scss" scoped>
    footer{
        font-family: 'montserrat';
        color: #181818;
        position: fixed;
        bottom: 0;
        right: 0;

        a{
            display: inline;

            &:hover{
                background: #181818;
                color: #eaeaea;
            }
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