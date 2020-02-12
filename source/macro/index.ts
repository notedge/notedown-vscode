import { datetime } from './datetime'
import { ip } from './ip'
import { regex } from './regex'
import { embed } from './embed'

export const macros = [].concat(
    datetime as any,
    ip as any,
    regex as any,
    embed as any,
)
