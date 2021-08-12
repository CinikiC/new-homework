<template>
  <div id="menuchart"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "ContentChart",
  computed: {
    menus() {
      return this.$store.state.menus;
    },
  },
  mounted() {
    this.menuChart = echarts.init(document.getElementById("menuchart"));
    this.menuStatusChart(this.menus);
  },
  data() {
    return {
      menuChart: null,
    };
  },
  methods: {
    menuStatusChart(dataSet) {
      this.menuChart.setOption({
        title: {
          text: "点击次数统计",
          textAlign: "center",
          left: "center",
        },
        dataZoom: {
          type: "slider",
          xAxisIndex: 0,
        },
        tooltip: {},
        dataset: {
          dimensions: ["menu", "count"],
          source: dataSet,
        },
        xAxis: { type: "category" },
        yAxis: {},
        series: {
          type: "bar",
        },
      });
    },
  },
  watch: {
    "$store.state.menus": {
      deep: true,
      handler: function (newData) {
        console.log("updated");
        this.menuStatusChart(newData);
      },
    },
  },
};
</script>

<style scoped>
#menuchart {
  width: 700px;
  height: 600px;
}
</style>