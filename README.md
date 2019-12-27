# styleak : Svelte Style Leak

![npm (scoped)](https://img.shields.io/npm/v/@s0kil/svelte-styleak?style=for-the-badge)
![npm bundle size](https://img.shields.io/bundlephobia/min/@s0kil/svelte-styleak?style=for-the-badge)

## Usage

`npm i -D @s0kil/svelte-styleak`

### `App.svelte`

```html
<script>
  import Text from "./Text.svelte";
</script>

<Text textContent="Hello!" />

<Text textContent="See Ya Later!" !color="blue" !background-color="red" />
```

### `Text.svelte`

```html
<script>
  import styleak from "@s0kil/svelte-styleak";

  export let textContent = "";
</script>

<style>
  p {
    padding: 10px;
    color: tomato;
    background-color: beige;
  }
</style>

<p use:styleak>{textContent}</p>

<!-- OR -->

<p style="{styleak()}">{textContent}</p>
```
