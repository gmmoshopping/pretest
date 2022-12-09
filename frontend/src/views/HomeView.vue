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
  page: {
    title: "Coding",
    meta: [{ name: "description", content: "PreTest" }]
  },  
  components: {
    Container,
    Footer,
    Navbar,
    Dashboard
  },
};
</script>
