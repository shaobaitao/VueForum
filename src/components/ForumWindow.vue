<template>
  <v-list flat>
    <v-list-item-group
        v-model="selectedItem"
        color="primary"
    >
      <v-list-item
          v-for="(item, i) in listItemInfo"
          :key="i"
          two-line
      >
        <v-list-item-content>
          <v-list-item-title v-text="item.title"></v-list-item-title>
          <v-list-item-subtitle>
            <div class="listSecondLine">
                <div class="listLineUser">
                  <el-avatar :size="24" slot="reference"></el-avatar>
                  <a style="margin-left: 5px; color: #757575">{{item.username}}</a>
                </div>
                <div class="listLineContent">
                  {{item.content}}
                </div>
                <div class="listLineOperation">
                  <el-link style="font-size: 16px" :underline="false" icon="iconfont el-icon-dianzan">{{ item.likes }}</el-link>
                  <el-link style="font-size: 16px" :underline="false" icon="iconfont el-icon-mimakejian">{{ item.views }}</el-link>
                  <el-link style="font-size: 16px" :underline="false" icon="iconfont el-icon-pinglun">{{ item.comments }}</el-link>

                </div>
            </div>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script>
export default {
name: "ForumWindow",
  data(){
    return{
      selectedItem: 1,
      items: [
        { text: '算法案例1.特殊回文数问题描述：左边往右边看，右边往左算法案例1.特殊回文数问题描述：左边往右边看，右边往左', icon: 'mdi-clock' },
        { text: 'Audience', icon: 'mdi-account' },
        { text: 'Conversions', icon: 'mdi-flag' },
        { text: 'Conversions', icon: 'mdi-flag' },
        { text: 'Conversions', icon: 'mdi-flag' },
      ],
      listItemInfo:[
        {
          title:'蓝桥杯之Python算法设计系列（二）',
          username:'王小王-123',
          content:'基础算法案例1.特殊回文数问题描述：左边往右边看，右边往左边看，都是同一个数叫做回文数，比如19291就是一个回文数，那么我们输入一个两位及以上的数字，返回回文数，案例如下：def is_pal(i_):    i_s = str(i_)    if i_s == i_s[::-1]:        return True    else:        return Falsen=int(input("输入大于10的数："))i = 10while i ',
          likes:666,
          views:888,
          comments:999,
        },
        {
          title:'蓝桥杯之Python算法设计系列（二）',
          username:'王小王-123',
          content:'基础算法案例1.特殊回文数问题描述：左边往右边看，右边往左边看，都是同一个数叫做回文数，比如19291就是一个回文数，那么我们输入一个两位及以上的数字，返回回文数，案例如下：def is_pal(i_):    i_s = str(i_)    if i_s == i_s[::-1]:        return True    else:        return Falsen=int(input("输入大于10的数："))i = 10while i ',
          likes:666,
          views:888,
          comments:999,
        },
        {
          title:'蓝桥杯之Python算法设计系列（二）',
          username:'王小王-123',
          content:'基础算法案例1.特殊回文数问题描述：左边往右边看，右边往左边看，都是同一个数叫做回文数，比如19291就是一个回文数，那么我们输入一个两位及以上的数字，返回回文数，案例如下：def is_pal(i_):    i_s = str(i_)    if i_s == i_s[::-1]:        return True    else:        return Falsen=int(input("输入大于10的数："))i = 10while i ',
          likes:666,
          views:888,
          comments:999,
        },{
          title:'蓝桥杯之Python算法设计系列（二）',
          username:'王小王-123',
          content:'基础算法案例1.特殊回文数问题描述：左边往右边看，右边往左边看，都是同一个数叫做回文数，比如19291就是一个回文数，那么我们输入一个两位及以上的数字，返回回文数，案例如下：def is_pal(i_):    i_s = str(i_)    if i_s == i_s[::-1]:        return True    else:        return Falsen=int(input("输入大于10的数："))i = 10while i ',
          likes:666,
          views:888,
          comments:999,
        },
        {
          title:'蓝桥杯之Python算法设计系列（二）',
          username:'王小王-123',
          content:'基础算法案例1.特殊回文数问题描述：左边往右边看，右边往左边看，都是同一个数叫做回文数，比如19291就是一个回文数，那么我们输入一个两位及以上的数字，返回回文数，案例如下：def is_pal(i_):    i_s = str(i_)    if i_s == i_s[::-1]:        return True    else:        return Falsen=int(input("输入大于10的数："))i = 10while i ',
          likes:666,
          views:888,
          comments:999,
        },

      ]
    }
  }
}
</script>

<style scoped>
.v-list-item__content > *:not(:last-child){
  font-size: 24px;
  font-weight: 700;
  color: #3d3d3d;
  margin-bottom: 10px;
}
.listSecondLine{
  display: flex;
  justify-items: center;
  align-items: center
}

.listLineUser{
  width: 100px;
  display: flex;
  justify-items: center;
  align-items: center;
  float: left;
}
.listLineContent{
  float: left;
  margin-left: 30px;
  margin-right: 30px;
  width: 400px;
  overflow: hidden;
  white-space:nowrap;
  text-overflow: ellipsis;
}
.listLineOperation{
  display: flex;
  justify-content: space-around;
  float: right;
  width: 160px;

}


</style>