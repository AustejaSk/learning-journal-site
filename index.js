const viewMoreBtn = document.getElementById("view-more-btn")
const hiddenArticles = document.querySelectorAll(".hidden-article")

viewMoreBtn.addEventListener("click", () => {
     if (window.innerWidth < 576) {
            hiddenArticles.forEach(article => {
        if (article.style.display === "block") {
            article.style.display = "none"
            viewMoreBtn.innerText = "View More"
        } else {
            article.style.display = "block"
            viewMoreBtn.innerText = "View Less"
        }
     }) 
    }
})

function handleResize() {
    if (window.innerWidth >= 576) {
        // If the width is 576px or more, always show the articles
        hiddenArticles.forEach(article => {
            article.style.display = "block"
        })
        viewMoreBtn.innerText = "View More"
        viewMoreBtn.style.pointerEvents = "none" // Disable button clicks
    } else {
        viewMoreBtn.style.pointerEvents = "auto" // Enable button clicks
    }
}

window.addEventListener("resize", handleResize)

handleResize()