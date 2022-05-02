/**
 * @fileoverview Require a space outside the outer parentheses and brackets.
 * @author Dmytro Pinskyi
 */
'use strict'

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

const openingMarks = '([{'
const closingMarks = ')]}'
const afterOkMarks = ',;'

module.exports = {

    meta: {
        docs: {
            description: "Require a space outside the outer parentheses and brackets.",
            category: "Stylistic Issues",
            recommended: false,
        },
        fixable: 'whitespace',
        schema: [],
        messages: {
            extraSpaceBefore: "There must be no space before this closing mark.",
            missingSpaceBefore: "There must be a space before this opening mark.",
            missingSpaceAfter: "There must be a space after this closing mark.",
        },
    },

    create (context) {

        function report (messageId, { node, token, previous }) {
            const { loc } = token
            context.report ({
                messageId,
                node,
                loc,
                fix (fixer) {
                    if (messageId === 'extraSpaceBefore') {
                        const [ , rangeBegin ] = previous.range
                        const [ rangeEnd ] = token.range
                        return fixer.removeRange ([ rangeBegin, rangeEnd ])
                    }
                    if (messageId === 'missingSpaceBefore') {
                        return fixer.insertTextBefore (token, ' ')
                    }
                    if (messageId === 'missingSpaceAfter') {
                        return fixer.insertTextAfter (token, ' ')
                    }
                },
            })
        }

        const sourceCode = context.getSourceCode ()

        function extraSpaceBeforeCheck ({ token, index, tokens }) {
            const previous = tokens [index - 1]
            return (
                previous &&
                token.value === ')' &&
                previous.loc.end.line === token.loc.end.line &&
                ! openingMarks.includes (previous.value) &&
                ! closingMarks.includes (previous.value) &&
                sourceCode.isSpaceBetweenTokens (previous, token)
            )
        }

        function missingSpaceBeforeCheck ({ token, index, tokens }) {
            const previous = tokens [index - 1]
            return (
                previous &&
                openingMarks.includes (token.value) &&
                ! openingMarks.includes (previous.value) &&
                ! sourceCode.isSpaceBetweenTokens (previous, token)
            )
        }

        function missingSpaceAfterCheck ({ token, index, tokens }) {
            const next = tokens [index + 1]
            return (
                next &&
                closingMarks.includes (token.value) &&
                ! closingMarks.includes (next.value) &&
                ! afterOkMarks.includes (next.value) &&
                ! sourceCode.isSpaceBetweenTokens (token, next)
            )
        }

        function processSourceCode (node) {
            const tokens = sourceCode.tokensAndComments
            tokens.forEach ((token, index) => {
                if (extraSpaceBeforeCheck ({ token, index, tokens })) {
                    report ('extraSpaceBefore', { token, previous: tokens [index - 1], node })
                    return
                }
                if (missingSpaceBeforeCheck ({ token, index, tokens })) {
                    report ('missingSpaceBefore', { token, node })
                }
                if (missingSpaceAfterCheck ({ token, index, tokens })) {
                    report ('missingSpaceAfter', { token, node })
                }
            })
        }

        return { Program: processSourceCode }
    },
}
