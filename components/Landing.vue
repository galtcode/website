<template>
  <div>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
      integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />

    <div
      class="bg-base min-h-screen overflow-auto pb-32 text-black dark:text-white"
    >
      <div class="flex justify-center">
        <a href="/blog">Blog</a>
      </div>
      <div class="container max-w-5xl mx-auto px-4">
        <div class="grid md:grid-cols-2 mt-32">
          <h1
            class="text-6xl font-bold flex flex-col justify-center items-center"
          >
            Maximizing efficiency and profitability with<br /><span
              class="text-primary"
              >custom software.</span
            >
          </h1>
          <div class="hidden md:flex items-center">
            <div>
              <img width="496" height="496" src="/icon.png" />
            </div>
          </div>
        </div>
        <div class="my-10 grid md:grid-cols-2 justify-center items-center">
          <div class="flex flex-col justify-center">
            <div class="flex w-screen max-w-[20rem] justify-center md:hidden">
              <img width="320" height="320" class="" src="/icon.png" />
            </div>
            <div class="flex justify-center">
              <a
                class="btn btn-primary my-3 max-w-[20rem]"
                href="mailto:admin@galtcode.com"
                >Schedule a Meeting</a
              >
            </div>
          </div>
          <h3 class="text-gray-600 dark:text-gray-300 text-3xl">
            We build web applications that are<br />
            <strong>fast, beautiful, & secure</strong>
          </h3>
        </div>
        <div class="grid gap-10 py-3">
          <div class="grid lg:grid-cols-2">
            <WelcomeItem icon="fa-globe" title="I need help with a Website.">
              <div class="flex flex-col justify-center pr-3">
                <p>
                  Looking to create a brand new website or offload the
                  maintenance of your existing site?
                </p>
                <p>
                  We will work with you through customizations, updates, content
                  management, and server maintenance
                </p>
              </div>
            </WelcomeItem>
            <div class="hidden lg:block mockup-window border bg-secondary">
              <div class="flex justify-center px-4 py-16 bg-base-200"></div>
            </div>
          </div>
          <div class="divider"></div>
          <div class="grid lg:grid-cols-2">
            <div class="hidden lg:block">
              <img class="rounded opacity-75" src="/api-g1021c9066_1280.jpg" />
            </div>
            <WelcomeItem icon="fa-rocket" title="I need Custom Software.">
              <div class="flex flex-col justify-center pr-3">
                <p>
                  Whether you have a Software-as-a-Service (SaaS) idea, using
                  way too many software tools for your small business, or just
                  can't find the right tool for your business
                </p>
                <h5 class="font-bold text-primary text-2xl">
                  We can build it.
                </h5>
              </div>
            </WelcomeItem>
          </div>
          <div class="divider"></div>
          <div class="grid lg:grid-cols-2">
            <WelcomeItem icon="fa-comments" title="Can We Just Talk?">
              <div class="flex flex-col justify-center pr-3">
                <p>Professional consultants love to deliver value</p>
                <p>
                  We understand that the goal is to achieve results for your
                  business
                </p>
                <a class="btn btn-primary" href="mailto:admin@galtcode.com"
                  >Schedule a Meeting</a
                >
              </div>
            </WelcomeItem>
            <div class="hidden lg:block max-w-[40rem]">
              <div class="chat chat-start">
                <i class="chat-image w-10 fa fa-user"></i>
                <div class="chat-header">
                  <!-- Obi-Wan Kenobi -->
                  <time class="text-xs opacity-50">12:45</time>
                </div>
                <div class="chat-bubble chat-bubble-secondary">
                  I am not sure what I need. Can we just talk?
                </div>
                <div class="chat-footer opacity-50">Delivered</div>
              </div>
              <div class="chat chat-end">
                <div class="chat-image avatar">
                  <div class="w-10 rounded-full">
                    <img src="/icon.png" />
                  </div>
                </div>
                <div class="chat-header">
                  GALT CODE
                  <time class="text-xs opacity-50">12:46</time>
                </div>
                <div class="chat-bubble chat-bubble-primary">
                  Yes! We can provide expert information regarding the solutions
                  you need to improve your business.
                </div>
                <div class="chat-footer opacity-50">Seen at 12:46</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <GaltFooter />
  </div>
</template>

<script>
export default {
  name: 'LandingPage',
}
</script>
