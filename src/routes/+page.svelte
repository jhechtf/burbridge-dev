<script lang="ts">
	import { onMount } from 'svelte';
	import { SvelteSet } from 'svelte/reactivity';
	import Timer from '../lib/components/timer/timer.svelte';

  const subtitles = [
    'Cat Wrangler',
    'Vibe Code Janitor',
    'General Dork',
    'Software Engineer',
    'Nerd Doing Nerd Things'
  ];
  const seen = new SvelteSet<string>();
  let timer: ReturnType<typeof setTimeout> | null = null;
  let current = $state('');

  function timeoutFn() {
    let tmp = subtitles[Math.floor(Math.random() * subtitles.length)];
    while(seen.has(tmp) && seen.size !== subtitles.length) {
      tmp = subtitles[Math.floor(Math.random() * subtitles.length)];
    }
    if(seen.size !== subtitles.length) {
      current = tmp;
      seen.add(current);

      timer = setTimeout(timeoutFn, 3000);
    }
  }

  onMount(() => {
    timeoutFn();

    return () => timer && clearTimeout(timer);
  });
</script>

<svelte:head>
  <title>Jim Burbridge</title>
</svelte:head>

<div class="h-dvh bg-black  flex justify-center items-center flex-col gap-4 bg-radial-[at_50%_100%] from-emerald-600 from-0% to-80% to-slate-800">
  <h1 class="text-5xl font-bold font-mono">Jim Burbridge</h1>
  <h2 class="text-2xl font-semibold text-current/70">
    <Timer time={3} />{current}
  </h2>

  <div class="flex gap-3">
    <button class="button-hero-primary text-lg px-4 py-3 rounded-full bg-amber-800">Fun</button><button>Functional</button>
  </div>

</div>
