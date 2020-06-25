let homePage = (() => {
  let content = document.querySelector("#content");
  let viewMenu = document.createElement("button");
  
  const createHomePage = () => {
    let landingPage = document.createElement("div");
    landingPage.className = "landingPage";
    landingPage.setAttribute("class", "landingPage");

    let landingContent = document.createElement("div");
    landingContent.className = "landingContent";
    landingContent.setAttribute("class", "landingContent");

    let welcomeText = document.createElement("p");
    welcomeText.className = "welcomeText";
    welcomeText.style.whiteSpace = "pre";
    welcomeText.textContent = "YOUR SUSHI ADVENTURE \r\n";
    welcomeText.textContent += "STARTS HERE.";
    welcomeText.setAttribute("class", "welcomeText");

   
    viewMenu.className = "viewMenu";
    viewMenu.type = "button";
    viewMenu.textContent = "View Menu";
    viewMenu.setAttribute("class", "viewMenu");

    let address = document.createElement("p");
    address.className = "address";
    address.style.whiteSpace = "pre";
    address.textContent = "3rd Floor, Marshall Hotel, First Street \r\n";
    address.textContent += "Capital City, PH";
    address.setAttribute("class", "address");

    let contact = document.createElement("p");
    contact.className = "contact";
    contact.style.whiteSpace = "pre";
    contact.textContent = "For Deliveries, contact: \r\n";
    contact.textContent += "+123 456 7890";
    contact.setAttribute("class", "contact");

    landingContent.append(welcomeText, viewMenu, address, contact);

    landingPage.appendChild(landingContent);

    content.appendChild(landingPage);

  };
  return { createHomePage, viewMenu };
})();

export default homePage;
