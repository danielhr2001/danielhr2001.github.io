<script setup lang="ts">
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
const { t, locale } = useI18n();
useHead({
  title: "personalWeb",
  meta: [{ name: "description", content: "Daniel Hajirajabi's Portfolio web" },
  { name: "application-name", content: "my profile" },
  { name: "generator", content: "Daniel Hajirajabi" },
  { name: "keywords", content: "Daniel Hajirajabi, Danial Hajirajabi, دانیال حاجی رجبی, PHP, Laravel, Backend, Developer, Programmer, FullStack, node.js" },
  { name: "author", content: "Daniel Hajirajabi" }],
});
watch(locale, (count) => {
  const card_items = document.getElementsByClassName('card-items');
  const content_personal_info = document.getElementsByClassName(
    'texts-containers-personal-info'
  );
  if (count == 'fa') {
    for (let i = 0; i < card_items.length; i++) {
      card_items[i].style.direction = 'rtl';
    }
  } else {
    for (let i = 0; i < card_items.length; i++) {
      card_items[i].style.direction = 'ltr';
    }
  }
  if (count == 'fa') {
    for (let i = 0; i < content_personal_info.length; i++) {
      content_personal_info[i].style.direction = 'rtl';
      content_personal_info[i].style.padding = '0 5vw 0 0';
    }
  } else {
    for (let i = 0; i < content_personal_info.length; i++) {
      content_personal_info[i].style.direction = 'ltr';
      content_personal_info[i].style.padding_right = '0';
    }
  }
});
</script>

<template>
  <router-view />
</template>
