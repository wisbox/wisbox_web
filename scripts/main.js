// Add functionality to the download button
// document
//   .getElementById("download-button")
//   .addEventListener("click", function () {
//     // You can add your download logic here
//     alert("Download started!"); // Example alert
//   });

// window.sections = [...document.querySelectorAll(".section")];
window.lastScrollTop = window.scrollY;
console.log(window.lastScrollTop);
// document.body.style.background = window.sections[0].getAttribute("data-bg");

// window.addEventListener("scroll", onScroll);

function onScroll() {
  console.log(window.lastScrollTop);
  // const scrollTop = window.pageYOffset;

  // const section = window.sections
  //   .map((section) => {
  //     const el = section;
  //     const rect = el.getBoundingClientRect();
  //     return { el, rect };
  //   })
  //   .find((section) => section.rect.bottom >= window.innerHeight * 0.5);

  // document.body.style.background = section.el.getAttribute("data-bg");
}
