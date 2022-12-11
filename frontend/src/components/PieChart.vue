<template>
  <div class="card">    
    <div v-if="linewithDataChart != null">
      <apexchart
        class="apex-charts"
        height="380"
        type="line"
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
  name: "PieChart",
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
          chartOptions: {
            chart: {
              height: 380,
              type: "line",
            },
            colors: ["#556ee6", "#34c38f"],
            dataLabels: {
              enabled: false,
            },
            title: {
              text: "Average High & Low Temperature",
              align: "center",
              style: {
                fontWeight: "500",
              },
            },
            grid: {
              borderColor: "#f1f1f1",
            },
            markers: {
              style: "inverted",
              size: 6,
            },
            xaxis: {
              categories: copyItems,
            },
            yaxis: {
              title: {
                text: "Count",
              },
              min: 0,
              max: 10,
            },
            legend: {
              position: "top",
              horizontalAlign: "right",            
              offsetY: -25,
              offsetX: -5,
            },
 
          },
          series: [
            {
              data: copyItem,
            },
          ],
        };
      }
      return this.linewithDataChart;
    },
  },
};
</script>
