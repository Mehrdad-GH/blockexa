<template>
  <div class="relative">
    <!-- Marker Box Component -->
    <ShapeMarkerBox class="mt-28" />
    <!-- Shadow Overlay -->
    <div
      class="absolute bg-[#3D5CFF33] w-96 h-96 mb-10 right-0 translate-x-64 -translate-y-20 blur-2xl rounded-full"
    ></div>
    <!-- Bubble Shape Component -->
    <ShapeBubbleShape />
  </div>

  <div class="mt-72"> <!-- container -->
    <!-- Heading -->
    <div class="flex justify-center font-extrabold text-5xl mb-20">
      <h1>
        چرا باید <span class="text-[#7F56D9] font-extrabold">بلاکچین </span>یاد
        بگیریم؟
      </h1>
    </div>

    <!-- Blockchain Items -->
    <div class="flex flex-wrap overflow-hidden">
      <!-- Loop through BlockchainItem -->
      <div v-for="item in BlockchainItem" class="lg:w-1/4 w-full sm:w-1/2 p-2">
        <!-- Card -->
        <div
          class="flex justify-between items-center px-10 py-5 rounded-lg duration-300 bg-[#524870] hover:bg-purple-800"
        >
          <h1 class="font-light">{{ item.name }}</h1>
          <!-- Icon -->
          <UIcon :name="item.Icon" class="w-5 h-5" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const BlockchainItem = [
  { name: "پرسرعت و بدون اتلاف زمان", Icon: "gravity-ui:picture" },
  { name: "تکنولوژی آینده", Icon: "majesticons:scroll-text-line" },
  { name: "امنیت لایه ای", Icon: "lucide:layers-3" },
  { name: "موقعیت های شغلی", Icon: "mdi:fountain-pen-tip" },
  { name: "مهاجرت", Icon: "tabler:music" },
  { name: "بازار های مالی", Icon: "charm:chart-line" },
  { name: "نو ظهور و دست نخورده", Icon: "ic:round-incomplete-circle" },
  { name: "ذخیره داده های بزرگ", Icon: "material-symbols:database-outline" },
];
</script>

<style>

</style>
