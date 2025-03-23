document.addEventListener("DOMContentLoaded", () => {
  const images = [
    {
      id: "img-1",
      hoverSrc: "imgs/DSC09248.JPG",
      originalSrc: "imgs/IMG_7040.jpg",
    },
    {
      id: "img-2",
      hoverSrc: "imgs/DSC09139.JPG",
      originalSrc: "imgs/IMG_3486.jpg",
    },
    {
      id: "img-3",
      hoverSrc: "imgs/DSC08971.JPG",
      originalSrc: "imgs/6EFB35A9-3A89-4BC3-A1D7-2C0BAC718A45.jpg",
    },
  ];

  images.forEach((image) => {
    const imgElement = document.getElementById(image.id);

    imgElement.addEventListener("mouseover", () => {
      imgElement.src = image.hoverSrc;
    });
  });
});
