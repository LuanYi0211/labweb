<template>
    <div>
        <h1>著作</h1>
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
                    title: '应用文自动生成方法',
                    img: require('../assets/166300455563330069324568.jpg'),
                    imgBig: [require('../assets/166300455563330069324568.jpg'),
                    require('../assets/1501277314297.jpg')]
                },
                {
                    title: '应用文自动生成方法',
                    img: require('../assets/166300455563330069324568.jpg'),
                    imgBig: [require('../assets/166300455563330069324568.jpg')]
                },
                {
                    title: '应用文自动生成方法',
                    img: require('../assets/166300455563330069324568.jpg'),
                    imgBig: [require('../assets/166300455563330069324568.jpg')]
                },
                {
                    title: '应用文自动生成方法',
                    img: require('../assets/166300455563330069324568.jpg'),
                    imgBig: [require('../assets/166300455563330069324568.jpg')]
                },
                {
                    title: '应用文自动生成方法',
                    img: require('../assets/166300455563330069324568.jpg'),
                    imgBig: [require('../assets/166300455563330069324568.jpg')]
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