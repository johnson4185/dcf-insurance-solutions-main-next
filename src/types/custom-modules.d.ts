// Only declare the JSX runtime module to satisfy the compiler when needed.
declare module "react/jsx-runtime" {
  const jsx: any;
  export = jsx;
}
