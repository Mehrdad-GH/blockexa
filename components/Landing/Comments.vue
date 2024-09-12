<template>
  <div class="mt-40 ">
    <div class="flex items-center ml-14">
      <h1 class="self-center flex-grow text-center text-5xl font-bold mt-10">
        <span class="text-[#7F56D9] font-bold">نظرات</span> رو بررسی کنیم
      </h1>
      <div class="grid grid-cols-10 gap-4 ml-auto">
        <div
          v-for="dot in 100"
          :key="dot"
          class="w-1 h-1 bg-gray-600 rounded-full"
        ></div>
      </div>
    </div>

    <div class="flex gap-32 mt-5 justify-between">
      <div class="w-1/3">
        <div class="flex items-center justify-center h-full">
          <!-- Top images -->
          <div
            class="flex flex-col justify-between items-center w-fit h-full max-w-lg"
          >
            <div class="w-12 h-12 rounded-full overflow-hidden shadow-lg">
              <img
                src="https://picsum.photos/100/100"
                alt="top-left"
                class="w-full h-full object-cover"
              />
            </div>

            <div
              class="w-14 h-14 -translate-x-24 rounded-full overflow-hidden shadow-lg"
            >
              <img
                src="https://picsum.photos/120/120"
                alt="top-right"
                class="w-full h-full object-cover"
              />
            </div>
          </div>

          <!-- Center image -->
          <div
            class="w-28 h-28 m-8 rounded-full overflow-hidden shadow-lg mb-6"
          >
            <img
              src="https://picsum.photos/200/200"
              alt="center-image"
              class="w-full h-full object-cover"
            />
          </div>

          <!-- Bottom images -->
          <div
            class="flex flex-col justify-between items-center w-fit h-full max-w-lg"
          >
            <div class="w-24 h-24 rounded-full overflow-hidden shadow-lg">
              <img
                src="https://picsum.photos/150/150"
                class="w-full h-full object-cover"
              />
            </div>

            <div class="w-16 h-16 mb-20 rounded-full overflow-hidden shadow-lg">
              <img
                src="https://picsum.photos/110/110"
                class="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Comments slider -->
      <div class="w-3/5">
        <div class="flex items-center justify-end">
          <Swiper
            ref="swiperRef"
            class="w-full"
            :modules="[SwiperAutoplay, SwiperEffectCards]"
            :slides-per-view="1"
            :effect="'cards'"
            :autoplay="{
              delay: 8000,
              disableOnInteraction: true,
            }"
            :cards-effect="{
              slideShadows: true,
              slideOffset: 10,
            }"
            @swiper="onSwiper"
          >
            <SwiperSlide v-for="item in comment" class="w-10">
              <div
                class="flex flex-col w-full gap-12 p-4 bg-purple-900 rounded-xl shadow-lg"
              >
                <div class="flex items-center justify-start text-right">
                  <div class="flex gap-5">
                    <!-- Author's image -->
                    <NuxtImg
                      class="w-12 h-12 rounded-full mr-3"
                      :src="item.author.img"
                      alt="User Image"
                    />
                    <div>
                      <h3 class="text-white font-semibold">
                        {{ item.author.name }}
                      </h3>
                      <p class="text-purple-300 text-sm">
                        {{ item.author.Expertise }}
                      </p>
                    </div>
                  </div>
                </div>

                <hr class="border-purple-700" />

                <!-- Comment content -->
                <p class="text-white text-sm">
                  {{ item.content }}
                </p>

                <div class="flex items-center justify-between mt-6 mx-10">
                  <!-- Slide navigation buttons -->
                  <div class="flex items-center space-x-4 gap-1">
                    <button
                      class="text-purple-300 hover:text-purple-100"
                      @click="goPrevSlide"
                    >
                      <UIcon
                        name="material-symbols:arrow-right-alt"
                        class="w-7 h-7"
                      />
                    </button>
                    <button
                      class="text-purple-300 hover:text-purple-100"
                      @click="goNextSlide"
                    >
                      <UIcon
                        name="material-symbols:arrow-left-alt"
                        class="w-7 h-7"
                      />
                    </button>
                  </div>

                  <!-- Star rating -->
                  <div class="flex flex-row-reverse items-center gap-1">
                    <span
                      v-for="n in 5"
                      :key="n"
                      class="text-lg"
                      :class="
                        n <= item.star ? 'text-yellow-400' : 'text-gray-100'
                      "
                      >★</span
                    >
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const swiperRef = ref(null);

// Save swiper instance reference
const onSwiper = (swiperInstance) => {
  swiperRef.value = swiperInstance;
};

// Go to previous slide
const goPrevSlide = () => {
  if (swiperRef.value) {
    swiperRef.value.slidePrev();
  }
};

// Go to next slide
const goNextSlide = () => {
  if (swiperRef.value) {
    swiperRef.value.slideNext();
  }
};

// Comment data
const comment = [
  {
    author: {
      name: "ابولفضل",
      Expertise: "دانشجوی دوره بلاکچین",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    star: 4,
    content:
      "این صرفا یه متن و نظر تستیه و قراره که موقع پیاده سازی سایت تغییر کنه !",
  },
  {
    author: {
      name: "ابولفضل",
      Expertise: "دانشجوی دوره بلاکچین",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    star: 5,
    content:
      "این صرفا یه متن و نظر تستیه و قراره که موقع پیاده سازی سایت تغییر کنه !",
  },
  {
    author: {
      name: "ابولفضل",
      Expertise: "دانشجوی دوره بلاکچین",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    star: 3,
    content:
      "این صرفا یه متن و نظر تستیه و قراره که موقع پیاده سازی سایت تغییر کنه !",
  },
  {
    author: {
      name: "ابولفضل",
      Expertise: "دانشجوی دوره بلاکچین",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    star: 4,
    content:
      "این صرفا یه متن و نظر تستیه و قراره که موقع پیاده سازی سایت تغییر کنه !",
  },
  {
    author: {
      name: "ابولفضل",
      Expertise: "دانشجوی دوره بلاکچین",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    star: 2,
    content:
      "این صرفا یه متن و نظر تستیه و قراره که موقع پیاده سازی سایت تغییر کنه !",
  },
];
</script>
