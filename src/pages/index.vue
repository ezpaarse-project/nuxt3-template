<template>
  <section>
    <h1 class="my-4">
      Axios (HTTP request)
    </h1>
    <i18n-t scope="global" keypath="link" tag="p" class="text-center ma-2">
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
