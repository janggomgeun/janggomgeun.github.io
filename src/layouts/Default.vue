<template>
  <div class="flex flex-col min-h-screen my-4 mx-4 space-y-4">
    <header class="sticky top-0 z-50 my-2 bg-white">
      <div class="flex flex-col">
        <strong>
          <span class="font-serif">interface</span>
        </strong>
        <div>
          <strong>
            <span>
              <g-link class="text-4xl" to="/">
                {{ $static.metadata.siteName }}
              </g-link>
            </span>
          </strong>
        </div>
      </div>
      <nav class="flex text-3xl mt-4">
        <div>
          <div class="rounded-lg bg-transparent">
            <!-- <g-link to="/interests">interests, </g-link>
            <g-link to="/preferences">preferences, </g-link>
            <g-link to="/values">values, </g-link>
            <g-link to="/principles">principles, </g-link>
            <g-link to="/retrospectives">retrospectives, </g-link>
            <g-link to="/analysis">analysis, </g-link>
            <g-link to="/thoughts">thoughts, </g-link> -->
            <g-link to="/projects">projects</g-link>
            <!-- <g-link to="/cheatsheets">cheatsheets, </g-link> -->
            <!-- <g-link to="/mechanisms">mechanisms</g-link> -->
          </div>
        </div>
      </nav>
    </header>
    <main class="flex-grow">
      <div>
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
