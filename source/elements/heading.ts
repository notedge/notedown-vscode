import { including, Rule } from '../utils'

function build_head(i: number) {
    const pattern = {
        match: '(#{' + i + '})\\s+(?=[\\S[^#]])(.*?)\\s*(\\s+#+)?$\\n?',
        name: 'heading.' + i + '.notedown',
        captures: {
            1: {
                name: 'punctuation.definition.heading.notedown',
            },
            2: {
                name: 'entity.name.section.notedown',
            },
            3: {
                name: 'punctuation.definition.heading.notedown',
            },
        },
    }
    return pattern
}

export const heading: Rule = {
    Heading: {
        match: '(?:^|\\G)[ ]{0,3}((#{1,6})\\s+(?=[\\S[^#]]).*?\\s*(#{1,6})?)$\\n?',
        captures: {
            1: {
                patterns: [
                    build_head(6),
                    build_head(5),
                    build_head(4),
                    build_head(3),
                    build_head(2),
                    build_head(1),
                ],
            },
        },
        name: 'markup.heading.notedown',
        patterns: [
            including('inline'),
        ],
    },
}
