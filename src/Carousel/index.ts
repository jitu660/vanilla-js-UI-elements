import styles from "./styles.module.css";

export default function createCarousel(slidesCount: number): DocumentFragment {
  const fragement = document.createDocumentFragment();

  const carouselWindow = document.createElement("div");
  carouselWindow.classList.add(styles["carousel-window"]);

  const slider = document.createElement("div");
  slider.classList.add(styles.slider);
  carouselWindow.appendChild(slider);

  for (let i = 1; i <= slidesCount; i++) {
    slider.appendChild(createSlide(i));
  }

  fragement.appendChild(carouselWindow);
  return fragement;
}

function createSlide(index: number): HTMLDivElement {
  const slide = document.createElement("div");
  slide.classList.add(styles.slide);
  slide.innerText = String(index);
  
  return slide;
}
