import { including, Rule } from '../utils'

const italic = {
    begin: "(?x) (\\*(?=\\w)|(?<!\\w)\\*|(?<!\\w)\\b_)(?=\\S)                # Open\n  (?=\n    (\n      <[^>]*+>              # HTML tags\n      | (?<raw>`+)([^`]|(?!(?<!`)\\k<raw>(?!`))`)*+\\k<raw>\n                        # Raw\n      | \\\\[\\\\`*_{}\\[\\]()#.!+\\->]?+      # Escapes\n      | \\[\n      (\n          (?<square>          # Named group\n            [^\\[\\]\\\\]        # Match most chars\n            | \\\\.            # Escaped chars\n            | \\[ \\g<square>*+ \\]    # Nested brackets\n          )*+\n        \\]\n        (\n          (              # Reference Link\n            [ ]?          # Optional space\n            \\[[^\\]]*+\\]        # Ref name\n          )\n          | (              # Inline Link\n            \\(            # Opening paren\n              [ \\t]*+        # Optional whtiespace\n              <?(.*?)>?      # URL\n              [ \\t]*+        # Optional whtiespace\n              (          # Optional Title\n                (?<title>['\"])\n                (.*?)\n                \\k<title>\n              )?\n            \\)\n          )\n        )\n      )\n      | \\1\\1                # Must be bold closer\n      | (?!(?<=\\S)\\1).            # Everything besides\n                        # style closer\n    )++\n    (?<=\\S)(?=_\\b|\\*)\\1                # Close\n  )\n",
    captures: {
        1: {
            name: 'punctuation.definition.italic.notedown',
        },
    },
    end: '(?<=\\S)(\\1)((?!\\1)|(?=\\1\\1))',
    name: 'markup.italic.notedown',
    patterns: [
        {
            applyEndPatternLast: 1,
            begin: '(?=<[^>]*?>)',
            end: '(?<=>)',
            patterns: [
                {
                    include: 'text.html.derivative',
                },
            ],
        },
        including('escape'),
        including('ampersand'),
        including('bracket'),
        including('Codeblock:Raw'),
        including('bold'),
        including('link-inet'),
        including('link-email'),
    ],
}

const bold = {
    begin: "(?x) (\\*\\*(?=\\w)|(?<!\\w)\\*\\*|(?<!\\w))(?=\\S) (?=\n  (\n    <[^>]*+>              # HTML tags\n    | (?<raw>`+)([^`]|(?!(?<!`)\\k<raw>(?!`))`)*+\\k<raw>\n                      # Raw\n    | \\\\[\\\\`*_{}\\[\\]()#.!+\\->]?+      # Escapes\n    | \\[\n    (\n        (?<square>          # Named group\n          [^\\[\\]\\\\]        # Match most chars\n          | \\\\.            # Escaped chars\n          | \\[ \\g<square>*+ \\]    # Nested brackets\n        )*+\n      \\]\n      (\n        (              # Reference Link\n          [ ]?          # Optional space\n          \\[[^\\]]*+\\]        # Ref name\n        )\n        | (              # Inline Link\n          \\(            # Opening paren\n            [ \\t]*+        # Optional whitespace\n            <?(.*?)>?      # URL\n            [ \\t]*+        # Optional whitespace\n            (          # Optional Title\n              (?<title>['\"])\n              (.*?)\n              \\k<title>\n            )?\n          \\)\n        )\n      )\n    )\n    |(?!(?<=\\S)\\1).)++(?<=\\S)(?=\\*\\*)\\1)",
    captures: {
        1: {
            name: 'punctuation.definition.bold.notedown',
        },
    },
    end: '(?<=\\S)(\\1)',
    name: 'markup.bold.notedown',
    patterns: [
        {
            applyEndPatternLast: 1,
            begin: '(?=<[^>]*?>)',
            end: '(?<=>)',
            patterns: [
                {
                    include: 'text.html.derivative',
                },
            ],
        },
        including('escape'),
        including('ampersand'),
        including('bracket'),
        including('Codeblock:Raw'),
        including('bold'),
        including('italic'),
        including('link-inet'),
        including('link-email'),
    ],
}

export const style: Rule = {
    bold: bold,
    italic: italic,
}
