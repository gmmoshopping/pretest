import { graphic } from "echarts";
import { DashboardService } from "@/api/index.js";
const pieChartData = null;

async function getData() {
  const results = await DashboardService.getGroupByProvince();
  console.warn(results);
  if (results.messagesboxs == "unSuccess") {
    this.$swal({
      icon: "warning",
      title: appConfig.plaseInputContact,
      text: appConfig.plaseInputMessageContact,
      allowOutsideClick: false,
    });
  } else {
    pieChartData = results.result;
  }
  return pieChartData;
}

const pieChart = {
  visualMap: {
    show: false,
  },
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b} : {c} ({d}%)",
  },
  legend: {
    orient: "vertical",
    left: "left",
    data: ["Laptop", "Tablet", "Mobile", "Others", "Desktop"],
    textStyle: {
      color: "#999",
    },
  },
  color: ["#556ee6", "#f1b44c", "#f46a6a", "#50a5f1", "#34c38f"],
  series: [
    {
      name: "Total by province",
      type: "pie",
      radius: "55%",
      center: ["50%", "60%"],
      data: [
        { value: 335, name: "Laptop" },
        { value: 310, name: "Tablet" },
        { value: 234, name: "Mobile" },
        { value: 135, name: "Others" },
        { value: 1548, name: "Desktop" },
      ],
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)",
        },
      },
    },
  ],
};

export { pieChart };
