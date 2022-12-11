<template>
  <nav class="navbar navbar-expand-lg navigation fixed-top sticky" id="navbar">
    <div class="container">
      <a class="navbar-logo" href="/">
        <img
          src="@/assets/logo.png"
          alt
          height="19"
          class="logo logo-dark"
        />
        <img
          src="@/assets/logo.png"
          alt
          height="19"
          class="logo logo-light"
        />
      </a>

      <button
        type="button"
        class="btn btn-sm px-3 font-size-16 d-lg-none header-item"
        data-toggle="collapse"
        data-target="#topnav-menu-content"
        @click="toggleMenu()"
      >
        <i class="fa fa-fw fa-bars"></i>
      </button>

      <div class="collapse navbar-collapse" id="topnav-menu-content">
        <ul
          class="navbar-nav ms-auto"
          id="topnav-menu"
          v-scroll-spy-active="{ selector: 'a.nav-link' }"
        >
          <li class="nav-item">
            <a
              class="nav-link"              
              href="/"
              >Home</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="https://www.linkedin.com/in/thanit-netprokaew-240a37149/"
              target="_blank"
              >Linkedin</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="https://github.com/noom1009/pretest"
              target="_blank"
              >Github</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"              
              href="https://th.jobsdb.com/th/th/job/full-stack-developer-bankend-software-engineer-300003002734787?jobId=jobsdb-th-job-300003002734787&sectionRank=1&token=0~cb682348-8492-435e-99db-ac8df2b1866c&searchPath=%2Fth%2Fth%2Fsearch-jobs%2Ffull-stack-developer---bankend---software-engineer%2F1"
              target="_blank"
              >Job</a
            >
          </li>
        </ul>

        <div class="ms-lg-2">
          <a href="/about" class="btn btn-outline-success w-xs"
            >CRUD</a
          >
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
import { Carousel, Slide } from "vue-carousel";
export default {
  name: "Container",
  props: {
    msg: String,
  },
  components: { Carousel, Slide },
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
      endtime: "Dec 31, 2021 16:37:25"
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
    timerCount: function(start, end) {      
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
    calcTime: function(dist) {
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
    }
  }      
};
</script>
