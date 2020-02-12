const csv: any = [
    {
        begin: /(@)(csv)(''')/.source,
        beginCaptures: {
            1: { name: 'keyword.macro.punctuation.arc' },
            2: { name: 'keyword.macro.name.arc' },
            3: { name: 'punctuation.definition.macro.arc' },
        },
        end: /(''')/.source,
        endCaptures: {
            1: { name: 'punctuation.definition.macro.arc' },
        },
        patterns: [
            { include: 'source.csv' },
        ],
    },
    {
        match: /(@)(csv)/.source,
        captures: {
            1: { name: 'keyword.macro.punctuation.arc' },
            2: { name: 'keyword.macro.name.arc' },
        },
    },
]



export const embed: any[] = [].concat(csv)
