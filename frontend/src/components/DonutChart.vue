<template>
  <div class="card">
    <div v-if="linewithDataChart != null">
      <apexchart
        class="apex-charts"
        height="320"
        type="donut"
        dir="ltr"
        :series="linewithDataChart.series"
        :options="linewithDataChart.chartOptions"
      ></apexchart>
    </div>
    <div v-else>Null</div>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import { DashboardService } from "@/api/index.js";

export default {
  name: "BarChart",
  components: { Carousel, Slide },
  data() {
    return {
      linewithDataChart: null,
    };
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      const results = await DashboardService.getGroupByProvince();
      if (results.messagesboxs == "unSuccess") {
        this.$swal({
          icon: "warning",
          title: appConfig.plaseInputContact,
          text: appConfig.plaseInputMessageContact,
          allowOutsideClick: false,
        });
      } else {
        const items = results.result.map((items) => {
          return {
            name: items.Seed_RDCSD,
            value: items.Total,
          };
        });
        const copyItems = [];
        const copyItem = [];

        items.forEach((item) => {
          copyItems.push(item.name);
          copyItem.push(item.value);
        });
        this.linewithDataChart = {
          series: copyItem,
          chartOptions: {
            labels: copyItems,
            colors: ["#34c38f", "#556ee6", "#f46a6a", "#50a5f1", "#f1b44c"],
            legend: {
              show: true,
              position: "bottom",
              horizontalAlign: "center",
              verticalAlign: "middle",
              floating: false,
              fontSize: "14px",
              offsetX: 0,
            },
            responsive: [
              {
                breakpoint: 600,
                options: {
                  chart: {
                    height: 240,
                  },
                  legend: {
                    show: false,
                  },
                },
              },
            ],
          },
        };
      }
      return this.linewithDataChart;
    },
  },
};
</script>
