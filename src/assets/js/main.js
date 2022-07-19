const selectElement = (a) => {
    let b = document.querySelector(a)
    if (b) return b
    throw new Error(
      `Something went wrong! Make sure that ${a} exists/is typed correctly.`
    )
  },
  scrollHeader = () => {
    let a = selectElement("#header")
    this.scrollY >= 15
      ? a.classList.add("activated")
      : a.classList.remove("activated")
  }
window.addEventListener("scroll", scrollHeader)
const menuToggleIcon = selectElement("#menu-toggle-icon"),
  formOpenBtn = selectElement("#search-icon"),
  formCloseBtn = selectElement("#form-close-btn"),
  searchContainer = selectElement("#search-form-container"),
  toggleMenu = () => {
    let a = selectElement("#menu")
    a.classList.toggle("activated"),
      menuToggleIcon.classList.toggle("activated")
  }
menuToggleIcon.addEventListener("click", toggleMenu),
  formOpenBtn.addEventListener("click", () =>
    searchContainer.classList.add("activated")
  ),
  formCloseBtn.addEventListener("click", () =>
    searchContainer.classList.remove("activated")
  ),
  window.addEventListener("keyup", (a) => {
    "Escape" === a.key && searchContainer.classList.remove("activated")
  })
const body = document.body,
  themeToggleBtn = selectElement("#theme-toggle-btn"),
  currentTheme = localStorage.getItem("currentTheme")
currentTheme && body.classList.add("light-theme"),
  themeToggleBtn.addEventListener("click", function () {
    body.classList.toggle("light-theme"),
      body.classList.contains("light-theme")
        ? localStorage.setItem("currentTheme", "themeActive")
        : localStorage.removeItem("currentTheme")
  })
const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
  pagination: { el: ".swiper-pagination" },
  breakpoints: { 700: { slidesPerView: 2 }, 1200: { slidesPerView: 3 } },
})
require("dotenv").config(),
  commentBox(process.env.COMMENTS_AUTH, {
    className: "commentbox",
    defaultBoxId: "commentbox",
    tlcParam: "tlc",
    sortOrder: "best",
    backgroundColor: null,
    textColor: null,
    subtextColor: null,
    singleSignOn: null,
    createBoxUrl: (b, a) => ((a.search = ""), (a.hash = b), a.href),
    onCommentCount(a) {},
  })
