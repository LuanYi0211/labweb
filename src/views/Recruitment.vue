<template>
    <div>
        <h1>研究生招生</h1>
        <hr>
        <div>
            <p style="display:inline">研究方向：</p>
            <el-link type="primary">知识图谱</el-link><p style="display:inline"> | </p>
            <el-link type="primary">计算机视觉</el-link><p style="display:inline"> | </p>
            <el-link type="primary">航迹预测</el-link>
        </div>
        <h3>知识图谱</h3>
        <hr class="twill">
        <div>
            <el-link 
            type="primary" 
            style="font-size: 18px; font-family: Hiragino Sans GB;"
            @click="getTeacherName(item)"
            v-for="item in getTeacher1"
            :key="item.name"
            :index="item.name"
            >
            <span>{{ item.name }}</span>&emsp;
            </el-link>
        </div>
        <h3>计算机视觉</h3>
        <hr class="twill">
        <div>
            <el-link 
            type="primary" 
            style="font-size: 18px; font-family: Hiragino Sans GB;"
            @click="getTeacherName(item)"
            v-for="item in getTeacher2"
            :key="item.name"
            :index="item.name"
            >
            <span>{{ item.name }}</span>&emsp;
            </el-link>
        </div>
        <h3>航迹预测</h3>
        <hr class="twill">
        <div>
            <el-link 
            type="primary" 
            style="font-size: 18px; font-family: Hiragino Sans GB;"
            @click="getTeacherName(item)"
            v-for="item in getTeacher3"
            :key="item.name"
            :index="item.name"
            >
            <span>{{ item.name }}</span>&emsp;
            </el-link>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            teacher: [
                {
                    name: '刘秀磊',
                    direction: '知识图谱',
                },
                {
                    name: '佟强',
                    direction: '计算机视觉',
                },
                {
                    name: '侯守璐',
                    direction: '知识图谱',
                },
                {
                    name: '赵青娟',
                    direction: '航迹预测',
                },
                {
                    name: '刘旭红',
                    direction: '航迹预测',
                },
                {
                    name: '梁燕',
                    direction: '知识图谱',
                },
                {
                    name: '李宁',
                    direction: '计算机视觉',
                },
            ],
            teacherName: '',
            direction1: '知识图谱',
            direction2: '计算机视觉',
            direction3: '航迹预测',
        }
    },
    methods: {
        getTeacherName(item) {
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
        getTeacher1() {
          var arr = this.teacher.filter(item => {
            return item.direction == this.direction1
          })
          return arr;
        },
        getTeacher2() {
          var arr = this.teacher.filter(item => {
            return item.direction == this.direction2
          })
          return arr;
        },
        getTeacher3() {
          var arr = this.teacher.filter(item => {
            return item.direction == this.direction3
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
