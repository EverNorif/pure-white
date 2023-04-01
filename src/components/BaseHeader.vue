<script lang="ts" setup>
import {useDark, useToggle} from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  {{ isDark }}
  <el-button/>
  <span @click.stop="toggleDark()">dark</span>
  <el-switch size="small" v-model="isDark"/>
</template>
