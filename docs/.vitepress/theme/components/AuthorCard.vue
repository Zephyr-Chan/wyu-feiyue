<script setup lang="ts">
defineProps<{
  name: string
  year?: string
  college?: string
  major?: string
  destination?: string
  avatar?: string
}>()
</script>

<template>
  <div class="author-card">
    <div class="author-avatar">{{ avatar || '🎓' }}</div>
    <div class="author-info">
      <div class="author-name">{{ name }}</div>
      <div v-if="year || college" class="author-meta">
        <span v-if="year">{{ year }}届</span>
        <span v-if="college">· {{ college }}</span>
        <span v-if="major">{{ major }}</span>
      </div>
      <div v-if="destination" class="author-destination">
        🎯 {{ destination }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.author-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.25rem;
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  margin: 1rem 0;
}
.author-avatar { font-size: 2.5rem; flex-shrink: 0; }
.author-name { font-weight: 600; font-size: 1.1rem; color: var(--vp-c-text-1); }
.author-meta { font-size: 0.85rem; color: var(--vp-c-text-2); margin-top: 0.15rem; }
.author-destination { font-size: 0.9rem; color: var(--vp-c-brand-1); margin-top: 0.3rem; font-weight: 500; }
</style>
