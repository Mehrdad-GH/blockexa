<template>
  <div class="bg-gradient-to-b from-[rgba(85,59,145,0.3)] to-[rgba(85,59,145,0)] w-full mt-10 px-32 py-10 max-md:px-10" style="background: linear-gradient(171.32deg, rgba(85, 59, 145, 0.3) 6.62%, rgba(85, 59, 145, 0) 134.88%);">
    <!-- Main content container -->
    <div class="flex justify-between max-md:flex-col max-md:items-center max-md:text-center">
      <!-- Contact information section -->
      <div class="flex flex-col font-thin gap-5">
        <h2 class="text-2xl font-bold">تماس با ما</h2>
        <h3>
          <UIcon class="ml-2" name="material-symbols:location-on-outline" />
          اصفهان ، نجف اباد ، خیابان دلگشا ، خیابان ابوالقاسمی ، مرکز مشاوره و
          خدمات کار آفرینی صفاتک
        </h3>
        <h3>
          <UIcon class="ml-2" name="material-symbols:call-outline-rounded" />
          989139372187+ - 989370286773+
        </h3>
        <h3>
          <UIcon class="ml-2" name="material-symbols:mail-outline" />
          blockexa.site@gmail.com
        </h3>
      </div>
  
      <!-- Logo and branding section -->
      <div class="flex flex-col">
        <div class="flex items-center">
          <NuxtImg sizes="140" src="/Logo.png" />
          <h2 class="text-3xl font-bold">بلاک اگزا</h2>
        </div>
        <h2 class="text-center font-light">
          بزرگترین مرجع یادگیری مفاهیم پایه و برنامه<br />
          نویسی بلاکچین در ایران .
        </h2>
      </div>
    </div>
  
    <!-- Separator line -->
    <hr class="w-full mt-10 opacity-50" />
  
    <!-- Social icons and copyright -->
    <div class="flex justify-between mt-8 max-md:flex-col max-md:items-center max-md:gap-5">
      <div class="flex gap-5">
        <UIcon name="ph:dribbble-logo-bold" />
        <UIcon name="ph:behance-logo-bold" />
        <UIcon name="teenyicons:instagram-outline" />
        <UIcon name="ri:twitter-x-line" />
        <UIcon name="ph:facebook-logo" />
      </div>
      <h3>Copyright 2023 | All Rights Reserved</h3>
    </div>
  </div>
</template>
