<template>
  <div class="container">
    <div class="leftBox">
      <ul class="list_toolbar">
        <li class="toolbar_item" @click="collectMusic">
          <span class="iconfont icon-shoucang"></span> 收藏
        </li>
        <li class="toolbar_item" @click="addMusic">
          <span class="iconfont icon-tianjia"></span> 添加到
        </li>
        <li class="toolbar_item" @click="deleteMusic">
          <span class="iconfont icon-shanchu"></span> 删除
        </li>
        <li class="toolbar_item" @click="clearMusic">
          <span class="iconfont icon-qingkong"></span> 清空列表
        </li>
      </ul>
      <div style=" overflow: auto; height:100%; ">
        <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange"
          class="data_table"
        >
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column label="歌曲">
            <template slot-scope="scope">
              <div :class="'song_name column_item '+(scope.row.isplay?'is_playing':'')">
                {{ scope.row.song }}
                <div class="icon_box">
                  <span :class="'iconfont icon-'+(scope.row.isplay?'zanting1':'icon-')" @click="changePlaying(scope.row)"></span>
                  <span class="iconfont icon-jiahao01"></span>
                  <span class="iconfont icon-fenxiang-"></span>
                </div>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="歌手" width="230">
            <template slot-scope="scope">
              <a href class="singer_name column_item" :style="'color:'+(scope.row.isplay?'#fff':'')"> {{ scope.row.singer }}</a>
            </template>
          </el-table-column>
          <el-table-column label="时长" show-overflow-tooltip width="110">
            <template slot-scope="scope">
              <div class="time_box column_item" :style="'color:'+(scope.row.isplay?'#fff':'')">{{ scope.row.time }}</div>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <!-- <div style="margin-top: 20px">
        <el-button @click="toggleSelection([tableData[1], tableData[2]])">切换第二、第三行的选中状态</el-button>
        <el-button @click="toggleSelection()">取消选择</el-button>
      </div>-->
    </div>
    <div class="rightBox">
      <div class="rightContent">
        <img src="../../common/img/test.jpg" alt class="ablum" />
        <p>
          歌曲名：
          <a href>{{'可惜没如果'}}</a>
        </p>
        <p>
          歌手名：
          <a href>{{'林俊杰'}}</a>
        </p>
        <p>
          专辑名：
          <a href>{{'可惜没如果'}}</a>
        </p>
      </div>

      <div class="right_Lyrics">
        <Lyrics class="mini_Lyrics"></Lyrics>
      </div>
    </div>

    <Alert icon_class="icon-jinggao1" alert_title="请选择要操作的单曲" :show_alert="showAlert"></Alert>
  </div>
</template>
<style>
.container {
  display: flex;
  height: 100%;
}
.leftBox {
  flex-grow: 1;
  min-width: 650px;
  margin-top: 58px;
  position: relative;
}
.rightBox {
  flex-shrink: 0;
  width: 30%;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;
}
.rightContent {
  height: 300px;
  width: 250px;
  margin-left: 50px;
  position: relative;
  text-align: center;
  margin: 0 auto;
}
.rightContent > p {
  color: rgba(225, 225, 225, 0.8);
  padding-top: 9px;
  font-size: 14px;
  cursor: default;
}
.rightContent a {
  color: rgba(225, 225, 225, 0.8);
  text-decoration: none;
}
.rightContent a:hover {
  color: #fff;
}
.ablum {
  width: 186px;
  height: 186px;
  flex-shrink: 0;
  margin: 0 auto;
}
.rightContent:after {
  content: "";
  position: absolute;
  right: 9px;
  top: 0;
  width: 201px;
  height: 180px;
  /* z-index: -1; */
  background: url("../../common/img/album_cover_player.png") 0 0 no-repeat;
}

.right_Lyrics {
  flex-grow: 1;
}
.mini_Lyrics {
  padding: 0;
}
.mini_Lyrics #lyrics_content > p {
  font-size: 14px;
  line-height: 34px;
  height: 34px;
}
.list_toolbar {
  position: absolute;
  top: -58px;
  width: 100%;
  height: 38px;
  padding-left: 20px;
  display: flex;
}
.list_toolbar > .toolbar_item {
  padding: 0 23px;
  min-width: 122px;
  height: 38px;
  margin-right: 15px;
  line-height: 38px;
  text-align: center;
  box-sizing: border-box;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 2px;
  font-size: 14px;
}
.list_toolbar > .toolbar_item:hover {
  border-color: #fff;
  color: #fff;
  cursor: pointer;
}
.singer_name:hover,
.toolbar_item:hover .iconfont {
  color: #fff;
}
.song_name {
  cursor: default;
  position: relative;
  padding-left: 3px;
}
.is_playing{
  color: #fff;
}
.is_playing::before {
  content: "";
  width: 10px;
  height: 10px;
  display: block;
  position: absolute;
  color: #fff;
  left: -16px;
  top: 50%;
  transform: translate(0, -50%);
  background: url("../../common/img/playing.gif") 0 0 no-repeat;
}
.column_item {
  display: flex;
  align-items: center;
  height: 37px;
}
.time_box {
  cursor: default;
}
.data_table {
  background-color: transparent;
}
.data_table .iconfont {
  display: inline-block;
  width: 36px;
  height: 36px;
  color: rgba(225, 225, 225, 0.8);
  font-size: 37px;
  line-height: 36px;
  margin-right: 10px;
}
.data_table .iconfont.icon-zanting1{
  font-size: 34px;
}
.data_table .icon_box {
  text-align: right;
  margin-left: auto;
  cursor: pointer;
  display: none;
}

