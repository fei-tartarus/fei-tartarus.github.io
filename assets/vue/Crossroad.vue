<template>
    <div id="main" class="d-flex flex-column justify-content-center align-items-center">
        <h1 class="text-center">tartarus</h1>
        <div class="row justify-content-center">
            <router-link to="/team" class="button col-12 my-2 p-2 text-center">
                team
            </router-link>
            <router-link to="/project" class="button col-12 my-2 p-2 text-center">
                project
            </router-link>
        </div>
    </div>
</template>

<style lang="scss">
    #main{
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;

        .button{
            border: 2px solid black;
            width: 100%;
        }
    }
</style>

<script>
    export default {
        
    }
</script>