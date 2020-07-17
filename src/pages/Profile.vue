<template>
  <div>
    <div class="page-header clear-filter" filter-color="orange">
      <parallax
        class="page-header-image"
        style="background-image:url('img1/court.jpg')"
      >
      </parallax>
      <div class="container">
        <div class="photo-container">
          <img src="img1/user.png" alt="" />
        </div>
        <h3 class="title">{{ userProfile.fullname }}</h3>
        <p class="category">{{ userProfile.email }}</p>
        <div class="content">
          <div class="social-description pull-left">
            <p>Phone number</p>
            <h2>{{ userProfile.phoneNumber }}</h2>
          </div>

          <div class="social-description pull-right">
            <p>Date of Birth</p>
            <h2 class="date">{{ userProfile.dateOfBirth }}</h2>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="container">
        <div class="button-container" @click="modals.classic = true">
          <a class="btn btn-primary btn-round btn-lg qr-btn">Show my QR code</a>
        </div>
        <modal
          :show.sync="modals.classic"
          class="modal-primary"
          :show-close="false"
          header-classes="justify-content-center"
          footer-classes="justify-content-center"
          type="mini"
        >
          <div slot="header">
            <h3>Users QR code</h3>
          </div>
          <div>
            <qrcode-vue
              :value="userProfile.uid"
              :size="size"
              level="H"
            ></qrcode-vue>
          </div>
          <template slot="footer">
            <n-button type="neutral" link @click.native="modals.classic = false"
              >Close</n-button
            >
          </template>
        </modal>
        <h3 class="title">About me</h3>
        <h5 class="description">
          An artist of considerable range, Ryan — the name taken by
          Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and
          records all of his own music, giving it a warm, intimate feel with a
          solid groove structure. An artist of considerable range.
        </h5>
      </div>
    </div>
  </div>
</template>
<script>
import { Tabs, TabPane, Modal, Button } from "@/components";
import { mapState } from "vuex";
import QrcodeVue from "qrcode.vue";

export default {
  name: "profile",
  bodyClass: "profile-page",
  components: {
    Tabs,
    TabPane,
    Modal,
    [Button.name]: Button,
    QrcodeVue,
  },
  computed: {
    ...mapState({
      userProfile: (state) => state.user.userProfile,
    }),
  },
  data() {
    return {
      modals: {
        classic: false,
      },
      size: 200,
    };
  },
};
</script>
<style lang="scss" scoped>
.date {
  width: max-content;
}
.qr-btn {
  color: #ffffff;
}
</style>
