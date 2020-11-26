<template>
  <div class="wrapper">
    <a href="javascript:void(0)" class="hover-img" @click="show()">512353510</a>(点击展开)
    <div>
      <img v-if="isShow" src="~@static/qq.jpg" />
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        isShow: false
      }
    },
    methods: {
      show () {
        this.isShow = !this.isShow
      },
    }
  }
</script>

<style lang="scss" scoped>
.wrapper {
  display: inline;
}
</style>