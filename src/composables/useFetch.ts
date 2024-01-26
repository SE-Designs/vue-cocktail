import { ref } from 'vue'

export function useFetch(url: string) {
  const baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

  const data = ref(null)
  const error = ref()
  const loadingPromise = ref()
  const isLoading = ref(false)

  const onDataLoadedCallbacks: any[] = []

  const startFetch = async () => {
    try {
      isLoading.value = true
      const response = await fetch(baseUrl + url)
      const json = await response.json()
      data.value = json
      onDataLoadedCallbacks.forEach((callback) => callback(json))
    } catch (err) {
      error.value = err
    } finally {
      isLoading.value = false
    }
  }

  startFetch()

  const onDataLoaded = (callback: any) => {
    onDataLoadedCallbacks.push(callback)
  }

  return { data, error, loadingPromise, isLoading, onDataLoaded }
}
