<template>
    <div class="container">
        <div id="info" class="row mx-4 my-5">
            <div class="col-12 col-md-8 p-4 order-2 order-md-1">
                <h3 class="pb-2">{{project.name}}</h3>
                <span class="px-1 my-5">
                    "{{project.about}}"
                </span>
            </div>
            <div class="col-12 col-md-4 p-0 order-1 order-md-2 givenBy">
                <img class="givenByImg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png" alt="">
                <span class="givenByName py-2 px-3">
                    {{project.givenBy}}
                </span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    #info{
        background: rgba(#eaeaea, .7);
        color: #181818;
        font-family: 'montserrat';

        h3{
            font-weight: bolder;
            text-transform: uppercase;
        }

        .givenBy{
            position: relative;
            
            .givenByImg{
                width: 100%;
                height: 100%;
                min-height: 200px;
                object-fit: cover;
            }

            .givenByName{
                position: absolute;
                bottom: 0;
                left: 0;
                background: rgba(#181818, .8);
                color: #eaeaea;
                width: 100%;
                text-align: right;
            }
        }
    }
</style>

<script>
    export default {
        props: {
            'project': Object,
        }
    }
</script>