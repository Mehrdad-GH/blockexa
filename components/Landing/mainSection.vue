<template>
  <!-- aos motion -->
  <div data-aos="zoom-in">
    <!-- text & searchBar & picture section -->
    <div class="flex mt-5 justify-between max-md:hidden">
      <!-- Texts section -->
      <div class="flex flex-col gap-10">
        <h1 class="text-6xl font-black lg:max-xl:text-5xl ">
          اینجا<span class="text-purple-600 font-black"> بلاک اگزاست.</span>
        </h1>
        <h2 class="text-2xl font-bold ">
          بهترین منبع آموزش برنامه نویسی بلاکچین .
        </h2>
        <h6 class="text-gray-400">
          ما توی بلاک اگزا می خوایم که بهترین آموزش های تکنولوژی آینده ، یعنی
          بلاکچین <br />
          رو در اختیار شما قرار بدیم .
        </h6>

        <!-- SearchBar section -->
        <div
          class="flex items-center justify-between w-full mx-auto p-2 bg-white rounded-full shadow-md lg:max-xl:w-3/4"
        >
          <input
            type="text"
            placeholder="چی می‌خواهی یاد بگیری؟ اینجا سرچ کن"
            class="flex-grow text-gray-500 py-2 px-4 rounded-full focus:outline-none lg:max-xl:text-sm"
          />
          <button
            class="bg-purple-500 text-white px-6 py-2 rounded-full font-medium ml-2"
          >
            بزن بریم!
          </button>
        </div>
      </div>

      <!-- person picture  -->
      <div class="flex bg-[#7F56D980] w-fit rounded-full py-1">
        <NuxtImg class="w-72 lg:max-xl:w-64" src="/Person.png" />
      </div>
    </div>
 
<!-- responsive text section -->
    <div class="hidden mt-5 items-center max-md:flex max-md:flex-col">
      <!-- Texts section -->
      <div class="flex flex-col gap-10 items-center">
        <h1 class="text-5xl font-black text-center">
          اینجا<span class="text-purple-600 font-black"> بلاک اگزاست.</span>
        </h1>
        <h2 class="text-xl font-bold ">
          بهترین منبع آموزش برنامه نویسی بلاکچین .
        </h2>
        <h6 class="text-gray-400">
          ما توی بلاک اگزا می خوایم که بهترین آموزش های تکنولوژی آینده ، یعنی
          بلاکچین 
          رو در اختیار شما قرار بدیم .
        </h6>

        <!-- person picture  -->
      <div class="flex bg-[#7F56D980] w-fit rounded-full py-1">
        <NuxtImg class="w-72 lg:max-xl:w-64" src="/Person.png" />
      </div>

        <!-- SearchBar section -->
        <div
          class="flex items-center justify-between w-full mx-auto p-2 bg-white rounded-full shadow-md lg:max-xl:w-3/4"
        >
          <input
            type="text"
            placeholder="چی می‌خواهی یاد بگیری؟ اینجا سرچ کن"
            class="flex-grow text-gray-500 py-2 px-4 rounded-full focus:outline-none lg:max-xl:text-sm"
          />
          <button
            class="bg-purple-500 text-white px-6 py-2 rounded-full font-medium ml-2"
          >
            بزن بریم!
          </button>
        </div>
      </div>

      
    </div>

















    <!-- Company Slider  -->
    <fieldset class="border py-8 mt-4 border-stone-400 rounded-xl">
      <!-- section title -->
      <legend class="text-left ml-10 px-4 text-lg">شرکت های بلاکچینی</legend>
      <!-- Slider section -->
      <Carousel
        :="settings"
        :autoplay="20000"
        :wrapAround="true"
        :breakpoints="breakpoints"
      >
        <!-- fetch slide with v-for  -->
        <Slide v-for="item in company" :key="slide">
          <NuxtImg class="min-w-32 max-w-40 lg:max-xl:w-10" :src="item" alt="#" />
        </Slide>

        <!-- Slider navigation -->
        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </fieldset>
    <!-- shadow overLay -->
    <div
      class="absolute bg-[#3D5CFF33] w-80 h-80 top-64 left-2 t blur-2xl rounded-full"
    ></div>
  </div>
</template>

<script setup>
//Slider props
const settings = {
  itemsToShow: 3,
  snapAlign: "center",
};
// Slider responsive breakpoints
 // //to do:Make breakpoints optimized
const breakpoints = {
  // 640px and up
  100: {
    itemsToShow: 1,
    snapAlign: "center",
  },
  
  640: {
    itemsToShow: 2,
    snapAlign: "right",
  },
  // 768px and up
  768: {
    itemsToShow: 3,
    snapAlign: "center",
  },
  // 1024px and up
  1024: {
    itemsToShow: 5,
    snapAlign: "center",
  },
};
//company slider picture
const company = [
  "/Company/HubSpot.png",
  "/Company/Loom.png",
  "/Company/GitLab.png",
  "/Company/LiveChat.png",
  "/Company/monday.com.png",
];
</script>

<style>
/* style for slider navigation  */
.carousel__icon {
  color: white;
}
</style>
