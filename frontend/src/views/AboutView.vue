<template>
  <div>
    <Navbar />
    <CRUD />
    <Datatable />
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import CRUD from "@/components/Crud.vue";
import Datatable from "@/components/Datatable.vue";
export default {
  name: "HomeView",
  page: {
    title: "Coding",
    meta: [{ name: "description", content: "PreTest" }]
  },  
  components: {
    CRUD,
    Datatable,
    Footer,
    Navbar,
  },
};
</script>
