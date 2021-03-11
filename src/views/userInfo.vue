<template>
  <div class="userInfo">
    <Navigation></Navigation>
    <p>{{test}}</p>
    <div class="userInfoMain">
      <el-card shadow="always">
        <el-form  ref="form" :model="editInfo" label-position="left" label-width="80px">
          <el-form-item label="头像" style="height: 200px">
            <v-avatar size="136" style="margin-left: 100px">
              <img
                  :src="editInfo.headPortrait"
                  alt="John"
              >
            </v-avatar>
          </el-form-item>
          <el-form-item label="昵称">
            <el-input v-model="editInfo.nickname" style="width: 200px;"></el-input>
          </el-form-item>
          <el-form-item label="简介">
            <el-input type="textarea" v-model="editInfo.introduction"></el-input>
          </el-form-item>
          <el-form-item label="性别">
            <el-select v-model="editInfo.gender" placeholder="请选择性别">
              <el-option label="男" value="男"></el-option>
              <el-option label="女" value="女"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="生日">
            <el-col :span="11">
              <el-date-picker type="date" placeholder="选择生日" v-model="editInfo.birthday" style="width: 100%;"></el-date-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="邮箱">
            <el-input v-model="editInfo.email" style="width: 300px;"></el-input>
          </el-form-item>
          <el-form-item label="所在地">
            <el-input v-model="editInfo.location" style="width: 300px;"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
    <forumFooter></forumFooter>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation";
import forumFooter from "@/components/forumFooter";

export default {
  name: "userInfo",
  components: {
    Navigation,
    forumFooter
  },
  data() {
    return {
      info: {
        nickname:'',
        gender:'',
        birthday:'',
        email:'',
        headPortrait:'',
        location:'',
        introduction:''
      },
      editInfo: {
        nickname:'shaobaitao',
        gender:'男',
        birthday:'2000-11-01',
        email:'noob@shaobaitao.cn',
        headPortrait:'https://tvax4.sinaimg.cn/crop.0.0.996.996.180/005tKgYGly8gfaax1g0bfj30ro0rotad.jpg?KID=imgbed,tva&Expires=1615473809&ssig=CjnpaAPm2V',
        location:'江西南昌',
        introduction:'哈哈哈哈'
      },
      test:''
    }
  },
  methods:{
    onSubmit() {
      console.log(this.form);
    }
  },
  mounted() {
    this.test=this.$route.params.id
  }

}
</script>

<style scoped>
.userInfoMain {
  height: 100vh;
  width: 50vw;
  margin: 30px auto;
  min-width: 750px;
}

.el-card {
  padding: 100px;
  border-radius: 30px;
  width: 100%;
  height: 100%;
}

</style>