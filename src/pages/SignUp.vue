<template>
  <div class="page-header clear-filter" filter-color="orange">
    <div
      class="page-header-image"
      style="background-image: url('img1/court.jpg')"
    ></div>

    <div class="content">
      <div class="container">
        <ValidationObserver v-slot="{ invalid }">
          <div class="col-md-8 col-12 ml-auto mr-auto">
            <card type="login" plain>
              <div slot="header" class="sign-up">
                <h1>Sign Up</h1>
              </div>

              <fg-input
                v-model="signupForm.fullname"
                class="no-border input-lg"
                addon-left-icon="now-ui-icons users_circle-08"
                placeholder="Full Name..."
                name="Fullname"
                id="fullname"
                rules="required|min:6"
              >
              </fg-input>

              <fg-input
                v-model="signupForm.email"
                class="no-border input-lg"
                addon-left-icon="now-ui-icons ui-1_email-85"
                placeholder="Email..."
                name="Email"
                id="email"
                rules="required|email"
              >
              </fg-input>

              <fg-input
                v-model="signupForm.phoneNumber"
                class="no-border input-lg"
                addon-left-icon="now-ui-icons tech_mobile"
                placeholder="Phone number"
                name="Phone number"
                id="phoneNumber"
                rules="required|numeric|min:8|max:10"
              >
              </fg-input>

              <fg-input
                v-model="signupForm.password"
                class="no-border input-lg"
                type="password"
                addon-left-icon="now-ui-icons ui-1_lock-circle-open"
                placeholder="Password..."
                name="Password"
                id="password"
                rules="required|min:6"
              >
              </fg-input>
              <fg-input
                v-model="signupForm.repeatPassword"
                class="no-border input-lg"
                type="password"
                addon-left-icon="now-ui-icons ui-1_lock-circle-open"
                placeholder="Repeat password..."
                name="Repeat password"
                id="repeatPassword"
                rules="required|min:6"
                :error="matchingPasswords"
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
                    :class="[
                      {
                        disabled:
                          invalid ||
                          !signupForm.agreeWithTerms ||
                          matchingPasswords.length > 0,
                      },
                    ]"
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
        </ValidationObserver>
      </div>
    </div>
    <main-footer></main-footer>
  </div>
</template>
<script>
import { Card, Button, FormGroupInput, Checkbox } from "@/components";
import MainFooter from "@/layout/MainFooter";
import { ValidationObserver } from "vee-validate";

export default {
  name: "signup-page",
  bodyClass: "login-page",
  components: {
    Card,
    MainFooter,
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
    [Checkbox.name]: Checkbox,
    ValidationObserver,
  },
  data() {
    return {
      signupForm: {
        fullName: "",
        email: "",
        phoneNumber: "",
        dateOfBirth: "",
        password: "",
        repeatPassword: "",
        agreeWithTerms: false,
      },
      isFormValid: true,
    };
  },
  computed: {
    matchingPasswords() {
      if (this.signupForm.repeatPassword) {
        return this.signupForm.password === this.signupForm.repeatPassword
          ? ""
          : "Passwords a`re not identical";
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@media screen and (max-width: 820px) {
  .sign-up {
    margin-top: 3rem !important;
  }
}
</style>
