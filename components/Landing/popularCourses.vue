<template>
  <!-- Container with margin-top -->
<div class="mt-40">
  
  <!-- Header section with flex layout and spacing -->
  <div class="flex justify-between mb-10">
    
    <!-- Main heading -->
    <h1 class="font-extrabold mt-5 text-4xl">
      <!-- Styled text inside heading -->
      <span class="text-purple-500 font-extrabold">محبوب ترین</span> دوره ها
    </h1>

    <!-- Custom tab component -->
    <UTabs
      :ui="{
        wrapper: 'relative space-y-2 text-white',
        list: {
          background: 'bg-[#FFFFFF1A] dark:bg-gray-800',
          rounded: 'rounded-full',
          height: 'h-20',
          marker: {
            wrapper: 'absolute -translate-y-3 px-2 duration-200 ease-out focus:outline-none',
            base: 'w-full h-14',
            background: 'bg-[#7F56D9]',
            rounded: 'rounded-full',
          },
          tab: {
            active: 'text-white',
            inactive: 'text-white',
            padding: 'px-5',
            size: 'text-lg',
          },
        },
      }"
      :items="tabTitle"
      @change="onChange"
    />
  </div>
  
  <!-- Courses section with flex wrap layout -->
  <div class="flex flex-wrap justify-between">
    <!-- Loop through Courses array -->
    <div
      v-for="item in Courses"
      class="bg-[#381D74] shadow-md rounded-3xl flex flex-col w-[31%]  mb-6"
    >
      <!-- Conditional rendering: Show image or skeleton loader -->
      <NuxtImg
        v-if="Loading"
        class="h-52 object-cover rounded-t-3xl"
        :src="item.img"
      />
      <USkeleton v-else class="h-52 rounded-t-3xl bg-[#7966EA]" />

      <!-- Course details when loading is true -->
      <div v-if="Loading" class="px-10 py-6 flex flex-col gap-5">
        <!-- Course info and badge -->
        <div class="flex justify-between">
          <!-- Course hours and play icon -->
          <div class="flex gap-2 mt-2">
            <h4 class="font-light text-xs">
              بیشتر از {{ item.courseHour }} ساعت
            </h4>
            <UIcon
              name="material-symbols:play-circle-rounded"
              class="w-5 h-5 text-[#7966EA]"
            />
          </div>
          <!-- Course tag badge -->
          <UBadge
            color="purple"
            size="lg"
            :ui="{
              rounded: 'rounded-full',
              font: 'font-light',
              size: { lg: 'text-sm px-7 py-1' },
              color: {
                purple: {
                  solid: ' bg-[#DADAF738] ',
                },
              },
            }"
            >{{ item.CourseTag }}</UBadge
          >
        </div>
        
        <!-- Course title -->
           <h1 class="font-extrabold text-lg break-words">{{ item.courseTitle }}</h1>
        
        <!-- Divider -->
        <UDivider />

        <!-- Teacher and student info -->
        <div class="flex gap-3 justify-between">
          <!-- Teacher details -->
          <div class="text-xs flex gap-3">
            <UAvatar
              src="https://avatars.githubusercontent.com/u/739984?v=4"
              alt="Avatar"
            />
            <div class="flex flex-col">
              <h1 class="font-normal">{{ item.Teacher.name }}</h1>
              <h2 class="font-extralight">{{ item.Teacher.expertise }}</h2>
            </div>
          </div>
          <!-- Student count -->
          <div class="text-center flex gap-3">
            <UDivider class="" orientation="vertical" />
            <div>
              <h1>{{ item.student }}</h1>
              <h2>دانشجو</h2>
            </div>
          </div>
        </div>
        
        <!-- Divider -->
        <UDivider />
        
        <!-- Start course button -->
        <UButton
          class="w-fit rounded-full bg-purple-600 hover:bg-purple-500 duration-100"
          >شروع آموزش</UButton
        >
      </div>

      <!-- Skeleton loader for course details when loading is false -->
      <USkeleton v-else class="h-64 w-[335px] bg-[#381D74] rounded-full" />
    </div>
  </div>
  
  <!-- View all courses button -->
  <div class="flex justify-center my-10">
    <UButton
      color="purple"
      size="xl"
      :ui="{
        base: 'duration-300',
        rounded: 'rounded-full',
        padding: { xl: 'py-4 px-10' },
        color: { purple: { solid: ' bg-purple-600 hover:bg-purple-400 ' } },
      }"
      >مشاهده دوره ها</UButton
    >
  </div>
</div>

</template>

<script setup>
// Loading state reference (initially true)
const Loading = ref(true);

// Function to handle tab change
function onChange(index) {
  Loading.value = false;
  setTimeout(() => {
    Loading.value = true;
  }, 1000);
}

// Array of tab titles with labels
const tabTitle = [
  {
    label: "وب 3", // Tab label for Web 3
  },
  {
    label: "سالدیتی", // Tab label for Solidity
  },
  {
    label: "مفاهیم پایه", // Tab label for Basic Concepts
  },
  {
    label: "بلاکچین", // Tab label for Blockchain
  },
  {
    label: "وب", // Tab label for Web
  },
];




// Array of course objects
const Courses = [
  {
    courseHour: 10, // Course duration in hours
    student: 1440, // Number of students enrolled
    img: "/placeholder.jpg", // Placeholder image for the course
    CourseTag: "وب", // Course category/tag
    courseTitle: "دوره تستی ، این یه متن تستیه فقط قراره نتیجه ببینیم .", // Title of the course (empty for now)
    Teacher: { 
      name: "نوید بخشیانی", // Teacher's name
      expertise: "برنامه نویس سایت و بلاکچین" // Teacher's expertise
    },
  },
  {
    courseHour: 10,
    student: 1440,
    img: "/placeholder.jpg",
    CourseTag: "وب",
    courseTitle: "دوره تستی ، این یه متن تستیه فقط قراره نتیجه ببینیم .",
    Teacher: { name: "نوید بخشیانی", expertise: "برنامه نویس سایت و بلاکچین" },
  },
  {
    courseHour: 10,
    student: 1440,
    img: "/placeholder.jpg",
    CourseTag: "وب",
    courseTitle: "دوره تستی ، این یه متن تستیه فقط قراره نتیجه ببینیم .",
    Teacher: { name: "نوید بخشیانی", expertise: "برنامه نویس سایت و بلاکچین" },
  },
  {
    courseHour: 10,
    student: 1440,
    img: "/placeholder.jpg",
    CourseTag: "وب",
    courseTitle: "دوره تستی ، این یه متن تستیه فقط قراره نتیجه ببینیم .",
    Teacher: { name: "نوید بخشیانی", expertise: "برنامه نویس سایت و بلاکچین" },
  },
  {
    courseHour: 10,
    student: 1440,
    img: "/placeholder.jpg",
    CourseTag: "وب",
    courseTitle: "دوره تستی ، این یه متن تستیه فقط قراره نتیجه ببینیم .",
    Teacher: { name: "نوید بخشیانی", expertise: "برنامه نویس سایت و بلاکچین" },
  },
  {
    courseHour: 10,
    student: 1440,
    img: "/placeholder.jpg",
    CourseTag: "وب",
    courseTitle: "دوره تستی ، این یه متن تستیه فقط قراره نتیجه ببینیم .",
    Teacher: { name: "نوید بخشیانی", expertise: "برنامه نویس سایت و بلاکچین" },
  },
];



</script>

<style></style>
