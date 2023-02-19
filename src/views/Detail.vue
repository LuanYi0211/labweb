<template>
    <div style="background-color:#545c64; width: 100%;">
        <div class="void"></div>
        <div class="all">
            <h2>{{ this.$route.query.name }}</h2>
            <div style="text-align: right; width: auto;">
                <router-link to="#" v-scroll-to="'#self'" target="_self">个人自述</router-link>&emsp;
                <router-link to="#" v-scroll-to="'#direction'" target="_self">研究方向</router-link>&emsp;
                <router-link to="#" v-scroll-to="'#show'" target="_self">个人展示</router-link>&emsp;
                <router-link to="#" v-scroll-to="'#public'">论文</router-link>
            </div>
        </div>
        <div class="void"></div>
        <div class="all">
            <h2 id="self">个人自述</h2>
            <div style="text-align: left; display:inline-block; width: auto; float: left;"><img src="../assets/logo.png" class="image"></div>
            <div style="text-align: left; display:inline-block; width: auto;">
                <p>1981-1985 北京信息工程学院 计算机软件专业，学士</p>
                <p>1985-1989 北京信息工程学院 软件工程研究中心，助理工程师</p>
                <p>1989-1996 英国肯特大学（University of Kent, UK）信息技术，硕士，博士</p>
                <p>1990-1995 英国肯特大学(University of Kent, UK) Computing Laboratory, Research Fellow</p>
                <p>1996-2008 北京信息工程学院 软件工程研究中心，副研究员、副主任；计算机科学与工程系副主任；研究员</p>
                <p>2008至今 北京信息科技大学 计算机学院，副院长、院长、教授。</p>
            </div>
        </div>
        <div class="void"></div>
        <div class="all">
            <h2 id="direction">研究方向</h2>
            <div style="text-align: left; width: auto;">
                <h3 style="display:inline-block; padding-inline: 100px;">1.文档信息处理</h3>
                <h3 style="display:inline-block; padding-inline: 100px;">2.非结构化信息处理</h3>
                <h3 style="display:inline-block; padding-inline: 100px;">3.信息技术标准化</h3>
            </div>
        </div>
        <div class="void"></div>
        <div class="all">
            <h2 id="show">个人展示</h2>
            <h3>学术职务：</h3>
            <p>网络文化与数字传播北京市重点实验室主任</p>
            <p>北京信息科技大学北京材料基因工程高精尖创新中心主任</p>
            <p>全国信息技术标准化技术委员会委员</p>
            <p>北京电子学会常务理事/计算机委员会主任</p>
            <p>数字出版国家重点实验室学术委员会委员</p>
            <p>北京计算机学会理事</p>
            <p>电子文件管理推进联盟理事/办公文档工作组组长</p>
            <p>电子文件管理推进联盟理事/国际标准化组织 ISO/IEC JCT1 SC34 WG9编辑</p>
            <h3>研究成果：</h3>
            <p>项目：国家自然基金项目“流式文档排版格式的智能化分析与优化方法”（61672105），2017-2020，62万，负责人</p>
            <p>项目：中央引导地方科技发展专项：量子通信技术创新与行业应用（编号：Z171100004717002），2017.1-2018.12，300万，负责人</p>
            <p>项目：国家社会科学基金重大项目子课题：“世界记忆遗产”东巴经典传承体系数字化项目：国际共享平台建设研究（12&ZD234），2013.1-2015.12，20万，子课题负责人（1）</p>
        </div>
        <div class="void"></div>
        <div class="all">
            <h2 id="public">论文</h2>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {}
    },
}
</script>
<style scoped>
.all {
    background-color: white;
    height: fit-content;
    padding: 20px;
    width: 90%;
    margin-left: 4%;
}
.void {
    height: 20px;
}
h2 {
    text-align: left;
    width: 100px;
}
</style>