document.addEventListener("DOMContentLoaded", function() {
    var scrollAnimates = document.querySelectorAll('.scroll-animate');

    if ("IntersectionObserver" in window) {
        let observer = new IntersectionObserver((entries, observer) => { 
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate"); 
                    observer.unobserve(entry.target);
                }
            });
        }, { 
            threshold: 0.1,
            rootMargin: "0px 0px -100px 0px"
        });

        scrollAnimates.forEach(div => {
            observer.observe(div);
        });
    } else {
        // Fallback for browsers that don't support IntersectionObserver
        scrollAnimates.forEach(div => {
            div.classList.add('animate');
        });
    }
});
