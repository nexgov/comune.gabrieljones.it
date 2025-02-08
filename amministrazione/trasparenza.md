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
<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M360-460h40v-80h40q17 0 28.5-11.5T480-580v-40q0-17-11.5-28.5T440-660h-80v200Zm40-120v-40h40v40h-40Zm120 120h80q17 0 28.5-11.5T640-500v-120q0-17-11.5-28.5T600-660h-80v200Zm40-40v-120h40v120h-40Zm120 40h40v-80h40v-40h-40v-40h40v-40h-80v200ZM320-240q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320Zm0-80h480v-480H320v480ZM160-80q-33 0-56.5-23.5T80-160v-560h80v560h560v80H160Zm160-720v480-480Z"/></svg>          </div>
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
