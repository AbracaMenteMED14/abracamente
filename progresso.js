function calcularProgresso(email){

  // ======================
  // PEGAR DADOS
  // ======================
  const jogos = JSON.parse(localStorage.getItem("jogos_" + email)) || {};
  const terapia = JSON.parse(localStorage.getItem("terapia_" + email)) || {};
  const monitoramento = JSON.parse(localStorage.getItem("monitoramento_" + email)) || {};

  // ======================
  // VALORES BASE
  // ======================

  // Jogos (30%)
  let jogosScore = jogos.total || 0; // 0 a 100

  // Terapia (30%)
  let terapiaScore = terapia.total || 0;

  // Monitoramento (40%)
  let monitorScore = monitoramento.total || 0;

  // ======================
  // PESO FINAL
  // ======================
  let total =
    (jogosScore * 0.30) +
    (terapiaScore * 0.30) +
    (monitorScore * 0.40);

  return Math.round(total);
}