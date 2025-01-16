<script setup>

import {reactive, ref} from "vue";
import router from "@/router/index.js";
import {ArrowDown} from "@element-plus/icons-vue";
import request from "@/util/request.js";

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


const state = reactive({
    age: [],
    type: [],
    list: []
})

const form = reactive({
  artifactAgeId: "",
  artifactTypeId: "",
  associationType: "3",
  associationTitle: ""
})


const test = ref(
    getUrl('img.png')
)

const pageNum = ref(1)
const pageSize = ref(5)

const load = () => {
  request.get('/api/association/artifactType/list').then(res => {
    state.type = res.data
  })

  request.get('/api/association/artifactAge/list').then(res => {
    state.age = res.data
  })


  request.post('/api/association/associationList', form
  ).then(res => {
    state.list = res.data
  })

}

const loadShowRoom = () => {
  form.associationType = '1'
  request.post('/api/association/associationList', form
  ).then(res => {
    state.list = res.data
  })
}

const loadShowBox = () => {
  form.associationType = '2'
  request.post('/api/association/associationList', form
  ).then(res => {
    state.list = res.data
  })
}

const loadShowItem = () => {
  form.associationType = '3'
  request.post('/api/association/associationList', form
  ).then(res => {
    state.list = res.data
  })
}

const loadType = (id) => {
  form.artifactTypeId = id
  request.post('/api/association/associationList', form
  ).then(res => {
    state.list = res.data
  })
}

const loadAge = (id) => {
  form.artifactAgeId = id
  request.post('/api/association/associationList', form
  ).then(res => {
    state.list = res.data
  })
}

load()  // 调用 load方法拿到后台数据


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

    <div style="display: flex; margin-top: 10px; padding-bottom: 50px; width: 100%; background-color: #fdfcfb;">
        <div style="width: 100%">
          <div style="margin-top: 10px; width: 100%; height: 40px;">
              <el-button style="margin-left: 70px" @click="loadShowRoom" round>展厅</el-button>
              <el-button style="" @click="loadShowBox" round>展柜</el-button>
              <el-button @click="loadShowItem" round>展示物</el-button>
              <el-dropdown>
                <el-button style="margin-left: 1100px">
                  分类<el-icon class="el-icon--right"><arrow-down /></el-icon>
                </el-button>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item v-for="item in state.type" @click="loadType(item.artifactTypeId)">{{ item.artifactTypeName }}</el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>

              <el-dropdown>
                <el-button style="margin-left: 20px">
                  年代<el-icon class="el-icon--right"><arrow-down /></el-icon>
                </el-button>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item v-for="item in state.age" @click="loadAge(item.artifactAgeId)">{{ item.artifactAgeName }}</el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
          </div>

          <div style="margin-top: 20px">
            <ul style="" v-for="item in state.list">
              <li @click="router.push('/detail?id=' + item.associationId + '&type=' + item.associationType)" class="item">
                <el-image style="width: 200px; height: 200px;border-top-left-radius: 20px;
                          border-top-right-radius: 20px;" :src="item.associationPic"/>
                <div ><span>{{ item.associationNo }}</span></div>
                <div ><span>{{ item.associationName }}</span></div>
              </li>
            </ul>
          </div>



        </div>

    </div>

    <div style="margin-left: 70px; margin-top: 30px">
      <el-pagination
          background
          layout="total, prev, pager, next"
          v-model:current-page="pageNum"
          v-model:page-size="pageSize"
          :total="100" />
    </div>


  </div>


</template>

<style scoped>
.item {
  float: left;
  width: 200px;
  height: 266px;
  margin-left: 30px;
  text-align: center;
  background: #fff;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}

</style>