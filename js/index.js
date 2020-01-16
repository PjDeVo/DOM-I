const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

//header

let navLinks = document.getElementsByTagName("a");
console.log(navLinks);

const setNavLinks = function() {
  for (i = 0; i < navLinks.length; i++) {
    Array.from(navLinks)[i].textContent =
      siteContent["nav"][`nav-item-${i + 1}`];
    navLinks[i].style.color = "green";
  }
};
setNavLinks();
let navBar = document.querySelector("nav");
let newLink = document.createElement("a");
let linkName = document.createTextNode("New Link");
newLink.appendChild(linkName);
console.log(newLink);
console.log(navBar);
newLink.style.color = "green";
navBar.append(newLink);

let headerBar = document.querySelector("header");

let newImg = document.createElement("img");
newImg.src = "/Users/owner/desktop/lambda/Dom-I/img/logo.png";
newImg.style.marginTop = "40px";
newImg.style.marginRight = "40px";
newImg.style.height = "35px";

headerBar.prepend(newImg);

//header

let h1Tags = document.getElementsByTagName("h1");
console.log(h1Tags);

let headerText = (h1Tags[0].textContent = siteContent["cta"]["h1"]);

let firstButton = document.getElementsByTagName("button");
firstButton[0].innerText = siteContent["cta"]["button"];
console.log(firstButton);

let headerImg = document.getElementById("cta-img");
console.log(headerImg);
headerImg.src = siteContent["cta"]["img-src"];

// Main Content

let h4Values = document.getElementsByTagName("h4");
console.log(h4Values);

h4Values[0].textContent = siteContent["main-content"]["features-h4"];
h4Values[1].textContent = siteContent["main-content"]["about-h4"];
h4Values[2].textContent = siteContent["main-content"]["services-h4"];
h4Values[3].textContent = siteContent["main-content"]["product-h4"];
h4Values[4].textContent = siteContent["main-content"]["vision-h4"];

let paragraphValues = document.getElementsByTagName("p");
console.log(paragraphValues);
paragraphValues[0].textContent =
  siteContent["main-content"]["features-content"];
paragraphValues[1].textContent = siteContent["main-content"]["about-content"];
paragraphValues[2].textContent =
  siteContent["main-content"]["services-content"];
paragraphValues[3].textContent = siteContent["main-content"]["product-content"];
paragraphValues[4].textContent = siteContent["main-content"]["vision-content"];

let middleImg = document.getElementById("middle-img");
middleImg.src = siteContent["main-content"]["middle-img-src"];

// contact
h4Values[h4Values.length - 1].textContent =
  siteContent["contact"]["contact-h4"];
paragraphValues[5].textContent = siteContent["contact"]["address"];
paragraphValues[6].textContent = siteContent["contact"]["phone"];
paragraphValues[7].textContent = siteContent["contact"]["email"];

//footer

paragraphValues[8].textContent = siteContent["footer"]["copyright"];
