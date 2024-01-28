<template>
  <header class="header">
    <div>&nbsp;</div>
    <div class="header__logo">
      <img src="assets/logo.png" alt="Logo do site" />
    </div>
    <div>
      <ButtonSet link iconRight="whatsapp" class="header__button">
        Contato
      </ButtonSet>
      <IconPiramid class="header__piramid" />
    </div>
  </header>
  <main>
    <div class="block-one" id="section-star">
      <section class="section-message">
        <h2 class="title-page">Construa sua presença online</h2>
        <p class="subtitle">
          Fortaleça sua presença online e aumente o reconhecimento da sua marca.
        </p>
        <IconMouseScroll />
      </section>

      <section class="section-app">
        <div class="section-app__photo">
          <IconPiramid class="section-app__piramid" />
          <img src="~/assets/app-mobile.png" alt="App Mobile" />
          <div class="section-app__letreiro">
            <IconLetreiro class="section-app__letreiro-icon" />
            <IconMiniPiramid class="section-app__letreiro-piramid" />
          </div>
        </div>

        <div class="section-app__message">
          <p class="subtitle section-app__tag">
            <IconMiniPiramid width="17.497px" height="18.257px" />
            Design intuitivo
          </p>
          <h2 class="section-app__title title-section">
            <span class="color-primary">Potencialize </span>
            <span class="color-white">seu negócio.</span>
          </h2>
          <p class="section-app__text text color-white">
            É a oportunidade de transformar uma ideia em realidade e deixar sua
            marca no mundo digital.
          </p>
          <div>
            <ButtonSet link> Entrar em Contato </ButtonSet>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<style src="~/assets/styles/reset.css" />
<style src="~/assets/styles/index.css" />
<style src="~/assets/styles/pages/home.scss" />
