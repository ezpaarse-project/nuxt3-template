<template>
  <div class="text-center ma-2">
    <v-btn
      small
      :href="githubProfile"
      target="_blank"
      rel="noopener noreferrer"
      variant="outlined"
    >
      Version: {{ version }}
      <v-icon right>
        mdi-github
      </v-icon>
    </v-btn>
  </div>
</template>

<script setup>
const runtimeConfig = useRuntimeConfig();

const version = ref(runtimeConfig.public.version);
const githubProfile = ref(runtimeConfig.public.githubProfileURL);
</script>
