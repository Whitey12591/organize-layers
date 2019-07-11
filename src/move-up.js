const sketch = require('sketch');
const document = sketch.getSelectedDocument();
const selectedPage = document.selectedPage;

const nativeLayers = selectedPage.sketchObject.children();
// sketch.UI.message(nativeLayers);
nativeLayers.forEach(nativelayer => {
  const layer = sketch.fromNative(nativelayer);
  // sketch.UI.message(layer.name);

  if (layer.selected == true) {
    layer.moveForward();
  }
  // log(layer.name);
});
