/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 * sections constant to get dynamically all sections exist or will added to the page
 * navList constant to store and make the unorder list with JS
 * fragment constant to extract parts from the document,change, add, or delete some of the content and insert it back to the document.
*/
const sections = document.querySelectorAll("section");
const navList = document.getElementById("navbar__list");
const mainMenu = document.createDocumentFragment();
/**
 * End Global Variables
 * Start Helper Functions
 *
*/
// Scroll to section on link click
//this function to make a navigation move automatically once you click on the desired link
function clickLink (press,element){
  press.addEventListener("click",() =>{
    element.scrollIntoView({behavior: "smooth"});
});
};
// Scroll to anchor ID using scrollTO event
//and this function to style the section you viewed
function styleView (){
  window.addEventListener("scroll",()=>{
    sections.forEach((sec)=>{
      const viewDisp = sec.getBoundingClientRect();
      if (viewDisp.top > 0 && viewDisp.top < 300){
        sections.forEach((activeSec)=>{
          activeSec.classList.remove("your-active-class");
          });
          sec.classList.add("your-active-class");
      };
    });
  });
};
// Add class 'active' to section when near top of viewport
// also this one to style the link related to the section you viewed
function styleLink (){
  window.addEventListener("scroll",()=>{
    sections.forEach((sec)=>{
      const viewDisp = sec.getBoundingClientRect();
      if (viewDisp.top > 0 && viewDisp.top < 300){
        let activeLink = sec.getAttribute("data-nav");
          const links = document.querySelectorAll("a");
          links.forEach((link)=>{
            if (link.innerText == activeLink) {
              links.forEach((delLink)=>{
                delLink.classList.remove("active");
              })
              link.classList.add("active");
            };
          });
      };
    });
  });
};
/**
 * End Helper Functions
 * Begin Main Functions
 *
*/
/*this is the main function to build the Main Menu by getting sections name and adding them to list element to complete the empty un ordered list
*/
function buildMainMenu (){
  //this is a for loop within sections to extract main elements to be used in menu building
  sections.forEach( (part, index) => {
    //linkText variable to get and store each section name from its "data-nav" attribute.
    let linkText = part.getAttribute("data-nav");
    //newLink variable to create an empty link element
    let newLink = document.createElement('a');
    //textNode variable equal to linkText
    let textNode = document.createTextNode(linkText);
    let newLi =document.createElement('li');
    //making the text got from each section to be child of the link element created
    newLink.appendChild(textNode);
    //and this link element will be a child of the list element
    newLi.appendChild(newLink);
    //calling click link function
    clickLink(newLink,part);
    //now we can create the main menu from lists
    mainMenu.appendChild(newLi);
    //adding link class to the newLink variable
    newLink.classList.add("menu__link");
  });
};
// build the nav

/**
 * End Main Functions
 * Begin Events
 *
*/
// Build menu
//calling the function to build the main menu
buildMainMenu();
navList.appendChild(mainMenu);
//adding class to the navbar
navList.classList.add("navbar__menu");
// calling style view function to make the required style for the view section
styleView ();
//calling stylLink function to make the style rquired for the limk relted to the view section
styleLink ();



