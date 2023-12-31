function menu() {
    $(".menu_mobile_open").click(
        function () {

            $('.menu_mobile').css('display', 'flex').css('top', '118px').css('animation', 'move ease-in 400ms');
            setTimeout(() => {
                $('.menu_mobile_open').css('display', 'none');
                $('.menu_mobile_close').css('display', 'flex');
            }, 200);
        }
    );

    $(".menu_mobile_close").click(
        function () {
            $('.menu_mobile').css('top', '-100%').css('animation', 'move ease-out 400ms;');
            setTimeout(() => {
                if ($('.menu_mobile').css('top', '-100%')) {
                    $('.menu_mobile').css('display', 'none');
                }
            }, 600);

            setTimeout(() => {
                $('.menu_mobile_open').css('display', 'flex');
                $('.menu_mobile_close').css('display', 'none');
            }, 100);

        }

    );
}
window.addEventListener( 'load',  menu());

function modal() {

    let service = document.querySelectorAll('.area_principal_servicos');

    service.forEach((element) => {

        element.addEventListener('click', () => {
            document.querySelector('.area_modal').style.opacity = 0;
            document.querySelector('.area_modal').style.display = 'flex';
            setTimeout(() => {
                document.querySelector('.area_modal').style.opacity = 1;

            }, 200);


            let title = document.querySelector('.title_modal h2');
            let sub_title = document.querySelector('.sub_title_modal p');
            let infos = document.querySelectorAll('.infos_modal p');
            let infos_desc = document.querySelectorAll('.info_desc p');
            let image = document.querySelector('.modal_img');

            title.innerHTML = element.getAttribute('data-title');
            image.src = element.getAttribute('data-src');

            for (let i = 1; i <= infos.length; i++) {
                infos[i - 1].innerHTML = element.getAttribute('data-info-' + i);
                
            }

            for (let i = 1; i <= infos_desc.length; i++) {
                infos_desc[i - 1].innerHTML = element.getAttribute('data-desc-' + i);
                
            }

            sub_title.innerHTML = element.getAttribute('data-sub-title');
        
        });

    });

    let close_modal = document.querySelector('.close_modal');

    close_modal.addEventListener('click', () => {
        document.querySelector('.area_modal').style.opacity = 0;

        setTimeout(() => {
            document.querySelector('.area_modal').style.display = 'none';
        }, 200);

    })

}

window.addEventListener( 'load',  modal());