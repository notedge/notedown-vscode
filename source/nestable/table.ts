export const tuple_inline: any = {
    begin: /(?<!\w)(\[)\s*/.source,
    beginCaptures: {
        1: {
            name: 'punctuation.definition.tuple.inline.arc',
        },
    },
    end: /\s*(\])(?!\w)/.source,
    endCaptures: {
        1: {
            name: 'punctuation.definition.tuple.inline.arc',
        },
    },
    patterns: [
        {
            include: '#comment',
        },
        {
            include: '#data',
        },
    ],
}

export const dict_inline: any = {
    begin: '(?<!\\w)(\\{)\\s*',
    beginCaptures: {
        1: {
            name: 'punctuation.definition.dict.inline.arc',
        },
    },
    end: '\\s*(\\})(?!\\w)',
    endCaptures: {
        1: {
            name: 'punctuation.definition.dict.inline.arc',
        },
    },
    patterns: [
        {
            include: '#key_value',
        },
        {
            include: '#data',
        },
    ],
}

const dict: any = {
    name: 'meta.tag.dict.arc',
    match: '^\\s*(\\()([^\\(\\)]*)(\\))',
    captures: {
        1: {
            name: 'punctuation.definition.dict.arc',
        },
        2: {
            patterns: [
                {
                    match: '[^\\s/]+',
                    name: 'entity.other.attribute-name.dict.arc',
                },
            ],
        },
        3: {
            name: 'punctuation.definition.dict.arc',
        },
    },
}

const tuple: any = {
    name: 'meta.tag.tuple.arc',
    match: '^\\s*(<)([^<>]*)(>)',
    captures: {
        1: {
            name: 'punctuation.definition.tuple.arc',
        },
        2: {
            patterns: [
                {
                    match: '[^\\s/]+',
                    name: 'entity.other.attribute-name.tuple.arc',
                },
            ],
        },
        3: {
            name: 'punctuation.definition.tuple.arc',
        },
    },
}



export const table: any = {
    patterns: [
        tuple_inline, tuple,
        dict_inline, dict,
    ],
}