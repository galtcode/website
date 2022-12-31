<template>
  <Landing />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  head() {
    const title = 'GALT CODE'
    const url = ''
    const image = '/Galt-Code-01g-icon.png'
    const description = `At Galt Code, serving our clients needs by delivering value is our highest priority. We exist to alleviate those problems. Our job is to listen carefully, provide high-quality direction, and deliver value that makes your business easy, simple, and predictable.`
    return {
      meta: [
        // open graph
        { hid: 'description', name: 'description', content: description },
        { hid: 'og:title', property: 'og:title', content: title },
        { hid: 'og:url', property: 'og:url', content: url },
        {
          hid: 'og:description',
          property: 'og:description',
          content: description,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: image,
        },

        // twitter card
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: title,
        },
        { hid: 'twitter:url', name: 'twitter:url', content: url },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: description,
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: image,
        },
      ],
      link: [{ hid: 'canonical', rel: 'canonical', href: url }],
    }
  },
})
</script>
