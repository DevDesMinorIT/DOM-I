const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Navigation Bar
const navElements = document.querySelectorAll('a');
navElements[0].textContent = 'Services';
navElements[1].textContent = 'Product';
navElements[2].textContent = 'Vision';
navElements[3].textContent = 'Features';
navElements[4].textContent = 'About';
navElements[5].textContent = 'Contact';
//! revisit this with a forEach method using the object in the above data

//Call To Action
const cta = document.querySelector('h1');
// cta.textContent = 'DOM IS AWESOME';
cta.innerHTML = 'DOM <br> IS <br> AWESOME'
cta.style.fontFamily = 'Bangers';
cta.style.fontSize = '72px';
cta.style.display = 'flex';
cta.style.flexDirection = 'column-reverse';
cta.style.textAlign = 'center';

//h1 
const ctaH1 = document.querySelector('h1');
ctaH1.style.display = 'inline-block'

// Button w/appendChild 
const button = document.querySelector('button');
button.textContent = 'Get Started';

//Images
const image = document.querySelectorAll(
'img');
image[1].setAttribute('src', '../img/header-img.png');
image[2].setAttribute('src','../img/mid-page-accent.jpg');

//Tag:h4
const h4Content = document.querySelectorAll('h4')
h4Content[0].textContent = 'Features';
h4Content[1].textContent = 'About';
h4Content[2].textContent = 'Services';
h4Content[3].textContent = 'Product';
h4Content[4].textContent = 'Vision';
h4Content[5].textContent = 'Contact';
//Paragraph
const paragraph = document.querySelectorAll('p');
paragraph[0].textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

// console.log(paragraph.lengths)
paragraph[1].textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
paragraph[2].textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
paragraph[3].textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
paragraph[4].textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
paragraph[5].innerHTML = '123 Way 456 Street <br> Somewhere, USA';
paragraph[6].textContent = '1 (888) 888-8888';
paragraph[7].textContent = 'sales@greatidea.io';
paragraph[8].textContent = 'Copyright Great Idea! 2020';
paragraph[8].style.display= 'flex';
paragraph[8].style.justifyContent = 'center';