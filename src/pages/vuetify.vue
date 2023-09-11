<template>
  <section class="mx-4">
    <h1 class="my-4">
      Vuetify
    </h1>
    <hr class="my-4" />
    <i18n-t scope="global" keypath="vuetify.install" tag="p" class="my-4">
      <template #package1>
        <a :href="package1Link" target="_blank" rel="noopener noreferrer">
          <strong>vuetify</strong>
        </a>
      </template>
      <template #package2>
        <a :href="package2Link" target="_blank" rel="noopener noreferrer">
          <strong>sass</strong>
        </a>
      </template>
    </i18n-t>

    <CodeView :code="installCode" />

    <i18n-t scope="global" keypath="vuetify.plugin" tag="p" class="my-4">
      <template #file>
        <strong>vuetify.js</strong>
      </template>
      <template #plugin>
        <strong>~/plugins</strong>
      </template>
    </i18n-t>

    <CodeView :code="pluginCode" />

    <i18n-t scope="global" keypath="vuetify.nuxtConfig" tag="p" class="my-4">
      <template #nuxtConfig>
        <strong>nuxt.config.js</strong>
      </template>
    </i18n-t>

    <CodeView :code="nuxtConfigCode" />
  </section>
</template>

<script setup>

const { t } = useI18n();
const runtimeConfig = useRuntimeConfig();

const package1Link = ref(`${runtimeConfig.public.npmHost}/vuetify`);
const package2Link = ref(`${runtimeConfig.public.npmHost}/sass`);

const installCode = ref('');
const pluginCode = ref('');
const nuxtConfigCode = ref('');

async function getCode() {
  installCode.value = await $fetch('/api/vuetify/install');
  pluginCode.value = await $fetch('/api/vuetify/plugin');
  nuxtConfigCode.value = await $fetch('/api/vuetify/config');
}

onMounted(() => {
  getCode();
});

</script>
