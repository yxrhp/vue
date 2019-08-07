<template>
    <div>
        <mt-swipe :auto="4000">

            <mt-swipe-item v-for="(item, i) in lunbo" :key="i">

            <img :src="item" alt="">

                </mt-swipe-item>

        </mt-swipe>
        <ul class="mui-table-view mui-grid-view mui-grid-9">
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../../img/menu1.png"/>
                    <div class="mui-media-body">新闻资讯</div>
                </a>
            </li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
		            <img src="../../img/menu2.png"/>
		             <div class="mui-media-body">图片分享</div>
                </a>
            </li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
		            <img src="../../img/menu3.png"/>
		            <div class="mui-media-body">商品购买</div>
                </a>
            </li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
		            <img src="../../img/menu4.png"/>>
		            <div class="mui-media-body">留言反馈</div>
                </a>
            </li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
		            <img src="../../img/menu5.png"/>
		            <div class="mui-media-body">视频专区</div>
                </a>
            </li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
		            <img src="../../img/menu6.png"/>
		            <div class="mui-media-body">联系我们</div>
                </a>
            </li>
		</ul> 
    </div>
</template>
<script>
import {Toast} from 'mint-ui'
export default {
    data(){
        return {
            lunbo: [

                'http://www.itcast.cn/images/slidead/BEIJING/2017440109442800.jpg',

                'http://www.itcast.cn/images/slidead/BEIJING/2017511009514700.jpg',

                'http://www.itcast.cn/images/slidead/BEIJING/2017421414422600.jpg'

            ]
        };
    }
    // created(){
    //     this.getLunbotu
    // },
    // methods:{
    //     getLunbotu(){
    //         this.$http.get('http://vue.studyit.io/api/getlunbo').then(result => {
    //             // console.log(result.body);
    //             if(result.body.status === 0){
    //                 Toast("图片加载成功")
    //                 this.lunbotuList = result.body.message
    //             }else {
    //                 Toast("图片加载失败")
    //             }
    //         })
    //     }
    // }
}
</script>
<style lang="less" scoped>
    .mint-swipe{
        height: 200px;
        .mint-swipe-item{
            &:nth-child(1){
                background: red;
            }
            &:nth-child(2){
                background: blue;
            }
            &:nth-child(3){
                background: pink;
            }
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
    .mui-grid-view.mui-grid-9{
        background: #fff;
        border: none;
        img{
            width: 60px;
            height: 60px;
        }
        .mui-media-body{
            font-size: 12px;
        }
    }
    .mui-grid-view.mui-grid-9 .mui-media{
        border: none;
    }
</style>

