<template>
  <div>
    <headDIV></headDIV>
    <div class="blank">轮播组件</div>
    <swiper class="swiper" circular="true" indicator-dots="true" indicator-color="#f4f4f4" indicator-active-color="#4eb8b8"  autoplay="true" interval="2000" duration="1000">
      <block v-for="(item, index) in movies" :index="index" :key="key">
        <swiper-item>
          <image :src="item.url" class="slide-image" mode="aspectFill" style="width: 100%;height: 100%" />
        </swiper-item>
      </block>
    </swiper>
  </div>
</template>

<script>
import headDIV from '@/components/head'
export default {
  components: {
    headDIV
  },
  data () {
    return {
      movies:
        [
          {url: 'http://02.imgmini.eastday.com/mobile/20180719/20180719162427_3523185685b1ed12925e03c136b115c1_19.jpeg'},
          {url: 'http://img5.imgtn.bdimg.com/it/u=828299185,2658218140&fm=26&gp=0.jpg'},
          {url: 'http://i0.hdslb.com/bfs/archive/b07d29f5a09e7199b75ae4e3ae2ac876b5deb99d.jpg'},
          {url: 'http://img1.imgtn.bdimg.com/it/u=399768855,1646803756&fm=26&gp=0.jpg'},
          {url: 'http://hbimg.b0.upaiyun.com/bd3dcf22be7a88c5a1a1917b0a01224c654c2bc772358-oq2gUZ_fw658'}
        ]
    }
  },
  created () {
  }
}
</script>

<style>
  page {
    background-color: #f5f5f5;
  }
  .swiper{height: 350rpx; }
  .blank{
    font-size: 12px;
    background: #fff;
    height: 90rpx;
    line-height: 90rpx;
    padding-left: 15px;
  }
</style>
