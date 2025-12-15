<script lang="ts" module>
	import type { HTMLAttributes } from "svelte/elements";

  export type TimerProps = {
    /** @description time, in seconds */
    time?: number;
    running?: boolean;
    colorByPercentage?: boolean;
  } & HTMLAttributes<HTMLDivElement>;
</script>
<script lang="ts">

  let { time = 5, running = true, colorByPercentage = false, ...props }: TimerProps = $props();

  let fml: 'paused' | 'running' = $derived(running ? 'running' : 'paused');
  let clear = $derived(time);

</script>

<div class="timer" {...props} style:--running-state={fml} style:--wait-time={time}>
</div>

<style>
  @keyframes move {
    from {
      translate: -100% 0;
    }
    to {
      translate: 0 0;
    }
  }
  .timer.clear {
    animation: unset;
  }
  .timer {
    height: 1em;
    width: 1em;
    border-radius: 999px;
    background-color: var(--color-black);
    border: 3px solid black;
    padding: 3px;
    position: relative;
    overflow: hidden;
    &:hover::before {
      animation-play-state: running;
    }

    &::before {
      position: absolute;
      content: '';
      display: block;
      background: currentColor;
      border-radius: 999px;
      bottom: 3px;
      top: 3px;
      left: 3px;
      right: 3px;

      animation: move 3s linear forwards running;
      animation-play-state: var(--running-state);
    }

  }
</style>
