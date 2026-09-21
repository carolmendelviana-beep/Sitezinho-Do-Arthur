```javascript
// =========================
// MENU
// =========================

const links = document.querySelectorAll("nav a");

links.forEach(link => {

    link.addEventListener("click", function () {

        links.forEach(item => {
            item.classList.remove("active");
        });

        this.classList.add("active");
    });

});


// =========================
// ANIMAÇÃO AO ROLAR
// =========================

const elementos = document.querySelectorAll(
    ".project, .skill, .about-text, .section-title"
);

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.15
    }
);


elementos.forEach(elemento => {

    elemento.classList.add("hidden");

    observer.observe(elemento);

});


// =========================
// BOTÃO DISCORD
// =========================

const discordButton = document.querySelector(".discord");

if (discordButton) {

    discordButton.addEventListener("click", () => {

        console.log(
            "Abrindo Discord do ArthurGG__"
        );

    });

}


// =========================
// ANO AUTOMÁTICO
// =========================

const footer = document.querySelector("footer");

if (footer) {

    const ano = new Date().getFullYear();

    footer.innerHTML = `
        <p>
            © ${ano}
            <span>ArthurGG__</span>
            — Desenvolvedor Minecraft
        </p>
    `;

}
```
