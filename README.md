<!--
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
-->

[![Version](https://img.shields.io/npm/v/@adobe/gatsby-add-launch-script.svg)](https://npmjs.org/package/@adobe/gatsby-add-launch-script)
[![Downloads/week](https://img.shields.io/npm/dw/@adobe/gatsby-add-launch-script.svg)](https://npmjs.org/package/@adobe/gatsby-add-launch-script)
[![Build Status](https://travis-ci.com/adobe/gatsby-add-launch-script.svg?branch=master)](https://travis-ci.com/adobe/gatsby-add-launch-script)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0) 
[![Codecov Coverage](https://img.shields.io/codecov/c/github/adobe/gatsby-add-launch-script/master.svg?style=flat-square)](https://codecov.io/gh/adobe/gatsby-add-launch-script/)

# @adobe/gatsby-add-launch-script

A Gatsby plugin to insert an Adobe Launch script.

## Install

```bash
npm install --save @adobe/gatsby-add-launch-script
```

## Example

```javascript
// In gatsby-config.js
plugins: [
  {
    resolve: `@adobe/gatsby-add-launch-script`,
    options: {
      includeInDevelopment: true,
      scriptUrl: 'https://some-adobe-launch-script.example
    }
  }
];
```

### Contributing

Contributions are welcome! Read the [Contributing Guide](./.github/CONTRIBUTING.md) for more information.

### Licensing

This project is licensed under the Apache V2 License. See [LICENSE](LICENSE) for more information.

