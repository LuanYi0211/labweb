<template>
    <div>
        <h1>专利</h1>
        <hr>
        <p>（点击缩略图可查看大图）</p>
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
                    img: require('../assets/1501277314297.jpg'),
                    imgBig: [require('../assets/1501277314297.jpg')]
                },
                {
                    title: '从网购用户评论中抽取产品特征信息的方法',
                    img: require('../assets/1501277314297.jpg'),
                    imgBig: [require('../assets/1501277314297.jpg')]
                },
                {
                    title: 'NBA赛事新闻的自动生成方法',
                    img: require('../assets/1501277314297.jpg'),
                    imgBig: [require('../assets/1501277314297.jpg')]
                },
                {
                    title: '金融领域的事件句抽取方法',
                    img: require('../assets/1501277314297.jpg'),
                    imgBig: [require('../assets/1501277314297.jpg')]
                },
                {
                    title: '对高校网站上的会议稿进行知识抽取的方法',
                    img: require('../assets/1501277314297.jpg'),
                    imgBig: [require('../assets/1501277314297.jpg')]
                },
                {
                    title: '基于距离测度学习的AP距离图像标注方法',
                    img: require('../assets/1501277314297.jpg'),
                    imgBig: [require('../assets/1501277314297.jpg')]
                },
            ]
        }
        return {
            patents: [
                {
                    title: '应用文自动生成方法',
                    img: require('../assets/1501277314297.jpg'),
                    imgBig: [require('../assets/1501277314297.jpg')]
                },
                {
                    title: '从网购用户评论中抽取产品特征信息的方法',
                    img: require('../assets/1501277314297.jpg'),
                    imgBig: [require('../assets/1501277314297.jpg')]
                },
                {
                    title: 'NBA赛事新闻的自动生成方法',
                    img: require('../assets/1501277314297.jpg'),
                    imgBig: [require('../assets/1501277314297.jpg')]
                },
                {
                    title: '金融领域的事件句抽取方法',
                    img: require('../assets/1501277314297.jpg'),
                    imgBig: [require('../assets/1501277314297.jpg')]
                },
                {
                    title: '对高校网站上的会议稿进行知识抽取的方法',
                    img: require('../assets/1501277314297.jpg'),
                    imgBig: [require('../assets/1501277314297.jpg')]
                },
                {
                    title: '基于距离测度学习的AP距离图像标注方法',
                    img: require('../assets/1501277314297.jpg'),
                    imgBig: [require('../assets/1501277314297.jpg')]
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
