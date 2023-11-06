const menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];

let mainEl = document.querySelector("main")
console.log(mainEl)

mainEl.style.backgroundColor = "var(--main-bg)"
mainEl.innerHTML = "<h1>SEI Rocks!</h1>"
mainEl.classList.add("flex-ctr")

let topMenuEl = document.querySelector("#top-menu")

topMenuEl.style.height = "100%"
topMenuEl.style.backgroundColor = "var(--top-menu-bg)"
topMenuEl.classList.add("flex-around")

for (let link = 0; link < menuLinks.length; link++) {
         let link1 = document.createElement("a")
         link1.setAttribute('href', menuLinks[link].href)
         link1.textContent = menuLinks[link].text;
         topMenuEl.appendChild(link1)      
      }

let subMenuEl = document.querySelector('#sub-menu');

subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";

let topMenuLinks = document.querySelectorAll("#top-menu a")

let showingSubMenu = false;

topMenuEl.addEventListener('click', (evt) => {
      evt.preventDefault();
      if (evt.target.nodeName !== "A"){
      return ;
     } else { 
      console.log(evt.target.innerHTML)
    } 
      if (evt.target.classList.contains("active")) {evt.target.classList.remove("active");
      showingSubMenu = false;
      subMenuEl.style.top = "0";
      console.log(evt)
      return;
    }
    for (let value of topMenuLinks) {
      value.classList.remove("active");
    }
    evt.target.classList.add("active");
    
    let clickedLink = menuLinks.find((link)=>link.text === evt.target.text)

    if (clickedLink && clickedLink.subLinks) {
      showingSubMenu = true;
      buildSubMenu(clickedLink.subLinks)
      subMenuEl.style.top = "100%";
    } 
      else {
        showingSubMenu = false;
        subMenuEl.style.top = "0%"
      }
      mainEl.innerHTML = '<h1>${evt.target.text}</h1>';   

});

subMenuEl.addEventListener("click", (evt) => {
  evt.preventDefault();
  if (evt.target.nodeName !== "A"){
    return;}
   
    showingSubMenu = false;
    subMenuEl.style.top = "0%"

    // if (topMenuLinks.classList.contains("active"))
    //  {topMenuLinks.classList.remove("active");}

     
    for (let value of topMenuLinks) {
        value.classList.remove("active");
      }
    
    mainEl.innerHTML = '<h1>${evt.target.text}</h1>';
    
      
  });



  function buildSubMenu(subLinks) {
    subMenuEl.replaceChildren()

    for (let subLink of subLinks) {
      let anchor = document.createElement("a")
      anchor.text = subLink.text;
      anchor.href = subLink.href;
      subMenuEl.appendChild(anchor)
    }

      
  }



