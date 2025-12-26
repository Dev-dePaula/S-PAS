function imprimirPAS() {
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

const atividadesBody = document.getElementById("atividades");
atividades.forEach(item => {
  atividadesBody.innerHTML += `
    <tr>
      <td style="text-align:left">${item}</td>
      <td><input type="checkbox"></td>
      <td><input type="checkbox"></td>
      <td><input type="text"></td>
    </tr>
  `;
});

const encBody = document.getElementById("encaminhamentos");
encaminhamentos.forEach(item => {
  encBody.innerHTML += `
    <tr>
      <td style="text-align:left">${item}</td>
      <td><input type="checkbox"></td>
      <td><input type="checkbox"></td>
      <td><input type="checkbox"></td>
    </tr>
  `;
});
