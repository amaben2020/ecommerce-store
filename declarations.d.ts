//https://www.bergqvist.it/blog/2021/11/13/css-modules-in-next-js

declare module "*.module.scss" {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}
