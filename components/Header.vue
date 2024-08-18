<template>
  <div class="flex items-center justify-between mt-2">
    <!-- shadow overLay -->
    <div
      class="absolute bg-[#3D5CFF] w-96 h-96 opacity-20 top-0 right-0 translate-x-64 -translate-y-44 blur-2xl rounded-full"
    ></div>

    <!-- Logo & title -->
    <div class="flex items-center">
      <NuxtImg sizes="120" src="/Logo.png" />
      <h2 class="text-3xl font-black">بلاک اگزا</h2>
    </div>
    
    <!-- navbar -->
    <ui class="flex list-none gap-7">
      <li v-for="item in menu" :key="item.id">
        <a :href="item.Link">{{ item.title }}</a>
      </li>
    </ui>

    <!-- button overlay -->
    <NuxtImg class="-mt-3 -translate-y-6" src="/ButtonOverlay.png" />


    <!-- Sign in and Sign up Buttons -->
    <div class="flex gap-8">
      <button
        class="rounded-full bg-[#7F56D9] b px-7 py-3 hover:bg-[#381D74] duration-300"
      >
        شروع کنیم !
      </button>
      <button
        class="rounded-full border-2 px-7 py-3 hover:bg-[#7F56D9] duration-300"
      >
        ورود به اکانت
      </button>
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
  { title: "  همکاری با ما", Link: "#" },
];
</script>
