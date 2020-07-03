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
          <div class="col-md-8 ml-auto mr-auto text-center">
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
            <div class="col-md-6">
              <div
                class="image-container image-left"
                style="background-image: url('img1/teren.jpg')"
              >
                <!-- First image on the left side -->
                <p class="blockquote blockquote-primary">
                  "Over the span of the satellite record, Arctic sea ice has
                  been declining significantly, while sea ice in the
                  Antarctichas increased very slightly"
                  <br />
                  <br />
                  <small>-NOAA</small>
                </p>
              </div>
              <!-- Second image on the left side of the article -->
              <div
                class="image-container"
                style="background-image: url('img1/teren2.jpg')"
              ></div>
            </div>
            <div class="col-md-6">
              <!-- First image on the right side, above the article -->
              <div
                class="image-container image-right"
                style="background-image: url('img1/teren4.jpg')"
              >
                <!-- <img src="img1/teren.jpg" /> -->
              </div>
              <h3>
                OPENS URBAN COURT – RUKU POD RUKU SA URBANIM SPORTOVIMA
              </h3>
              <p>
                OPENS u partnerstvu sa Kompanijom NIS, Gradom Novim Sadom i
                basket ekipom Liman 3×3, kroz program Zajednici Zajedno 2018,
                realizuje OPENS Urban court, koji donosi Novosađanima prvi
                moderni i otvoreni teren za basket, na atraktivnoj lokaciji kao
                što je Liman 4, kod Sunčanog keja, u blizini Youth Creative
                Polisa – takozvane Kineske četvrti.
              </p>
              <p>
                Tereni će u narednim godinama dobijati nove sportske sadržaje,
                poput Teqball-a i streetwork out teretane. OPENS Urban court
                predstavljaće novo i bezbedno mesto za okupljanje svih onih koji
                žele svoje slobodno vreme da provedu kroz sportske, rekreativne
                i edukativne aktivnosti, i to potpuno besplatno.
              </p>
              <p>
                Cilj čitavog projekta jeste da se na adaptiranom košarkaškom
                terenu, kroz različite aktivnosti, promoviše novi olimpijski
                sport basket 3×3, urbani sportovi i zdravi stilovi života u
                Novom Sadu, što je i jedan od ciljeva OPENS misije. Otvaranje
                sportskih terena planirano je za nadolazeći period, gde će
                građani Novog Sada imati priliku da se oprobaju u basketu i
                urbanim sportovima.
              </p>
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
import BasicElements from "./components/BasicElementsSection";
import Navigation from "./components/Navigation";
import TabsSection from "./components/Tabs";
import ProgressPagination from "./components/ProgressPagination";
import Notifications from "./components/Notifications";
import Typography from "./components/Typography";
import JavascriptComponents from "./components/JavascriptComponents";
import CarouselSection from "./components/CarouselSection";
import NucleoIconsSection from "./components/NucleoIconsSection";
import SignupForm from "./components/SignupForm";
import ExamplesSection from "./components/ExamplesSection";
import DownloadSection from "./components/DownloadSection";

export default {
  name: "index",
  bodyClass: "index-page",
  components: {
    Parallax,
    BasicElements,
    Navigation,
    TabsSection,
    ProgressPagination,
    Notifications,
    Typography,
    JavascriptComponents,
    CarouselSection,
    NucleoIconsSection,
    SignupForm,
    ExamplesSection,
    DownloadSection,
  },
};
</script>
<style></style>
