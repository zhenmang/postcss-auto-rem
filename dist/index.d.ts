export default function postCssAutoRem(opts: {
    size?: number | string;
}): {
    postcssPlugin: string;
    Declaration(decl: any): void;
};

postCssAutoRem.postcss = true