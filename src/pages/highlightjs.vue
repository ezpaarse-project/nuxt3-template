<template>
  <section class="mx-4">
    <h1 class="my-4">
      highlight.js
    </h1>
    <hr class="my-4" />
    <v-tabs v-model="tab" fixed-tabs color="primary">
      <v-tab v-for="item in items" :key="item">
        {{ item }}
      </v-tab>
    </v-tabs>
    <v-container v-if="tab === 0">
      <i18n-t scope="global" keypath="highlightjs.install" tag="p" class="my-4">
        <template #package1>
          <a
            :href="package1Link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>@highlightjs/vue-plugin</strong>
          </a>
        </template>
      </i18n-t>

      <CodeView language="bash" :code="installCode" />

      <i18n-t scope="global" keypath="highlightjs.plugin" tag="p" class="my-4">
        <template #file>
          <strong>highlight.client.js</strong>
        </template>
        <template #plugin>
          <strong>~/plugins</strong>
        </template>
      </i18n-t>

      <CodeView :code="pluginCode" />
    </v-container>
    <v-container v-if="tab === 1">
      <CodeView :code="exampleCode" class="my-8" />
      <CodeView :code="highlightjsCode" />
    </v-container>
  </section>
</template>

<script setup>

const { t } = useI18n();
const runtimeConfig = useRuntimeConfig();

const tab = ref(0);

const items = computed(() => [
  t('code'),
  t('example'),
]);

const package1Link = ref(`${runtimeConfig.public.npmHost}/@highlightjs/vue-plugin`);

const installCode = ref('');
const pluginCode = ref('');
const exampleCode = ref('');
const highlightjsCode = ref('{ "name": "John", "age": 22 }');

async function getCode() {
  installCode.value = await $fetch('/api/highlightjs/install');
  pluginCode.value = await $fetch('/api/highlightjs/plugin');
  exampleCode.value = await $fetch('/api/highlightjs/example');
}

onMounted(() => {
  getCode();
});

</script>
