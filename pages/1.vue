<template>
  <div>
    <templates-simple v-if="decodedData" :acc="decodedData" />
    <div
      v-else-if="error"
      class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
    >
      <p class="text-slate-500 text-sm">Invalid or missing profile link.</p>
      <nuxt-link to="/" class="mt-4 inline-block text-indigo-500 underline text-sm">Create your own</nuxt-link>
    </div>
    <div
      v-else
      class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
    >
      <base-loading class="h-5 w-5" />
    </div>
  </div>
</template>
<script setup>
import { decodeData } from "../utils/transformer";
const route = useRoute();
const acc = route.query.data;
const decodedData = ref(null);
const error = ref(false);

const result = decodeData(acc);
if (result) {
  decodedData.value = result;
} else {
  error.value = true;
}
</script>
