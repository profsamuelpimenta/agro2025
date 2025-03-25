function mostrarSecao(secaoId) {
    let secoes = document.querySelectorAll('.conteudo');
    secoes.forEach(secao => secao.style.display = 'none');
    document.getElementById(secaoId).style.display = 'block';
}