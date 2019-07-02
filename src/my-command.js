const sketch = require('sketch');
const document = sketch.getSelectedDocument();
const selectedPage = document.selectedPage;

const nativeLayers = selectedPage.sketchObject.children();
// sketch.UI.message(nativeLayers);
nativeLayers.forEach(nativelayer => {
  const layer = sketch.fromNative(nativelayer);
  sketch.UI.message(layer.name);
  log(layer.name);
});
