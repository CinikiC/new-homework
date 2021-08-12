<template>
  <div class="homework">
    <div class="counter">
      <h3>生成的菜单项个数：</h3>
      <button @click="increaseItemNumber" class="btnincrease">+</button>
      {{ menuItemNumber }}
      <button @click="decreaseItemNumber" :disabled="menuItemNumber === 6" class="btndecrease">
        -
      </button>
    </div>
    <div class="body">
      <MenuBar @menuItemSelect="handleMenuItemSelect" class="bar" />
      <MenuContent :menuItemIndex="menuItemIndex" class="content" />
    </div>
  </div>
</template>

<script>
import MenuBar from "./components/MenuBar.vue";
import MenuContent from "./components/MenuContent.vue";

export default {
  name: "App",
  components: {
    MenuBar,
    MenuContent,
  },
  data() {
    return {
      menuItemIndex: -1,
      menuItemNumber: 6,
    };
  },
  methods: {
    handleMenuItemSelect(value) {
      this.menuItemIndex = value;
    },
    increaseItemNumber() {
      this.menuItemNumber++;
      this.$store.commit('createMenu')
    },
    decreaseItemNumber() {
      this.menuItemNumber--;
      this.$store.commit('deleteMenu')
    },
  },
  watch: {
    menuItemNumber() {
      if(this.menuItemIndex >= this.menuItemNumber) {
        console.log('invaild!')
        this.menuItemIndex = -1
      }
      //this.$store.commit('createMenus', newValue)
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  display: flex;
}

.homework {
  display: flex;
  flex-direction: column;
  width: 100%
}

.counter {
  flex: 0 0 100px !important;
  border-bottom-width: 2px;
  border-bottom-style: dotted;
  border-bottom-color: lightcoral;
}

.body {
  display: flex;
}

.btnincrease {
  background-color: lightgreen;
  font-weight: bolder;
  border-radius: 15px;
}

.btndecrease {
  background-color: lightpink;
  font-weight: bolder;
  border-radius: 15px;
}
</style>
