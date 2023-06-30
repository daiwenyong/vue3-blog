import { ref } from 'vue'
import { getCategoryInfo, getCategoryList } from '../api/category'

export default function useCategory() {
    const list = ref<CategoryModel[]>([])
    const info = ref<CategoryModel>({})
    const getList = async () => {
        list.value = await getCategoryList()
    }
    const getInfo = async (id: number) => {
        info.value = (await getCategoryInfo(id)) as any
    }

    return {
        getList,
        getInfo,
        list,
        info,
    }
}
