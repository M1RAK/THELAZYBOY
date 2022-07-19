let suggestions = [
  "art of execution",
  "a billion wicked thoughts",
  "but i love u",
  "the secret",
  "fashion101",
  "girls just wanna have fun",
  "happily ever after",
  "mind over matter",
  "n.l.p",
  "passion or duty",
  "plate spinning theory",
  "the backwards law",
  "the blackpill",
  "the hermetic principles",
  "the hot ape",
  "the sigma male",
  "the torah code",
  "the way of men",
  "why do my eyes hurt",
  "you have no choice",
]
const searchWrapper = document.querySelector(".form"),
  inputBox = searchWrapper.querySelector("input"),
  suggBox = searchWrapper.querySelector(".autocom-box"),
  icon = searchWrapper.querySelector(".ri-search-line")
let linkTag = searchWrapper.querySelector("a"),
  webLink
function select(a) {
  let b = a.textContent
  ;(inputBox.value = b),
    (icon.onclick = () => {
      ;(webLink = `/blog/${b}`),
        linkTag.setAttribute("href", webLink),
        linkTag.click()
    }),
    searchWrapper.classList.remove("active")
}
function showSuggestions(a) {
  let b
  ;(b = a.length ? a.join("") : `<li>${(userValue = inputBox.value)}</li>`),
    (suggBox.innerHTML = b)
}
inputBox.onkeyup = (d) => {
  let e = d.target.value,
    a = []
  if (e) {
    ;(icon.onclick = () => {
      ;(webLink = `https://www.google.com/search?q=${e}`),
        linkTag.setAttribute("href", webLink),
        linkTag.click()
    }),
      (a = (a = suggestions.filter((a) =>
        a.toLocaleLowerCase().startsWith(e.toLocaleLowerCase())
      )).map((a) => (a = `<li>${a}</li>`))),
      searchWrapper.classList.add("active"),
      showSuggestions(a)
    let c = suggBox.querySelectorAll("li")
    for (let b = 0; b < c.length; b++)
      c[b].setAttribute("onclick", "select(this)")
  } else searchWrapper.classList.remove("active")
}
