<template>
  <section class="mx-4">
    <h1 class="my-4">
      Store (pinia)
    </h1>
    <hr class="my-4" />
    <v-tabs v-model="tab" fixed-tabs color="primary">
      <v-tab v-for="item in items" :key="item">
        {{ item }}
      </v-tab>
    </v-tabs>
    <v-container v-if="tab === 0">
      <i18n-t scope="global" keypath="store.install" tag="p" class="my-4">
        <template #package1>
          <a
            :href="package1Link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>pinia</strong>
          </a>
        </template>
        <template #package2>
          <a
            :href="package2Link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>@pinia/nuxt</strong>
          </a>
        </template>
      </i18n-t>
      <CodeView :code="installCode" />

      <i18n-t scope="global" keypath="store.nuxtConfig" tag="p" class="my-4">
        <template #nuxtConfig>
          <strong>nuxt.config.js</strong>
        </template>
      </i18n-t>
      <CodeView :code="nuxtConfigCode" />
    </v-container>
    <v-container v-if="tab === 1">
      <CodeView class="my-4" :code="exampleStoreCode" language="javascript" />
      <CodeView :code="exampleTemplateCode" language="javascript" />
      <div class="text-center ma-4">
        <v-btn class="ma-2" @click="exampleStore.increment(1)">
          {{ t('store.increment') }}
        </v-btn>
        <p> {{ data }} </p>
      </div>
    </v-container>
  </section>
</template>

<script setup>

import { storeToRefs } from 'pinia';
import { useExampleStore } from '@/store/example';

const { t } = useI18n();
const runtimeConfig = useRuntimeConfig();
const exampleStore = useExampleStore();

const { data } = storeToRefs(exampleStore);

const tab = ref(0);

const items = computed(() => [
  t('code'),
  t('example'),
]);

const package1Link = ref(`${runtimeConfig.public.npmHost}/pinia`);
const package2Link = ref(`${runtimeConfig.public.npmHost}/@pinia/nuxt`);

const installCode = ref('');
const nuxtConfigCode = ref('');
const exampleStoreCode = ref('');
const exampleTemplateCode = ref('');

async function getCode() {
  installCode.value = await $fetch('/api/store/install');
  nuxtConfigCode.value = await $fetch('/api/store/config');
  exampleStoreCode.value = await $fetch('/api/store/example-store');
  exampleTemplateCode.value = await $fetch('/api/store/example-template');
}

onMounted(() => {
  getCode();
});

</script>
