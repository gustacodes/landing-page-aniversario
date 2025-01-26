document.addEventListener('DOMContentLoaded', () => {

    window.onload = function() {
        // Animação do título
        document.querySelector('.titulo').classList.add('aparecer');
        
        // Animação do conteúdo após o título, com atraso de 1 segundo
        setTimeout(function() {
            document.querySelector('.content-second').classList.add('aparecer-second');
        }, 1000); // Atraso de 1 segundo
    };
    
    
    // Função para abrir o modal
    function openModal() {
        const modal = document.getElementById('modal');
        if (modal) {
            modal.style.display = "block"; // Exibe o modal
        }
    }

    // Seleciona os elementos
    const abrirModal = document.getElementById("abrirModal");
    const modal = document.getElementById("modal");
    const fecharModal = document.getElementById("closeModal");

    // Função para abrir o modal
    abrirModal.addEventListener("click", (event) => {
    event.preventDefault(); // Previne o comportamento padrão do link
    modal.classList.add("show");
    });

    // Função para fechar o modal
    fecharModal.addEventListener("click", () => {
    modal.classList.remove("show");
    });

    // Fecha o modal ao clicar fora dele
    window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.classList.remove("show");
    }
    });


    // Função para fechar o modal
    function closeModal() {
        const modal = document.getElementById('modal');
        if (modal) {
            modal.style.display = "none"; // Oculta o modal
        }
    }

    // Adiciona evento ao botão "Convite"
    const abrirModalBtn = document.getElementById('abrirModal');
    const closeModalBtn = document.getElementById('closeModal');

    // Ao clicar no botão "Convite", abre o modal
    if (abrirModalBtn) {
        abrirModalBtn.addEventListener('click', (event) => {
            event.preventDefault(); // Impede o comportamento padrão do link
            openModal();
        });
    }

    // Ao clicar no "X" do modal, fecha o modal
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeModal);
    }

    // Fecha o modal ao clicar fora do conteúdo
    window.addEventListener('click', (event) => {
        const modal = document.getElementById('modal');
        if (modal && event.target === modal) {
            closeModal();
        }
    });

    // Adiciona evento ao botão "Entrar" (dentro do modal)
    const entrarBtn = document.getElementById('entrarBtn');

    if (entrarBtn) {
        entrarBtn.addEventListener('click', (event) => {
            event.preventDefault(); // Previne o comportamento padrão do link

            // Lista de códigos válidos
            const codigos = [
                "fIBeGB", "CiweZM", "chBGpD", "DMjLSf", "3BOBsK", "kQMUvq", "Ilii8t", "OKHFte", "4CuUdA", "NW9P2R",
                "HPTE2k", "ZKhzFT", "j2NyFQ", "s8hnEL", "vCJVV0", "qTNbl5", "S4dGQ6", "9qcjaL", "bSeV1h", "XDJCyP",
                "FEexdg", "yOAdGT", "u20KcB", "6DSUJ6", "4SgZBx", "OzUagM", "Rjyc8N", "x4Caus", "Jf7xxq", "gwjYk4",
                "0a611C", "9YOFHJ", "dGdwC5", "yUF5lg", "PrG0pJ", "0ukUoj", "e0WDEI", "JThzLi", "FoGoAz", "4rneMG",
                "fdQVk5", "nMCOsM", "w0JxuS", "F5yIlk", "CjUmK7", "pQLAlq", "VgEPSj", "VRQ8Ab", "rKSBhl", "QRA35B",
                "v7d6hd", "se79WI", "bl9hqq", "TiBGl5", "gRRwF5", "h847Ih", "uiUmqu", "lA55gK", "k9cSRf", "90GDon",
                "pVdV5Y", "NBhIJZ", "W6pHin", "TD50uD", "CUnEU1", "M6De26", "3zmmPG", "FNVYeK", "fxgNfp", "prIaL5",
                "7tAVIG", "OBswMU", "sdsTyF", "GFywAb", "nDlpO7", "MlIvS2", "KOSFb3", "f270v8", "kBI43l", "aomSqL"
            ];

            // Captura o valor do input
            const codigo = document.getElementById('codigoConvite')?.value;

            // Verifica o valor do código
            if (codigo) {
                if (codigos.includes(codigo)) { 
                    sessionStorage.setItem('codigoValido', codigo);
                    window.location.href = 'meu-aniversario.html';
                } else {
                    alert('Código inválido!');
                }
            } else {
                alert('Por favor, insira um código.');
            }
        });
    }
});

window.onload = function() {
    // Verifica se o código foi validado
    const codigoValido = sessionStorage.getItem('codigoValido');
    console.log(codigoValido);
    

    // Lista de códigos válidos
    const codigos = [
        "fIBeGB", "CiweZM", "chBGpD", "DMjLSf", "3BOBsK", "kQMUvq", "Ilii8t", "OKHFte", "4CuUdA", "NW9P2R",
        "HPTE2k", "ZKhzFT", "j2NyFQ", "s8hnEL", "vCJVV0", "qTNbl5", "S4dGQ6", "9qcjaL", "bSeV1h", "XDJCyP",
        "FEexdg", "yOAdGT", "u20KcB", "6DSUJ6", "4SgZBx", "OzUagM", "Rjyc8N", "x4Caus", "Jf7xxq", "gwjYk4",
        "0a611C", "9YOFHJ", "dGdwC5", "yUF5lg", "PrG0pJ", "0ukUoj", "e0WDEI", "JThzLi", "FoGoAz", "4rneMG",
        "fdQVk5", "nMCOsM", "w0JxuS", "F5yIlk", "CjUmK7", "pQLAlq", "VgEPSj", "VRQ8Ab", "rKSBhl", "QRA35B",
        "v7d6hd", "se79WI", "bl9hqq", "TiBGl5", "gRRwF5", "h847Ih", "uiUmqu", "lA55gK", "k9cSRf", "90GDon",
        "pVdV5Y", "NBhIJZ", "W6pHin", "TD50uD", "CUnEU1", "M6De26", "3zmmPG", "FNVYeK", "fxgNfp", "prIaL5",
        "7tAVIG", "OBswMU", "sdsTyF", "GFywAb", "nDlpO7", "MlIvS2", "KOSFb3", "f270v8", "kBI43l", "aomSqL"
    ];

    // Se o código não for válido ou não existir, redireciona para a página inicial
    if (!codigos.includes(codigoValido)) {
        alert('Você não tem permissão para acessar esta página.');
        window.location.href = 'index.html'; // Redireciona para a página inicial
    }
};
