export const regex: any[] = [
    {
        begin: /(@)(re)(`)/.source,
        beginCaptures: {
            1: {
                name: 'punctuation.definition.macro.arc',
            },
            2: {
                name: 'keyword.macro.name.arc',
            },
            3: {
                name: 'punctuation.definition.macro.arc',
            },
        },
        end:  /(`)/.source,
        endCaptures: {
            1: {
                name: 'punctuation.definition.macro.arc',
            },
        },
        patterns: [
            {
                include: 'source.js.regexp',
            },
        ],
    },
    {
        match: /(@)(re)('''.*?''')/.source,
        captures: {
            1: {
                name: 'punctuation.definition.macro.arc',
            },
            2: {
                name: 'keyword.macro.name.arc',
            },
            3: {
                name: 'string.quoted.triple.literal.block.arc',
            },
        },
    },
]
