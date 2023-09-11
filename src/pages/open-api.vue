<template>
  <section class="mx-4">
    <h1 class="my-4">
      open-api (swagger)
    </h1>
    <hr class="my-4" />
    <v-tabs v-model="tab" fixed-tabs color="primary">
      <v-tab v-for="item in items" :key="item">
        {{ item }}
      </v-tab>
    </v-tabs>
    <v-container v-if="tab === 0">
      <i18n-t scope="global" keypath="open-api.install" tag="p" class="my-4">
        <template #package1>
          <a
            :href="package1Link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>swagger-ui</strong>
          </a>
        </template>
      </i18n-t>
      <CodeView :code="installCode" />
    </v-container>
    <v-container v-if="tab === 1">
      <CodeView
        :code="exampleCode"
        language="javascript"
      />
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

const package1Link = ref(`${runtimeConfig.public.npmHost}/swagger-ui`);

const installCode = ref('');
const exampleCode = ref('');

async function getCode() {
  installCode.value = await $fetch('/api/open-api/install');
  exampleCode.value = await $fetch('/api/open-api/example');
}

onMounted(() => {
  getCode();
});

</script>
