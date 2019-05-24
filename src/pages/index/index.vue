<template>
  <div @click="clickHandle">

    <div class="userinfo" @click="bindViewTap">
<!--      <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />-->
      <img class="userinfo-avatar" src="/static/images/user.png" background-size="cover" />
<!--        <i-button type="success">这是一个按钮</i-button>-->
      <div class="userinfo-nickname">
        <card :text="userInfo.nickName"></card>
      </div>
    </div>

    <div class="content">
      <i-grid>
        <i-grid-item>
          <i-grid-icon>
            <image src="/static/images/user.png" />
          </i-grid-icon>
          <i-grid-label>Grid</i-grid-label>
        </i-grid-item>
        <i-grid-item>
          <i-grid-icon>
            <image src="/static/images/user.png" />
          </i-grid-icon>
          <i-grid-label>Grid</i-grid-label>
        </i-grid-item>
        <i-grid-item>
          <i-grid-icon>
            <image src="/static/images/user.png" />
          </i-grid-icon>
          <i-grid-label>Grid</i-grid-label>
        </i-grid-item>
      </i-grid>
      <i-grid>
        <i-grid-item>
          <i-grid-icon>
            <image src="/static/images/user.png" />
          </i-grid-icon>
          <i-grid-label>Grid</i-grid-label>
        </i-grid-item>
        <i-grid-item>
          <i-grid-icon>
            <image src="/static/images/user.png" />
          </i-grid-icon>
          <i-grid-label>Grid</i-grid-label>
        </i-grid-item>
        <i-grid-item>
          <i-grid-icon>
            <image src="/static/images/user.png" />
          </i-grid-icon>
          <i-grid-label>Grid</i-grid-label>
        </i-grid-item>
      </i-grid>
      <i-grid>
        <i-grid-item>
          <i-grid-icon>
            <image src="/static/images/user.png" />
          </i-grid-icon>
          <i-grid-label>Grid</i-grid-label>
        </i-grid-item>
        <i-grid-item>
          <i-grid-icon>
            <image src="/static/images/user.png" />
          </i-grid-icon>
          <i-grid-label>Grid</i-grid-label>
        </i-grid-item>
        <i-grid-item>
          <i-grid-icon>
            <image src="/static/images/user.png" />
          </i-grid-icon>
          <i-grid-label>Grid</i-grid-label>
        </i-grid-item>
      </i-grid>
    </div>
    <a href="/pages/counter/main" class="counter">去往Vuex示例页面</a>
  </div>
</template>

<script>
import card from '@/components/card'

export default {
  data () {
    return {
      motto: 'Hello miniprograme',
      userInfo: {
        nickName: '深海',
        avatarUrl: 'http://mpvue.com/assets/logo.png'
      }
    }
  },

  components: {
    card
  },

  methods: {
    bindViewTap () {
      const url = '../logs/main'
      if (mpvuePlatform === 'wx') {
        mpvue.switchTab({ url })
      } else {
        mpvue.navigateTo({ url })
      }
    },
    clickHandle (ev) {
      console.log('clickHandle:', ev)
      // throw {message: 'custom test'}
    }
  },

  created () {
    // let app = getApp()
  }
}
</script>

<style scoped>
.userinfo {
  padding-top: 60rpx;
  padding-bottom: 40rpx;
  background-image: url("https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3392076880,347301516&fm=11&gp=0.jpg");
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 10rpx 10rpx 0rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}
.all{
  width:7.5rem;
  height:1rem;
  background-color:blue;
}
.all:after{
  display:block;
  content:'';
  clear:both;
}
.left{
  float:left;
  width:3rem;
  height:1rem;
  background-color:red;
}

.right{
  float:left;
  width:4.5rem;
  height:1rem;
  background-color:green;
}
</style>
