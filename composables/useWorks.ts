const state = reactive({
  works: [] as any,
})

export const useWorks = () => {
  async function fetchWorks() {
      const storyblokApi = useStoryblokApi()
      const { data } = await storyblokApi.get('cdn/stories/', {
          version:
              process.env.NODE_ENV === 'production' ? 'published' : 'draft',
          starts_with: 'works/',
          is_startpage: false,
      })

      state.works = data.stories
  }
  return {
      ...toRefs(state),
      fetchWorks,
  }
}
