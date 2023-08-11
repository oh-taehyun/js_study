// document.addEventListener('DOMContentLoaded', function () {
//     var trigger = new ScrollTrigger({
//         offset: {
//             x: 0,
//             y: 250
//         }
//     });

// });
const scrollTrigger = new ScrollTrigger.default();

scrollTrigger.add('[data-scroll]', {
    toggle: {
        class: {
            in: 'animateIn',
            out: 'animateOut'
        },
        offset: {
            x: 0,
            y: 650
        }
    }
});