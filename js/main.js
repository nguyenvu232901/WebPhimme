$(document).ready(function() {
    $('.filter-item').click(function() { // Sửa bộ chọn
        const value = $(this).attr('data-filter');
        if (value === 'all') {
            $('.post-box').show(1000);
        } else {
            $('.post-box').not('.' + value).hide(1000);
            $('.post-box').filter('.' + value).show(1000);
        }
        
        // Cập nhật lớp bộ lọc đang hoạt động
        $('.filter-item').removeClass('active-filter');
        $(this).addClass('active-filter');
    });

    // add active to btn
    $(".filter-item").click(function(){
        $(this).addClass("active-filter").siblings().removeClass("active-filter");
    })
});

// header background change on scroll
let header = document.querySelector("header");

window.addEventListener("scroll", ()=>{
    header.classList.toggle("shadow", window.scrollY > 0);
});