.data_table .iconfont:hover {
  color: #fff;
}
.el-table th,
.el-table tr {
  background-color: transparent;
}
.el-table tr {
  height: 50px;
}
.el-table td,
.el-table th.is-leaf {
  border: none;
}
.el-table--enable-row-hover .el-table__body tr:hover > td {
  background-color: transparent;
}
.el-checkbox__input.is-checked .el-checkbox__inner,
.el-checkbox__input.is-indeterminate .el-checkbox__inner {
  background-color: transparent;
  border-color: #fff;
}
.el-checkbox__input.is-disabled .el-checkbox__inner {
  background-color: transparent;
  border-color: rgba(225, 225, 225, 0.2);
}
.el-checkbox__inner {
  width: 16px;
  height: 16px;
  border-radius: 0%;
  /* border: 1px solid #fff; */
}
.el-checkbox__inner::after {
  height: 8px;
  left: 5px;
}
.el-checkbox__inner {
  background-color: transparent;
  border-color: rgba(225, 225, 225, 0.2);
}
.el-checkbox__inner:hover {
  border-color: #fff;
}
.el-checkbox__input.is-focus .el-checkbox__inner {
  border-color: #fff;
}
.el-checkbox__input.is-indeterminate .el-checkbox__inner::before {
  top: 6px;
}
.el-checkbox__input.is-disabled.is-checked .el-checkbox__inner::after,
.el-checkbox__input.is-disabled .el-checkbox__inner::after {
  border-color: transparent;
}
.el-checkbox__input.is-disabled.is-checked .el-checkbox__inner {
  background-color: transparent;
  border-color: rgba(225, 225, 225, 0.2);
}
.el-table::before {
  background-color: transparent;
}
.el-table th > .cell {
  padding-left: 14px;
}
.el-table .cell {
  overflow: visible;
}
.el-table__row:hover .column_item .icon_box {
  display: block;
}
.el-message-box {
  width: 300px;
  padding-bottom: 20px;
}
.el-message-box span,
.el-message-box p {
  color: #000;
}
.el-button--primary span {
  color: #fff;
}
</style>
<script>
import Lyrics from "./Lyrics.vue";
import Alert from "./Alert.vue";
export default {
  components: {
    Lyrics,
    Alert
  },
  data: function() {
    return {
      // tableData: this.$store.state.musicList,
      selectList: [],
      showAlert: false
    };
  },
  watch: {},
  computed: {
    tableData() {
      return this.$store.state.musicList;
    }
  },
  methods: {
    handleSelectionChange: function(selectList) {
      window.console.log(selectList);
      this.selectList = selectList;
    },
    collectMusic() {
      this.canNext();
    },
    addMusic() {
      this.canNext();
    },
    deleteMusic() {
      if (!this.canNext()) {
        //判断有无操作元素，能否继续执行
        return;
      }
      this.$confirm("确定要删除歌曲？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "info",
        center: true
      }).then(() => {
        //确定删除操作
        for (let i = 0; i < this.selectList.length; i++) {
          for (let j = 0; j < this.tableData.length; j++) {
            if (this.selectList[i] == this.tableData[j]) {
              this.$store.state.musicList.splice(j, 1);
              break;
            }
          }
        }
      }).catch(() => {
        window.console.log('取消操作')
      });
    },
    clearMusic() {
      this.$confirm("确定要清空列表吗？", "警告", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true
      }).then(() => {
        //确定清空操作
        this.$store.state.musicList = [];
      }).catch(() => {
        window.console.log('取消操作')
      });
    },
    canNext: function() {
      //判断有无操作元素，能否继续执行
      //无操作元素显示弹窗
      if (this.selectList.length == 0) {
        if (this.showAlert) {
          return false;
        }
        this.showAlert = true;
        var timer = setTimeout(() => {
          this.showAlert = false;
          clearTimeout(timer);
        }, 2000);
        return false;
      }
      return true;
    },
    changePlaying:function (item) {
      window.console.log('切换歌曲：',item)
    }
  }
};
</script>