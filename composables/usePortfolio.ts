const state = reactive({
  portfolio: [] as any,
})

export const usePortfolio = () => {
  const isPreview = useRuntimeConfig().public.NODE_ENV !== 'production'
  async function fetchPortfolio() {
      const storyblokApi = useStoryblokApi()
      const { data } = await storyblokApi.get('cdn/stories/', {
          version: isPreview ? 'draft' : 'published',
          starts_with: 'portfolio/',
          is_startpage: false,
          sort_by: 'created_at:desc',
      })

      state.portfolio = data.stories
  }
  return {
      ...toRefs(state),
      fetchPortfolio,
  }
}
