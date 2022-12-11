<template>
  <section class="section bg-white" id="news">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="text-center mb-5">
            <div class="small-title">Graph</div>
            <h4>Dashboard</h4>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title mb-4">Pie Chart</h4>
              <PieChart :height="140" />
            </div>
          </div>
        </div>

        <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title mb-4">Bar Chart</h4>
              <BarChart :height="300" />
            </div>
          </div>
        </div>

        <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title mb-4">Line Chart</h4>
              <LineChart :height="300" />
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title mb-4">Donut Chart</h4>
              <DonutChart :height="140" />
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">Polar area Chart</h4>         
            <PolarChart :height="160" />
          </div>
        </div>
        </div>      
        <div class="col-sm-4">
          <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">Radar Chart</h4>       
            <RadarChart :height="160" />
          </div>
        </div>
        </div>             
      </div>
    </div>
  </section>
</template>
<script>
import { Carousel, Slide } from "vue-carousel";
import BarChart from "./BarChart.vue";
import LineChart from "./LineChart.vue";
import PieChart from "./PieChart.vue";
import DonutChart from "./DonutChart.vue";
import PolarChart from "./PolarChart.vue";
import RadarChart from "./RadarChart.vue";

export default {
  name: "Dashboard",
  props: {
    msg: String,
  },
  components: {
    Carousel,
    Slide,
    BarChart,
    LineChart,
    PieChart,
    DonutChart,
    PolarChart,
    RadarChart,
  },
  data() {
    return {
      start: "",
      end: "",
      interval: "",
      days: "",
      minutes: "",
      hours: "",
      seconds: "",
      starttime: "Nov 5, 2020 15:37:25",
      endtime: "Dec 31, 2021 16:37:25",
      Data:null,
    };
  },
  created() {
    window.addEventListener("scroll", this.windowScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.windowScroll);
  },
  mounted() {
    this.start = new Date(this.starttime).getTime();
    this.end = new Date(this.endtime).getTime();
    this.timerCount(this.start, this.end);
    this.interval = setInterval(() => {
      this.timerCount(this.start, this.end);
    }, 1000);
  },
  methods: {  
    timerCount: function (start, end) {
      var now = new Date().getTime();
      var distance = start - now;
      var passTime = end - now;
      if (distance < 0 && passTime < 0) {
        clearInterval(this.interval);
        return;
      } else if (distance < 0 && passTime > 0) {
        this.calcTime(passTime);
      } else if (distance > 0 && passTime > 0) {
        this.calcTime(distance);
      }
    },
    calcTime: function (dist) {
      this.days = Math.floor(dist / (1000 * 60 * 60 * 24));
      this.hours = Math.floor(
        (dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      this.minutes = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((dist % (1000 * 60)) / 1000);
    },
    windowScroll() {
      const navbar = document.getElementById("navbar");
      if (
        document.body.scrollTop >= 50 ||
        document.documentElement.scrollTop >= 50
      ) {
        navbar.classList.add("nav-sticky");
      } else {
        navbar.classList.remove("nav-sticky");
      }
    },
    toggleMenu() {
      document.getElementById("topnav-menu-content").classList.toggle("show");
    },
    nextSlide() {
      this.$refs.carousel.goToPage(this.$refs.carousel.getNextPage());
    },
    prevSlide() {
      this.$refs.carousel.goToPage(this.$refs.carousel.getPreviousPage());
    },
  },
};
</script>

<style scoped lang="scss"></style>
