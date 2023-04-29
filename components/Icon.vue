<template>
  <svg viewBox="0 0 24 24" :width="props.size ? props.size + 'em' : 16" :height="props.size ? props.size + 'em': 16" xmlns="http://www.w3.org/2000/svg">
    <path
      :d="path"
      fill="currentColor"
    />
  </svg>
</template>

<script lang="ts" setup>

  import {
    ref,
    onUpdated,
    onMounted,
    onServerPrefetch,
  } from 'vue';

  import * as mdiIcons from '@mdi/js';

  type IconNames = keyof typeof mdiIcons;

  interface IconProps {
    iconName: IconNames;
    size?: number;
  }

  const props = defineProps<IconProps>();
  
  const path = ref('');

  onServerPrefetch(() => {
    if(props.iconName && mdiIcons[props.iconName]){
      path.value = mdiIcons[props.iconName];
    }
  });

  onMounted(() => {
    if(props.iconName && mdiIcons[props.iconName]) {
      path.value = mdiIcons[props.iconName];
    }
  });

</script>