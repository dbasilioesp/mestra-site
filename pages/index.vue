<template>
  <header class="header">
    <div>&nbsp;</div>
    <div class="logo">
      <img src="assets/logo.png" alt="Logo do site" />
    </div>
    <div>
      <ButtonSet link iconRight="whatsapp"> Contato </ButtonSet>
      <IconPiramid class="header__piramid" />
    </div>
  </header>
  <main>
    <section class="section-one" id="section-star">
      <div class="section-one__message">
        <h2 class="title-page">Construa sua presença online</h2>
        <p class="subtitle">
          Fortaleça sua presença online e aumente o reconhecimento da sua marca.
        </p>
        <IconMouseScroll />
      </div>

      <div class="section-one__app">
        <div class="section-one__app-photo">
          <IconPiramid class="section-one__app-piramid" />
          <img src="~/assets/app-mobile.png" alt="App Mobile" />
          <div class="section-one__app-letreiro">
            <div class="section-one__app-letreiro-inner">
              <IconLetreiro class="section-one__app-letreiro-icon" />
              <IconMiniPiramid class="section-one__app-letreiro-piramid" />
            </div>
          </div>
        </div>
        <div class="section-one__app-message">
          <p class="subtitle section-one__app-tag">
            <IconMiniPiramid width="17.497px" height="18.257px" />
            Design intuitivo
          </p>
          <h2 class="title-section section-one__app-title">
            <span class="color-primary">Potencialize </span>
            <span class="color-white">seu negócio.</span>
          </h2>
          <p class="text color-white section-one__app-text">
            É a oportunidade de transformar uma ideia em realidade e deixar sua
            marca no mundo digital.
          </p>
          <div>
            <ButtonSet link> Entrar em Contato </ButtonSet>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style src="~/assets/styles/reset.css" />
<style src="~/assets/styles/index.css" />
<style src="~/assets/styles/pages/home.scss" />
