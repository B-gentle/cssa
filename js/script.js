let toggler = document.querySelector(".navbar-toggler");
let icon = document.querySelector('.fa-bars');
toggler.addEventListener('click', () => {
            if (icon.classList.contains("fa-bars")) {
                    icon.classList.replace("fa-bars", "fa-times");
                }else{
                    icon.classList.replace("fa-times", "fa-bars");
                }
                console.log(toggler.innerHTML);
            });