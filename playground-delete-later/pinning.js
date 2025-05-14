// Today header handling
// keep at bottom
ScrollTrigger.create({
    trigger: ".sticky-today",
    start: "top bottom-=150",
    endTrigger: ".today-content",
    end: "bottom bottom-=75",
    pin: true,
    pinSpacing: false
  });
  
  // keep at top
  ScrollTrigger.create({
    trigger: ".sticky-today",
    start: "top top+=75",
    endTrigger: "html",
    end: "bottom bottom",
    pin: true,
    pinSpacing: false
  });
  
  
  // Tomorrow header handling
  // keep at bottom
  ScrollTrigger.create({
    trigger: ".sticky-tomorrow",
    start: "top bottom-=75",
    endTrigger: ".tomorrow-content",
    end: "bottom bottom-=75",
    pin: true,
    pinSpacing: false
  });
  
  // keep at top
  ScrollTrigger.create({
    trigger: ".sticky-tomorrow",
    start: "top top+=150",
    endTrigger: "html",
    end: "bottom bottom",
    pin: true,
    pinSpacing: false
  });
  
  
  
  
  // 💚 This just adds the GSAP link to this pen, don't copy this bit
  import { GSAPInfoBar } from "https://codepen.io/GreenSock/pen/vYqpyLg.js"
  new GSAPInfoBar({ link: "https://gsap.com/docs/v3/Plugins/ScrollTrigger/"});