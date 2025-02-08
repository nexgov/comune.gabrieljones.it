---
layout: default
title: Documenti Amministrazione
category: amministrazione
permalink: /it/amministrazione/documenti/
---

<h1>Documenti Amministrativi</h1>

<div class="documenti-container">
  {% for documento in site.data.amministrazione-documenti.documenti %}
  <div class="card">
    <h2>{{ documento.nome }}</h2>
    <p>{{ documento.descrizione }}</p>
    <a href="{{ documento.link }}" class="button">Scarica</a>
    <span class="area">{{ documento.area }}</span>
  </div>
  {% endfor %}
</div>

<style>
  .documenti-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  .card {
    border: 1px solid #ddd;
    padding: 15px;
    border-radius: 8px;
    width: 300px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  }
  .button {
    display: inline-block;
    margin-top: 10px;
    padding: 8px 12px;
    background: #007bff;
    color: white;
    text-decoration: none;
    border-radius: 5px;
  }
  .area {
    display: block;
    margin-top: 5px;
    font-size: 0.9em;
    color: gray;
  }
</style>
