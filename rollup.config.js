export default {
    input: "dist/index.js",
    output: [
        {
            file: 'dist/bundle.mjs',
            format: 'esm'
        }
    ]
}