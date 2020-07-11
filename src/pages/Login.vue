<template>
  <div class="page-header clear-filter" filter-color="orange">
    <div
      class="page-header-image"
      style="background-image: url('img1/court.jpg')"
    ></div>
    <div class="content">
      <div class="container">
        <div class="col-md-8 col-12 ml-auto mr-auto">
          <card type="login" plain>
            <div slot="header" class="mt-5">
              <h1>Login</h1>
            </div>

            <fg-input
              class="no-border input-lg"
              addon-left-icon="now-ui-icons ui-1_email-85"
              placeholder="Email..."
            >
            </fg-input>

            <fg-input
              class="no-border input-lg"
              type="password"
              addon-left-icon="now-ui-icons ui-1_lock-circle-open"
              placeholder="Password..."
            >
            </fg-input>

            <template slot="raw-content">
              <div class="card-footer text-center">
                <a
                  href="#pablo"
                  class="btn btn-primary btn-round btn-lg btn-block"
                  >Login</a
                >
              </div>

              <div>
                <h6>
                  <router-link
                    v-popover:popover1
                    class="link footer-link"
                    to="/signup"
                  >
                    Create an account</router-link
                  >
                </h6>
              </div>
            </template>
          </card>
        </div>
      </div>
    </div>
    <main-footer></main-footer>
  </div>
</template>
<script>
import { Card, Button, FormGroupInput } from "@/components";
import MainFooter from "@/layout/MainFooter";
export default {
  name: "login-page",
  bodyClass: "login-page",
  components: {
    Card,
    MainFooter,
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
  },
};
</script>
<style></style>
