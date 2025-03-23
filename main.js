const buttonContact = document.getElementById('btn')

document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - 50,
                behavior: "smooth"
            });
        });
    });
});


const contactMe = ()=>{
    let numberPhone = '68548107';

    let callWhastapp = `https://wa.me/${numberPhone}`;

    window.open(callWhastapp)
}