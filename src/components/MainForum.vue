<template>
  <div class="mainForum">
    <el-row>
      <el-col :span="16">

        <div class="forumItem" style="height: 250px">
          <el-carousel :interval="4000" type="card" height="220px">
            <el-carousel-item v-for="item in 6" :key="item">
              <h3 class="medium">{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
        </div>

        <div class="forumItem" >
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>热门帖子</span>
              <el-button style="float: right; padding: 3px 0" type="text" @click="toPost">查看全部</el-button>
            </div>
            <ForumWindow  :data="listItemInfo"></ForumWindow>
          </el-card>
        </div>

        <div class="forumItem" >
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>最新帖子</span>
              <el-button style="float: right; padding: 3px 0" type="text">查看全部</el-button>
            </div>
            <ForumWindow :data="listItemInfo"></ForumWindow>
          </el-card>
        </div>
      </el-col>

      <el-col :span="8">
        <div class="forumItem" style="height: 200px">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>卡片名称</span>
              <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
            </div>
          </el-card>
        </div>
        <div class="forumItem" style="height: 300px">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>卡片名称</span>
              <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
            </div>
          </el-card>
        </div>
        <div class="forumItem" style="height: 400px">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>卡片名称</span>
              <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
            </div>
          </el-card>
        </div>
      </el-col>

    </el-row>

  </div>

</template>

<script>
import ForumWindow from "@/components/ForumWindow";
export default {
  name: "MainForum",
  data(){
    return{
      listItemInfo: [
        {
          title: '蓝桥杯之Python算法设计系列（二）',
          username: '王小王-123',
          content: '基础算法案例1.特殊回文数问题描述：左边往右边看，右边往左边看，都是同一个数叫做回文数，比如19291就是一个回文数，那么我们输入一个两位及以上的数字，返回回文数，案例如下：def is_pal(i_):    i_s = str(i_)    if i_s == i_s[::-1]:        return True    else:        return Falsen=int(input("输入大于10的数："))i = 10while i ',
          likes: 666,
          views: 888,
          comments: 999,
        }, {
          title: 'Python游戏(1) —— 猜单词',
          username: '略略略咯',
          content: 'python猜单词小游戏猜单词小游戏对单词字母的重新排序循环猜测环节完整代码参考来源猜单词小游戏利用python实现一个猜单词的小游戏，需要导入的库为random库。设计逻辑：从单词列表中随机选取一个单词，对单词里的字母顺序进行重新随机排序，从而产生新的字符串，玩家通过这个新的字符串猜测原单词。对单词字母的重新排序先处理这个程序的核心代码就是如何生成乱序的单词',
          likes: 242,
          views: 123,
          comments: 654,
        }, {
          title: 'Python 中级知识之装饰器，滚雪球学 Python',
          username: '梦想橡皮擦',
          content: '哇塞， Python 里面的装饰器好多内容要学习呀',
          likes: 666,
          views: 888,
          comments: 999,
        }, {
          title: '计算机视觉——图像处理基础章节内容（作业一）',
          username: 'weixin_43873802',
          content: '计算机视觉——图像处理基础章节内容（作业一）学习内容要求python对图像处理的基础运用一、直方图二、直方图均衡化三、高斯滤波学习内容要求  完成图像处理基础章节内容，包括直方图、高斯滤波、直方图均衡化的结果及其基本原理Python计算机视觉编程',
          likes: 1666,
          views: 524,
          comments: 676,
        }, {
          title: 'python压缩图片为小于指定大小',
          username: '大帅带你学python\n',
          content: 'import sysimport ioimport osfrom PIL import Imagefrom PIL import ImageFile#sys.setrecursionlimit(18)def compress_image(outfile, mb=190, quality=85, k=0.9):    """不改变图片尺寸压缩到指定大小    :param outfile: 压缩文件保存地址    :param mb: 压缩目标，KB    :param step..',
          likes: 343,
          views: 777,
          comments: 12,
        },
      ]
    }
  },
  methods:{
    toPost(){
      this.$router.push('/post')
    }
  },
  components:{
    ForumWindow,
  }
}
</script>

<style scoped>
.mainForum {
  /*padding: 10px;*/

  width: 1200px;
  margin: 0 auto;

}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}

.forumItem {
  margin: 10px;
}


.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}

.box-card {
  width: 100%;
  height: 100%;
}

/deep/ .el-card__body{
  padding: 0;
}

</style>