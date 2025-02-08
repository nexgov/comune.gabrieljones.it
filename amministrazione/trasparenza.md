---
layout: default
title: Documenti
category: amministrazione
permalink: /it/amministrazione/trasparenza/
---
<div class="container">
<div class="row">
  <div class="col-12 col-lg-8">
    <!--start card-->
    {% for comunicato in site.data.trasparenza.comunicati %}
    <div class="card-wrapper card-space">
      <div class="card card-bg card-big">
        <div class="card-body">
          <div class="top-icon">
<svg xmlns="http://www.w3.org/2000/svg" height="98px" viewBox="0 -960 960 960" width="98px" fill="#000000"><path d="M331-431h37v-83h48q15.73 0 26.36-10.64Q453-535.28 453-551v-48q0-15.72-10.64-26.36Q431.73-636 416-636h-85v205Zm37-120v-48h48v48h-48Zm129 120h84q15 0 26-10.64 11-10.63 11-26.36v-131q0-15.72-11-26.36Q596-636 581-636h-84v205Zm37-37v-131h47v131h-47Zm133 37h37v-83h50v-37h-50v-48h50v-37h-87v205ZM260-200q-24 0-42-18t-18-42v-560q0-24 18-42t42-18h560q24 0 42 18t18 42v560q0 24-18 42t-42 18H260Zm0-60h560v-560H260v560ZM140-80q-24 0-42-18t-18-42v-620h60v620h620v60H140Zm120-740v560-560Z"/></svg>
            <h3 class="card-title h5">{{ comunicato.titolo }}</h3>
          <p class="card-text font-serif">{{ comunicato.testo }}</p>
          <a class="read-more" href="{{ comunicato.link }}">
            <span class="text">Leggi di più</span>
            <span class="visually-hidden">su {{ comunicato.titolo }}</span>
            <svg class="icon"><use href="/bootstrap-italia/dist/svg/sprites.svg#it-arrow-right"></use></svg>
          </a>
        </div>
      </div>
    </div>
    {% endfor %}
    <!--end card-->
  </div>
</div>
</div>
