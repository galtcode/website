<template>
  <div>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
      integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />

    <div class="bg-cyan-700 min-h-screen overflow-auto pb-32">
      <div class="container max-w-5xl mx-auto px-4">
        <div class="w-4/5 grid md:grid-cols-2 mt-32">
          <div>
            <img src="/Galt-Code-01g-icon.png" />
          </div>
          <h1
            class="text-white text-6xl font-bold flex flex-col justify-center items-center"
          >
            Maximizing efficiency and profitability with<br /><span
              class="text-neutral"
              >custom software.</span
            >
          </h1>
        </div>
        <div class="my-10 ml-6">
          <h3 class="text-gray-300">
            We can build web applications that are<br />
            <strong class="text-white">fast, beautiful, & secure</strong>
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
                  management, and server maintenance.
                </p>
              </div>
            </WelcomeItem>
            <div class="hidden lg:block mockup-window border bg-base-300">
              <div class="flex justify-center px-4 py-16 bg-base-200"></div>
            </div>
          </div>
          <div class="divider"></div>
          <div class="grid lg:grid-cols-2">
            <div class="hidden lg:block">
              <img class="rounded opacity-75" src="/api-g1021c9066_1280.jpg" />
            </div>
            <WelcomeItem
              icon="fa-rocket"
              title="I need a Custom Software Tool."
            >
              <div class="flex flex-col justify-center pr-3">
                <p>
                  Whether you have a Software-as-a-Service (SaaS) idea, using
                  way too many software tools for your small business, or just
                  can't find the right tool for your business
                </p>
                <p class="font-bold">We can build it.</p>
              </div>
            </WelcomeItem>
          </div>
          <div class="divider"></div>
          <div class="grid lg:grid-cols-2">
            <WelcomeItem icon="fa-comments" title="Lets Just Talk.">
              <div class="flex flex-col justify-center pr-3">
                <p>
                  Professional consultants love to deliver value. We understand
                  that the goal is to achieve results for your business.
                </p>
                <button class="btn">Contact or Schedule a Meeting</button>
              </div>
            </WelcomeItem>
            <div class="hidden lg:block max-w-[40rem]">
              <div class="chat chat-start">
                <div class="chat-image avatar">
                  <div class="w-10 rounded-full">
                    <img src="https://placeimg.com/192/192/people" />
                  </div>
                </div>
                <div class="chat-header">
                  <!-- Obi-Wan Kenobi -->
                  <time class="text-xs opacity-50">12:45</time>
                </div>
                <div class="chat-bubble">
                  I am not sure what I need. Can we just talk?
                </div>
                <div class="chat-footer opacity-50">Delivered</div>
              </div>
              <div class="chat chat-end">
                <div class="chat-image avatar">
                  <div class="w-10 rounded-full">
                    <img src="/Galt-Code-01g-icon.png" class="bg-white" />
                  </div>
                </div>
                <div class="chat-header">
                  GALT CODE
                  <time class="text-xs opacity-50">12:46</time>
                </div>
                <div class="chat-bubble">
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
