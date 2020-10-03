<template>
    <div id="team" class="d-flex justify-content-center align-items-center">
        <div class="teamGrid justify-content-center container row m-5">
            <person v-for="member in people" :key="people.indexOf(member)" v-bind:person=member></person>
        </div>
    </div>
</template>

<style lang="scss">
    #team{
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;

        .teamGrid{
            max-height: 80vh;
            overflow: hidden;
        }
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