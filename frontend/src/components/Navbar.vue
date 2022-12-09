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
              v-scroll-to="'#home'"
              href="javascript: void(0);"
              >Home</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              v-scroll-to="'#about'"
              href="javascript: void(0);"
              >About</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              v-scroll-to="'#features'"
              href="javascript: void(0);"
              >Features</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              v-scroll-to="'#roadmap'"
              href="javascript: void(0);"
              >Roadmap</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              v-scroll-to="'#team'"
              href="javascript: void(0);"
              >Team</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              v-scroll-to="'#news'"
              href="javascript: void(0);"
              >News</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              v-scroll-to="'#faqs'"
              href="javascript: void(0);"
              >FAQs</a
            >
          </li>
        </ul>

        <div class="ms-lg-2">
          <a href="javascript: void(0);" class="btn btn-outline-success w-xs"
            >Sign in</a
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
