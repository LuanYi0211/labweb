<template>
    <div>
        <h1>软著</h1>
        <hr>
        <el-row>
            <el-col :span="7" v-for="item in patents" :key="item.title" :index="item.title">
                <el-card class="box-card">
                    <div slot="header" class="clearfix"><span>{{ item.title }}</span></div>
                    <el-image 
                        style="width: 200px; height: 300px"
                        :src="item.img" 
                        :preview-src-list="item.imgBig">
                    </el-image>
                    <!-- <img :src="item.img"> -->
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    data() {
        return {
            patents: [
                {
                    title: '应用管理系统',
                    img: require('../assets/5615a4900c1d4e51ab8bea0ad62e2791.jpg'),
                    imgBig: [require('../assets/5615a4900c1d4e51ab8bea0ad62e2791.jpg')]
                },
                {
                    title: '学生课堂脸部识别签到系统',
                    img: require('../assets/5615a4900c1d4e51ab8bea0ad62e2791.jpg'),
                    imgBig: [require('../assets/5615a4900c1d4e51ab8bea0ad62e2791.jpg')]
                },
                {
                    title: '应用文自动生成方法',
                    img: require('../assets/5615a4900c1d4e51ab8bea0ad62e2791.jpg'),
                    imgBig: [require('../assets/5615a4900c1d4e51ab8bea0ad62e2791.jpg')]
                },
                {
                    title: '应用文自动生成方法',
                    img: require('../assets/5615a4900c1d4e51ab8bea0ad62e2791.jpg'),
                    imgBig: [require('../assets/5615a4900c1d4e51ab8bea0ad62e2791.jpg')]
                },
                {
                    title: '应用文自动生成方法',
                    img: require('../assets/5615a4900c1d4e51ab8bea0ad62e2791.jpg'),
                    imgBig: [require('../assets/5615a4900c1d4e51ab8bea0ad62e2791.jpg')]
                },
                {
                    title: '应用文自动生成方法',
                    img: require('../assets/5615a4900c1d4e51ab8bea0ad62e2791.jpg'),
                    imgBig: [require('../assets/5615a4900c1d4e51ab8bea0ad62e2791.jpg')]
                },
                {
                    title: '应用文自动生成方法',
                    img: require('../assets/5615a4900c1d4e51ab8bea0ad62e2791.jpg'),
                    imgBig: [require('../assets/5615a4900c1d4e51ab8bea0ad62e2791.jpg')]
                },
                {
                    title: '应用文自动生成方法',
                    img: require('../assets/5615a4900c1d4e51ab8bea0ad62e2791.jpg'),
                    imgBig: [require('../assets/5615a4900c1d4e51ab8bea0ad62e2791.jpg')]
                },
            ]
        }
    }
}
</script>
<style>
/* .box-card {
    width: 300px;
} */
.el-card {
    margin-right: 50px;
}
.el-col {
    margin-bottom: 20px;
    margin-right: 50px;
}
</style>
