<template>
    <div>
        <el-container>
            <el-header>
                <common-head />
            </el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
            <el-footer>
                <common-foot />
            </el-footer>
        </el-container>
    </div>
</template>
<script>
import CommonHead from '../components/CommonHead.vue'
import CommonFoot from '../components/CommonFoot.vue'
export default {
    data() {
        return {}
    },
    components: {
        CommonHead,
        CommonFoot
    }
}
</script>
<style scoped>
.el-header {
    padding: 0
}
.el-footer {
    padding: 0
}
</style>
