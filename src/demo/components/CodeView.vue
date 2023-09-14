<template>
  <v-row no-gutters class="grey">
    <v-col cols="11">
      <highlightjs :language="props.language" :code="props.code" />
    </v-col>
    <v-col cols="1" style="text-align: end;">
      <v-btn class="mt-2 mr-2" variant="text" icon="mdi-content-copy" @click="copyText()" />
    </v-col>
  </v-row>
</template>

<script setup>

import { useSnacksStore } from '@/store/snacks';

const { t } = useI18n();
const snackStore = useSnacksStore();

const props = defineProps({
  language: { type: String, default: '' },
  code: { type: String, default: '' },
});

function unsecuredCopyToClipboard(text) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.setAttribute('display', 'none');
  textArea.focus();
  textArea.select();
  document.execCommand('copy');
}
function copyText() {
  try {
    if (window.isSecureContext && navigator.clipboard) {
      navigator.clipboard.writeText(props.code);
    } else {
      unsecuredCopyToClipboard(props.code);
    }
  } catch (err) {
    snackStore.error(t('error.apikey.copy'));
    return;
  }
  snackStore.info(t('info.apikey.copied'));
}

</script>

<style>

.grey {
  background-color: #F6F6F6
}

</style>
