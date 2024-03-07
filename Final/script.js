function changePage() {
    const pages = [
        "https://gabs62.github.io/Final/index.html",
        "https://gabs62.github.io/Final/page2.html",
        "https://gabs62.github.io/Final/page3.html",
        "https://gabs62.github.io/Final/cybersecuritylab.html",
        "https://gabs62.github.io/Final/page5.html"
    ];

    let currentPageIndex = 0;

    setInterval(() => {
        window.location.href = pages[currentPageIndex];
        currentPageIndex = (currentPageIndex + 1) % pages.length;
    }, 180000);
}

var pagelist
