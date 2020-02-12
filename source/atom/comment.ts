export const comment: any = {
    match: /\s*((%).*)$/.source,
    captures: {
        1: {
            name: 'comment.line.number-sign.arc',
        },
        2: {
            name: 'punctuation.definition.comment.arc',
        },
    },
}

export const comment_block: any = {
    name: 'comment.block.arc',
    begin: /(?=[^\\])(%%%)/.source,
    beginCaptures: {
        1: {
            name: 'punctuation.definition.comment.block.arc',
        },
    },
    end: /(%%%)/.source,
    endCaptures: {
        1: {
            name: 'punctuation.definition.comment.block.arc',
        },
    },
    patterns: [
        {
            include: 'text.html.markdown',
        },
    ],
}