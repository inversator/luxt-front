<template lang="pug">
  div
    tutorial
</template>

<script setup lang="ts">
import Tutorial from '~/components/Tutorial.vue';
import useAuth from '~/composables/useAuth';
import {useUserStore} from '~/stores/useUserStore'

const {$apiClient} = useNuxtApp();
const {isAuthenticated} = useAuth();
const {user} = useUserStore();

onMounted(async () => {
  console.log(isAuthenticated)
  if (isAuthenticated) {
    console.info('User is authenticated');

    // Authorization check
    await $apiClient.get('/v1/pages')

    console.log(user);
  } else {
    console.info('User is not authenticated');
  }
})

useSeoMeta({
  title: 'Main',
  description: 'Main page for article site',
  robots: 'index, follow',
  'og:type': 'website',
  'og:title': 'Main',
  'og:description': 'Main page for article site',
  // 'og:url': 'https://example.com',
  // 'og:image': 'https://example.com/image.png',
  // 'twitter:card': 'summary_large_image',
  // 'twitter:title': 'Main',
  // 'twitter:description': 'Main page for article site',
  // 'twitter:image': 'https://example.com/image.png',
  // 'twitter:url': 'https://example.com',
  // 'twitter:site': '@example',
  // 'twitter:creator': '@example',
});

definePageMeta({
  middleware: ['auth'],
})

</script>

<style lang="scss">
h2 {
  @include Title;
}
</style>
