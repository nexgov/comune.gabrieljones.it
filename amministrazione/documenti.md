---
layout: default
title: Documenti
category: amministrazione
permalink: /it/amministrazione/documenti/
---
<div class="container">
<div class="row">
    <div class="col-12 col-lg-6">
      <div class="card-wrapper">
        <div class="card">
          <div class="card-body">
            <div class="categoryicon-top">
              <svg class="icon">
                <use href="/bootstrap-italia/dist/svg/sprites.svg#it-file"></use>
              </svg>
              <span class="text">Categoria<br></span>
            </div>
            <a href="{{ documento.link }}">
              <h3 class="card-title h5"></h3>
            </a>
            <p class="card-text font-serif"></p>
            <a href class="button">Scarica</a>
            <span class="text">Autore: <br>{{ documento.autore }}</span>
          </div>
        </div>
      </div>
    </div>
    <!--end col-->
</div>
<!--end row-->
<div class="row">
  {% for documento in site.data.amministrazione-documenti.documenti %}

  <div class="col-12 col-lg-8">
    <!--start card-->
    <div class="card-wrapper card-space">
      <div class="card card-bg card-big border-bottom-card">
        <div class="flag-icon"></div>
        <div class="etichetta">
          <svg class="icon"><use href="/bootstrap-italia/dist/svg/sprites.svg#it-settings"></use></svg>
          <span>Ufficio: {{ documento.area }}</span>
        </div>
        <div class="card-body">
          <h3 class="card-title h5 ">{{ documento.nome }}</h3>
          <p class="card-text font-serif">{{ documento.descrizione }}</p>
          <a class="read-more" href="{{ documento.link }}">
            <span class="text">Leggi di più</span>
            <svg class="icon"><use href="/bootstrap-italia/dist/svg/sprites.svg#it-arrow-right"></use></svg>
          </a>
          <h6 class="card-title h6 ">{{ documento.autore }}</h6>
        </div>
      </div>
    </div>
    <!--end card-->
  </div>
  {% endfor %}
</div>


</div>
