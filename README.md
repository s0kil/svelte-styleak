# styleak : Svelte Style Leak

## Usage

### `App.svelte`

```html
<script>
  import Text from "./Text.svelte";
</script>

<Text textContent="Hello!" />

<Text
  textContent="See Ya Later!"
  !color="blue"
  !background-color="red"
/>
```

### `Text.svelte`

```html
<script>
  import styleak from "svelte-styleak";

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
