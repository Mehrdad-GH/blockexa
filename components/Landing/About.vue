<template>
    <!-- Shadow overlay -->
    <div>
      <div
        class="absolute bg-[#3D5CFF33] w-96 h-96 left-0 -translate-x-28 -translate-y-18 blur-2xl rounded-full"
      ></div>
    </div>
  
    <!-- Main Heading -->
    <div class="mt-56 flex justify-center">
      <h1 class="text-5xl font-extrabold">
        <span class="text-purple-500 font-extrabold">تفاوت ما </span>با بقیه چیه؟
      </h1>
    </div>
  
    <!-- Content Section -->
    <div class="mt-20 flex gap-5">
      <!-- Left Column - Text Content -->
      <div class="w-1/3 mt-16 flex flex-col font-light leading-7">
        <UIcon
          name="ic:round-star"
          class="w-20 h-20 self-center rotate-45 text-yellow-400 mb-5"
        />
        <h3>
          دوره های <span class="text-purple-500">بلاک اگزا</span> بر اساس مباحث و
          نیاز های روز دنیا ضبط شده، تا دانشجو ها بتونن بعد از اتمام دوره ها، برای
          مهاجرت ازشون استفاده کنن و حالشو ببرن.
        </h3>
  
        <br />
        <h3>
          دوره های این سایت حاصل 5 سال کار و تحقیق در بلاکچینه ، یاد بگیرین و لذت
          ببرین !
        </h3>
      </div>
  
      <!-- Center Column - Image -->
      <div class="flex justify-center w-1/3">
        <NuxtImg src="/aboutPerson.png" class="z-10" />
        <div class="absolute w-72 h-4/6 rounded-full bg-[#BFE3C645] z-0"></div>
      </div>
  
      <!-- Right Column - Stats -->
      <div class="flex flex-col w-1/4 gap-14">
        <!-- Stat Item 1 -->
        <div class="flex flex-row-reverse text-left gap-3">
          <div class="bg-purple-500 py-2 px-4 rounded-full">
            <UIcon name="ph:graduation-cap" class="w-8 h-8 mt-2" />
          </div>
          <div class="m-2 font-light">
            <h3 class="font-semibold">6+</h3>
            <h3>مبحث</h3>
          </div>
        </div>
        <!-- Stat Item 2 -->
        <div class="flex flex-row-reverse text-left gap-3">
          <div class="bg-purple-500 py-2 px-4 rounded-full">
            <UIcon name="ph:users" class="w-8 h-8 mt-2" />
          </div>
          <div class="m-2 font-light">
            <h3 class="font-semibold">600+</h3>
            <h3>دانشجو</h3>
          </div>
        </div>
        <!-- Stat Item 3 -->
        <div class="flex flex-row-reverse text-left gap-3">
          <div class="bg-purple-500 py-2 px-4 rounded-full">
            <UIcon name="solar:videocamera-line-duotone" class="w-8 h-8 mt-2" />
          </div>
          <div class="m-2 font-light">
            <h3 class="font-semibold">1000+</h3>
            <h3>ساعت ویدیو</h3>
          </div>
        </div>
        <!-- Stat Item 4 -->
        <div class="flex flex-row-reverse text-left gap-3">
          <div class="bg-purple-500 py-2 px-4 rounded-full">
            <UIcon name="ph:users-three" class="w-8 h-8 mt-2" />
          </div>
          <div class="m-2 font-light">
            <h3 class="font-semibold">13400+</h3>
            <h3>کاربر</h3>
          </div>
        </div>
      </div>
    </div>
  </template>
  