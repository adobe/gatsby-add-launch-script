/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

const gatsbySsr = require('../gatsby-ssr')

const gatsbyHelpers = {
  setHeadComponents: jest.fn()
}

let NODE_ENV

beforeEach(() => {
  jest.resetAllMocks()
  // save NODE_ENV
  NODE_ENV = process.env.NODE_ENV
})

afterEach(() => {
  // restore NODE_ENV
  process.env.NODE_ENV = NODE_ENV
})

test('exists', () => {
  expect(typeof gatsbySsr.onRenderBody).toEqual('function')
})

test('no NODE_ENV production, no options', () => {
  expect(gatsbySsr.onRenderBody(gatsbyHelpers)).toBeUndefined()
  expect(gatsbyHelpers.setHeadComponents).not.toHaveBeenCalled()
})

test('NODE_ENV production, no options', () => {
  process.env.NODE_ENV = 'production'
  const options = {}

  expect(gatsbySsr.onRenderBody(gatsbyHelpers, options)).toBeUndefined()
  expect(gatsbyHelpers.setHeadComponents).not.toHaveBeenCalled()
})

test('NODE_ENV production, options: scriptUrl set', () => {
  process.env.NODE_ENV = 'production'
  const options = {
    scriptUrl: 'https://bar.foo'
  }

  expect(gatsbySsr.onRenderBody(gatsbyHelpers, options)).toBeUndefined()
  expect(gatsbyHelpers.setHeadComponents).toHaveBeenCalledTimes(1)
})

test('options: includeInDevelopment true, no scriptUrl', () => {
  const options = {
    includeInDevelopment: true
  }

  expect(gatsbySsr.onRenderBody(gatsbyHelpers, options)).toBeUndefined()
  expect(gatsbyHelpers.setHeadComponents).not.toHaveBeenCalled()
})

test('options: includeInDevelopment true, scriptUrl set', () => {
  const options = {
    includeInDevelopment: true,
    scriptUrl: 'https://foo.bar'
  }

  expect(gatsbySsr.onRenderBody(gatsbyHelpers, options)).toBeUndefined()
  expect(gatsbyHelpers.setHeadComponents).toHaveBeenCalledTimes(1)
})
