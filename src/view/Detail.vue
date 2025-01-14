<script setup>

import router from "@/router/index.js";
import {ref} from "vue";
import {CloseBold, Share, WarningFilled} from "@element-plus/icons-vue";
const getUrl = (name) => {
  return new URL(`../assets/image/${name}`, import.meta.url).href
}

const test = ref(
    getUrl('img.png')
)

const back = ref(
    getUrl('back.svg')
)

const value = ref('模型简介')

const options = [
  '模型简介',
  '使用效果图',
]

const cancel = () => {

}

console.log(value.value)

</script>


<template>
    <div style="display: flex; width: 100%; background-color: #fdfcfb">
        <div style="margin-top: 20px; width: 50%; margin-left: 100px" class="block">
          <el-image style="border-radius: 20px; width: 1000px; height: 500px" :src="test"/>
        </div>

        <div style="margin-top: 20px; width: 30%; margin-left: 200px">
          <div style="display: flex">
            <span style="font-size: 20px">演示图片</span>
            <el-icon style="margin-top: 2px; margin-left: 150px"><WarningFilled /></el-icon>
            <span>举报</span>
            <el-icon style="margin-top: 2px; margin-left: 20px"><Share /></el-icon>
            <span>分享</span>
            <img style="margin-left: 120px; width: 30px; height: 30px" :src="back" alt="" @click="router.push('/database')">
          </div>

          <div style="border-radius: 20px; display: flex; width: 500px; height: 300px; margin-top: 60px;">
            <el-descriptions
                title="文物信息"
                :column="1"
                :size="'large'"
                width="150px"
                font-size="30px"
                border
            >
              <el-descriptions-item label="文物号" font-size="30px">xxxxxxxx</el-descriptions-item>
              <el-descriptions-item label="分类">xxxxxxxx</el-descriptions-item>
              <el-descriptions-item label="年代">xxxxxxxx</el-descriptions-item>
              <el-descriptions-item label="模型标签">
                <el-tag size="large">模型标签</el-tag>
                <el-tag size="large">模型标签</el-tag>
                <el-tag size="large">模型标签</el-tag>
                <el-tag size="large">模型标签</el-tag>
              </el-descriptions-item>
            </el-descriptions>
          </div>

          <div style="margin-top: 20px;">
            <el-button style="width: 120px; height: 40px" type="primary" plain>
              <span style="font-size: 20px">使用模型</span>
            </el-button>
          </div>
      </div>
    </div>



    <div style="width: 100%; height: 600px; margin: 20px 0; background-color: #fdfcfb">
        <div style="width: 40%; margin: auto">
          <el-segmented v-model="value" :options="options" block />
        </div>

        <div v-if="value === '模型简介'" style="width: 1000px; height: 500px;
        background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%); border-radius: 20px; margin: auto" >
              <span>
              </span>
        </div>

        <div v-else-if="value === '使用效果图'" style="width: 1000px; height: 500px; margin: auto">
          <el-image style="width: 1000px; height: 500px; border-radius: 20px;" :src="test"/>
        </div>

    </div>



</template>


<style scoped>

</style>