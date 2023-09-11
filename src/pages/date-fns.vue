<template>
  <section class="mx-4">
    <h1 class="my-4">
      date-fns
    </h1>
    <hr class="my-4" />
    <v-tabs v-model="tab" fixed-tabs color="primary">
      <v-tab v-for="item in items" :key="item">
        {{ item }}
      </v-tab>
    </v-tabs>
    <v-container v-if="tab === 0">
      <i18n-t scope="global" keypath="date-fns.install" tag="p" class="my-4">
        <template #package1>
          <a
            :href="package1Link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>date-fns</strong>
          </a>
        </template>
      </i18n-t>

      <CodeView :code="installCommand" />

      <i18n-t scope="global" keypath="date-fns.plugin" tag="p" class="my-4">
        <template #file>
          <strong>dateFns.js</strong>
        </template>
        <template #plugin>
          <strong>~/plugins</strong>
        </template>
      </i18n-t>

      <CodeView :code="pluginCode" />
    </v-container>
    <v-container v-if="tab === 1">
      <CodeView
        :code="exampleCode"
        language="json"
      />
      <div class="text-center ma-4">
        <v-btn class="ma-2" @click="i18n.setLocale('fr')">
          Français
        </v-btn>
        <v-btn class="ma-2" @click="i18n.setLocale('en')">
          English
        </v-btn>
      </div>
      <p class="text-center ma-4">
        {{ $dateFns.format(new Date()) }}
      </p>
    </v-container>
  </section>
</template>

<script setup>

const { t } = useI18n();
const runtimeConfig = useRuntimeConfig();
const { $dateFns } = useNuxtApp();
const i18n = useI18n();

const tab = ref(0);

const items = computed(() => [
  t('code'),
  t('example'),
]);

const package1Link = ref(`${runtimeConfig.public.npmHost}/date-fns`);

const installCommand = ref('');
const pluginCode = ref('');
const exampleCode = ref('');

async function getCode() {
  installCommand.value = await $fetch('/api/date-fns/install');
  pluginCode.value = await $fetch('/api/date-fns/plugin');
  exampleCode.value = await $fetch('/api/date-fns/example');
}

onMounted(() => {
  getCode();
});

</script>
