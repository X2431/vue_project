<template>
  <div class="center">
                <!--banner轮播-->
                <div class="swiper-container" ref="bannerSwiper">
                    <div class="swiper-wrapper" >
                        <div class="swiper-slide" v-for="(banner,index) in bannerList" :key="banner.id">
                            <img :src="banner.imgUrl" />
                        </div>
                    </div>
                    <!-- 如果需要分页器 -->
                    <div class="swiper-pagination"></div>

                    <!-- 如果需要导航按钮 -->
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
                </div>
            </div>
</template>

<script>
    import Swiper from 'swiper'
    export default {
        name:'SlideShow',
        props:['bannerList'],
        watch: {
            bannerList: {
                immediate: true,
                handler(newVal, oldVal) {
                    this.$nextTick(() => {
                        //下方不要用类名声明swiper，不然后续加点击事件或者方法，都无法进行，必须是ref或者是标签才可以
                        //下方这个bannerswiper，转为组件后，不存在命名问题
                        const mySwiper = new Swiper(this.$refs.bannerSwiper, {
                            autoplay: {
                                delay: 1000
                            },
                            // direction: 'vertical', // 垂直切换选项
                            loop: true, // 循环模式选项

                            // 如果需要分页器
                            pagination: {
                                el: '.swiper-pagination',
                            },

                            // 如果需要前进后退按钮
                            navigation: {
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                            },

                            // 如果需要滚动条
                            scrollbar: {
                                el: '.swiper-scrollbar',
                            },
                        });
                        mySwiper.el.onmouseover = function(){
                            mySwiper.autoplay.stop();
                        }

                            //鼠标离开开始自动切换
                        mySwiper.el.onmouseout = function(){
                            mySwiper.autoplay.start();
                        }
                    })
                }

            }
        },
    }
</script>

<style>

</style>