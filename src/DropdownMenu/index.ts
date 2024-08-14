/*
  Edge cases not handled
  1. scroll shold be locked when dropdown is open
  2. menu should appear always inside viewport, it should try to change position. If still not able to fit then should be able to overlap the button as well.

  No real functionality is added in this, it takes no function to call when clicked on an option. I am not intending to use it anywhere in a real project this is done as an exercise of TS and CSS.
*/
export default function createDropDownMenu(options: string[], buttonText: string): DocumentFragment {
  const fragement = document.createDocumentFragment();
  const dropdownButton = document.createElement("button");
  dropdownButton.innerText = buttonText;
  dropdownButton.classList.add("button", "primary", "dropdown-button");

  const dropdownMenu = document.createElement("ul");
  dropdownMenu.classList.add("dropdown-menu-list", "hidden");

  const getListItem = (option: string): string => `<li>${option}</li>`;
  dropdownMenu.innerHTML = ` ${options.map(getListItem).join("")}`;

  dropdownButton.addEventListener("click", (event) => {
    if (event.currentTarget) {
      const button = event.currentTarget as HTMLButtonElement;
      const rect = button.getBoundingClientRect();

      const dropdownList = button.parentNode?.querySelector(".dropdown-menu-list") as HTMLUListElement;
      if (dropdownList) {
        dropdownList.classList.toggle("hidden");
        dropdownList.style.setProperty("--top", `${rect.bottom + 5}px`);
        dropdownList.style.setProperty("--left", `${rect.left}px`);
      }
    }
  });

  document.addEventListener("click", (event) => {
    const dropdownList = document?.querySelector(".dropdown-menu-list:not(.hidden)");
    const dropdownButton = document?.querySelector(".dropdown-button");
    if (dropdownList && dropdownButton !== event.target) {
      dropdownList.classList.add("hidden");
    }
  });

  fragement.appendChild(dropdownButton);
  fragement.appendChild(dropdownMenu);
  return fragement;
}
