<template>
    <!-- 商品分类导航 -->
    <div class="type-nav">
        <div class="container">
            <div @mouseleave="moveOutItem" @mouseenter="isShow=true">
                <h2 class="all">全部商品分类</h2>
                <transition name="sort">
                    <div class="sort" v-show="isShow">
                        <div class="all-sort-list2" @click="toSearch">


                            <div class="item bo" 
                                v-for="(c1,index) in categoryList" 
                                :key="c1.categoryId"
                                :class="{item_on:currentIndex === index}" 
                                @mouseenter="moveInItem(index)"
                            >
                                <h3>
                                    <a href="javascript:;" :data-category1id="c1.categoryId"
                                        :data-categoryName="c1.categoryName">
                                        {{c1.categoryName}}
                                    </a>
                                    <!-- 使用router-link会创建多个组件对象，导致浏览器卡顿现象 -->
                                    <!-- <router-link to="/search">{{c1.categoryName}}</router-link> -->
                                </h3>
                                <div class="item-list clearfix">
                                    <div class="subitem">
                                        <dl class="fore" 
                                        v-for="c2 in c1.categoryChild" 
                                        :key="c2.categoryId">
                                            <dt>
                                                <a href="javascript:;" 
                                                :data-category2id="c2.categoryId"
                                                    :data-categoryName="c2.categoryName"
                                                    >
                                                    {{c2.categoryName}}</a>
                                                <!-- <router-link to="/search">{{c2.categoryName}}</router-link> -->
                                            </dt>
                                            <dd>
                                                <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                                                    <a 
                                                        href="javascript:;" 
                                                        :data-category3id="c3.categoryId"
                                                        :data-categoryName="c3.categoryName"
                                                    >
                                                        {{c3.categoryName}}</a>
                                                    <!-- <router-link to="/search">{{c3.categoryName}}</router-link> -->
                                                </em>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </transition>
            </div>
            <nav class="nav">
                <a href="###">服装城</a>
                <a href="###">美妆馆</a>
                <a href="###">尚品汇超市</a>
                <a href="###">全球购</a>
                <a href="###">闪购</a>
                <a href="###">团购</a>
                <a href="###">有趣</a>
                <a href="###">秒杀</a>
            </nav>

        </div>
    </div>
</template>

<script>
    import throttle from '../../../node_modules/lodash/throttle'
    import {mapState} from 'vuex'
    export default {
        name: 'TypeNav',
        data() {
            return {
                currentIndex: -1,
                isShow: true
            }
        },
        mounted() {
            //在组件中定义方法，再组件生效和销毁时会频繁调用方法
            // console.log(this);
            // this.$store.dispatch('getCategoryList')

            if (this.$route.path !== "/home") {
                this.isShow = false
            }


        },
        methods: {

            // moveInItem(index){
            //     this.currentIndex = index
            //     console.log(this.currentIndex);
            // }

            //throttle节流操作
            //加了trailing为false是为了防止回调函数还没有调用,就已经出去了,页面移除事件不触发的bug
            //是将时间间隔最后触发回调函数,通过false修改为时间间隔之前触发
            moveInItem: throttle(function (index) {
                this.currentIndex = index
            }, 20, {
                'trailing': false
            }),

            moveOutItem(){
                if (this.$route.path !== "/home") {
                    this.isShow = false
                }
                //防止鼠标快速移出，第二次进入全部商品，地址没有修改
                this.currentIndex = -1
            },

            toSearch(event) {
                // 获取点击事件的标签
                let targetNode = event.target
                //获取标签中的data-属性对象
                let data = targetNode.dataset
                //解构赋值
                let {
                    category1id,
                    category2id,
                    category3id,
                    categoryname
                } = data
                //判断是不是a标签
                if (categoryname) {
                    let location = {
                        name: 'search'
                    }
                    let query = {
                        categoryName: categoryname
                    }
                    if (category1id) {
                        query.category1Id = category1id
                    } else if (category2id) {
                        query.category2Id = category2id
                    } else if (category3id) {
                        query.category3Id = category3id
                    }

                    location.query = query

                    this.$router.push(location)
                }
            }
        },
        //从vuex当中把数据转到vue中
        //从state和getter中的东西，都在computed当中拿
        //从actions和mutations当中的，都在methods当中拿
        computed: {
            //函数内部可以是数组也可以是对象
            //数组必须满足条件1：数据必须是总的state中的数据，不能是模块中的，例如home、user不行
            //2.数组当中的名字必须和state当中一样
            // ...mapState(['categroyList'])错误
            //在app.vue中
            ...mapState({
                // state在mapsate可以直接传参
                categoryList: state => state.home.categoryList
            })
        }

    }
</script>

<style lang='less' scoped>
    .type-nav {
        border-bottom: 2px solid #e1251b;

        .container {
            width: 1200px;
            margin: 0 auto;
            display: flex;
            position: relative;


            .all {
                width: 210px;
                height: 45px;
                background-color: #e1251b;
                line-height: 45px;
                text-align: center;
                color: #fff;
                font-size: 14px;
                font-weight: bold;
            }

            .nav {
                a {
                    height: 45px;
                    margin: 0 22px;
                    line-height: 45px;
                    font-size: 16px;
                    color: #333;
                }
            }

            .sort {
                position: absolute;
                left: 0;
                top: 45px;
                width: 210px;
                height: 461px;
                position: absolute;
                background: skyblue;
                z-index: 999;

                &.sort-enter {
                    height: 0px;
                }

                &.sort-enter-to {
                    height: 461px;
                }

                &.sort-enter-active {
                    transition: all 1s;
                }

                .all-sort-list2 {
                    .item {
                        h3 {
                            line-height: 30px;
                            font-size: 14px;
                            font-weight: 400;
                            overflow: hidden;
                            padding: 0 20px;
                            margin: 0;

                            a {
                                color: #333;
                            }
                        }

                        .item-list {
                            display: none;
                            position: absolute;
                            width: 734px;
                            min-height: 460px;
                            background: #f7f7f7;
                            left: 210px;
                            border: 1px solid #ddd;
                            top: 0;
                            z-index: 9999 !important;

                            .subitem {
                                float: left;
                                width: 650px;
                                padding: 0 4px 0 8px;

                                dl {
                                    border-top: 1px solid #eee;
                                    padding: 6px 0;
                                    overflow: hidden;
                                    zoom: 1;

                                    &.fore {
                                        border-top: 0;
                                    }

                                    dt {
                                        float: left;
                                        width: 54px;
                                        line-height: 22px;
                                        text-align: right;
                                        padding: 3px 6px 0 0;
                                        font-weight: 700;
                                    }

                                    dd {
                                        float: left;
                                        width: 615px;
                                        padding: 3px 0 0;
                                        overflow: hidden;

                                        em {
                                            float: left;
                                            height: 14px;
                                            line-height: 14px;
                                            padding: 0 8px;
                                            margin-top: 5px;
                                            border-left: 1px solid #ccc;
                                        }
                                    }
                                }
                            }
                        }

                        &.item_on {
                            background-color: gray;

                            .item-list {
                                display: block;
                            }
                        }
                    }
                }
            }
        }
    }
</style>