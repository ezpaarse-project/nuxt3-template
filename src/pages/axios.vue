<template>
  <section class="mx-4">
    <h1 class="my-4">
      Axios (HTTP request)
    </h1>
    <hr class="my-4" />
    <v-tabs v-model="tab" fixed-tabs color="primary">
      <v-tab v-for="item in items" :key="item">
        {{ item }}
      </v-tab>
    </v-tabs>
    <v-container v-if="tab === 0">
      <i18n-t scope="global" keypath="axios.install" tag="p" class="my-4">
        <template #package1>
          <a
            :href="package1Link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>axios</strong>
          </a>
        </template>
      </i18n-t>

      <CodeView :code="installCode" />

      <i18n-t scope="global" keypath="axios.plugin" tag="p" class="my-4">
        <template #file>
          <strong>axios.js</strong>
        </template>
        <template #plugin>
          <strong>~/plugins</strong>
        </template>
      </i18n-t>

      <CodeView :code="pluginCode" />
    </v-container>
    <v-container v-if="tab === 1">
      <CodeView :code="exampleCode" language="json" />
      <div class="text-center ma-4">
        <v-btn class="my-4" :loading="loading" @click="requestGithub()">
          {{ t('axios.request') }}
        </v-btn>
        <p> {{ t('axios.fullname') }} {{ fullname }} </p>
      </div>
    </v-container>
  </section>
</template>

<script setup>

const { t } = useI18n();
const runtimeConfig = useRuntimeConfig();
const { $api } = useNuxtApp();

const tab = ref(0);

const items = computed(() => [
  t('code'),
  t('example'),
]);

const package1Link = ref(`${runtimeConfig.public.npmHost}/axios`);

const installCode = ref('');
const pluginCode = ref('');
const exampleCode = ref('');

const loading = ref(false);
const fullname = ref('');

async function requestGithub() {
  let res;
  try {
    loading.value = true;

    res = await $api({
      method: 'GET',
      url: '/users/felixleo22',
    });
  } catch (err) {
    loading.value = false;
    fullname.value = error;
    return;
  }
  loading.value = false;
  fullname.value = res?.data?.name;
}

async function getCode() {
  installCode.value = await $fetch('/api/axios/install');
  pluginCode.value = await $fetch('/api/axios/plugin');
  exampleCode.value = await $fetch('/api/axios/example');
}

onMounted(() => {
  getCode();
});

</script>
