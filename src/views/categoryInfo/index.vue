<script setup lang="ts">
import { useRoute } from 'vue-router'
import useCategory from '@/composables/useCategory'

const { info, getInfo } = useCategory()
const route = useRoute()
const id = route.query.id
async function init() {
    await getInfo(id)
    // console.log(info.value)
}
init()
</script>

<template>
    <div>category-info.vue</div>
    {{ info.title }}
</template>

<style scoped></style>
