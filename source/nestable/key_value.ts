export const key_value: any = {
    patterns: [
        {
            name: 'invalid.illegal.noKey.arc',
            match: /(\s*=.*)$/.source,
        },
        {
            name: 'invalid.deprecated.noValue.arc',
            match: /(\s*[A-Za-z_\-][A-Za-z0-9_\-]*\s*=)(?=\s*$)/.source,
        },
        {
            //TODO: Split Nested Key
            begin: /(\^)?\s*([A-Za-z_-][\\/@A-Za-z0-9_-]*|".+"|'.+'|[0-9]+)\s*(=|:)\s*/.source,
            beginCaptures: {
                1: { name: 'punctuation.definition.newKey.arc' },
                2: { name: 'entity.name.tag.arc' },
                3: { name: 'punctuation.definition.keyValue.arc' },
            },
            end: /($|(?==)|\,|\s*(?=\}))/.source,
            patterns: [
                { include: '#comment' },
                { include: '#data' },
                { include: '#illegal' },
            ],
        },
        {
            begin: /(\^)?\s*([A-Za-z_-][\\/@A-Za-z0-9_-]*|".+"|'.+'|[0-9]+)\s*(@[A-Za-z]+)\s*(=|:)\s*/.source,
            beginCaptures: {
                1: { name: 'punctuation.definition.newKey.arc' },
                2: { name: 'entity.name.tag.arc' },
                3: { name: 'keyword.macro.name.arc' },
                4: { name: 'punctuation.definition.keyValue.arc' },
            },
            end: /($|(?==)|\,|\s*(?=\}))/.source,
            patterns: [
                { include: '#comment' },
                { include: '#data' },
                { include: '#illegal' },
            ],
        },
        {
            name: 'punctuation.definition.newKey.arc',
            match: '(?x)([*])',
        },
        {
            begin: '\\s*(?x)([&])\\s*',
            beginCaptures: {
                1: { name: 'punctuation.definition.newData.arc' },
            },
            end: /($|(?==)|\,|\s*(?=\}))/.source,
            patterns: [
                { include: '#comment' },
                { include: '#data' },
                { include: '#illegal' },
            ],
        },
    ],
}
