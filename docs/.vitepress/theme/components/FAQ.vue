<script setup lang="ts">
import { ref } from 'vue'

interface FAQItem {
  question: string
  answer: string
}

defineProps<{ items: FAQItem[] }>()

const openIndex = ref<number | null>(null)

function toggle(index: number) {
  openIndex.value = openIndex.value === index ? null : index
}
</script>

<template>
  <div class="faq-list">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="faq-item"
      :class="{ 'faq-item--open': openIndex === index }"
    >
      <button class="faq-question" @click="toggle(index)">
        <span>{{ item.question }}</span>
        <span class="faq-icon" :class="{ 'faq-icon--open': openIndex === index }">▸</span>
      </button>
      <Transition name="faq-expand">
        <div v-if="openIndex === index" class="faq-answer">
          <slot :name="`answer-${index}`">
            <p>{{ item.answer }}</p>
          </slot>
        </div>
      </Transition>
    </div>
  </div>
</template>

<style scoped>
.faq-list {
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  overflow: hidden;
  margin: 16px 0;
}

.faq-item {
  border-bottom: 1px solid var(--vp-c-divider);
}

.faq-item:last-child {
  border-bottom: none;
}

.faq-question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 14px 18px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 15px;
  font-weight: 500;
  color: var(--vp-c-text-1);
  text-align: left;
  transition: background-color 0.2s;
}

.faq-question:hover {
  background-color: var(--vp-c-bg-soft);
}

.faq-icon {
  transition: transform 0.3s ease;
  font-size: 12px;
  color: var(--vp-c-text-3);
  flex-shrink: 0;
  margin-left: 12px;
}

.faq-icon--open {
  transform: rotate(90deg);
}

.faq-answer {
  padding: 0 18px 14px;
  color: var(--vp-c-text-2);
  font-size: 14px;
  line-height: 1.7;
}

.faq-expand-enter-active,
.faq-expand-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}

.faq-expand-enter-from,
.faq-expand-leave-to {
  opacity: 0;
  max-height: 0;
  padding-top: 0;
  padding-bottom: 0;
}
</style>
