<template>
  <div>
    <el-card v-show="item.forumSections" shadow="always" class="box-card" v-for="(item, id) in categoryList" :key="id">
      <div slot="header" class="clearfix">
        <span style="color: #2568cd; font-weight: bolder">{{ item.categoryName }}</span>
      </div>
      <el-row>
        <el-col :span="8" v-for="(i, id) in item.forumSections">
          <div >{{ i.sectionName }}</div>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>

import {getForumCategoryApi} from '@/common/home.js'

export default {
  name: "homeIndex",
  data() {
    return {
      loginForm: false,
      //分区列表
      categoryList: [],
    };
  },

  created() {
    this.getForumCategory();
  },

  methods: {
    getForumCategory() {
      // 执行查询
      getForumCategoryApi().then((res) => {
        this.categoryList = res;
        // eslint-disable-next-line no-unused-vars
      }).catch(err => {

      })
    },
  }
}
</script>
