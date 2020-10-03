<template>
    <div class="person col-12 col-md-4 col-lg-3 p-0 m-0">
        <img v-bind:src="'https://fei-tartarus.github.io/'+person.photo" alt="" class="p-0 m-0">
        <div class="cover d-flex flex-column justify-content-center align-items-center">
            <h5>{{person.name}}</h5>
            <hr>
            <span>
                <i v-for="item in person.technologies" :key="person.technologies.indexOf(item)" v-bind:class="'devicon-' + item + '-plain'" class="colored m-1"></i>
            </span>
        </div>
    </div>
</template>

<style lang="scss">
    .person{
        position: relative;
        overflow: hidden;

        img{
            height: 200px;
            width: 100%;
            object-fit: cover;
            opacity: .9;
        }

        .cover{
            color: #eaeaea;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(#181818, 0);
            transform: translateX(-130%);
        }

        &:hover{
            img{
                transform: scale(1.3);
            }

            .cover{
                background: rgba(#181818, .7);
                transform: translateX(0%);
            }
        }
    }
</style>

<script>
    export default {
        props: {
            'person': Object,
        }
    }
</script>