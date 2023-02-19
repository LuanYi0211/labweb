<template>
  <div class="header">
    <div class="lab-name">
      <h2 class="lab">数据科学与情报分析实验室</h2>
      <h2 class="lab">Data Science and Intelligence Analysis Laboratory</h2>
    </div>
    <div class="menu">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item
          @click="clickMenu(item)"
          v-for="item in noChildren"
          :key="item.name"
          :index="item.name"
        >
          <i :class="`el-icon-${item.icon}`"></i>
          <span slot="title">{{ item.label }}</span>
        </el-menu-item>
        <el-submenu
          v-for="item in hasChildren"
          :key="item.label"
          :index="item.label"
        >
          <template slot="title">
            <i :class="`el-icon-${item.icon}`"></i>
            <span slot="title">{{ item.label }}</span>
          </template>
          <el-menu-item-group
            v-for="subItem in item.children"
            :key="subItem.path"
            :index="subItem.path"
          >
            <el-menu-item @click="clickMenu(subItem)" :index="subItem.path">
              <i :class="`el-icon-${subItem.icon}`"></i>
              <span slot="title">{{ subItem.label }}</span>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      menuData: [
        {
          path: "/",
          name: "home",
          label: "首页",
          icon: "s-home",
          url: "Home/Home",
        },
        {
          path: "/member",
          name: "member",
          label: "成员",
          icon: "user-solid",
          url: "member/member",
        },
        {
          label: "实验室成果",
          icon: "s-management",
          children: [
            {
              path: "/papers",
              name: "page1",
              label: "论文",
              icon: "s-order",
              url: "Other/PageOne",
            },
            {
              path: "/patents",
              name: "page2",
              label: "专利",
              icon: "s-claim",
              url: "Other/PageTwo",
            },
            {
              path: "/writings",
              name: "page3",
              label: "著作",
              icon: "s-cooperation",
              url: "Other/PageThree",
            },
            {
              path: "/soft",
              name: "page4",
              label: "软著",
              icon: "s-finance",
              url: "Other/PageFour",
            },
            {
              path: "/standards",
              name: "page5",
              label: "技术标准",
              icon: "s-flag",
              url: "Other/PageFive",
            },
            {
              path: "/prize",
              name: "page6",
              label: "竞赛获奖",
              icon: "s-promotion",
              url: "Other/PageSix",
            },
          ],
        },
        {
          path: "/datacode",
          name: "data",
          label: "数据与代码",
          icon: "s-help",
          url: "data/data",
        },
        {
          path: "/photo",
          name: "photo",
          label: "相册",
          icon: "picture",
          url: "photo/photo",
        },
        {
          path: "/recruitment",
          name: "recruit",
          label: "研究生招生",
          icon: "s-shop",
          url: "recruit/recruit",
        },
      ],
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    //点击菜单
    clickMenu(item) {
      //当页面的路由和跳转的路由不一致时才允许跳转
      if (
        this.$route.path !== item.path &&
        !(this.$route.path === "/home" && item.path === "/")
      ) {
        this.$router.push(item.path);
      }
    },
  },
  computed: {
    //no sub-menu
    noChildren() {
      return this.menuData.filter((item) => !item.children);
    },
    //has children
    hasChildren() {
      return this.menuData.filter((item) => item.children);
    },
  },
};
</script>

<style lang="less" scoped>
.header {
  background-color: #545c64;
  width: 100%;
  .lab-name {
    display: inline-block;
    align-items: center;
    background-color: #545c64;
    justify-content: space-between;
    padding: 0 50px;
    .lab {
      color: #fff;
      font-size: 18px;
      font-weight: 400;
    }
  }
  .menu {
    display: inline-block;
  }
}
</style>
