<template>
    <div>
        <h1>技术标准</h1>
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
                    title: '企业安全生产标准化规范',
                    img: require('../assets/574e9258d109b3de9c8240aa30f57b81800a18d8e694.jpg'),
                    imgBig: [require('../assets/574e9258d109b3de9c8240aa30f57b81800a18d8e694.jpg')]
                },
                {
                    title: '应用文自动生成方法',
                    img: require('../assets/574e9258d109b3de9c8240aa30f57b81800a18d8e694.jpg'),
                    imgBig: [require('../assets/574e9258d109b3de9c8240aa30f57b81800a18d8e694.jpg')]
                },
                {
                    title: '应用文自动生成方法',
                    img: require('../assets/574e9258d109b3de9c8240aa30f57b81800a18d8e694.jpg'),
                    imgBig: [require('../assets/574e9258d109b3de9c8240aa30f57b81800a18d8e694.jpg')]
                },
                {
                    title: '应用文自动生成方法',
                    img: require('../assets/574e9258d109b3de9c8240aa30f57b81800a18d8e694.jpg'),
                    imgBig: [require('../assets/574e9258d109b3de9c8240aa30f57b81800a18d8e694.jpg')]
                },
                {
                    title: '应用文自动生成方法',
                    img: require('../assets/574e9258d109b3de9c8240aa30f57b81800a18d8e694.jpg'),
                    imgBig: [require('../assets/574e9258d109b3de9c8240aa30f57b81800a18d8e694.jpg')]
                },
                {
                    title: '应用文自动生成方法',
                    img: require('../assets/574e9258d109b3de9c8240aa30f57b81800a18d8e694.jpg'),
                    imgBig: [require('../assets/574e9258d109b3de9c8240aa30f57b81800a18d8e694.jpg')]
                },
                {
                    title: '应用文自动生成方法',
                    img: require('../assets/574e9258d109b3de9c8240aa30f57b81800a18d8e694.jpg'),
                    imgBig: [require('../assets/574e9258d109b3de9c8240aa30f57b81800a18d8e694.jpg')]
                },
                {
                    title: '应用文自动生成方法',
                    img: require('../assets/574e9258d109b3de9c8240aa30f57b81800a18d8e694.jpg'),
                    imgBig: [require('../assets/574e9258d109b3de9c8240aa30f57b81800a18d8e694.jpg')]
                },
                {
                    title: '应用文自动生成方法',
                    img: require('../assets/574e9258d109b3de9c8240aa30f57b81800a18d8e694.jpg'),
                    imgBig: [require('../assets/574e9258d109b3de9c8240aa30f57b81800a18d8e694.jpg')]
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