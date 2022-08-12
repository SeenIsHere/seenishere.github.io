var particleOptions = {
  fullScreen: {
    enable: false,
  },
  detectRetina: false,
  fpsLimit: 60,
  interactivity: {
    detectsOn: "canvas",
    events: {
      onHover: {
        enable: true,
        mode: "bubble",
      },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 40,
        duration: 2,
        opacity: 8,
        size: 8,
        speed: 3,
      },
    },
  },
  particles: {
    color: {
      value: "#000000",
      animation: {
        enable: false,
        speed: 20,
        sync: true,
      },
    },
    lineLinked: {
      blink: false,
      color: "random",
      consent: false,
      distance: 100,
      enable: true,
      opacity: 0.3,
      width: 2,
    },
    move: {
      attract: {
        enable: false,
        rotate: {
          x: 600,
          y: 1200,
        },
      },
      bounce: false,
      direction: "none",
      enable: true,
      outMode: "bounce",
      random: true,
      speed: 0.5,
      straight: false,
    },
    number: {
      density: {
        enable: false,
        area: 2000,
      },
      limit: 0,
      value: 200,
    },
    opacity: {
      animation: {
        enable: true,
        minimumValue: 0.5,
        speed: 2,
        sync: false,
      },
      random: false,
      value: 1,
    },
    shape: {
      type: "circle",
    },
    size: {
      animation: {
        enable: false,
        minimumValue: 0.1,
        speed: 40,
        sync: false,
      },
      random: {
        enable: true,
        minimumValue: 2,
      },
      value: 4,
    },
  },
  polygon: {
    draw: {
      enable: false,
      lineColor: "rgba(255,255,255,0.2)",
      lineWidth: 0.3,
    },
    position: {
      x: 50,
      y: 10,
    },
    move: {
      radius: 30,
    },
    inlineArrangement: "equidistant",
    scale: 1,
    type: "inline",
    url: "https://raw.githubusercontent.com/SeenIsHere/mod_repl_colors/main/personal/S.svg",
  },
};

const reCalc = () => {
  particleOptions.polygon.scale = window.innerHeight / 850;
  particleOptions.polygon.move.radius = particleOptions.polygon.scale * 30;
  particleOptions.particles.number.value = particleOptions.polygon.scale * 200;
  particleOptions.particles.size.value = particleOptions.polygon.scale * 4;
  particleOptions.particles.lineLinked.width =
    particleOptions.polygon.scale * 2;
  particleOptions.particles.lineLinked.distance =
    particleOptions.polygon.scale * 100;
  particleOptions.interactivity.modes.bubble.size =
    particleOptions.polygon.scale * 8;

  tsParticles.load("tsparticles", particleOptions);
};

reCalc();

window.onresize = () => {
  reCalc();
};

var observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) =>
      entry.isIntersecting
        ? document.querySelector(".titleBtns").classList.add("private")
        : document.querySelector(".titleBtns").classList.remove("private")
    );
  },
  { threshold: 0 }
);

observer.observe(document.querySelector("#tsparticles"));

const titleBtns = document.querySelectorAll(".titleBtns > button");
titleBtns[0].onclick = () => {
  document
    .querySelector("#section3")
    .scrollIntoView({ behavior: "smooth", block: "start" });
};

titleBtns[1].onclick = () => {
  document
    .querySelector("#contact")
    .scrollIntoView({ behavior: "smooth", block: "start" });
};

document.querySelectorAll(".sub-icons i").forEach((icon) => {
  icon.onmouseout = (ev) => {
    ev.target.classList.remove("colored");
  };
  icon.onmouseover = (ev) => {
    ev.target.classList.add("colored");
  };
});

const socialIcons = document.querySelectorAll(".social-icons > img")
socialIcons[0].onclick = () => window.open("https://github.com/SeenIsHere", '_blank')
socialIcons[1].onclick = () => window.open("https://www.npmjs.com/~hjoker4", '_blank')
socialIcons[2].onclick = () => window.open("https://codepen.io/seenishere", '_blank')
socialIcons[3].onclick = () => window.open("https://www.twitch.tv/seenishere", '_blank')