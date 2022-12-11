<template>
  <section class="section bg-white" id="news">
    <div class="container">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">ข้อมูลทั้งหมด</h4>
            <div class="row mt-4">
                  <div class="col-sm-12 col-md-6">
                    <div id="tickets-table_length" class="dataTables_length">
                      <label class="d-inline-flex align-items-center fw-normal">
                        Show&nbsp;
                        <b-form-select
                          v-model="perPage"
                          size="sm"
                          :options="pageOptions"
                          class="form-control form-select form-select-sm"
                        ></b-form-select
                        >&nbsp;entries
                      </label>
                    </div>
                  </div>                  
                  <div class="col-sm-12 col-md-6">
                    <div
                      id="tickets-table_filter"
                      class="dataTables_filter text-md-end"
                    >
                      <label class="d-inline-flex align-items-center">
                        Search:
                        <b-form-input
                          v-model="filter"
                          type="search"
                          class="form-control form-control-sm ms-2"
                        ></b-form-input>
                      </label>
                    </div>
                  </div>                  
                </div>                
                <div class="table-responsive table-hover mb-0">
                  <b-table
                    :items="activitiesData"
                    :fields="fields"
                    responsive="sm"
                    :per-page="perPage"
                    :current-page="currentPage"
                    :sort-by.sync="sortBy"
                    :sort-desc.sync="sortDesc"
                    :filter="filter"
                    :filter-included-fields="filterOn"
                    @filtered="onFiltered"
                  ></b-table>
                </div>
                <div class="row">
                  <div class="col">
                    <div
                      class="dataTables_paginate paging_simple_numbers float-end"
                    >
                      <ul class="pagination pagination-rounded mb-0">                        
                        <b-pagination
                          v-model="currentPage"
                          :total-rows="rows"
                          :per-page="perPage"
                        ></b-pagination>
                      </ul>
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

import { DashboardService } from "@/api/index.js";
export default {
  data() {
    return {
      activitiesData: null,
      activitieslength: 0,
      items: [ ],
      totalRows: 1,
      currentPage: 1,
      perPage: 10,
      pageOptions: [10, 25, 50, 100],
      filter: null,
      filterOn: [],
      sortBy: "id",
      sortDesc: false,
      fields: [
        {
          key: "id",
          label: "ID No",
          sortable: true,
        },
        {
          key: "Seed_RepDate",
          sortable: true,
        },
        {
          key: "Seed_Year",
          sortable: true,
        },{
          key: "Seed_Varity",
          sortable: true,
        },
        {
          key: "Seeds_YearWeek",
          sortable: true,
        },
        {
          key: "Seed_RDCSD",
          sortable: true,
        },
        {
          key: "Seed_Season",
          label: "Seed_Season",
          sortable: true,
        },  
        {
          key: "Seed_Crop_Year",
          label: "Seed_Crop_Year",
          sortable: true,
        },
      ],
    };
  },
  computed: {
    rows() {
      return this.activitieslength;
    },
  },
  created(){
    this.getData();
  },
  mounted() {
    this.totalRows = this.items.length;
  },
  methods: {    
    onFiltered(filteredItems) {      
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
   async getData(){
    const results = await DashboardService.getData();
      if (results.messagesboxs == "unSuccess") {
        this.$swal({
          icon: "warning",
          title: appConfig.plaseInputContact,
          text: appConfig.plaseInputMessageContact,
          allowOutsideClick: false,
        });
      } else {
        this.activitiesData = results.result.map((items) => {
                return {
                    id: items._id,
                    Seed_RepDate: items.Seed_RepDate,
                    Seed_Year: items.Seed_Year,
                    Seeds_YearWeek: items.Seeds_YearWeek,
                    Seed_Varity: items.Seed_Varity,
                    Seed_RDCSD: items.Seed_RDCSD,
                    Seed_Season: items.Seed_Season,
                    Seed_Crop_Year: items.Seed_Crop_Year,
                };
              })
        this.activitieslength = results.result.length
      }
      return this.activitiesData , this.activitieslength
    }
  },
};
</script>
