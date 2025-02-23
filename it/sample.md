---
layout: page
title: Cookie Policy
description:
lang: it
ref: cookie-policy
permalink: /it/cookie-policy
---
<script>
  document.addEventListener("DOMContentLoaded", function () {
    if (!window.netlifyIdentity) {
      console.error("Netlify Identity non è caricato.");
      return;
    }

    window.netlifyIdentity.on("init", (user) => {
      if (!user) {
        // Se l'utente non è loggato, lo rimanda alla home o alla login
        window.location.href = "/login.html"; 
      }
    });
  });
</script>

<h1>ciao!</h1>
<p>Questo è un esempio di pagina per una "cookie policy".</p>
