<script setup lang="ts">
import Category from '@/views/category/index.vue'
import useCategory from '@/composables/useCategory'
import { useRouter } from 'vue-router'

const { getList, list, info, getInfo } = useCategory()

getList()

const router = useRouter()

const handleItem = async (item) => {
    const id = item.id
    await getInfo(id)

    router.push({
        path: '/category/info/',
        query: {
            id,
        },
    })
}
</script>

<template>
    <div>
        <div class="h-10 p-3 bg-red-300 text-lg rounded-lg border-black flex items-center justify-center">添加</div>
        <div v-for="item of list" :key="item.id" @click="handleItem(item)" class="mt-2">
            {{ item.title }}
            <span>删除</span>
            <el-button type="primary">Primary</el-button>
        </div>
    </div>
</template>

<style scoped></style>
