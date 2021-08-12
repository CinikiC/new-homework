<template>
  <span class="menubar">
    <p
      v-for="(menuItem, menuIndex) in menus"
      :key="menuIndex"
      @click="menuItemSelect(menuIndex)"
      class="menuitem"
      :class="{ selected: selectedIndex === menuIndex }"
    >
      {{ menuItem.menu }}
    </p>
  </span>
</template>

<script>
export default {
  name: "MenuBar",
  data() {
    return {
      selectedIndex: -1,
    };
  },
  mounted() {
    console.log("menubar");
  },
  computed: {
    menus() {
      return this.$store.state.menus;
    },
  },
  methods: {
    menuItemSelect(index) {
      this.selectedIndex = index;
      console.log(this.selectedIndex);
      this.$store.commit("menuSelectCount", index);
      this.$emit("menuItemSelect", index);
    },
  },
};
</script>

<style scoped>
.menubar {
  width: 300px;
}

.selected {
  font-weight: bold;
  color: royalblue;
}

.menuitem {
  width: 200px;
  height: 50px;
  background: transparent;
  margin: 10px;
  position: relative;
  line-height: 50px;
}

.menuitem::after {
  content: "";
  width: 0;
  height: 50px;
  background-color: rgba(150, 50, 50, 0.1);
  position: absolute;
  top: 0%;
  left: 50%;
  transition: all 0.5s;
}

.menuitem:hover::after {
  left: 0;
  width: 100%;
}
</style>