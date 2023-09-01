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
menu();


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
            let image = document.querySelector('.modal_img');

            title.innerHTML = element.getAttribute('data-title');
            sub_title.innerHTML = element.getAttribute('data-sub-title');
            image.src = element.getAttribute('data-src');

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

modal();
