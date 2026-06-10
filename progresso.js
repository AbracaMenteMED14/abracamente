function calcularProgresso(email) {

  let total = 0;

  // =========================
  // JOGOS (100%)
  // =========================
  let jogos = JSON.parse(localStorage.getItem("jogos_" + email)) || {};
  if (jogos.memoria) total += 30;
  if (jogos.emocoes) total += 30;
  if (jogos.quebra) total += 40;

  // =========================
  // TERAPIAS (100%)
  // =========================
  let terapias = JSON.parse(localStorage.getItem("terapia_" + email)) || {};
  if (terapias.foco) total += 30;
  if (terapias.respiracao) total += 30;
  if (terapias.rotina) total += 40;

  // =========================
  // MONITORAMENTO (20%)
  // =========================
  let mon = JSON.parse(localStorage.getItem("monitoramento_progress_" + email)) || null;

  if (mon && mon.dias > 0) {
    let media = mon.total / mon.dias;

    // transforma em impacto leve no progresso
    total += Math.round((media / 100) * 20);
  }

  // limite final
  if (total > 100) total = 100;

  return total;
}