<template>
    <header>
        <h1 class="teamName">tartarus</h1>
        <router-link to="/" class="logo p-3">T</router-link>
        <div class="dropdown p-3">
            <i class="fas fa-bars"></i>
            <ul class="menu">
                <li>
                    <router-link to="/team" :class="$route.path == '/team' ? 'active' : ''" class="menuitem px-5 py-2">Team</router-link>
                </li>
                <li>
                    <router-link to="/project" :class="$route.path == '/project' ? 'active' : ''" class="menuitem px-5 py-2 mt-1">Project</router-link>
                </li>
            </ul>
        </div>
    </header>
</template>

<style lang="scss">
    .teamName{
        position: fixed;
        bottom: 0;
        left: 0;
        transform-origin: top left;
        transform: rotate(-90deg) scale(2);
    }

    .logo{
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1000;
    }

    .dropdown{
        position: fixed;
        top: 0;
        right: 0;
        z-index: 1000;


        .menu{
            position: absolute;
            top: 80%;
            right: 30%;
            opacity: 0;
            transform: scaleY(0);
            overflow: hidden;
            transform-origin: top center;

            li{
                transform-origin: top center;
                background: #eaeaea;
                transform: scaleY(0);

                .menuitem{
                    width: 100%;
                    border: 2px solid #eaeaea;
                    position: relative;

                    &:not(.active)::after{
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

                    &.active{
                        border-color: #181818;
                        background: #181818;
                        color: #eaeaea;
                        pointer-events: none;
                    }

                    &:hover:not(.active){
                        border-color: #181818;
                        color: #eaeaea;

                        &::after{
                            transform: translateX(-20%) skew(30deg);
                        }
                    }
                }
            }
        }

        &:hover .menu{
            opacity: 1;
            transform: scaleY(1);

            li{
                transform: scaleY(1);
            }
        }
    }
</style>

<script>
    export default {
    }
</script>