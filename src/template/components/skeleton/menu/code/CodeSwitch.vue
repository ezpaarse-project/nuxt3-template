<template>
  <v-list v-model:opened="open">
    <v-list-group value="Code">
      <template #activator="{ props }">
        <v-list-item v-bind="props" :title="t('pages')" />
      </template>

      <SkeletonMenuCodeList />
    </v-list-group>
  </v-list>
</template>

<script setup>
const { t } = useI18n();

const open = ref(['Code']);

</script>
