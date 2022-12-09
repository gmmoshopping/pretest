<template>
  <div>
    <Navbar />
    <Container />
    <Dashboard />
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import Container from "@/components/Container.vue";
import Dashboard from "@/components/Dashboard.vue";

export default {
  name: "HomeView",
  components: {
    Container,
    Footer,
    Navbar,
    Dashboard
  },
};
</script>
