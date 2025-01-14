<script setup>
import {ref} from "vue";
import router from "@/router/index.js";
import {ArrowDown} from "@element-plus/icons-vue";
const getUrl = (name) => {
  return 'http://localhost:5173/src/assets/' + name;
}

const avatar = ref(
  getUrl('avatar2.png')
)


console.log(avatar.value)

</script>

<template>
  <div>
    <!-- 头部 -->
    <div style="display:flex; height: 60px; background-color: white; line-height: 60px; border-bottom: 1px solid #ddd">
      <div style="width: 250px; display: flex">
        <div style="width: 130px;">
          <img src="../assets/image/logo.png" alt="" style="width: 130px; height: 60px; display: inline">
        </div>
        <div style="width: 400px; flex: 1"><b class="valueStyle">重庆考古</b></div>
        <!--        color: palevioletred;-->
      </div> <!-- logo -->



      <div style="flex: 1; padding-left: 10px">
        <el-menu
            style="border: none"
            :default-active="$route.path"
            class="el-menu-demo"
            mode="horizontal"
            router
        >
          <el-menu-item index="/home">首页</el-menu-item>
          <el-menu-item index="/database">数字文物库</el-menu-item>
          <el-menu-item index="/forum">论坛</el-menu-item>
        </el-menu>
      </div> <!-- 菜单区域 -->

      <div style="text-align: right; margin-right: 20px">
        <el-input v-model="input" style="width: 240px" placeholder="搜索模型" />
      </div>


      <div style="width: 100px; text-align: right; margin-top: 15px">
        <el-dropdown>
          <el-button type="info">
            language<el-icon class="el-icon--right"><arrow-down /></el-icon>
          </el-button>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>中文</el-dropdown-item>
              <el-dropdown-item>英文</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div> <!-- 切换语言 -->



      <div style="width: 100px; text-align: right; padding-right: 10px">

        <el-dropdown>

          <div class="el-dropdown-link" style="line-height: 60px">
            <el-avatar :size="40" :src="avatar" style="position: relative; top: 10px; right: 5px" />
          </div>

          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>
                <div>退出登录</div>
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>

        </el-dropdown>
      </div> <!-- 头像和下拉菜单 -->

    </div>

    <!--  主体 -->
    <!--    style="margin: 10px auto 0 auto; width: 60%;"-->
    <div style="margin: 10px auto 20% auto; width: 100%;">
      <router-view />  <!--  加载子路由的视图 -->
    </div>

  </div>
</template>

<style scoped>
.valueStyle{
  width: 100px;
  font-weight: 600;
  font-size: 30px;
  margin-bottom: 0;
  background-image: linear-gradient(to right, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}
</style>