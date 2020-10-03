<template>
    <div class="col-12 px-0 py-1 reportWrap" :class="active">
        <div class="report" :class="active">
            <div class="reportTitle p-3" @click="setActive" :class="active">
                {{ report.title }}
            </div>
            <div class="reportDetail">
                <div class="detail d-flex flex-column p-2">
                    <div class="d-flex">
                        <i class="fas fa-calendar-day p-2"></i>
                        <span class="pt-2">{{report.day}}</span>
                    </div>
                    <div class="d-flex">
                        <i class="fas fa-quote-left p-2"></i>
                        <span class="pt-2">{{ report.text }}</span>
                    </div>
                    <div class="d-flex">
                        <i class="fas fa-clipboard-check p-2"></i>
                        <ul class="pt-2">
                            <li v-for="item in report.jobs" :key="report.jobs.indexOf(item)" class="pl-2">{{item}}</li>
                        </ul>
                    </div>
                    <div class="d-flex">
                        <i class="fas fa-clipboard-list p-2"></i>
                        <ul class="pt-2">
                            <li v-for="item in report.todo" :key="report.todo.indexOf(item)" class="pl-2">{{item}}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .report{
        font-family: 'montserrat';

        .reportTitle{
            background: rgba(#eaeaea, .7);
            border: 2px solid rgba(#eaeaea, .7);
            width: 100%;
            text-align: center;
            font-weight: bold;
            text-transform: uppercase;
            overflow: hidden;
            position: relative;
            z-index: 100;
            cursor: pointer;

            &.active{
                background: #181818;
                border-color: #181818;
                color: #eaeaea;
            }

            &:not(.active){

                &::after{
                    content: '';
                    z-index: -99;
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    background: #181818;
                    transform: translateX(-150%) skew(30deg);
                }

                &:hover{
                    border-color: #181818;
                    color: #eaeaea;

                    &::after{
                        transform: translateX(-20%) skew(30deg);
                    }
                }
            }
        }

        .reportDetail{
            max-height: 0;
            overflow: auto;

            .detail{
                border: 2px solid #181818;
                background: rgba(#eaeaea, .7);

                ul{
                    li{
                        position: relative;

                        &::before{
                            content: "-";
                            position: absolute;
                            top: 0;
                            bottom: 0;
                            left: 0;
                        }
                    }
                }
            }
        }

        &.active{
            .reportDetail{
                max-height: 50vh;
            }
        }
    }
</style>

<script>
    export default {
        props: {
            'report': Object,
        },
        data(){
            return{
                'active': ''
            };
        },
        methods: {
            setActive(){
                switch(this.active){
                    case 'active':
                        this.active = '';
                        break;
                    case '':
                        this.active = 'active';
                        break;
                }
            },
        }
    }
</script>