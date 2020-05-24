<template>
  <div class="flex items-center p-2">
    <aside>
      <slot name="media-left"></slot>
    </aside>
    <main>
      <slot></slot>
    </main>
    <aside>
      <slot name="media-right"></slot>
    </aside>
  </div>
</template>