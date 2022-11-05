<template>
  <a-row>
    <a-col :span="9">left</a-col>
    <a-col :span="6">center</a-col>
    <a-col :span="9">right</a-col>
  </a-row>
  <a-row>
    <a-col :span="9"><Bar /></a-col>
    <a-col :span="6"><Map /></a-col>
    <a-col :span="9"><Line /></a-col>
  </a-row>
  <a-button @click="handleClick('health')">1</a-button>
  <a-button @click="handleClick('energy')">2</a-button>
  <a-button @click="handleClick('performance')">3</a-button>
  <a-button @click="handleClick('synthesize')">4</a-button>
</template>
 
<script lang="ts" setup>
import { useRouter } from 'vue-router'
import Bar from '@/components/Bar.vue'
import Line from '@/components/Line.vue'
import Map from '@/components/Map.vue'
const router = useRouter()


const handleClick = (value: string) => {
  router.push({ name: value })
}

</script>
 
<style lang="scss" scoped>
#main {
  min-width: 31.25rem;
  min-height: 31.25rem;
  // max-height: 500px;
}

#mayMap {
  min-width: 31.25rem;
  min-height: 31.25rem;
  // max-height: 500px;
}

#maychar {
  max-height: 500px;
  // max-height: 400px;
  height: 500px;
}
</style>