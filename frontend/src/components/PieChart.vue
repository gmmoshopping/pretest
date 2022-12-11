<script>
import { Pie } from "vue-chartjs";
import { DashboardService } from "@/api/index.js";
export default {
  extends: Pie,
  data() {
    return {
      ChartData: null,
    };
  },
  created() {
    this.getData();
  },
  mounted() {
    this.renderChart(
      {
        labels: ["Desktops", "Tablets"],
        datasets: [
          {
            data: this.ChartData [300, 180],
            backgroundColor: ["#34c38f", "#ebeff2"],
            hoverBackgroundColor: ["#34c38f", "#ebeff2"],
            hoverBorderColor: "#fff",
          },
        ],
      },
      {
        maintainAspectRatio: true,
        responsive: true,
      }
    );
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
        this.ChartData = results.result.map((items) => {
          return {
            name: items.Seed_RDCSD,
            value: items.Total,
          };
        });
        return this.ChartData;
      }
    },
  },
};
</script>
