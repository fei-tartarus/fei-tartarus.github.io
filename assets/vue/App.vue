<template>
    <main v-if="$route.path != '/' && $route.path != '/error'">
        <vue-particles class="particles" color="#181818"></vue-particles>
        <heading></heading>
        <transition name="slide">
            <router-view></router-view>
        </transition>
        <footing></footing>
    </main>
    <main v-else>
        <vue-particles class="particles" color="#181818"></vue-particles>
        <transition name="slide">
            <router-view></router-view>
        </transition>
        <footing></footing>
    </main>
</template>

<style lang="scss" scoped>
    .slide-transition {
        transition:  500ms all ease-in-out;
    }
        /* .expand-enter defines the starting state for entering */
        /* .expand-leave defines the ending state for leaving */
    .slide-enter{
        transform: translateY(-100%);
        opacity: 0;
    }
    .slide-leave-to {
        transform: translateY(100%);
        opacity: 0;
    }

    main{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        min-height: 100vh;
    }
    .particles{
        width: 100%;
        height: 100vh
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