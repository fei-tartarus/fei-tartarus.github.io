<template>
    <div id="project" class="d-flex flex-column justify-content-center align-items-center">
        <info v-bind:project=project></info>

        <div class="container">
            <div class="row mx-4 mb-5">
                <report v-for="item in reports" :key="reports.indexOf(item)" v-bind:report=item></report>
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
    #project{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        min-height: 100vh;
    }
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