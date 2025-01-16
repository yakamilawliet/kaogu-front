<script setup>

import router from "@/router/index.js";
import {reactive, ref} from "vue";
import {CloseBold, Share, WarningFilled} from "@element-plus/icons-vue";
import request from "@/util/request.js";
import {vue3dLoader} from "vue-3d-loader";
const getUrl = (name) => {
  return new URL(`../assets/image/${name}`, import.meta.url).href
}

const test = ref(
    getUrl('img.png')
)

const back = ref(
    getUrl('back.svg')
)

const value = ref('使用效果图')

const options = [
  '模型简介',
  '使用效果图',
]

const id = router.currentRoute.value.query.id

const type = router.currentRoute.value.query.type

const form = reactive({
  artifactId: id,
  associationType: type
})
const state = reactive({
    detail: {}
})

const load = () => {
  request.post('/api/association/detail', form
  ).then(res => {
    state.detail = res.data
  })

}

console.log(state.detail)

load()

</script>


<template>
    <div style="display: flex; width: 100%; background-color: #fdfcfb">
        <div style="margin-top: 30px; width: 50%; margin-left: 100px; " class="block" >
          <el-form-item label="" prop="showroomUrl">
            <vue3dLoader
                style="width: 850px; height: 600px"
                :filePath="state.detail.associationUrl"
                :backgroundColor="'#000'"
                :backgroundAlpha="0.2"
                :ambientLightIntensity="1.0"
                :directionalLightIntensity="1.0"
                outputEncoding="sRGB"
                :enableDamping="true"
                :dampingFactor="0.05"
            />
          </el-form-item>
        </div>

        <div style="margin-top: 20px; width: 30%; margin-left: 100px">
          <div style="display: flex">
            <span style="font-size: 30px">{{ state.detail.associationName }}</span>
            <el-icon style="margin-top: 10px; margin-left: 150px"><WarningFilled /></el-icon>
            <span style="margin-top: 7px">举报</span>
            <el-icon style="margin-top: 10px; margin-left: 20px"><Share /></el-icon>
            <span style="margin-top: 7px">分享</span>
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
              <el-descriptions-item label="文物号" font-size="30px">{{ state.detail.associationNo }}</el-descriptions-item>
              <el-descriptions-item label="分类">{{ state.detail.artifactTypeName }}</el-descriptions-item>
              <el-descriptions-item label="年代">{{ state.detail.artifactAgeName }}</el-descriptions-item>
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



    <div style="width: 100%; height: 600px; margin: 20px 0; padding-bottom: 800px; background-color: #fdfcfb">
        <div style="width: 40%; margin: auto">
          <el-segmented v-model="value" :options="options" block />
        </div>

        <div v-if="value === '模型简介'" style="width: 1000px; height: 500px;
        background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%); border-radius: 20px; margin: auto" >
              <span>
              </span>
        </div>

        <div v-else-if="value === '使用效果图'" style="width: 1000px; height: 600px; margin: auto">
          <el-image style="width: 1000px; height: 700px; border-radius: 20px;" :src="state.detail.associationPic"/>
        </div>

    </div>



</template>


<style scoped>

</style>