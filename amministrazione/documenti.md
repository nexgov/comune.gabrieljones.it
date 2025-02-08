---
layout: default
title: Documenti
category: amministrazione
permalink: /it/amministrazione/documenti/
---

<div class="row">
  {% for documento in site.data.amministrazione-documenti.documenti %}
    <div class="col-12 col-lg-6">
      <div class="card-wrapper">
        <div class="card">
          <div class="card-body">
            <div class="categoryicon-top">
              <svg class="icon">
                <use href="/bootstrap-italia/dist/svg/sprites.svg#it-file"></use>
              </svg>
              <span class="text">Categoria<br>{{ documento.area }}</span>
            </div>
            <a href="{{ documento.link }}">
              <h3 class="card-title h5">{{ documento.nome }}</h3>
            </a>
            <p class="card-text font-serif">{{ documento.descrizione }}</p>
            <a href="{{ documento.link }}" class="button">Scarica</a>
            <span class="text">Autore: <br>{{ documento.autore }}</span>
          </div>
        </div>
      </div>
    </div>
    <!--end col-->
  {% endfor %}
</div>
<!--end row-->
