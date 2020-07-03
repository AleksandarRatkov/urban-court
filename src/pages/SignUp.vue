<template>
  <div class="page-header clear-filter" filter-color="orange">
    <div
      class="page-header-image"
      style="background-image: url('img1/court.jpg')"
    ></div>
    <div class="content">
      <div class="container">
        <div class="col-md-5 ml-auto mr-auto">
          <card type="login" plain>
            <div slot="header">
              <h1>Sign Up</h1>
            </div>

            <fg-input
              v-model="signupForm.fullname"
              class="no-border input-lg"
              addon-left-icon="now-ui-icons users_circle-08"
              placeholder="Full Name..."
              required="true"
              infoBlock="test bloka"
            >
            </fg-input>

            <fg-input
              v-model="signupForm.email"
              class="no-border input-lg"
              addon-left-icon="now-ui-icons ui-1_email-85"
              placeholder="Email..."
            >
            </fg-input>

            <fg-input
              v-model="signupForm.phoneNumber"
              class="no-border input-lg"
              addon-left-icon="now-ui-icons tech_mobile"
              placeholder="Phone number"
            >
            </fg-input>

            <fg-input
              v-model="signupForm.password"
              class="no-border input-lg"
              type="password"
              addon-left-icon="now-ui-icons ui-1_lock-circle-open"
              placeholder="Password..."
            >
            </fg-input>
            <div>
              <n-checkbox v-model="signupForm.agreeWithTerms">
                I agree to the terms and conditions.
              </n-checkbox>
            </div>
            <template slot="raw-content">
              <div class="card-footer text-center">
                <a
                  href="#pablo"
                  class="btn btn-primary btn-round btn-lg btn-block"
                  >Sign Up</a
                >
              </div>

              <div>
                <h6>
                  <router-link
                    v-popover:popover1
                    class="link footer-link"
                    to="/login"
                  >
                    Already have account?
                  </router-link>
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
import { Card, Button, FormGroupInput, Checkbox } from "@/components";
import MainFooter from "@/layout/MainFooter";
export default {
  name: "signup-page",
  bodyClass: "login-page",
  components: {
    Card,
    MainFooter,
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
    [Checkbox.name]: Checkbox,
  },
  data() {
    return {
      signupForm: {
        fullName: "",
        email: "",
        phoneNumber: "",
        dateOfBirth: "",
        password: "",
        agreeWithTerms: false,
      },
    };
  },
};
</script>
<style scoped>
input:-webkit-autofill {
  background-color: transparent !important;
  -webkit-box-shadow: 0 0 0 50px white inset;
}
</style>
