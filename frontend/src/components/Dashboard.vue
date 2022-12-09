<template>
      <section class="section bg-white" id="news">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="text-center mb-5">
                <div class="small-title">Blog</div>
                <h4>Latest News</h4>
              </div>
            </div>
          </div>         

          <div class="row">
            <div class="col-xl-4 col-sm-6">
              <div class="blog-box mb-4 mb-xl-0">
                <div class="position-relative">
                  <img
                    src="@/assets/images/crypto/blog/img-1.jpg"
                    alt
                    class="rounded img-fluid mx-auto d-block"
                  />
                  <div class="badge bg-success blog-badge font-size-11">Cryptocurrency</div>
                </div>

                <div class="mt-4 text-muted">
                  <p class="mb-2">
                    <i class="bx bx-calendar me-1"></i> 04 Mar, 2020
                  </p>
                  <h5 class="mb-3">Donec pede justo, fringilla vele</h5>
                  <p>If several languages coalesce, the grammar of the resulting language</p>

                  <div>
                    <a href="#">Read more</a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-4 col-sm-6">
              <div class="blog-box mb-4 mb-xl-0">
                <div class="position-relative">
                  <img
                    src="@/assets/images/crypto/blog/img-2.jpg"
                    alt
                    class="rounded img-fluid mx-auto d-block"
                  />
                  <div class="badge bg-success blog-badge font-size-11">Cryptocurrency</div>
                </div>

                <div class="mt-4 text-muted">
                  <p class="mb-2">
                    <i class="bx bx-calendar me-1"></i> 12 Feb, 2020
                  </p>
                  <h5 class="mb-3">Aenean ut eros et nisl</h5>
                  <p>Everyone realizes why a new common language would be desirable</p>

                  <div>
                    <a href="#">Read more</a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-4 col-sm-6">
              <div class="blog-box mb-4 mb-xl-0">
                <div class="position-relative">
                  <img
                    src="@/assets/images/crypto/blog/img-3.jpg"
                    alt
                    class="rounded img-fluid mx-auto d-block"
                  />
                  <div class="badge bg-success blog-badge font-size-11">Cryptocurrency</div>
                </div>

                <div class="mt-4 text-muted">
                  <p class="mb-2">
                    <i class="bx bx-calendar me-1"></i> 06 Jan, 2020
                  </p>
                  <h5 class="mb-3">In turpis, pellentesque posuere</h5>
                  <p>To an English person, it will seem like simplified English, as a skeptical Cambridge</p>

                  <div>
                    <a href="#">Read more</a>
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