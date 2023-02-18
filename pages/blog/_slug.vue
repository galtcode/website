<template>
  <body class="w-screen flex justify-center">
    <article class="prose">
      <h1>{{ page.title }}</h1>
      <nuxt-content :document="page" />
    </article>
  </body>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const content = !params.slug ? 'index' : 'articles/' + params.slug
    const page = await $content(content).fetch()

    return {
      page,
    }
  },
}
</script>
