import axios from './index'

export async function getCategoryList() {
    const data: CategoryModel[] = await axios.get('category')
    return data
}
export function getCategoryInfo(id: number) {
    return axios.get('category/' + id)
}
export function addCategory(data: any) {
    return axios.post('category', {
        data,
    })
}
export function updateCategory(data: any) {
    return axios.patch('category', {
        data,
    })
}
export function deleteCategory(id: number) {
    return axios.get('category/' + id)
}
