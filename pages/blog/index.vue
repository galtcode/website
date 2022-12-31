<template>
  <div>
    <ul v-if="articles">
      <li v-for="a in articles" :key="a.slug">
        <a :href="`/blog/${a.slug}`">
          {{ a.title }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const articles = await $content('articles').only(['slug', 'title']).fetch()

    return {
      articles,
    }
  },
}
</script>
