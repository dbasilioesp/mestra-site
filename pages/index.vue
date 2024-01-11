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
    </div>
  </header>
  <main>
    <section class="section-one">
      <div class="message-one">
        <Title2 class="message-one__title">Construa sua presença online</Title2>
        <Subtitle class="message-one__subtitle">
          Fortaleça sua presença online e aumente o reconhecimento da sua marca.
        </Subtitle>
      </div>
    </section>
  </main>
</template>

<script>
import "~/assets/styles/reset.css";
import "~/assets/styles/index.css";
</script>

<style>
section {
  overflow: hidden;
}

.section-one {
  display: flex;
  justify-content: center;
}

.message-one {
  display: flex;
  flex-direction: column;
  gap: 37px;
  margin-block-start: 315px;
  max-width: 640px;
  text-align: center;
  text-wrap: balance;
}
</style>
