export const ip: any[] = [
    {
        match: /(@)(ip)(')(.*?)(')/.source,
        captures: {
            1: {
                name: 'punctuation.definition.macro.arc',
            },
            2: {
                name: 'keyword.macro.name.arc',
            },
            3: {
                name: 'punctuation.definition.macro.arc',
            },
            4: {
                patterns: [
                    {
                        name: 'constant.other.ip.4.arc',
                        match: /((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)/.source,
                    },
                    {
                        name: 'constant.other.ip.6.arc',
                        match: /([\da-fA-F]{1,4}:){7}[\da-fA-F]{1,4}/.source,
                    },
                    {
                        include: '#illegal',
                    },
                ],
            },
            5: {
                name: 'punctuation.definition.macro.arc',
            },
        },
    },
]
