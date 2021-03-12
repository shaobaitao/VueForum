<template>
  <div class="userInfo">
    <Navigation></Navigation>
    <p>{{ test }}</p>
    <div class="userInfoMain">
      <el-card shadow="always">
        <el-form ref="form" v-if="editInfo.isOwner" :model="editInfo" label-position="left" label-width="80px">
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
              <el-date-picker type="date" placeholder="选择生日" v-model="editInfo.birthday"
                              style="width: 100%;"></el-date-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="邮箱">
            <el-input v-model="editInfo.email" style="width: 300px;"></el-input>
          </el-form-item>
          <el-form-item label="所在地">
            <el-input v-model="editInfo.location" style="width: 300px;"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="onSubmit">保存</el-button>
          </el-form-item>
        </el-form>
        <el-form ref="form" v-else :model="editInfo" label-position="left" label-width="80px">
          <el-form-item label="头像" style="height: 200px">
            <v-avatar size="136" style="margin-left: 100px">
              <img
                  :src="editInfo.headPortrait"
                  alt="John"
              >
            </v-avatar>
          </el-form-item>
          <el-form-item label="昵称">
            <el-link :underline="false" type="info">{{editInfo.nickname}}</el-link>
          </el-form-item>
          <el-form-item label="简介">
            <el-link :underline="false" type="info">{{editInfo.introduction}}</el-link>
          </el-form-item>
          <el-form-item label="性别">
            <el-link :underline="false" type="info">{{editInfo.gender}}</el-link>
          </el-form-item>
          <el-form-item label="生日">
            <el-link :underline="false" type="info">{{editInfo.birthday}}</el-link>
          </el-form-item>
          <el-form-item label="邮箱">
            <el-link :underline="false" type="info">{{editInfo.email}}</el-link>
          </el-form-item>
          <el-form-item label="所在地">
            <el-link :underline="false" type="info">{{editInfo.location}}</el-link>
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
import api from '../request/api'

export default {
  name: "userInfo",
  components: {
    Navigation,
    forumFooter
  },
  data() {
    return {
      info: {
        nickname: '',
        gender: '',
        birthday: '',
        email: '',
        headPortrait: '',
        location: '',
        introduction: ''
      },
      editInfo: {
        userID: 0,
        isOwner: false,
        nickname: '',
        gender: '',
        birthday: '',
        email: '',
        headPortrait: '',
        location: '',
        introduction: ''
      },
      test: ''
    }
  },
  methods: {
    onSubmit() {
      api.editUserInfo({
        editInfo:this.editInfo
      })
      .then(res => {
        if(res.data['code']===200){
          this.$message.success(res.data['msg'])

        }else{
          this.$message.error(res.data['msg'])
        }
      })

    },
    getUserInfo() {
      api.getUserInfo({
        userID: this.$route.params.id
      })
          .then(res => {
            // console.log(res)
            // console.log(this.editInfo)
            this.editInfo = res.data
          })

    }
  },
  mounted() {
    this.test = this.$route.params.id
    this.getUserInfo()
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