let about = (() => {
  let content = document.querySelector("#content");

  const createAboutPage = () => {
    let aboutPage = document.createElement("div");
    aboutPage.className = "aboutPage";
    aboutPage.setAttribute("class", "aboutPage");

    let aboutTitle = document.createElement("h1");
    aboutTitle.textContent = "ABOUT";

    let loremTitle = document.createElement("h2");
    loremTitle.textContent = "Lorem Ipsum";

    let firstPara = document.createElement("p");
    firstPara.textContent =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id elit dolor. Praesent neque augue, lacinia in ipsum vel, ultricies tristique ex. Proin vulputate porta ligula, nec egestas nisi rhoncus non. Integer cursus lorem a libero cursus fringilla.";

    let secondPara = document.createElement("p");
    secondPara.textContent =
      "Phasellus mattis tortor tincidunt lacus fringilla, a euismod ante facilisis. Aliquam aliquet ornare enim, at lobortis sem porta ac. Pellentesque dignissim nec nunc sed lacinia.";

    aboutPage.append(aboutTitle, loremTitle, firstPara, secondPara);

    content.appendChild(aboutPage);
  };

  const createFooter = () => {
    let footer = document.createElement("footer");
    footer.textContent = "SuShee  |  All Rights Reserved 2020";

    content.appendChild(footer);
  };
  return { createAboutPage, createFooter };
})();

export default about;
