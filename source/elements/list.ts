import { including,Rule } from '../utils'

export const quote: Rule = {
    Quote: {
        begin: '(^|\\G)[ ]{0,3}(>) ?',
        captures: {
            2: {
                name: 'punctuation.definition.quote.begin.notedown',
            },
        },
        name: 'markup.quote.notedown',
        patterns: [
            including('Program'),
        ],
        while: '(^|\\G)\\s*(>) ?',
    },
}

export const list:Rule = {
    List: {
        patterns: [
            {
                begin: '(^|\\G)([ ]{0,3})([*+-])([ \\t])',
                beginCaptures: {
                    3: {
                        name: 'punctuation.definition.list.begin.notedown',
                    },
                },
                comment: 'Currently does not support un-indented second lines.',
                name: 'markup.list.unnumbered.notedown',
                patterns: [
                    including('Program'),
                    including('ListParagraph'),
                ],
                while: '((^|\\G)([ ]{2,4}|\\t))|(^[ \\t]*$)',
            },
            {
                begin: '(^|\\G)([ ]{0,3})([0-9]+\\.)([ \\t])',
                beginCaptures: {
                    3: {
                        name: 'punctuation.definition.list.begin.notedown',
                    },
                },
                name: 'markup.list.numbered.notedown',
                patterns: [
                    including('Program'),
                    including('ListParagraph'),
                ],
                while: '((^|\\G)([ ]{2,4}|\\t))|(^[ \\t]*$)',
            },
        ],
    },
    ListParagraph: {
        begin: '(^|\\G)(?=\\S)(?![*+->]\\s|[0-9]+\\.\\s)',
        name: 'meta.paragraph.notedown',
        patterns: [
            including('inline'),
            {
                include: 'text.html.derivative',
            },
        ],
        while: '(^|\\G)(?!\\s*$|#|[ ]{0,3}([-*_>][ ]{2,}){3,}[ \\t]*$\\n?|[ ]{0,3}[*+->]|[ ]{0,3}[0-9]+\\.)',
    },
}
