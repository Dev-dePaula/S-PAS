function imprimir() {
  window.print();
}

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

document.getElementById("atividades").innerHTML =
  atividades.map(a => `
    <tr>
      <td>${a}</td>
      <td><input type="checkbox"></td>
      <td><input type="checkbox"></td>
      <td><input></td>
    </tr>
  `).join("");

document.getElementById("encaminhamentos").innerHTML =
  encaminhamentos.map(e => `
    <tr>
      <td>${e}</td>
      <td><input type="checkbox"></td>
      <td><input type="checkbox"></td>
      <td><input type="checkbox"></td>
    </tr>
  `).join("");
