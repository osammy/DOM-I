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
logo.setAttribute('src', siteContent["nav"]["img-src"]);

/* sTART TASK 1 */
let navAnchor = document.querySelectorAll('nav a');

for(let i = 0 ; i < navAnchor.length ; i++) {
  navAnchor[i].textContent = siteContent['nav'][`nav-item-${i +1}`]
}
//second 
document
.querySelector('.cta-text h1')
.innerHTML = "DOM<br> Is<br> Awesome";



//third
document
.querySelector('.cta-text button')
.textContent = siteContent["cta"]["button"];

//fourth
document
.getElementById('cta-img')
.src = siteContent["cta"]["img-src"];

//fifith

const topContentH4s = document
.querySelectorAll('.top-content .text-content h4');
const topContentPs = document
.querySelectorAll('.top-content .text-content p');
topContentH4s[0].textContent = siteContent["main-content"]["features-h4"];
topContentPs[0].textContent = siteContent["main-content"]["features-content"];
topContentH4s[1].textContent = siteContent["main-content"]["about-h4"];
topContentPs[1].textContent = siteContent["main-content"]["about-content"];




// document
// .querySelectorAll('.top-content .text-content p')[1]
// .textContent = siteContent["main-content"]["features-content"]

//sixth
console.log(document
.querySelectorAll('.bottom-content .text-content h4'))

const bottomContentH4s = document
.querySelectorAll('.bottom-content .text-content h4');

const bottomContentPs = document
.querySelectorAll('.bottom-content .text-content p');

bottomContentH4s[0].textContent = siteContent["main-content"]["services-h4"];
bottomContentPs[0].textContent = siteContent["main-content"]["services-content"];

bottomContentH4s[1].textContent = siteContent["main-content"]["product-h4"];
bottomContentPs[1].textContent = siteContent["main-content"]["product-content"];

bottomContentH4s[2].textContent = siteContent["main-content"]["vision-h4"];
bottomContentPs[2].textContent = siteContent["main-content"]["vision-content"];

//contact us section
document.getElementById('middle-img')
.src = siteContent['main-content']['middle-img-src'];

const theParentSection = document.querySelector('.contact');
theParentSection.children[0].textContent = siteContent["contact"]["contact-h4"];
theParentSection.children[1].textContent = siteContent["contact"]["address"];

theParentSection.children[2].textContent = siteContent["contact"]["phone"];
theParentSection.children[3].textContent = siteContent["contact"]["email"];

//footer
document
.querySelector('footer p')
.textContent = siteContent["footer"]["copyright"];

/* END TASK 1 */




/* START TASK 2 */


//b
const nav = document.querySelector('nav');
const appendedAnchor = document.createElement('a');
appendedAnchor.textContent = "Pricing";
nav.appendChild(appendedAnchor);


const prependedAnchor = document.createElement('a');
prependedAnchor.textContent = "Home";
nav.prepend(prependedAnchor)

//changing na anchor to color green
let updatedNavAnchor = document.querySelectorAll('nav a');
updatedNavAnchor.forEach(a => {
  a.style.color = "green";
})

/* END TASK 2 */











