<template>
  <div>
    <div class="page-header clear-filter" filter-color="orange">
      <parallax
        class="page-header-image"
        style="background-image:url('img1/court.jpg')"
      >
      </parallax>
      <div class="container">
        <div class="content-center brand">
          <img class="n-logo" src="img1/logo-footer.png" alt="" />
          <h1 class="h1-seo">Welcome to Urban Court</h1>
          <h3>Powered by Opens and Liman3x3</h3>
        </div>
      </div>
    </div>
    <div class="section section-about-us">
      <div class="container">
        <div class="row">
          <div class="col-md-9 ml-auto mr-auto text-center">
            <h2 class="title">Sta je Urban Court?</h2>
            <h5 class="description">
              Urban Court predstavlja adaptaciju sportskog terena na lokaciji
              Liman 4, novo mesto za okupljanje mladih u Novom Sadu, koji će
              moći da kvalitetno provode slobodno vreme na zdrav način, privode
              se kraju. Pored terena za basket 3×3, Novosađani će ubuduće imati
              priliku da se oprobaju u Teqball-u i Streetwork out-u.
            </h5>
          </div>
        </div>
        <div class="separator separator-primary"></div>
        <div class="section-story-overview">
          <div class="row">
            <div class="row test">
              <div
                class="col-12 col-xl-6 image-container"
                style="background-image: url('img1/teren.jpg')"
              ></div>
              <div class="col-xl-1"></div>
              <div class="col-12 col-xl-5">
                <h5 class="description">
                  Cilj čitavog projekta jeste da se na adaptiranom košarkaškom
                  terenu, kroz različite aktivnosti, promoviše novi olimpijski
                  sport basket 3×3, urbani sportovi i zdravi stilovi života u
                  Novom Sadu, što je i jedan od ciljeva OPENS misije. Otvaranje
                  sportskih terena planirano je za nadolazeći period, gde će
                  građani Novog Sada imati priliku da se oprobaju u basketu i
                  urbanim sportovima.
                </h5>
              </div>
            </div>
            <div class="row test">
              <div class="col-xl-5 order-2 order-xl-1">
                <h5 class="description">
                  Cilj čitavog projekta jeste da se na adaptiranom košarkaškom
                  terenu, kroz različite aktivnosti, promoviše novi olimpijski
                  sport basket 3×3, urbani sportovi i zdravi stilovi života u
                  Novom Sadu, što je i jedan od ciljeva OPENS misije. Otvaranje
                  sportskih terena planirano je za nadolazeći period, gde će
                  građani Novog Sada imati priliku da se oprobaju u basketu i
                  urbanim sportovima.
                </h5>
              </div>
              <div class="col-xl-1 order-xl-2"></div>
              <div
                class=" col-xl-6 order-1 order-xl-3 image-container"
                style="background-image: url('img1/teren4.jpg')"
              ></div>
            </div>
            <div class="row test">
              <div
                class=" col-xl-6 image-container"
                style="background-image: url('img1/teren2.jpg')"
              ></div>
              <div class="col-xl-1"></div>
              <div class="col-xl-5">
                <h5 class="description">
                  Cilj čitavog projekta jeste da se na adaptiranom košarkaškom
                  terenu, kroz različite aktivnosti, promoviše novi olimpijski
                  sport basket 3×3, urbani sportovi i zdravi stilovi života u
                  Novom Sadu, što je i jedan od ciljeva OPENS misije. Otvaranje
                  sportskih terena planirano je za nadolazeći period, gde će
                  građani Novog Sada imati priliku da se oprobaju u basketu i
                  urbanim sportovima.
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <signup-form></signup-form>
  </div>
</template>
<script>
import { Parallax } from "@/components";
import SignupForm from "./components/SignupForm";

export default {
  name: "index",
  bodyClass: "index-page",
  components: {
    Parallax,
    SignupForm,
  },
};
</script>
<style lang="scss" scoped>
.images {
  border-radius: 0.25rem;
}
.test {
  margin: 15px;
}
.description {
  margin-top: 50px;
}

@media screen and (min-width: 1200px) {
  .test {
    height: 450px;
  }
}
</style>
