<script setup lang="ts">
import Giscus from '@giscus/vue'
import { useData } from 'vitepress'

const { isDark } = useData()
</script>

<template>
  <div class="giscus-wrapper">
    <Giscus
      id="wyu-comments"
      repo="wyu-feiyue/wyu-feiyue"
      repoId="R_kgDOPlaceholder"
      category="General"
      categoryId="DIC_kwDOPlaceholder"
      mapping="pathname"
      strict="0"
      reactions-enabled="1"
      emit-metadata="0"
      input-position="top"
      :theme="isDark ? 'dark' : 'light'"
      lang="zh-CN"
      loading="lazy"
    />
  </div>
</template>

<style scoped>
.giscus-wrapper {
  margin-top: 32px;
  padding-top: 24px;
  border-top: 1px solid var(--vp-c-divider);
}

.giscus-wrapper :deep(.giscus) {
  max-width: 100%;
}
</style>
