import { string, cite, literal, number } from '../atom'
import { dict_inline, tuple_inline } from './table'
import { macros } from '../macro'

export const data = {
    patterns: []
        .concat(dict_inline, tuple_inline)
        .concat(macros, string, cite, literal, number),
}
