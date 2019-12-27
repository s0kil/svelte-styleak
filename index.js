export default function styleak(props) {
  let styles = ""; // `styles` will contain the CSS `properties`
  // Iterate Over `props` object
  for (let key in props) {
    // If `props` `key` does not start with '!' `continue` iteration;
    if (key[0] !== "!") continue;
    // CSS property without '!' in the key
    let property = key.substring(1);
    // Append `property:value;` to `result`;
    styles += property + ":" + props[key] + ";";
  }
  return styles;
}
