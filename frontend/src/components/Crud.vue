<template>
  <section class="section hero-section bg-ico-hero" id="home">
    <div class="bg-overlay bg-primary"></div>
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-12 col-md-12 col-sm-10 ms-lg-auto">
          <div class="card overflow-hidden mb-0 mt-5 mt-lg-0">
            <div class="card-header text-center">
              <h5 class="mb-0">CRUD Application</h5>
            </div>
            <div class="card">
              <div class="card-body">
                <b-form @submit.prevent="submitForm" v-if="!formSubmitted">
                  <b-form-group
                    class="mb-3"
                    label="_id"
                    label-for="formrow-firstname-input"
                  >
                    <b-form-input
                      id="id"
                      type="text"
                      v-model="id"
                    ></b-form-input>
                  </b-form-group>

                  <div class="row">
                    <div class="col-md-6">
                      <b-form-group
                        class="mb-3"
                        label="Seed_RepDate"
                        label-for="formrow-email-input"
                      >
                        <b-form-input
                          id="Seed_RepDate"
                          v-model="Seed_RepDate"
                          type="text"
                        ></b-form-input>
                      </b-form-group>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <b-form-group
                          class="mb-3"
                          label="Seed_Year"
                          label-for="formrow-password-input"
                        >
                          <b-form-input
                            id="Seed_Year"
                            v-model="Seed_Year"
                            type="text"
                          ></b-form-input>
                        </b-form-group>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-lg-4">
                      <b-form-group
                        class="mb-3"
                        label="Seeds_YearWeek"
                        label-for="formrow-inputCity"
                      >
                        <b-form-input
                          id="Seeds_YearWeek"
                          v-model="Seeds_YearWeek"
                          type="text"
                        ></b-form-input>
                      </b-form-group>
                    </div>

                    <div class="col-lg-4">
                      <b-form-group
                        class="mb-3"
                        label="Seed_Varity"
                        label-for="formrow-inputCity"
                      >
                        <b-form-input
                          id="Seed_Varity"
                          v-model="Seed_Varity"
                          type="text"
                        ></b-form-input>
                      </b-form-group>
                    </div>

                    <div class="col-lg-4">
                      <b-form-group
                        class="mb-3"
                        label="Seed_RDCSD"
                        label-for="formrow-inputZip"
                      >
                        <b-form-input
                          id="Seed_RDCSD"
                          v-model="Seed_RDCSD"
                          type="text"
                        ></b-form-input>
                      </b-form-group>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-lg-4">
                      <b-form-group
                        class="mb-3"
                        label="Seed_Season"
                        label-for="formrow-inputCity"
                      >
                        <b-form-input
                          id="Seed_Season"
                          v-model="Seed_Season"
                          type="text"
                        ></b-form-input>
                      </b-form-group>
                    </div>

                    <div class="col-lg-4">
                      <b-form-group
                        class="mb-3"
                        label="Seed_Crop_Year"
                        label-for="formrow-inputZip"
                      >
                        <b-form-input
                          id="Seed_Crop_Year"
                          v-model="Seed_Crop_Year"
                          type="text"
                        ></b-form-input>
                      </b-form-group>
                    </div>
                  </div>

                  <div>
                    <b-button type="submit" variant="primary" @click="getData()"
                      >Save</b-button
                    >
                    &nbsp;
                    <b-button type="reset" variant="danger">Clear</b-button>
                  </div>
                </b-form>
              </div>
              <div class="card-body" v-if="formSubmitted">
                <h3>Form Submitted</h3>
                <p>id: {{ id }}</p>
                <p>Seed_RepDate: {{ Seed_RepDate }}</p>
                <p>Seed_Year: {{ Seed_Year }}</p>
                <p>Seeds_YearWeek: {{ Seeds_YearWeek }}</p>
                <p>Seed_Varity: {{ Seed_Varity }}</p>
                <p>Seed_RDCSD: {{ Seed_RDCSD }}</p>
                <p>Seed_Season: {{ Seed_Season }}</p>
                <p>Seed_Crop_Year: {{ Seed_Crop_Year }}</p>
                <small> Save Data </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { DashboardService } from "@/api/index.js";
export default {
  name: "CRUD",
  components: {},
  data() {
    return {
      id: 0,
      Seed_Crop_Year: null,
      Seed_RepDate: null,
      Seed_Season: null,
      Seed_RDCSD: null,
      Seed_Year: null,
      Seeds_YearWeek: null,
      Seed_Varity: null,
      id: null,
      formSubmitted: false,
    };
  },
  methods: {
    submitForm: function () {
      this.formSubmitted = true;
    },
    async getData() {
      let payload = {
        _id: this.id,
        Seed_RepDate: this.Seed_RepDate,
        Seed_Year: this.Seed_Year,
        Seeds_YearWeek: this.Seeds_YearWeek,
        Seed_Varity: this.Seed_Varity,
        Seed_RDCSD: this.Seed_RDCSD,
        Seed_Season: this.Seed_Season,
        Seed_Crop_Year: this.Seed_Crop_Year,
      };
      console.log(payload);
      const results = await DashboardService.getSave(payload);
      if (results.messagesboxs == "unSuccess") {
        this.$swal({
          icon: "warning",
          title: results.messagesboxs,
          text: results.messagesboxs,
          allowOutsideClick: false,
        });
      } else {
        this.$swal.fire({
          position: "top-end",
          icon: "success",
          title: results.messagesboxs,
          text: results.messagesboxs,
          showConfirmButton: false,
          timer: 1500,
        });
        this.$router.go();
      }
    },
  },
};
</script>

<style scoped lang="scss"></style>
