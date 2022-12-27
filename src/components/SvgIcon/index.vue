<template>
  <!-- 展示外部图标 -->
  <div
    v-if="isExternal"
    :style="externalIconStyle"
    class="svg-icon--external"
    :class="className"
  />
  <!-- 展示内部图标 -->
  <svg
    v-else
    class="svg-icon"
    :class="className"
    aria-hidden="true"
  >
    <use :xlink:href="iconName" />
  </svg>
</template>

<script setup>
import { computed, defineProps } from 'vue'
import { isExternal as external } from '@/utils/validate'
const props = defineProps({
  icon: { type: String, required: true }, // icon图标
  className: { type: String, default: '' } // 图表类名
})

// 判断当前图标是否为外部图标
const isExternal = computed(() => external(props.icon))

// 内部图标
const iconName = computed(() => `#icon-${props.icon}`)

// 外部图标样式
const externalIconStyle = computed(() => ({
  mask: `url(${props.icon}) no-repeat 50% 50%`,
  '-webkit-mask': `url(${props.icon}) no-repeat 50% 50%`
}))

</script>

<style lang="scss" scoped>
  .svg-icon {
    width: 1em;
    height: 1em;
    vertical-align: -.15em;
    fill: currentColor;
    overflow: hidden;

    &--external {
      display: inline-block;
      background-color: currentColor;
      mask-size: cover !important;
    }
  }
</style>
