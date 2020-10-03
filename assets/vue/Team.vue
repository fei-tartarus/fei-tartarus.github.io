<template>
    <div id="team" class="d-flex justify-content-center align-items-start align-items-md-center py-5">
        <div class="container">
            <div class="justify-content-center row m-5">
                <person v-for="member in people" :key="people.indexOf(member)" v-bind:person=member></person>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    #team{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        min-height: 100vh;
    }
</style>

<script>
    import Person from './components/Person';

    export default {
        components: {
            'person': Person
        },
        data(){
            return {
                people: []
            }
        },
        methods: {
            getTeam(){
                axios
                    .get('https://fei-tartarus.github.io/data/team.json')
                    .then(response => {
                        this.people = response.data.people;
                        
                        console.log(response.data);
                    });
            }
        },
        mounted(){
            this.getTeam();
        }
    }
</script>