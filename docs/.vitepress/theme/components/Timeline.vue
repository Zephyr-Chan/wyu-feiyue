<script setup lang="ts">
</script>

<template>
  <div class="timeline">
    <slot />
  </div>
</template>

<style scoped>
.timeline { position: relative; padding-left: 2rem; margin: 1.5rem 0; }
.timeline::before {
  content: ''; position: absolute; left: 0.5rem; top: 0; bottom: 0;
  width: 2px; background: var(--vp-c-brand-1); opacity: 0.3;
}
</style>
