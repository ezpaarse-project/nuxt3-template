<template>
  <v-list nav dense>
    <v-list-item
      v-for="route in routers"
      :key="route.path"
      link
      router
      :to="{ path: route.path }"
      ripple
      :title="route.text"
    >
      <template #prepend>
        <v-icon :icon="route.icon" />
      </template>
    </v-list-item>
  </v-list>
</template>

<script setup>

const { t } = useI18n();

const routers = computed(() => [
  { text: 'vuetify', icon: 'mdi-server', path: '/vuetify' },
  { text: 'i18n', icon: 'mdi-server', path: '/i18n' },
  { text: 'store', icon: 'mdi-server', path: '/store' },
  { text: 'axios', icon: 'mdi-server', path: '/axios' },
  { text: 'date-fns', icon: 'mdi-server', path: '/date-fns' },
  { text: 'highlightjs', icon: 'mdi-server', path: '/highlightjs' },
  { text: 'open-api', icon: 'mdi-server', path: '/open-api' },
]);
</script>
