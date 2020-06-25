
import homePage from './home.js';
import menu from './menu.js';
import about from './about.js'; 

const Header = (() =>{

    let header = document.createElement("header")
    let logo = document.createElement("div");
    logo.className = "logo";

    let logo1 = document.createElement("p");
    logo1.textContent = "Su";
    logo1.className = "su";

    let logo2 = document.createElement("p");
    logo2.textContent = "Shee"
    logo2.className = "shee";

    logo.append(logo1, logo2);
    
    let navigation = document.createElement("div");
    navigation.className = "navigation";

    let homeLink = document.createElement("p");
    homeLink.textContent = "Home";
    homeLink.className = "home";

    let menuLink = document.createElement("p");
    menuLink.textContent = "Menu";
    menuLink.className = "menu";

    let aboutLink = document.createElement("p");
    aboutLink.textContent = "About";
    aboutLink.className = "about";

    navigation.append(homeLink, menuLink, aboutLink);
    header.append(logo, navigation);
    content.appendChild(header);

    return{header, navigation, homeLink, aboutLink, menuLink};
})();

const Restaurant = (() =>{
    let content = document.querySelector("#content");

    const deleteContents = () =>{
        content.innerHTML = "";
        content.appendChild(Header.header);
    }

    const loadHomePage = () =>{
        homePage.createHomePage();
        homePage.viewMenu.addEventListener("click", () =>{
            deleteContents();
            menu.createMenuPage();
            changeLinkColor();
                Header.menuLink.style.color = "#FF8C05";
                Header.menuLink.style.borderBottom = "3px solid #FF8C05";
        })
    }

    const navigatePage = () => {

        Header.navigation.addEventListener("click", (event) =>{
            if(event.target !== event.currentTarget){
                let target = event.target.className;
                deleteContents();
                if(target == "home"){
                    homePage.createHomePage();
                }
                else if(target == "menu"){
                    menu.createMenuPage();
                }
                else if(target == "about"){
                    about.createAboutPage();
                    about.createFooter();
                }
                // Change the color of all links to white and remove the bottom border
                changeLinkColor();
                event.target.style.color = "#FF8C05";
                event.target.style.borderBottom = "3px solid #FF8C05";
            }
        
        })
    }

    const changeLinkColor = () =>{
        let links = Header.navigation.childNodes;
        for (let i=0; i<links.length; i++){
            links[i].style.color = "white";
            links[i].style.border = "none";
        }
       
    }
    return {loadHomePage, navigatePage};
})();


Restaurant.loadHomePage();
Restaurant.navigatePage();





