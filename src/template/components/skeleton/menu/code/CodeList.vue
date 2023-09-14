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
  { text: 'page', icon: 'mdi-server', path: '/page' },
]);
</script>
