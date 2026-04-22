<script setup lang="ts">
</script>

<template>
  <div class="result-table-wrapper">
    <slot />
  </div>
</template>

<style scoped>
.result-table-wrapper { overflow-x: auto; margin: 1rem 0; border-radius: 8px; border: 1px solid var(--vp-c-divider); }
.result-table-wrapper :deep(table) { width: 100%; border-collapse: collapse; font-size: 0.9rem; }
.result-table-wrapper :deep(th) { background: var(--vp-c-brand-soft); color: var(--vp-c-brand-1); padding: 0.6rem 0.8rem; text-align: left; font-weight: 600; white-space: nowrap; }
.result-table-wrapper :deep(td) { padding: 0.5rem 0.8rem; border-bottom: 1px solid var(--vp-c-divider); }
.result-table-wrapper :deep(tr:hover td) { background: var(--vp-c-bg-soft); }
.result-table-wrapper :deep(td:nth-child(4)) { font-weight: 600; }
</style>
