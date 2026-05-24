const system = {
  status: "online",
  mode: "background",
  particles: 128,
};


function renderFrame(time) {
  const glow = Math.sin(time / 500) * 0.5 + 0.5;

  return {
    opacity: glow,
    message: "Running visual layer...",
  };
}


setInterval(() => {
  const frame = renderFrame(Date.now());
  console.log(frame.message, frame.opacity.toFixed(2));
}, 1000);
