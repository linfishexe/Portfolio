/*!
* Start Bootstrap - Clean Blog v6.0.9 (https://startbootstrap.com/theme/clean-blog)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-clean-blog/blob/master/LICENSE)
*/
window.addEventListener('DOMContentLoaded', () => {
    const mainNav = document.getElementById('mainNav');
    const headerHeight = mainNav.clientHeight;

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY || window.pageYOffset;

        // 加上固定位置
        if (scrollTop > 0) {
            mainNav.classList.add('is-fixed');
        } else {
            mainNav.classList.remove('is-fixed');
        }

        // 根據捲動高度加/移背景色
        if (scrollTop > headerHeight) {
            mainNav.classList.remove('is-transparent');
            mainNav.classList.add('has-bg');
        } else {
            mainNav.classList.remove('has-bg');
            mainNav.classList.add('is-transparent');
        }
    });
});

