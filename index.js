function styleak(node) {
  let styles = ""; // `styles` will contain all CSS `$$props`
  let props = $$props; // https://svelte.dev/docs#Attributes_and_props
  // Iterate Over `props` object
  for (let key in props) {
    // If `props` `key` does not start with '!' `continue` iteration;
    if (key[0] !== "!") continue;
    // CSS property without '!' in the key
    let property = key.substring(1);
    // Append `property:value;` to `result`;
    styles += property + ":" + props[key] + ";";
  }
  // `style={styleak()}`
  if (!node) return styles;
  // `use:styleak`
  else node.setAttribute("style", styles);
}

// export default styleak;
module.exports = styleak;