<template>
  <section class="section hero-section bg-ico-hero" id="home">
    <div class="bg-overlay bg-primary"></div>
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-5">
          <div class="text-white-50">
            <h1 class="text-white fw-semibold mb-3 hero-title">
              Coding - Dashboard Landing page
            </h1>
            <p class="font-size-14">
              Web Application in the form of a Dashboard with content in the Dashboard consisting of Graphs such as Pie Graph, Line Graph, Table and Map are displayed as much as possible
            </p>

            <div class="button-items mt-4">
              <a href="https://github.com/noom1009/pretest" class="btn btn-success"
                >Github</a
              >
              <a href="https://www.linkedin.com/in/thanit-netprokaew-240a37149/" class="btn btn-light"
                >Linkedin</a
              >
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-8 col-sm-10 ms-lg-auto">
          <div class="card overflow-hidden mb-0 mt-5 mt-lg-0">
            <div class="card-header text-center">
              <h5 class="mb-0">Dashboard Graph</h5>
            </div>
            <div class="card">
              <v-chart :options="pieChart" autoresize />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import ECharts from "vue-echarts";
import "echarts/lib/chart/line";
import "echarts/lib/chart/bar";
import "echarts/lib/chart/pie";
import "echarts/lib/chart/scatter";
import "echarts/lib/chart/candlestick";
import "echarts/lib/chart/gauge";
import "echarts/lib/component/legend";
import "echarts/lib/component/title";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/polar";
import "echarts/lib/component/toolbox";
import "echarts/lib/component/grid";
import "echarts/lib/component/axis";
import {  pieChart } from "@/api/data";
import { DashboardService } from "@/api/index.js";
export default {
  name: "Container",
  props: {
    msg: String,
  },
  components: { Carousel, Slide, "v-chart": ECharts },
  data() {
    return {
      pieChart: pieChart,
      start: "",
      end: "",
      interval: "",
      days: "",
      minutes: "",
      hours: "",
      seconds: "",
      starttime: "Nov 5, 2020 15:37:25",
      endtime: "Dec 31, 2021 16:37:25",
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
