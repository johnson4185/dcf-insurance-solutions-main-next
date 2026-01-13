/// <reference types="vite/client" />

// Image module declarations
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.gif";
declare module "*.svg";

// Allow importing assets via the `@/` path alias
declare module "@/*";
