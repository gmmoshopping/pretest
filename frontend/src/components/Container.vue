<template>
      <section class="section hero-section bg-ico-hero" id="home">
        <div class="bg-overlay bg-primary"></div>
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-5">
              <div class="text-white-50">
                <h1
                  class="text-white fw-semibold mb-3 hero-title"
                >Skote - Ico Landing for a cryptocurrency business</h1>
                <p
                  class="font-size-14"
                >It will be as simple as occidental in fact to an English person, it will seem like simplified as a skeptical Cambridge</p>

                <div class="button-items mt-4">
                  <a href="javascript: void(0);" class="btn btn-success">Get Whitepaper</a>
                  <a href="javascript: void(0);" class="btn btn-light">How it work</a>
                </div>
              </div>
            </div>
            <div class="col-lg-5 col-md-8 col-sm-10 ms-lg-auto">
              <div class="card overflow-hidden mb-0 mt-5 mt-lg-0">
                <div class="card-header text-center">
                  <h5 class="mb-0">ICO Countdown time</h5>
                </div>
                <div class="card-body">
                  <div class="text-center">
                    <h5>Time left to Ico :</h5>
                    <div class="mt-4">
                      <div data-countdown="2020/12/31" class="counter-number ico-countdown">
                        <div class="coming-box">
                          {{ days }}
                          <span>Days</span>
                        </div>
                        <div class="coming-box">
                          {{ hours }}
                          <span>Hours</span>
                        </div>
                        <div class="coming-box">
                          {{ minutes }}
                          <span>Minutes</span>
                        </div>
                        <div class="coming-box">
                          {{ seconds }}
                          <span>Seconds</span>
                        </div>
                      </div>
                    </div>

                    <div class="mt-4">
                      <button type="button" class="btn btn-success w-md">Get Token</button>
                    </div>

                    <div class="mt-5">
                      <h4 class="fw-semibold">1 ETH = 2235 SKT</h4>
                      <div class="clearfix mt-4">
                        <h5 class="float-end font-size-14">5234.43</h5>
                      </div>
                      <div class="progress p-1 progress-xl softcap-progress">
                        <div
                          class="progress-bar bg-info"
                          role="progressbar"
                          style="width: 15%"
                          aria-valuenow="15"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div class="progress-label">15 %</div>
                        </div>
                        <div
                          class="progress-bar progress-bar-striped progress-bar-animated"
                          role="progressbar"
                          style="width: 30%"
                          aria-valuenow="30"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div class="progress-label">30 %</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>          
        </div>        
      </section>
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

<style scoped lang="scss">
</style>
