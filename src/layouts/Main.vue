<template>
  <div class="w-full flex flex-col lg:flex-row lg:space-x-10 h-screen">
    <header
      class="flex flex-col justify-end sticky h-1/2 lg:justify-center lg:h-full lg:w-1/3 xl:w-1/5 top-0 z-50 bg-white"
    >
      <div class="m-4">
        <div class="w-full align-center">
          <g-link class="w-full flex justify-center" to="/">
            <img
              class="bg-black-300 w-full sm:w-1/2 md:w-1/2 lg:w-full"
              src="/svgs/title.svg"
            />
          </g-link>
        </div>
        <nav class="w-full flex uppercase text-xl mt-4">
          <ol class="w-full">
            <!-- <li><g-link to="/interests">interests</g-link></li>
            <li><g-link to="/preferences">preferences</g-link></li> -->
            <div class="flex w-full flex-wrap justify-center space-x-3">
              <li
                class="rounded-full px-3 hover:bg-black-olive hover:text-white"
              >
                <g-link to="/values">values</g-link>
              </li>
              <li
                class="rounded-full px-3 hover:bg-black-olive hover:text-white"
              >
                <g-link to="/principles">principles</g-link>
              </li>
            </div>
            <div class="flex w-full flex-wrap justify-center space-x-3">
              <li
                class="rounded-full px-3 hover:bg-black-olive hover:text-white"
              >
                <g-link to="/retrospectives">retrospectives</g-link>
              </li>
              <li
                class="rounded-full px-3 hover:bg-black-olive hover:text-white"
              >
                <g-link to="/thoughts">thoughts</g-link>
              </li>
              <li
                class="rounded-full px-3 hover:bg-black-olive hover:text-white"
              >
                <g-link to="/projects">projects</g-link>
              </li>
            </div>
            <div class="flex w-full flex-wrap justify-center space-x-3">
              <li
                class="rounded-full px-3 hover:bg-black-olive hover:text-white"
              >
                <g-link to="/cheatsheets">cheatsheets</g-link>
              </li>
              <li
                class="rounded-full px-3 hover:bg-black-olive hover:text-white"
              >
                <g-link to="/mechanisms">mechanisms</g-link>
              </li>
            </div>
          </ol>
        </nav>
        <div class="mt-4">
          <div class="flex justify-center space-x-2">
            <div
              class="w-5 h-5 md:h-10 md:w-10"
              v-for="item in [
                { name: 'github', link: 'https://github.com/janggomgeun' },
                {
                  name: 'youtube',
                  link:
                    'https://www.youtube.com/channel/UCOk-C4jVNuCVzQHviJE8nQg',
                },
                {
                  name: 'linkedin',
                  link: 'https://www.linkedin.com/in/woong-geun-jang-94859855/',
                },
              ]"
              :key="item.id"
            >
              <g-link :to="item.link">
                <FontAwesomeIcon :icon="['fab', `${item.name}`]" />
              </g-link>
            </div>
          </div>
        </div>
        <div class="mt-4">
          <div class="search-box">
            <div class="mx-4 my-2">
              <input
                class="appearance-none w-full leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="search keyword..."
              />
            </div>
          </div>
        </div>
      </div>
    </header>
    <main class="m-4 lg:w-2/3 lg:flex-grow">
      <div class="lg:flex-grow">
        <slot />
      </div>
    </main>
    <footer></footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style></style>
