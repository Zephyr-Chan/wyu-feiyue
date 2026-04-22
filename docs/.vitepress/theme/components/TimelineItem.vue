<script setup lang="ts">
defineProps<{
  title: string
  time?: string
}>()
</script>

<template>
  <div class="timeline-item">
    <div class="timeline-dot" />
    <div class="timeline-content">
      <div v-if="time" class="timeline-date">{{ time }}</div>
      <div class="timeline-title">{{ title }}</div>
      <div class="timeline-desc"><slot /></div>
    </div>
  </div>
</template>

<style scoped>
.timeline-item { position: relative; padding-bottom: 1.5rem; }
.timeline-item:last-child { padding-bottom: 0; }
.timeline-dot {
  position: absolute; left: -1.65rem; top: 0.25rem;
  width: 12px; height: 12px; border-radius: 50%;
  background: var(--vp-c-brand-1); border: 2px solid var(--vp-c-bg);
  box-shadow: 0 0 0 3px var(--vp-c-brand-soft);
}
.timeline-date { font-size: 0.8rem; color: var(--vp-c-brand-1); font-weight: 600; }
.timeline-title { font-weight: 600; margin-top: 0.2rem; color: var(--vp-c-text-1); }
.timeline-desc { font-size: 0.9rem; color: var(--vp-c-text-2); margin-top: 0.2rem; }
.timeline-desc :deep(ul) { margin: 0.3rem 0; padding-left: 1.2rem; }
.timeline-desc :deep(li) { margin: 0.15rem 0; }
</style>
