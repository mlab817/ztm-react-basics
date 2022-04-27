// T is generic type
export const getData = async <T>(url: string): Promise<T> => {
    const response = await fetch(url)
    return await response.json()
}