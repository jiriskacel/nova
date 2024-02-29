export const TSCONFIG_JSON = `{
    "compileOnSave": false,
    "compilerOptions": {
        "baseUrl": "./",
        "outDir": "./dist/out-tsc",
        "sourceMap": true,
        "declaration": false,
        "downlevelIteration": true,
        "experimentalDecorators": true,
        "esModuleInterop": true,
        "moduleResolution": "node",
        "importHelpers": true,
        "target": "es2020",
        "module": "es2020",
        "typeRoots": [
            "node_modules/@types"
        ],
        "lib": [
            "es2020",
            "dom"
        ]
    },
    "angularCompilerOptions": {
        "enableIvy": true,
        "fullTemplateTypeCheck": true,
        "strictTemplates": true,
        "strictInjectionParameters": true
    }
}`;
