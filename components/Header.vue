<template>
  <div class="hidden items-center justify-between mt-2 lg:flex">
    <!-- shadow overLay -->
    <div
      class="absolute bg-[#3D5CFF] w-96 h-96 opacity-20 top-0 right-0 translate-x-64 -translate-y-44 blur-2xl rounded-full"
    ></div>

    <!-- Logo & title -->
    <div class="flex items-center">
      <NuxtImg sizes="120" src="/Logo.png" />
      <h2 class="text-3xl font-black lg:max-xl:text-xl">بلاک اگزا</h2>
    </div>

    <!-- navbar -->
    <ui class="flex list-none gap-10 lg:max-xl:text-sm z-10">
  <li v-for="item in menu" :key="item.id" class="group relative flex">
    <a :href="item.Link" class="relative inline-block hover:text-[#7F56D9] duration-300 pb-1">
      {{ item.title }}
      <span class="absolute right-0 bottom-0 h-1 w-0 mt-20 rounded-full bg-[#7F56D9] transition-all duration-300 group-hover:w-full"></span>
    </a>
  </li>
</ui>



    <!-- button overlay -->
    <ShapeButtonOverlay />

    <!-- Sign in and Sign up Buttons -->
    <div class="flex gap-8 lg:max-xl:gap-3">
      <button
        class="rounded-full bg-[#7F56D9] px-7 py-3 hover:bg-[#381D74] duration-300 lg:max-xl:px-5 lg:max-xl:text-sm"
      >
        شروع کنیم !
      </button>
      <button
        class="rounded-full border-2 px-7 py-3 hover:bg-[#7F56D9] duration-300 lg:max-xl:px-3 lg:max-xl:text-sm"
      >
        ورود به اکانت
      </button>
    </div>
  </div>

  <div class="flex gap-14 mb-10 lg:hidden">
    <div @click="winkDrawer">
      <UIcon class="mt-3 mr-5" size="50" name="material-symbols:menu" />
    </div>
    <div class="flex items-center">
      <NuxtImg sizes="120" src="/Logo.png" />
      <h2 class="text-3xl font-black max-sm:text-lg sm:text-xl max-md:text-2xl">بلاک اگزا</h2>
    </div>

    <div :class="drawer" class="fixed h-full w-1/2 bg-black z-50 text-white duration-300">
      <ul class="flex flex-col list-none gap-7 p-4">
        <li @click="winkDrawer">
        <UIcon size="45" class="bg-red-600 hover:bg-red-400" name="heroicons:x-mark-solid" />
        </li>
        <li class=" p-2 rounded" v-for="item in menu" :key="item.id">
          <a :href="item.Link" class="text-white">{{ item.title }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
// navbar Links
const menu = [
  { title: " دوره ها", Link: "#" },
  { title: " درباره ما", Link: "#" },
  { title: "  وبلاگ", Link: "#" },
  { title: "  همکاری با ما", Link: "#" },
  { title: "  تماس با ما", Link: "#" },
];

const flag = ref(false);

console.log(flag.value);

const winkDrawer = () => {
  flag.value = !flag.value;
  
};

const drawer = computed(() => {
  return flag.value ? "-right-1" : "-right-full";
});
</script>
