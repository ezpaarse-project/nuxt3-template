<template>
  <div class="text-center ma-2">
    <v-btn
      :loading="loading"
      @click="requestGithub"
    >
      Request github
    </v-btn>
    <p> Fullname : {{ fullname }} </p>
  </div>
</template>

<script setup>
import { useSnacksStore } from '@/store/snacks';

const snackStore = useSnacksStore();
const { t } = useI18n();
const { $api } = useNuxtApp();

const loading = ref(false);
const fullname = ref('');

function sleep(waitTimeInMs) {
  return new Promise((resolve) => { setTimeout(resolve, waitTimeInMs); });
}

async function requestGithub() {
  let res;
  try {
    snackStore.info(t('request.info'));
    loading.value = true;

    await sleep(1000);

    res = await $api({
      method: 'GET',
      url: '/users/felixleo22',
    });
  } catch (err) {
    snackStore.error(t('request.error'));
  }

  loading.value = false;

  if (res?.data?.name) {
    snackStore.success(t('request.success'));
  }

  fullname.value = res?.data?.name;
}
</script>
