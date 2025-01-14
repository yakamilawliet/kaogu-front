<script setup>

import {ref} from "vue";
import router from "@/router/index.js";
import {ArrowDown} from "@element-plus/icons-vue";

const getUrl = (name) => {
  return new URL(`../assets/image/${name}`, import.meta.url).href
}

const imgs = ref([
  getUrl('img.png'),
  getUrl('img2.jpg'),
  getUrl('img3.jpg'),
])

const data = ref([
    getUrl('test1.jpg'),
    getUrl('test2.jpg'),
    getUrl('test3.jpg'),
    getUrl('test4.jpg'),
    getUrl('test5.jpg'),
    getUrl('test6.jpg'),
    getUrl('test7.jpg'),
])



const test = ref(
    getUrl('img.png')
)

const pageNum = ref(1)
const pageSize = ref(5)




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

    <div style="display: flex; margin-top: 10px; padding-bottom: 100px; width: 100%; background-color: #fdfcfb;">
        <div style="width: 100%">
          <div style="margin-top: 10px; width: 100%; height: 40px;">
              <el-button style="margin-left: 70px" round>全部</el-button>
              <el-button round>展厅</el-button>
              <el-button round>展柜</el-button>
              <el-button round>展示物</el-button>
              <el-dropdown>
                <el-button style="margin-left: 1100px">
                  分类<el-icon class="el-icon--right"><arrow-down /></el-icon>
                </el-button>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item>Action 1</el-dropdown-item>
                    <el-dropdown-item>Action 2</el-dropdown-item>
                    <el-dropdown-item>Action 3</el-dropdown-item>
                    <el-dropdown-item>Action 4</el-dropdown-item>
                    <el-dropdown-item>Action 5</el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>

              <el-dropdown>
                <el-button style="margin-left: 20px">
                  年代<el-icon class="el-icon--right"><arrow-down /></el-icon>
                </el-button>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item>Action 1</el-dropdown-item>
                    <el-dropdown-item>Action 2</el-dropdown-item>
                    <el-dropdown-item>Action 3</el-dropdown-item>
                    <el-dropdown-item>Action 4</el-dropdown-item>
                    <el-dropdown-item>Action 5</el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
          </div>

          <div>
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

          <div style="margin-left: 70px; margin-top: 30px; ">
            <el-pagination
                background
                layout="total, prev, pager, next"
                v-model:current-page="pageNum"
                v-model:page-size="pageSize"
                :total="100" />
          </div>

        </div>

    </div>


  </div>


</template>

<style scoped>


</style>