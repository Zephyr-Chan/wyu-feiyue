<script setup lang="ts">
defineProps<{
  name: string
  country?: string
  rank?: string
  description?: string
  logo?: string
  link?: string
}>()
</script>

<template>
  <a v-if="link" :href="link" class="school-card" target="_blank" rel="noopener">
    <div class="school-logo">{{ logo || '🎓' }}</div>
    <div class="school-info">
      <div class="school-name">{{ name }}</div>
      <div v-if="country || rank" class="school-meta">
        <span v-if="country" class="school-country">{{ country }}</span>
        <span v-if="rank" class="school-rank">{{ rank }}</span>
      </div>
      <div v-if="description" class="school-desc">{{ description }}</div>
    </div>
    <span class="school-arrow">→</span>
  </a>
  <div v-else class="school-card">
    <div class="school-logo">{{ logo || '🎓' }}</div>
    <div class="school-info">
      <div class="school-name">{{ name }}</div>
      <div v-if="country || rank" class="school-meta">
        <span v-if="country" class="school-country">{{ country }}</span>
        <span v-if="rank" class="school-rank">{{ rank }}</span>
      </div>
      <div v-if="description" class="school-desc">{{ description }}</div>
    </div>
  </div>
</template>

<style scoped>
.school-card {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px 16px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  transition: all 0.25s ease;
  text-decoration: none;
  color: inherit;
  cursor: default;
}

a.school-card {
  cursor: pointer;
}

a.school-card:hover {
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 2px 12px rgba(139, 35, 70, 0.1);
  transform: translateY(-1px);
}

.school-logo {
  font-size: 28px;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--vp-c-bg-soft);
  border-radius: 10px;
  flex-shrink: 0;
}

.school-info {
  flex: 1;
  min-width: 0;
}

.school-name {
  font-size: 15px;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.school-meta {
  display: flex;
  gap: 8px;
  margin-top: 3px;
  font-size: 12px;
}

.school-country {
  color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
  padding: 1px 8px;
  border-radius: 10px;
}

.school-rank {
  color: var(--vp-c-text-3);
}

.school-desc {
  font-size: 13px;
  color: var(--vp-c-text-2);
  margin-top: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.school-arrow {
  color: var(--vp-c-text-3);
  font-size: 16px;
  flex-shrink: 0;
}
</style>
