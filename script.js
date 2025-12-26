const atividades = [
  "Atendimento Psicológico Individual",
  "Atendimento Socioassistencial Individual",
  "Atendimento Psicossocial Grupal",
  "Acolhida e Escuta Terapêutica",
  "Conscientização sobre Dependência Química",
  "Prevenção de Recaída / Habilidades Sociais",
  "Grupos de Mútua Ajuda – AA/NA",
  "Promoção de Autocuidado e Sociabilidade",
  "Atividades Físicas e Desportivas",
  "Atividades Recreativas, Artísticas ou Culturais",
  "Espiritualidade / Religiosidade"
];

const encaminhamentos = [
  "Referenciamento Saúde",
  "Referenciamento Assistência",
  "Rede de Saúde",
  "Rede de Proteção Social",
  "CAD Único",
  "Programa de Transferência de Renda",
  "Confecção de Documentos",
  "Referenciamento Família",
  "Grupos de Apoio",
  "Espaço Prevenir",
  "Alfabetização / Profissionalização",
  "Inserção no Mercado de Trabalho"
];

const atividadesBody = document.getElementById("atividades");
atividades.forEach(a => {
  atividadesBody.innerHTML += `
    <tr>
      <td>${a}</td>
      <td><input type="checkbox"></td>
      <td><input type="checkbox"></td>
      <td><input></td>
    </tr>
  `;
});

const encBody = document.getElementById("encaminhamentos");
encaminhamentos.forEach(e => {
  encBody.innerHTML += `
    <tr>
      <td>${e}</td>
      <td><input type="checkbox"></td>
      <td><input type="checkbox"></td>
      <td><input type="checkbox"></td>
    </tr>
  `;
});

// Gráfico Radar – apoio técnico
new Chart(document.getElementById("graficoRisco"), {
  type: "radar",
  data: {
    labels: [
      "Saúde Mental",
      "Vínculo Familiar",
      "Risco de Recaída",
      "Autocuidado",
      "Adesão",
      "Inserção Social"
    ],
    datasets: [{
      label: "Nível de Atenção",
      data: [3, 2, 4, 3, 2, 1],
      borderColor: "red",
      backgroundColor: "rgba(255,0,0,0.2)"
    }]
  },
  options: {
    scales: {
      r: { min: 0, max: 5, ticks: { stepSize: 1 } }
    }
  }
});
