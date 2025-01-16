document.addEventListener("DOMContentLoaded", () => {
  const containers = document.querySelectorAll(".container");
  let isDragging = false;
  let startY = 0;

  // Start dragging
  function startDrag(event) {
    isDragging = true;
    startY = event.clientY || event.touches[0].clientY;
  }

  // Handle dragging
  function handleDrag(event) {
    if (!isDragging) return;

    const currentY = event.clientY || event.touches[0].clientY;
    const deltaY = currentY - startY;
    startY = currentY;

    containers.forEach((container) => {
      const top = parseInt(container.style.top || "0", 10);
      container.style.top = `${top + deltaY}px`;
    });

    focusCenter(); // Re-center containers during drag
  }

  // Stop dragging
  function stopDrag() {
    isDragging = false;
  }

  // Highlight the container closest to the center
  function focusCenter() {
    const centerY = window.innerHeight / 2;

    containers.forEach((container) => {
      const rect = container.getBoundingClientRect();
      const center = rect.top + rect.height / 2;
      const distance = Math.abs(center - centerY);

      const scale = Math.max(1 - distance / 500, 0.8);
      container.style.transform = `translateX(-50%) translateY(${parseInt(
        container.style.top || "0",
        10
      )}px) scale(${scale})`;
      container.style.zIndex = scale > 0.9 ? 1 : 0; // Keep the focused container on top
    });
  }

  // Attach event listeners
  document.addEventListener("mousedown", startDrag);
  document.addEventListener("mousemove", handleDrag);
  document.addEventListener("mouseup", stopDrag);

  document.addEventListener("touchstart", startDrag);
  document.addEventListener("touchmove", handleDrag);
  document.addEventListener("touchend", stopDrag);

  focusCenter(); // Initial call to center the containers
});
