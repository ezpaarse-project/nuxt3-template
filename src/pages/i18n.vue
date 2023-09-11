<template>
  <section class="mx-4">
    <h1 class="my-4">
      i18n
    </h1>
    <hr class="my-4" />
    <v-tabs v-model="tab" fixed-tabs color="primary">
      <v-tab v-for="item in items" :key="item">
        {{ item }}
      </v-tab>
    </v-tabs>
    <v-container v-if="tab === 0">
      <i18n-t scope="global" keypath="i18n.install" tag="p" class="my-4">
        <template #package1>
          <a
            :href="package1Link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>@nuxtjs/i18n</strong>
          </a>
        </template>
        <template #package2>
          <a
            :href="package2Link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>vue-i18n</strong>
          </a>
        </template>
      </i18n-t>

      <CodeView :code="installCode" />

      <i18n-t scope="global" keypath="i18n.config" tag="p" class="my-4">
        <template #file>
          <strong>i18n.js</strong>
        </template>
        <template #config>
          <strong>~/config</strong>
        </template>
      </i18n-t>

      <CodeView :code="i18nConfigCode" />

      <i18n-t scope="global" keypath="i18n.nuxtConfig" tag="p" class="my-4">
        <template #nuxtConfig>
          <strong>nuxt.config.js</strong>
        </template>
        <template #config>
          <strong>~/config</strong>
        </template>
      </i18n-t>

      <CodeView :code="nuxtConfigCode" />

      <i18n-t scope="global" keypath="i18n.locale" tag="p" class="my-4">
        <template #en>
          <strong>en.json</strong>
        </template>
        <template #fr>
          <strong>fr.json</strong>
        </template>
        <template #file>
          <strong>~/locales</strong>
        </template>
      </i18n-t>

      <CodeView class="my-4" :code="enLocaleCode" />
      <CodeView :code="frLocaleCode" />
    </v-container>
    <v-container v-if="tab === 1">
      <CodeView :code="exampleCode" language="javascript" />
      <div class="text-center ma-4">
        <v-btn class="ma-2" @click="i18n.setLocale('fr')">
          Français
        </v-btn>
        <v-btn class="ma-2" @click="i18n.setLocale('en')">
          English
        </v-btn>
        <p> {{ i18n.t('language') }}</p>
      </div>
    </v-container>
  </section>
</template>

<script setup>

const { t } = useI18n();
const i18n = useI18n();
const runtimeConfig = useRuntimeConfig();

const tab = ref(0);

const items = computed(() => [
  t('code'),
  t('example'),
]);

const package1Link = ref(`${runtimeConfig.public.npmHost}/@nuxtjs/i18n`);
const package2Link = ref(`${runtimeConfig.public.npmHost}/vue-i18n`);

const installCode = ref('');
const i18nConfigCode = ref('');
const nuxtConfigCode = ref('');
const enLocaleCode = ref('');
const frLocaleCode = ref('');
const exampleCode = ref('');

async function getCode() {
  i18nConfigCode.value = await $fetch('/api/i18n/i18n-config');
  enLocaleCode.value = await $fetch('/api/i18n/en-local');
  frLocaleCode.value = await $fetch('/api/i18n/fr-local');
  installCode.value = await $fetch('/api/i18n/install');
  nuxtConfigCode.value = await $fetch('/api/i18n/nuxtConfig');
  exampleCode.value = await $fetch('/api/i18n/example');
}

onMounted(() => {
  getCode();
});

</script>
