<script setup lang="ts">
defineProps<{
  tags: string[]
}>()
</script>

<template>
  <div class="tag-list">
    <span v-for="tag in tags" :key="tag" class="wyu-tag">{{ tag }}</span>
  </div>
</template>

<style scoped>
.tag-list { display: flex; flex-wrap: wrap; gap: 0.5rem; margin: 0.75rem 0; }
.wyu-tag {
  display: inline-block;
  padding: 0.2rem 0.75rem;
  border-radius: 999px;
  font-size: 0.8rem;
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  border: 1px solid var(--vp-c-brand-1);
  transition: all 0.2s;
}
.wyu-tag:hover { background: var(--vp-c-brand-1); color: #fff; }
</style>
