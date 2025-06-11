
function pesquisarDocumento() {
  const input = document.getElementById("campo-pesquisa").value.trim().toLowerCase();
  const redirect = {
    "crlv": "documentos/crlv.html"
  };

  if (redirect[input]) {
    window.location.href = redirect[input];
  } else {
    alert("Documento não encontrado 🙂");
  }
}
