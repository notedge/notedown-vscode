import { including } from '../utils'

export const heading: any = {
    Heading: {
        match: '(?:^|\\G)[ ]{0,3}((#{1,6})\\s+(?=[\\S[^#]]).*?\\s*(#{1,6})?)$\\n?',
        captures: {
            1: {
                patterns: [
                    {
                        match: '(#{6})\\s+(?=[\\S[^#]])(.*?)\\s*(\\s+#+)?$\\n?',
                        name: 'heading.6.notedown',
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
                    },
                    {
                        match: '(#{5})\\s+(?=[\\S[^#]])(.*?)\\s*(\\s+#+)?$\\n?',
                        name: 'heading.5.notedown',
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
                    },
                    {
                        match: '(#{4})\\s+(?=[\\S[^#]])(.*?)\\s*(\\s+#+)?$\\n?',
                        name: 'heading.4.notedown',
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
                    },
                    {
                        match: '(#{3})\\s+(?=[\\S[^#]])(.*?)\\s*(\\s+#+)?$\\n?',
                        name: 'heading.3.notedown',
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
                    },
                    {
                        match: '(#{2})\\s+(?=[\\S[^#]])(.*?)\\s*(\\s+#+)?$\\n?',
                        name: 'heading.2.notedown',
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
                    },
                    {
                        match: '(#{1})\\s+(?=[\\S[^#]])(.*?)\\s*(\\s+#+)?$\\n?',
                        name: 'heading.1.notedown',
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
                    },
                ],
            },
        },
        name: 'markup.heading.notedown',
        patterns: [
            including('inline'),
        ],
    },
}
