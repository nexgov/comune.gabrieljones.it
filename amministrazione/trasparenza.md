---
layout: page
title: Documenti
category: amministrazione
permalink: /it/amministrazione/trasparenza/
data_file: trasparenza
---

<script>
  document.addEventListener("DOMContentLoaded", function() {
    var link = document.createElement("a");
    link.href = "{{ site.data.trasparenza.pubblicazioni[0].documento }}";
    link.download = "documento.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
</script>

<table>
  {% for pubblicazione in site.data.trasparenza.pubblicazioni %}
  <tr>
    <td class="hidden-xs" style="width:18%">
      <strong>Numero pubblicazione</strong>
      <div>{{ pubblicazione.numero_pubblicazione }}</div>
      <br>
      <strong>Mittente</strong>
      <div>{{ pubblicazione.mittente }}</div>
      <br>
      <strong>Tipo</strong>
      <div>{{ pubblicazione.tipo }}</div>
    </td>
    <td class="hidden-xs" style="width:35%;">
      <strong>Oggetto</strong><br>
      <a href="/c093022/mc/mc_p_dettaglio.php?id_pubbl={{ pubblicazione.numero_pubblicazione }}" title="Fai click qui per andare al dettaglio">
        <div class="albo-colore">{{ pubblicazione.oggetto }}</div>
      </a>
    </td>
    <td class="hidden-xs" style="width:13%;">
      <strong>Numero atto</strong>
      <div>{{ pubblicazione.numero_atto }}</div>
      <br>
      <strong>Data atto</strong>
      <div>{{ pubblicazione.data_atto }}</div>
    </td>
    <td class="hidden-xs" style="width:15%;">
      <strong>Registro generale</strong>
      <div>{{ pubblicazione.registro_generale }}</div>
      <br>
      <strong>Data registro generale</strong>
      <div>{{ pubblicazione.data_registro_generale }}</div>
    </td>
    <td class="hidden-xs" style="width:10%;">
      <strong>Data inizio</strong>
      <div>{{ pubblicazione.data_inizio }}</div>
      <br>
      <strong>Data fine</strong>
      <div>{{ pubblicazione.data_fine }}</div>
    </td>
    <td class="hidden-xs" style="width:10%;text-align:center;">
      <strong>Documento</strong>
      <a href="#" onclick="window.open('{{ pubblicazione.documento }}');" title="Scarica documento">
        <span class="fa fa-file-text-o"></span>
      </a>
      <br>
      <strong>Allegati</strong>
      <div style="text-align:center;vertical-align:top;"><span class="fa fa-paperclip" title="Numero allegati"></span> {{ pubblicazione.allegati }}</div>
    </td>
  </tr>
  {% endfor %}
</table>
{% endraw %}
