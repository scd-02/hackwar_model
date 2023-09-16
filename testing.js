// Function to load and run the model
async function runModel() {
  // Load the model
  const model = await tf.loadLayersModel("./model");

  // Get references to HTML elements
  const imageInput = document.getElementById("imageInput");
  console.log(imageInput);

  const outputDiv = document.getElementById("output");

  // Add an event listener to the file input
  imageInput.addEventListener("change", async () => {
    const file = imageInput.files[0];
    console.log(file);
    if (file) {
      // Read and preprocess the selected image
      const image = await loadImage(file);
      const tensor = preprocessImage(image);

      // Make predictions using the model
      const predictions = await model.predict(tensor).data();

      // Display predictions
      outputDiv.innerText = `Predictions: ${predictions}`;
    }
  });

  // Function to load an image and convert it to a tensor
  async function loadImage(file) {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.onload = () => resolve(tf.browser.fromPixels(img));
        img.src = event.target.result;
      };
      reader.readAsDataURL(file);
    });
  }

  // Function to preprocess the image (resize and normalize)
  function preprocessImage(image) {
    const resizedImage = tf.image.resizeBilinear(image, [128, 128]); // Adjust size if necessary
    const normalizedImage = resizedImage.div(255.0); // Normalize to [0, 1]
    return normalizedImage;
  }
}

// Run the model when the page loads
document.addEventListener("DOMContentLoaded", runModel);
