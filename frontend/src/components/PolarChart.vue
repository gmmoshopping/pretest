<template>
  <div class="card">
    <div v-if="linewithDataChart != null">
      <apexchart
        class="apex-charts"
        height="370"
        type="polarArea"
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
            chart: {
              type: 'polarArea',
            },
            stroke: {
              colors: ['#fff']
            },
            fill: {
              opacity: 0.8
            },
            xaxis: {
              categories: copyItems,
            },
            responsive: [{
              breakpoint: 480,
              options: {
                chart: {
                  width: 200
                },
                legend: {
                  position: 'bottom'
                }
              }
            }]
          },
        };
      }
      return this.linewithDataChart;
    },
  },
};
</script>
