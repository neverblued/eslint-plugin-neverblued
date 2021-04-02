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
            missingSpaceBefore: "There must be a space before this opening mark.",
            missingSpaceAfter: "There must be a space after this closing mark.",
        },
    },

    create (context) {

        function report (messageId, { token, node }) {
            const { loc } = token
            context.report ({
                node,
                loc,
                messageId,
                fix (fixer) {
                    return fixer.insertTextBefore (token, ' ')
                },
            })
        }

        const sourceCode = context.getSourceCode ()

        function checkPrevious ({ token, index, tokens }) {
            const previous = tokens [index - 1]
            return (
                previous &&
                openingMarks.includes (token.value) &&
                ! openingMarks.includes (previous.value) &&
                ! sourceCode.isSpaceBetweenTokens (previous, token)
            )
        }

        function checkNext ({ token, index, tokens }) {
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
                if (checkPrevious ({ token, index, tokens })) {
                    report ('missingSpaceBefore', { token, node })
                }
                if (checkNext ({ token, index, tokens })) {
                    report ('missingSpaceAfter', { token, node })
                }
            })
        }

        return { Program: processSourceCode }
    },
}
