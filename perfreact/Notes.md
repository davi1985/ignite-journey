# Component Father to children

```tsx
<Father>
  <Children>
</Father>
```

# Props

```tsx
<Father>
  <Children title="">
</Father>
```

# Hooks (useState, useContext, useReducer)

```tsx
function Component() {
  const [state, setState] = useState();
}
```

# React rendering flux

1. Generate a new component version that needs to be rendered.
2. Compare this new version with the previous version saved on the page.
3. If there are changes in this version, React renders it to the screen.

# Use cases to memo

1. Pure functional components
2. Renders to often
3. Re-render with same props
4. Medium to big size
