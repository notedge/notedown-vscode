const patterns = [
    {
        match: '(?<!\\w)(\\d{4}\\-\\d{2}\\-\\d{2}[T| ]\\d{2}:\\d{2}:\\d{2}(?:\\.\\d+)?(?:Z|[\\+\\-]\\d{2}:\\d{2}))(?!\\w)',
        name: 'constant.other.datetime.offset.arc',
    },
    {
        name: 'constant.other.datetime.local.arc',
        match: '\\d{4}\\-\\d{2}\\-\\d{2}T\\d{2}:\\d{2}:\\d{2}(?:\\.\\d+)?',
    },
    {
        match: '\\d{2}:\\d{2}:\\d{2}(?:\\.\\d+)?',
        name: 'constant.other.time.arc',
    },
    {
        match: '\\d{4}\\-\\d{2}\\-\\d{2}',
        name: 'constant.other.date.arc',
    },
]



export const datetime: any[] = [
    {
        name: 'string.quoted.triple.literal.block.arc',
        begin: /(@)(d|date)("""|")/.source,
        beginCaptures: {
            1: { name: 'keyword.macro.punctuation.arc' },
            2: { name: 'keyword.macro.name.arc' },
            3: { name: 'string.quoted.triple.literal.block.arc' },
        },
        end: /("""|")/.source,
        endCaptures: {
            1: { name: 'string.quoted.triple.literal.block.arc' },
        },
    },
    {
        match: /(@)(d|date)(''')(.*?)(''')/.source,
        captures: {
            1: { name: 'keyword.macro.punctuation.arc' },
            2: { name: 'keyword.macro.name.arc' },
            3: { name: 'punctuation.definition.macro.arc' },
            4: { patterns: patterns },
            5: { name: 'keyword.macro.punctuation.arc' },
        },
    },
    {
        match: /(@)(d|date)(')(.*?)(')/.source,
        captures: {
            1: { name: 'keyword.macro.punctuation.arc' },
            2: { name: 'keyword.macro.name.arc' },
            3: { name: 'punctuation.definition.macro.arc' },
            4: { patterns: patterns },
            5: { name: 'keyword.macro.punctuation.arc' },
        },
    },
    {
        match: /(@)(d|date)/.source,
        captures: {
            1: { name: 'keyword.macro.punctuation.arc' },
            2: { name: 'keyword.macro.name.arc' },
        },
    },
]
