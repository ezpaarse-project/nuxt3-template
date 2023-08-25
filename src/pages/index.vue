<template>
  <section>
    <i18n-t keypath="link" tag="p" class="text-center ma-2">
      <template #link>
        <a :href="githubProfileURL">{{ t('linkText') }}</a>
      </template>
    </i18n-t>
    <HomeGithubButtonRequest />
  </section>
</template>

<script setup>
const { t } = useI18n();
const runtimeConfig = useRuntimeConfig();

const githubProfileURL = ref(runtimeConfig.public.githubProfileURL);
</script>
