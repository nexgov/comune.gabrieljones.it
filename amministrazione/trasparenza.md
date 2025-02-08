---
layout: default
title: Documenti
category: amministrazione
permalink: /it/amministrazione/trasparenza/
------
layout: default
title: Comunicati
---

<div class="row">
  <div class="col-12 col-lg-8">
    <!--start card-->
    {% for comunicato in site.data.trasparenza.comunicati %}
    <div class="card-wrapper card-space">
      <div class="card card-bg card-big">
        <div class="card-body">
          <div class="top-icon">
            <svg class="icon"><use href="/bootstrap-italia/dist/svg/sprites.svg#it-files"></use></svg>
          </div>
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
