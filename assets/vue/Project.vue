<template>
    <div>
        Project
        <br>
        <info v-bind:project=project></info>
        <br>
        <report v-for="item in reports" :key="reports.indexOf(item)" v-bind:report=item></report>

    </div>
</template>

<style lang="scss">
    
</style>

<script>
    import Report from './components/Report';
    import Info from './components/Info';

    export default {
        components: {
            'report': Report,
            'info': Info
        },
        data(){
            return {
                project: {},
                reports: []
            }
        },
        methods: {
            getProject(){
                axios
                    .get('https://fei-tartarus.github.io/data/project.json')
                    .then(response => {
                        this.project = response.data.project;
                        this.reports = response.data.reports;
                        
                        console.log(response.data);
                    });
            }
        },
        mounted(){
            this.getProject();
        }
    }
</script>