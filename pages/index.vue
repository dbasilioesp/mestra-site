<template>
  <header>
    <div class="navigation-a">
      <span>&nbsp;</span>
    </div>
    <div class="logo">
      <img src="assets/logo.png" alt="Logo do site" />
    </div>
    <div class="navigation-b">
      <ButtonSet link iconRight="whatsapp"> Contato </ButtonSet>
      <IconPiramid class="navigation-b__piramid" />
    </div>
  </header>
  <main>
    <section class="section-one">
      <div class="message-one">
        <Title2 class="message-one__title">Construa sua presença online</Title2>
        <Subtitle class="message-one__subtitle">
          Fortaleça sua presença online e aumente o reconhecimento da sua marca.
        </Subtitle>
        <IconMouseScroll class="message-one__icon" />
      </div>
    </section>
  </main>
</template>

<script>
import "~/assets/styles/reset.css";
import "~/assets/styles/index.css";
</script>

<style>
main {
  overflow: hidden;
}

header {
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  top: 48px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: var(--container-size);
  width: 100%;
  z-index: 10;
}

.navigation-a {
  display: flex;
  gap: 40px;
  font-family: "Poppins", sans-serif;
}

.navigation-b {
}

.navigation-b__piramid {
  position: absolute;
  top: 0;
  right: -390px;
}

.section-one {
  background-image: url(assets/section1-bg.jpg);
  background-size: cover;
  min-height: 100vh;
}

.section-one {
  display: flex;
  justify-content: center;
  position: relative;
}

.message-one {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 37px;
  margin-block-start: 315px;
  max-width: 640px;
  text-align: center;
  text-wrap: balance;
}

.message-one__icon {
}
</style>
