<template>
  <div class="flex flex-col min-h-screen my-4 mx-4 space-y-4">
    <header class="sticky top-0 z-50 bg-white">
      <div class="flex">
        <strong class="flex">
          <span>interface</span>
          <g-link class="text-5xl" to="/">{{
            $static.metadata.siteName
          }}</g-link>
          <span class="text-5xl">&nbsp;{</span>
        </strong>
      </div>
      <nav class="flex text-4xl mt-4">
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
      <div
        class="flex h-12 mt-4 rounded-full border-gray-800 border-solid border-4"
      >
        <input
          class="appearance-none w-full mx-4 focus:outline-none"
          type="text"
          placeholder="search keywords..."
        />
      </div>
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
