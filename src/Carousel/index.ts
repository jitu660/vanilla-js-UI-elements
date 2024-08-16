import styles from "./styles.module.css";

export default function createCarousel(slidesCount: number): DocumentFragment {
  const fragement = document.createDocumentFragment();

  const carouselWindow = document.createElement("div");
  carouselWindow.classList.add(styles["carousel-window"]);

  const slider = document.createElement("div");
  slider.style.setProperty("--slide-count", String(slidesCount));
  slider.classList.add(styles.slider);
  slider.dataset.currSlide = "1";
  carouselWindow.appendChild(slider);

  for (let i = 1; i <= slidesCount; i++) {
    slider.appendChild(createSlide(i));
  }

  carouselWindow.appendChild(createScrollButtons(slidesCount));
  fragement.appendChild(carouselWindow);
  return fragement;
}

function handleClick(direction: "left" | "right", slidesCount: number): void {
  const sliderContainer = document.querySelector(`.${styles.slider}`);
  if (sliderContainer instanceof HTMLElement) {
    const visibleWidth: number = sliderContainer.clientWidth;
    const currSlide: number = Number(sliderContainer.dataset.currSlide);

    let newSlide = direction === "left" ? currSlide - 1 : currSlide + 1;
    if(newSlide < 1) {
      newSlide = slidesCount;
    }
    if ( newSlide > slidesCount) {
      newSlide = 0;
    }
    const newScrollPosition = visibleWidth * (newSlide - 1);
    sliderContainer.dataset.currSlide = String(newSlide);

    sliderContainer.scroll({ left: newScrollPosition, behavior: "smooth" });
  }
}

function createScrollButtons(slidesCount: number): DocumentFragment {
  const createButton = (position: string): HTMLButtonElement => {
    const button = document.createElement("button");
    button.classList.add(styles["slider-button"], styles[position]);
    return button;
  };
  const leftButton = createButton("left");
  leftButton.innerText = "<";
  const rightButton = createButton("right");
  rightButton.innerText = ">";

  const fragement = document.createDocumentFragment();
  leftButton.addEventListener("click", () => handleClick("left", slidesCount));
  rightButton.addEventListener("click", () => handleClick("right", slidesCount));
  fragement.appendChild(leftButton);
  fragement.appendChild(rightButton);

  return fragement;
}

function createSlide(index: number): HTMLDivElement {
  const slide = document.createElement("div");
  slide.classList.add(styles.slide);
  slide.innerText = String(index);

  return slide;
}
