let menu = (() =>{
   
    let content = document.querySelector("#content");

    const createMenuPage = () => {

        let menuPage = document.createElement("div");
        menuPage.className = "menuPage";
        menuPage.setAttribute("class", "menuPage");

        let menuTitle = document.createElement("h1");
        menuTitle.textContent = "MENU"

        let menuContainer = document.createElement("div");
        menuContainer.className = "menuContainer";
        menuContainer.setAttribute("class", "menuContainer");

        let menuSelection = document.createElement("div");
        menuSelection.className = "menuSelection";
        menuSelection.setAttribute("class", "menuSelection");

        let rolls = document.createElement("h2");
        rolls.textContent = "ROLLS";

        let cRoll = document.createElement("h3");
        cRoll.textContent = "California Roll";

        let cRollDesc = document.createElement("p");
        cRollDesc.textContent = "Crab, Cucumber, Mango"
        
        let lsRoll = document.createElement("h3");
        lsRoll.textContent = "Lobster Salad Roll";

        let lsRollDesc = document.createElement("p");
        lsRollDesc.textContent = "Lobster, Crab";

        let fRoll = document.createElement("h3")
        fRoll.textContent = "Fish Roll";

        let fRollDesc = document.createElement("p");
        fRollDesc.textContent = "Tuna or Salmon";

        let menuSelection1 = document.createElement("div");
        menuSelection1.className = "menuSelection";

        let sashimi = document.createElement("h2");
        sashimi.textContent = "SASHIMI";

        let egg = document.createElement("h3");
        egg.textContent = "Tamago";

        let tuna = document.createElement("h3");
        tuna.textContent = "Tuna";

        let salmon = document.createElement("h3");
        salmon.textContent = "Salmon";

        let shrimp = document.createElement("h3");
        shrimp.textContent = "Shrimp";

        menuSelection1.append(sashimi, egg, tuna, salmon, shrimp);
        menuSelection.append(rolls, cRoll, cRollDesc, lsRoll, lsRollDesc, fRoll, fRollDesc);
        menuContainer.append(menuSelection, menuSelection1);
        menuPage.append(menuTitle, menuContainer);
        
        content.appendChild(menuPage);
    }
    return {createMenuPage};
})();

export default menu;