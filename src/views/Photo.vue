<template>
    <div>
        <h1>相册</h1>
        <hr>
        <el-row>
            <el-col :span="7" v-for="item in patents" :key="item.title" :index="item.title">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span style="color: blue; font-size: larger;">{{ item.year }}</span>
                        <span style="float: right;">共{{ item.num }}张</span>
                    </div>
                    <el-image 
                        style="width: 330px; height: 300px"
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
                    year: '2022',
                    img: require('../assets/1501277314297.jpg'),
                    imgBig: [
                        require('../assets/caiselogo.png'),
                        require('../assets/1501277314297.jpg'),
                        require('../assets/FC7A1FEF1A28C64B98F80F4EDCC_01B53A6D_EA8D8.png'),
                    ],
                    num: 3
                },
                {
                    year: '2021',
                    img: require('../assets/FC7A1FEF1A28C64B98F80F4EDCC_01B53A6D_EA8D8.png'),
                    imgBig: [
                        require('../assets/1501277314297.jpg'),
                        require('../assets/FC7A1FEF1A28C64B98F80F4EDCC_01B53A6D_EA8D8.png'),
                    ],
                    num: 2
                },
                {
                    year: '2020',
                    img: require('../assets/574e9258d109b3de9c8240aa30f57b81800a18d8e694.jpg'),
                    imgBig: [
                        require('../assets/574e9258d109b3de9c8240aa30f57b81800a18d8e694.jpg'),    
                        require('../assets/5615a4900c1d4e51ab8bea0ad62e2791.jpg'),
                        require('../assets/FC7A1FEF1A28C64B98F80F4EDCC_01B53A6D_EA8D8.png'),
                        require('../assets/1501277314297.jpg'),
                    ],
                    num: 4
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
    margin-right: 30px;
}
.el-col {
    margin-bottom: 20px;
}
</style>
