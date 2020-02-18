import { Rule } from '../utils'

export const html: Rule = {
    HTML: {
        patterns: [
            {
                begin: '(^|\\G)\\s*(<!--)',
                captures: {
                    1: {
                        name: 'punctuation.definition.comment.html',
                    },
                    2: {
                        name: 'punctuation.definition.comment.html',
                    },
                },
                end: '(-->)',
                name: 'comment.block.html',
            },
            {
                begin: '(?i)(^|\\G)\\s*(?=<(script|style|pre)(\\s|$|>)(?!.*?</(script|style|pre)>))',
                end: '(?i)(.*)((</)(script|style|pre)(>))',
                endCaptures: {
                    1: {
                        patterns: [
                            {
                                include: 'text.html.derivative',
                            },
                        ],
                    },
                    2: {
                        name: 'meta.tag.structure.$4.end.html',
                    },
                    3: {
                        name: 'punctuation.definition.tag.begin.html',
                    },
                    4: {
                        name: 'entity.name.tag.html',
                    },
                    5: {
                        name: 'punctuation.definition.tag.end.html',
                    },
                },
                patterns: [
                    {
                        begin: '(\\s*|$)',
                        patterns: [
                            {
                                include: 'text.html.derivative',
                            },
                        ],
                        while: '(?i)^(?!.*</(script|style|pre)>)',
                    },
                ],
            },
            {
                begin: '(?i)(^|\\G)\\s*(?=</?[a-zA-Z]+[^\\s/&gt;]*(\\s|$|/?>))',
                patterns: [
                    {
                        include: 'text.html.derivative',
                    },
                ],
                while: '^(?!\\s*$)',
            },
            {
                begin: '(^|\\G)\\s*(?=(<[a-zA-Z0-9\\-](/?>|\\s.*?>)|</[a-zA-Z0-9\\-]>)\\s*$)',
                patterns: [
                    {
                        include: 'text.html.derivative',
                    },
                ],
                while: '^(?!\\s*$)',
            },
        ],
    },
}
