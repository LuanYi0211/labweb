<template>
    <div>
        <h1>竞赛获奖</h1>
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
                    title: '获奖证书',
                    img: require('../assets/FC7A1FEF1A28C64B98F80F4EDCC_01B53A6D_EA8D8.png'),
                    imgBig: [require('../assets/FC7A1FEF1A28C64B98F80F4EDCC_01B53A6D_EA8D8.png')]
                },
                {
                    title: '获奖证书',
                    img: require('../assets/FC7A1FEF1A28C64B98F80F4EDCC_01B53A6D_EA8D8.png'),
                    imgBig: [require('../assets/FC7A1FEF1A28C64B98F80F4EDCC_01B53A6D_EA8D8.png')]
                },
                {
                    title: '应用文自动生成方法',
                    img: require('../assets/1501277314297.jpg'),
                    imgBig: [require('../assets/1501277314297.jpg')]
                },
                {
                    title: '获奖证书',
                    img: require('../assets/FC7A1FEF1A28C64B98F80F4EDCC_01B53A6D_EA8D8.png'),
                    imgBig: [require('../assets/FC7A1FEF1A28C64B98F80F4EDCC_01B53A6D_EA8D8.png')]
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
