---
layout: default
title: Documenti
category: amministrazione
permalink: /it/amministrazione/trasparenza/
---
{% for comunicato in site.data.trasparenza.comunicati %}
<div class="media at-item w-100">
  <div class="media-left text-center">
    <h3 class="mb-0">{{ comunicato.id }}</h3>
    {{ comunicato.anno }}<br>

    <!-- Immagine fissa -->
    <img class="media-object" src="/pvw2/img/comunicati_sdg.png" alt="icona documento">
  </div>
  <div class="media-body overflow-hidden">
    <p>{{ comunicato.protocollo }}</p>
    <h3 class="media-heading mb-2 text-break">{{ comunicato.decisione }}</h3>
    <ul class="list-group">
      <li class="list-group-item">
        <label>Pubblicato il:</label> <strong>{{ comunicato.pubblicazione }}</strong>
      </li>
      <li class="list-group-item">
        <label>Tipologia:</label> <strong>{{ comunicato.tipologia }}</strong>
      </li>
    </ul>
  </div>
  <div class="media-right">
    <div class="box-allegato-new">
      <!-- Link per visualizzare allegato -->
      <a href="{{ comunicato.allegato_url }}" target="_blank" data-tooltip="tooltip" title="Visualizza allegato">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500"><path d="m422.68,387.32..."></path></svg>
      </a>
      <!-- Link per scaricare allegato -->
      <a href="{{ comunicato.download_url }}" target="_blank" class="ml-2" data-tooltip="tooltip" title="Scarica allegato">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500"><path d="m425.5,322.67..."></path></svg>
      </a>
    </div>
  </div>
</div>
{% endfor %}
