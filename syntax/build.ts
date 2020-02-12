import { writeFileSync } from 'fs'
import { data, comment, table, key_value, illegal, comment_block } from '../source'
function including(_: string) { return { include: '#' + _ } }

const syntax = {
    version: 'v0.1.1',
    scopeName: 'source.arc',
    uuid: '6267dad2-7d52-462a-a1ef-7e3da7378a7d',
    information_for_contributors: [
        'aster: galaster@foxmail.com',
    ],
    patterns: [
        comment_block,
        including('comment'),
        including('table'),
        including('key_value'),
    ],
    repository: {
        comment: comment,
        table: table,
        key_value: key_value,
        data: data,
        illegal: illegal,
    },
}

writeFileSync(
    __dirname + '/arc.tmLanguage.json',
    JSON.stringify(syntax, null, 4),
)
//s
