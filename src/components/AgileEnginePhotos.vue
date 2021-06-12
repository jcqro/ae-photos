<template>
<div>
  <v-pagination
      v-model="imagesPayload.page"
      :length="imagesPayload.pageCount"
       @input="handlePageChange"
      :total-visible="7"
    ></v-pagination>
    <v-row>
      <v-col
        v-for="(picture, index) in imagesPayload.pictures"
        :key="index"
        class="d-flex child-flex"
        cols="4"
      >
        <v-img
          :src="picture.cropped_picture"
          aspect-ratio="1"
          class="grey lighten-2"
        >
          <template v-slot:placeholder>
            <v-row
              class="fill-height ma-0"
              align="center"
              justify="center"
            >
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
         <!--  <v-dialog
            v-model="dialog"
            fullscreen
            hide-overlay
            transition="dialog-bottom-transition"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="primary"
                dark
                v-bind="attrs"
                v-on="on"
              >
                Details
              </v-btn>
            </template>
            <v-card>
              <v-toolbar
                dark
                color="primary"
              >
                <v-btn
                  icon
                  dark
                  @click="dialog = false"
                >
                  <v-icon>mdi-close</v-icon>
                </v-btn>
                <v-toolbar-title>Details</v-toolbar-title>
              </v-toolbar>
            </v-card>
          </v-dialog> -->
        </v-img> 
      </v-col>
  </v-row>
</div>
  
</template>

<script>
import ImageService from "@/services/ImageService";

  export default {
    name: 'AgileEnginePhotos',
    data: () => ({
      imagesPayload: [],
      page: null,
      dialog: false,
    }),
    created() {
      this.axios.defaults.headers.common["Authorization"] = `Bearer ${this.$store.getters.key.token}`;
      this.loadImages();
    },
    methods: {
      loadImages() {
       return ImageService.getImages(this.page).then(response => {
          this.imagesPayload= response.data;
        }).catch(() => {       

        });
      },
      handlePageChange(value) {
        this.page = value;
        this.loadImages();
      },
    },
  }
</script>
