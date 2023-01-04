const slider = document.querySelectorAll(".slider");[...slider].forEach((slide) => {
    replicate(slide);
  });
  function replicate(slider) {
    const sliderItems = slider.querySelector(".slider-items");
  const parentWidth = slider.getBoundingClientRect().width,
        itemsWidth = sliderItems.getBoundingClientRect().width;
  var currentWidth = itemsWidth;
  
  while(currentWidth < (parentWidth + itemsWidth)) {
    let clonedItems = sliderItems.cloneNode(true);
    slider.appendChild(clonedItems);
    currentWidth = currentWidth + itemsWidth;
  }
  slider.classList.add("slide");
  }