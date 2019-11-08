<template>
  <div class="head">{{title}}
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        required: false,
        default: '来画大世界'
      }
    }
  }
</script>

<style>
  .head {
    height: 45px;
    text-align: center;
    line-height: 55px;
    background: linear-gradient(to right, rgb(0, 65, 106), rgb(228, 229, 230));
    font-size: 0.34rem;
    padding: 10px;
    color: #ffffff;
  }
</style>
