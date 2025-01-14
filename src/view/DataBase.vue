<script setup>

import {ref} from "vue";
import router from "@/router/index.js";

const getUrl = (name) => {
  return new URL(`../assets/image/${name}`, import.meta.url).href
}

const imgs = ref([
  getUrl('img.png'),
  getUrl('img2.jpg'),
  getUrl('img3.jpg'),
])

const test = ref(
    getUrl('img.png')
)


</script>

<template>
  <div>
    <div style="display: flex">
      <div style="width: 100%">
        <el-carousel :interval="2000" arrow="always" height="400px">
          <el-carousel-item v-for="item in imgs" :key="item">
            <img :src="item" alt="" style="width: 100%">
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>

    <div style="display: flex; margin: 10px 0; width: 100%; background-color: #fdfcfb;">
        <div style="width: 100%">
          <div style="margin-left: 70px; margin-top: 10px; width: 100%; height: 40px;">
              <el-button round>全部</el-button>
              <el-button round>石宝寨</el-button>
              <el-button round>陶瓷</el-button>
              <el-button round>青铜器</el-button>
              <el-button style="margin-left: 1000px" round>器物年代</el-button>
              <el-button round>发现地址</el-button>
              <el-button round>器物类型</el-button>
          </div>


          <div style="margin-top: 20px; margin-left: 70px " class="block">
            <el-image style="width: 200px; height: 200px" :src="test" @click="router.push('/detail')"/>
            <el-image style="margin-left: 30px; width: 200px; height: 200px" :src="test" @click="router.push('/detail')"/>
            <el-image style="margin-left: 30px; width: 200px; height: 200px" :src="test" @click="router.push('/detail')"/>
            <el-image style="margin-left: 30px; width: 200px; height: 200px" :src="test" @click="router.push('/detail')"/>
            <el-image style="margin-left: 30px; width: 200px; height: 200px" :src="test" @click="router.push('/detail')"/>
            <el-image style="margin-left: 30px; width: 200px; height: 200px" :src="test" @click="router.push('/detail')"/>
            <el-image style="margin-left: 30px; width: 200px; height: 200px" :src="test" @click="router.push('/detail')"/>
          </div>
          <div>
            <span style="margin-left: 70px">演示图片</span>
            <span style="margin-left: 170px">演示图片</span>
            <span style="margin-left: 170px">演示图片</span>
            <span style="margin-left: 170px">演示图片</span>
            <span style="margin-left: 170px">演示图片</span>
            <span style="margin-left: 170px">演示图片</span>
            <span style="margin-left: 170px">演示图片</span>
          </div>
          <div style="margin-top: 20px; margin-left: 70px " class="block">
            <el-image style="width: 200px; height: 200px" :src="test" @click="router.push('/detail')"/>
            <el-image style="margin-left: 30px; width: 200px; height: 200px" :src="test" @click="router.push('/detail')"/>
            <el-image style="margin-left: 30px; width: 200px; height: 200px" :src="test" @click="router.push('/detail')"/>
            <el-image style="margin-left: 30px; width: 200px; height: 200px" :src="test" @click="router.push('/detail')"/>
            <el-image style="margin-left: 30px; width: 200px; height: 200px" :src="test" @click="router.push('/detail')"/>
            <el-image style="margin-left: 30px; width: 200px; height: 200px" :src="test" @click="router.push('/detail')"/>
            <el-image style="margin-left: 30px; width: 200px; height: 200px" :src="test" @click="router.push('/detail')"/>
          </div>
          <div>
            <span style="margin-left: 70px">演示图片</span>
            <span style="margin-left: 170px">演示图片</span>
            <span style="margin-left: 170px">演示图片</span>
            <span style="margin-left: 170px">演示图片</span>
            <span style="margin-left: 170px">演示图片</span>
            <span style="margin-left: 170px">演示图片</span>
            <span style="margin-left: 170px">演示图片</span>
          </div>
          <div style="margin-top: 20px; margin-left: 70px " class="block">
            <el-image style="width: 200px; height: 200px" :src="test" @click="router.push('/detail')"/>
            <el-image style="margin-left: 30px; width: 200px; height: 200px" :src="test" @click="router.push('/detail')"/>
            <el-image style="margin-left: 30px; width: 200px; height: 200px" :src="test" @click="router.push('/detail')"/>
            <el-image style="margin-left: 30px; width: 200px; height: 200px" :src="test" @click="router.push('/detail')"/>
            <el-image style="margin-left: 30px; width: 200px; height: 200px" :src="test" @click="router.push('/detail')"/>
            <el-image style="margin-left: 30px; width: 200px; height: 200px" :src="test" @click="router.push('/detail')"/>
            <el-image style="margin-left: 30px; width: 200px; height: 200px" :src="test" @click="router.push('/detail')"/>
          </div>
          <div>
            <span style="margin-left: 70px">演示图片</span>
            <span style="margin-left: 170px">演示图片</span>
            <span style="margin-left: 170px">演示图片</span>
            <span style="margin-left: 170px">演示图片</span>
            <span style="margin-left: 170px">演示图片</span>
            <span style="margin-left: 170px">演示图片</span>
            <span style="margin-left: 170px">演示图片</span>
          </div>
        </div>
    </div>


  </div>


</template>

<style scoped>


</style>