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
