<template>
  <div class="flex flex-col min-h-screen my-4 mx-4 space-y-4">
    <header class="header">
      <div>
        <strong class="flex">
          <span>interface</span>
          <g-link class="text-6xl" to="/">{{
            $static.metadata.siteName
          }}</g-link>
          <span class="text-6xl">&nbsp;{</span>
        </strong>
      </div>
    </header>
    <main class="flex-grow">
      <nav class="text-4xl">
        <div>
          <div class="rounded-lg p-4 bg-gray-900 text-white">
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
      <div class="pt-4">
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
