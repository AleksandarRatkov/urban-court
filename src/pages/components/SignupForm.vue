<template>
  <div class="section section-signup signup">
    <div class="container">
      <div class="row">
        <card class="card-signup" header-classes="text-center" color="orange">
          <template slot="header">
            <h3 class="card-title title-up">Sign Up</h3>
            <div class="social-line">
              <a
                href="#pablo"
                class="btn btn-neutral btn-facebook btn-icon btn-round"
              >
                <i class="fab fa-facebook-square"></i>
              </a>
              <a
                href="#pablo"
                class="btn btn-neutral btn-google btn-icon btn-lg btn-round"
              >
                <i class="fab fa-google-plus"></i>
              </a>
              <a
                href="#pablo"
                class="btn btn-neutral btn-twitter btn-icon btn-round"
              >
                <i class="fab fa-twitter"></i>
              </a>
            </div>
          </template>
          <div class="card-footer text-center">
            <router-link to="/signup"
              ><n-button type="neutral" round size="lg"
                >Get Started</n-button
              ></router-link
            >
          </div>
        </card>
      </div>
      <div class="col text-center"></div>
    </div>
  </div>
</template>
<script>
import { Card, FormGroupInput, Button } from "@/components";

export default {
  components: {
    Card,
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
  },
};
</script>
<style lang="scss" scoped>
.signup {
  background-image: url("../../../public/img1/rim.jpeg");
  background-position: center;
  height: 768px;
}
</style>
