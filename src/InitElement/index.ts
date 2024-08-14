import createCarousel from "../Carousel";
import createDropDownMenu from "../DropdownMenu";

type availableElements = "dropdownMenu" | "carousel";
export default function initElement(element: availableElements): DocumentFragment {
    switch (element){
        case "dropdownMenu":{
            const options: string[] = ["edit", "copy", "delete"];
            const buttonText: string = "Actions";
            return createDropDownMenu(options, buttonText);
        }
        case "carousel": {
            const slidesCount: number = 6;
            return createCarousel(slidesCount);
        }
    }
}