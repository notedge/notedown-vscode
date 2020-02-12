function keywordSigned(_: string) {
    return {
        match: '(?i)(?<!\\w)([\\+\\-]?' + _ + ')(?!\\w)',
        captures: {
            1: {
                name: 'keyword.constant.' + _ + '.arc',
            },
        },
    }
}


function keyword(_: string) {
    return {
        match: '(?i)(?<!\\w)(' + _ + ')(?!\\w)',
        captures: {
            1: {
                name: 'keyword.constant.' + _ + '.arc',
            },
        },
    }
}


export const literal: any = [
    keyword('true'),
    keyword('false'),
    keyword('null'),
    keywordSigned('nan'),
    keywordSigned('infinity'),
]