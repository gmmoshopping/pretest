<template>
  <div class="card">
    <div v-if="linewithDataChart != null">
      <apexchart
        class="apex-charts"
        height="380"
        type="bar"
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
          series: [
            {
              data: copyItem,
            },
          ],
          chartOptions: {
            chart: {
              toolbar: {
                show: false,
              },
            },
            plotOptions: {
              bar: {
                horizontal: false,
                columnWidth: "45%",
                endingShape: "rounded",
              },
            },
            dataLabels: {
              enabled: false,
            },
            stroke: {
              show: true,
              width: 2,
              colors: ["transparent"],
            },
            colors: ["#34c38f", "#556ee6", "#f46a6a"],
            xaxis: {
              categories: copyItems,
            },
            yaxis: {
              title: {
                text: "$ (thousands)",
                style: {
                  fontWeight: "500",
                },
              },
            },
            grid: {
              borderColor: "#f1f1f1",
            },
            fill: {
              opacity: 1,
            },
            tooltip: {
              y: {
                formatter: function (val) {
                  return  val ;
                },
              },
            },
          },
        };
      }
      return this.linewithDataChart;
    },
  },
};
</script>
