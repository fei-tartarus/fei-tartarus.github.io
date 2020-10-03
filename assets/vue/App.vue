<template>
    <main v-if="$route.path != '/' && $route.path != '/error'">
        <heading></heading>
        <router-view></router-view>
        <footing></footing>
    </main>
    <main v-else>
        <router-view></router-view>
    </main>
</template>

<style lang="scss" >
    main{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        min-height: 100vh;
    }
</style>

<script>
    import Header from './components/Header';
    import Footer from './components/Footer';

    export default {
        components: {
            'heading': Header,
            'footing': Footer
        }
    }
</script>