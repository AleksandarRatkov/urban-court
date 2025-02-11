<template>
  <div
    class="form-group"
    :class="[
      { 'input-group': hasIcon },
      { 'has-danger': error },
      { 'input-group-focus': focused },
      { 'has-label': label || $slots.label },
    ]"
  >
    <slot name="label">
      <label v-if="label" class="control-label" :class="labelClasses">
        {{ label }}
        <span v-if="required">*</span>
      </label>
    </slot>
    <ValidationProvider v-slot="{ errors }" :name="name" :rules="rules">
      <div :class="[{ 'input-group': hasIcon }]">
        <slot name="addonLeft">
          <div v-if="addonLeftIcon" class="input-group-prepend">
            <i class="input-group-text" :class="addonLeftIcon"></i>
          </div>
        </slot>
        <slot>
          <input
            :value="value"
            :name="name"
            v-on="listeners"
            v-bind="$attrs"
            class="form-control input"
            :class="[{ valid: value && !error }, inputClasses]"
            aria-describedby="addon-right addon-left"
          />
        </slot>
        <slot name="addonRight">
          <span
            v-if="addonRightIcon"
            class="input-group-addon input-group-append"
          >
            <i class="input-group-text" :class="addonRightIcon"></i>
          </span>
        </slot>

        <slot name="infoBlock"></slot>
        <slot name="helpBlock">
          <div
            class="text-danger invalid-feedback"
            style="display: block;"
            v-if="!error"
          >
            {{ errors[0] }}
          </div>
          <div
            class="text-danger invalid-feedback"
            style="display: block;"
            v-if="error"
          >
            {{ error }}
          </div>
        </slot>
      </div>
    </ValidationProvider>
  </div>
</template>
<script>
import { extend, ValidationProvider } from "vee-validate";
import { required, email, min, numeric, max } from "vee-validate/dist/rules";

extend("required", {
  ...required,
  message: "{_field_} can not be empty",
});

extend("email", {
  ...email,
  message: "Email must be valid",
});

extend("numeric", {
  ...numeric,
  message: "{_field_} can contain only numerics",
});

extend("min", {
  ...min,
  message: "{_field_} must be greater than {length} characters",
});

extend("max", {
  ...max,
  message: "{_field_} must not exceed {length} characters",
});

export default {
  components: {
    ValidationProvider,
  },
  inheritAttrs: false,
  name: "fg-input",
  props: {
    required: Boolean,
    label: String,
    error: String,
    labelClasses: String,
    inputClasses: String,
    value: {
      type: [String, Number],
      default: "",
    },
    addonRightIcon: String,
    addonLeftIcon: String,
    rules: String,
    name: String,
  },
  data() {
    return {
      focused: false,
    };
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: this.updateValue,
        focus: this.onFocus,
        blur: this.onBlur,
      };
    },
    hasIcon() {
      const { addonRight, addonLeft } = this.$slots;
      return (
        addonRight !== undefined ||
        addonLeft !== undefined ||
        this.addonRightIcon !== undefined ||
        this.addonLeftIcon !== undefined
      );
    },
  },
  methods: {
    updateValue(evt) {
      let value = evt.target.value;
      this.$emit("input", value);
    },
    onFocus(value) {
      this.focused = true;
      this.$emit("focus", value);
    },
    onBlur(value) {
      this.focused = false;
      this.$emit("blur", value);
    },
  },
};
</script>
<style>
.input {
  height: 45px !important;
  width: 270px !important;
  border-top-right-radius: 30px !important;
  border-bottom-right-radius: 30px !important;
}
@media screen and (max-width: 320px) {
  .input {
    width: 215px !important;
  }
}

@media screen and (max-width: 360px) {
  .input {
    width: 255px !important;
  }
}
.has-danger:after {
  display: none !important;
}
</style>
