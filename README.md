# FrontEnd-Internship-TaskA
# Frontend Internship Task A

## Live Demo

[Live Site](https://frontend-internship-task-a.vercel.app/)

---

## Project Description

This project demonstrates a vertically stacked set of containers styled with gradients, shadows, and centered alignment. Users can drag the containers, and they dynamically resize and focus as they are moved.



## Setup Instructions

1. **Clone the repository**:

   ```bash
   git clone https://github.com/sabina0126/FrontEnd-Internship-TaskA
   ```

2. **Navigate to the project directory**:

   ```bash
   cd FrontEnd-Internship-TaskA
   ```

3. **Install dependencies (if applicable)**:
   For this task, no external dependencies are required since it’s a static project using HTML, CSS, and JavaScript.

4. **Run the project locally**:
   Open `index.html` in any modern browser.

---

## Technology Choices and Rationale

### 1. **HTML**:

Used for the structure of the containers and elements inside them.

### 2. **CSS**:

- **Flexbox**: Ensures that the containers are perfectly centered both horizontally and vertically.
- **Linear Gradients**: Provides a visually appealing background.
- **Box Shadows**: Adds depth to the containers.
- **Responsive Design**: Ensures that the layout works on different screen sizes.

### 3. **JavaScript**:

- Enables drag-and-drop functionality for the containers.
- Implements focus scaling based on the container’s position relative to the viewport center.

---

## Known Limitations / Trade-offs

1. **Performance**: The drag-and-drop logic might not be optimized for a large number of containers.
2. **Cross-Browser Compatibility**: While tested on modern browsers, older browsers may not support certain CSS features like gradients or JavaScript functions.
3. **No Backend Integration**: This is a purely frontend implementation.

---

## Future Improvements

1. **Add Animation**: Smooth transitions when dragging the containers.
2. **Touch Gesture Support**: Enhance responsiveness for mobile devices.
3. **Dynamic Content**: Fetch container content dynamically from a backend API.
4. **Accessibility**: Ensure proper focus states and ARIA labels for better accessibility.

---

## Time Spent

- **Planning and Designing**: 1 hour
- **Coding**: 3 hours
- **Testing and Debugging**: 1 hour
- **Deployment**: 30 minutes

---

## Deployment Notes

This project is deployed on **Vercel**. To redeploy:

1. Commit any changes to the main branch.
2. Vercel automatically detects changes and redeploys the site.

---

For any issues or feedback, feel free to open a pull request or create an issue in the repository!

