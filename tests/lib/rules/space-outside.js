/**
 * @fileoverview Require a space outside the outer parentheses and brackets.
 * @author Dmytro Pinskyi
 */
'use strict'

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require ('../../../lib/rules/space-outside')
const { RuleTester } = require ('eslint')

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester
ruleTester.run ('space-outside', rule, {

    valid: [

        "foo (42) .bar",

    ],

    invalid: [

        {
            code: "foo(42) .bar",
            errors: [
                { message: "There must be a space before this opening mark." },
            ],
            output: "foo (42) .bar",
        },

        {
            code: "foo (42).bar",
            errors: [
                { message: "There must be a space after this closing mark." },
            ],
            output: "foo (42) .bar",
        },

        {
            code: "foo (42 ) .bar",
            errors: [
                { message: "There must be no space before this closing mark." },
            ],
            output: "foo (42) .bar",
        },

    ],

})
