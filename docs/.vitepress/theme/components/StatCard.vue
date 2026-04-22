<script setup lang="ts">
defineProps<{
  icon: string
  value: string | number
  label: string
  color?: string
}>()
</script>

<template>
  <div class="stat-card" :style="{ '--accent': color || 'var(--vp-c-brand-1)' }">
    <div class="stat-icon">{{ icon }}</div>
    <div class="stat-value">{{ value }}</div>
    <div class="stat-label">{{ label }}</div>
  </div>
</template>

<style scoped>
.stat-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem 1rem;
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  transition: all 0.3s ease;
  text-align: center;
}
.stat-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.08);
  border-color: var(--accent);
}
.stat-icon { font-size: 2rem; margin-bottom: 0.5rem; }
.stat-value { font-size: 2rem; font-weight: 700; color: var(--accent); line-height: 1.2; }
.stat-label { font-size: 0.875rem; color: var(--vp-c-text-2); margin-top: 0.25rem; }
</style>
