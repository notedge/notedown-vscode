const integer = {
    match: '(?<!\\w)((?:[\\+\\-]?(0|([1-9](([0-9]|_[0-9])+)?))))(?!\\w)',
    captures: {
        1: {
            name: 'constant.numeric.integer.arc',
        },
    },
}
const float = {
    match: '(?<!\\w)([\\+\\-]?(0|([1-9](([0-9]|_[0-9])+)?))(?:(?:\\.(0|([1-9](([0-9]|_[0-9])+)?)))?[eE][\\+\\-]?[1-9]_?[0-9]*|(?:\\.[0-9_]*)))(?!\\w)',
    captures: {
        1: {
            name: 'constant.numeric.float.arc',
        },
    },
}


//ordered, float before integer
export const number: any = [float, integer]