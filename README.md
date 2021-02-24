# React Photo Gallery Viewer

## Running the application
  1. clone this repository into your local
  2. npm install
  3. npm start
  
  - Use: Add image urls and captions in the pics.js class as desired.

## This application will:
  - Have a component called PhotoGallery that takes in an array of images, and captions
  - The caption will be displayed over the image
  - Users will be able to navigate through the pictures by clicking left and right arrows.
  - Once we've reach the end of the pictures, clicking the right arrow will cycle to the beginning and start over
  
### Approach
  1. The PhotoGallery component - responsible for displaying the component by delegating functions
  2. A react hook on the component - responsible for setting state of the 'current' index of image in the array
  3. css - to style and beautify 
  
