<template>
    <div class="home">
    <h1>成员</h1>
    <hr>
    <div style="text-align: left; width: auto;">
        <router-link to="#" v-scroll-to="'#fuzeren'" target="_self">负责人</router-link><p style="display:inline"> | </p>
        <router-link to="#" v-scroll-to="'#jiaoshi'" target="_self">教师</router-link><p style="display:inline"> | </p>
        <router-link to="#" v-scroll-to="'#zaixiao'" target="_self">在校学生</router-link><p style="display:inline"> | </p>
        <router-link to="#" v-scroll-to="'#biye'">已毕业学生</router-link>
    </div>

    <h3 id="fuzeren">负责人</h3>
    <hr>
    <div>
      <ul>
        <el-row>
          <el-col :span="4"
            @click="getType(item)"
            v-for="item in getType4"
            :key="item.name"
            :index="item.name">
            <li>
              <el-link type="primary" @click="getType(item)" style="font-size: 16px; font-family: Hiragino Sans GB;">{{ item.name }}</el-link>
            </li>
          </el-col>
        </el-row>
      </ul>
    </div>
    

    <h3 id="jiaoshi">教师</h3>
    <hr>
    <div>
      <ul>
        <el-row>
          <el-col :span="4"
            @click="getType(item)"
            v-for="item in getType1"
            :key="item.name"
            :index="item.name">
            <li>
              <el-link type="primary" @click="getType(item)" style="font-size: 16px; font-family: Hiragino Sans GB;">{{ item.name }}</el-link>
            </li>
          </el-col>
        </el-row>
      </ul>
    </div>

    <h3 id="zaixiao">在校学生</h3>
    <hr>
    <div>
      <ul>
        <el-row>
          <el-col :span="4"
            @click="getType(item)"
            v-for="item in getType2"
            :key="item.name"
            :index="item.name">
            <li>
              <el-link type="primary" @click="getType(item)" style="font-size: 16px; font-family: Hiragino Sans GB;">{{ item.name }}</el-link>
            </li>
          </el-col>
        </el-row>
      </ul>
    </div>

    <h3 id="biye">已毕业学生</h3>
    <hr>
    <div>
      <ul>
        <el-row>
          <el-col :span="4"
            @click="getType(item)"
            v-for="item in getType3"
            :key="item.name"
            :index="item.name">
            <li>
              <el-link type="primary" @click="getType(item)" style="font-size: 16px; font-family: Hiragino Sans GB;">{{ item.name }}</el-link>
            </li>
          </el-col>
        </el-row>
      </ul>
    </div>
    <!-- <ul>
    <el-collapse v-model="activeNames" @change="handleChange">
    <li><el-collapse-item title="教师名-学历-职位" name="1">
        <div>
        <ul>
            <li>在校学生</li>
            <div><el-link type="primary">学生-年级</el-link>
            </div>
            <div><el-link type="primary">学生-年级</el-link></div>
            <li>已毕业学生</li>
            <div><el-link type="primary">学生-年级</el-link></div>
            <div><el-link type="primary">学生-年级</el-link></div>
        </ul>
        </div>
    </el-collapse-item></li>
    <li><el-collapse-item title="教师名-学历-职位" name="2">
      <div>
        <ul>
            <li>在校学生</li>
            <div><el-link type="primary">学生-年级</el-link>
            </div>
            <div><el-link type="primary">学生-年级</el-link></div>
            <li>已毕业学生</li>
            <div><el-link type="primary">学生-年级</el-link></div>
            <div><el-link type="primary">学生-年级</el-link></div>
        </ul>
        </div>
    </el-collapse-item></li>
    <li><el-collapse-item title="教师名-学历-职位" name="3">
      <div>
        <ul>
            <li>在校学生</li>
            <div><el-link type="primary">学生-年级</el-link>
            </div>
            <div><el-link type="primary">学生-年级</el-link></div>
            <li>已毕业学生</li>
            <div><el-link type="primary">学生-年级</el-link></div>
            <div><el-link type="primary">学生-年级</el-link></div>
        </ul>
        </div>
    </el-collapse-item></li>
    <li><el-collapse-item title="教师名-学历-职位" name="4">
      <div>
        <ul>
            <li>在校学生</li>
            <div><el-link type="primary">学生-年级</el-link>
            </div>
            <div><el-link type="primary">学生-年级</el-link></div>
            <li>已毕业学生</li>
            <div><el-link type="primary">学生-年级</el-link></div>
            <div><el-link type="primary">学生-年级</el-link></div>
        </ul>
        </div>
    </el-collapse-item></li>
    </el-collapse>
    </ul> -->
    

</div>
</template>
<script>
export default {
    data() {
      return {
        activeNames: ['1'],
        personData: [
                {
                    name: '刘秀磊',
                    type: 'fuzeren',
                },
                {
                    name: '佟强',
                    type: 'teacher',
                },
                {
                    name: '侯守璐',
                    type: 'teacher',
                },
                {
                    name: '赵青娟',
                    type: 'teacher',
                },
                {
                    name: '刘旭红',
                    type: 'teacher',
                },
                {
                    name: '梁燕',
                    type: 'teacher',
                },
                {
                    name: '李宁',
                    type: 'teacher',
                },
                {
                    name: '赵伟帆',
                    type: 'zaixiao',
                },
                {
                    name: '沈嘉豪',
                    type: 'zaixiao',
                },
                {
                    name: '张立丽',
                    type: 'zaixiao',
                },
                {
                    name: '胡进庆',
                    type: 'zaixiao',
                },
                {
                    name: '刘浩光',
                    type: 'zaixiao',
                },
                {
                    name: '李赛尉',
                    type: 'zaixiao',
                },
                {
                    name: '于荃',
                    type: 'zaixiao',
                },
                {
                    name: '谢智超',
                    type: 'zaixiao',
                },
                {
                    name: '罗迩遐',
                    type: 'zaixiao',
                },
                {
                    name: '褚延浩',
                    type: 'zaixiao',
                },
                {
                    name: '李文桥',
                    type: 'zaixiao',
                },
                {
                    name: '陈玉立',
                    type: 'biye',
                },
              ],
        type1: 'teacher',
        type2: 'zaixiao',
        type3: 'biye',
        type4: 'fuzeren'
      };
    },
    methods: {
      handleChange(val) {
        console.log(val);
      },
      getType(item) {
            this.teacherName=item.name
            this.$router.push(
                {
                    path: "/detail",
                    query: {
                        name: item.name
                    }
                }
            )
        },
    },
    computed: {
        getType1() {
          var arr = this.personData.filter(item => {
            return item.type == this.type1
          })
          return arr;
        },
        getType2() {
          var arr = this.personData.filter(item => {
            return item.type == this.type2
          })
          return arr;
        },
        getType3() {
          var arr = this.personData.filter(item => {
            return item.type == this.type3
          })
          return arr;
        },
        getType4() {
          var arr = this.personData.filter(item => {
            return item.type == this.type4
          })
          return arr;
        },
    }
  }
</script>
<style scoped>
.twill {
    border: 0;
    padding: 3px;
    background: repeating-linear-gradient(135deg, #a2a9b6 0px, #a2a9b6 1px, transparent 1px, transparent 6px);
}
</style>
