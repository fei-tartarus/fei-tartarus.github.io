<template>
    <div id="main" class="d-flex flex-column justify-content-center align-items-center">
        <h1 class="text-center">tartarus</h1>
        <div class="row justify-content-center">
            <router-link to="/team" class="button col-12 my-2 p-2 text-center">
                Tím
            </router-link>
            <router-link to="/project" class="button col-12 my-2 p-2 text-center">
                Projekt
            </router-link>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    #main{
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        
        h1{
            font-family: 'tartarus';
            font-size: 5rem;
        }

        .button{
            font-family: 'montserrat';
            text-transform: lowercase;
            border: 2px solid #181818;
            color: #181818;
            width: 100%;
            position: relative;
            overflow: hidden;

            &::after{
                content: '';
                z-index: -1;
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                background: #181818;
                transform: translateX(-150%) skew(30deg);
            }

            &:hover{
                color: #eaeaea;

                &::after{
                    transform: translateX(-20%) skew(30deg);
                }
            }
        }
    }
</style>

<script>
    export default {
        
    }
</script>