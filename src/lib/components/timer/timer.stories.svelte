<script lang="ts" module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Timer from './timer.svelte';
  const { Story } = defineMeta({
    component: Timer,
    tags: ['autodocs'],
    args: {
      time: 3,
    }
  });
</script>

<Story name="Default" />
