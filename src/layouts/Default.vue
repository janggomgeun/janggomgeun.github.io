<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link to="/interfaces">About</g-link>
        <g-link to="/interfaces/interests">Interests</g-link>
        <g-link to="/interfaces/preferences">Preferences</g-link>
        <g-link to="/interfaces/principles">Principles</g-link>
        <g-link to="/interfaces/retrospectives">Retrospectives</g-link>
        <g-link to="/interfaces/swot">SWOT</g-link>
        <g-link to="/interfaces/thoughts">Thoughts</g-link>

        <g-link to="/projects">Projects</g-link>

        <g-link to="/expertises/cheatsheets">Cheatsheets</g-link>
        <g-link to="/expertises/mechanisms">Mechanisms</g-link>
      </nav>
    </header>
    <slot />
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
