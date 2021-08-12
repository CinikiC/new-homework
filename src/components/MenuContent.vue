<template>
  <span class="content" :class="{ specialmenu: menuItemIndex === 2 }">
    <h3 v-if="menuItemIndex === -1" class="nomenuselected">选择一个菜单项</h3>
    <h2 v-else>
      这里是{{ menus[menuItemIndex].menu }} 已经点击了{{
        menus[menuItemIndex].count
      }}次
    </h2>
    <p v-show="menuItemIndex > 4" class="extracontent">
      页面加载时间: {{ Date().toLocaleString() }}
    </p>
    <ContentChart class="extrachart" v-show="menuItemIndex > 4" />
  </span>
</template>

<script>
import ContentChart from "./ContentChart.vue";
export default {
  name: "MenuContent",
  components: { ContentChart },
  mounted() {
    console.log("content");
  },
  props: ["menuItemIndex"],
  computed: {
    menus() {
      return this.$store.state.menus;
    },
  },
};
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  border-left-style: solid;
  border-left-width: 2px;
  border-left-color: darkmagenta;
}

.nomenuselected {
  font-weight: bold;
  color: orangered;
}

.specialmenu {
  color: royalblue;
  background-color: rgba(255, 0, 255, 0.15);
}

.extracontent {
  color: teal;
  font-weight: lighter;
  font-style: italic;
}

.extrachart {
  position: relative;
  align-self: center;
}
</style>