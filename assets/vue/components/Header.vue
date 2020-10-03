<template>
    <header>
        <h1 class="teamName">tartarus <span id="route">/ {{$route.meta.title}}</span></h1>
        <router-link to="/" class="logo m-3">T</router-link>
        <div class="dropdown p-3">
            <i class="menuIcon fas fa-bars p-2"></i>
            <ul class="menu">
                <li>
                    <router-link to="/team" class="menuitem px-5 py-2">Tím</router-link>
                </li>
                <li>
                    <router-link to="/project" class="menuitem px-5 py-2 mt-1">Projekt</router-link>
                </li>
            </ul>
        </div>
    </header>
</template>

<style lang="scss" scoped>
    .teamName{
        font-family: 'tartarus';
        text-transform: uppercase;
        position: fixed;
        bottom: 0;
        left: 2%;
        transform-origin: top left;
        transform: rotate(-90deg) scale(1.7);
        
        #route{
            font-size: 1rem;
            font-family: 'montserrat';
        }
    }

    .logo{
        font-family: 'tartarus';
        font-size: 2rem;
        width: 2rem;
        height: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1000;

        &:hover{
            color: #eaeaea;
            background: #181818;
        }
    }

    .dropdown{
        position: fixed;
        top: 0;
        right: 0;
        z-index: 1000;


        .menu{
            font-family: 'montserrat';
            text-transform: lowercase;
            position: absolute;
            text-align: center;
            top: 85%;
            right: 25%;
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

        &:hover{
            .menuIcon{
                color: #eaeaea;
                background: #181818;
            }

            .menu{
                opacity: 1;
                transform: scaleY(1);

                li{
                    transform: scaleY(1);
                }
            }
        }
    }
</style>

<script>
    export default {
    }
</script>