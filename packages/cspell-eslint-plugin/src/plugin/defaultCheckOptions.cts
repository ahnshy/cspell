import type { Check, Options, RequiredOptions, WorkerOptions } from '../common/options.cjs';

export const defaultCheckOptions: Required<Check> = {
    checkComments: true,
    checkIdentifiers: true,
    checkJSXText: true,
    checkStrings: true,
    checkStringTemplates: true,
    configFile: '',
    cspell: {
        words: [],
        flagWords: [],
        ignoreWords: [],
    },
    customWordListFile: undefined,
    ignoreImportProperties: true,
    ignoreImports: true,
};

export const defaultOptions: RequiredOptions = {
    ...defaultCheckOptions,
    numSuggestions: 8,
    generateSuggestions: true,
    autoFix: false,
};

export function normalizeOptions(opts: Options | undefined, cwd: string): WorkerOptions {
    const options: WorkerOptions = Object.assign({}, defaultOptions, opts || {}, { cwd });
    return options;
}
