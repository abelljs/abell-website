# Detailed Guide for Abell

This section takes you through all the concepts of Abell and the API reference.

*Note: This section is an API reference. If you are looking for a step-by-step method to learn Abell, [Tutorial]({{Abell.$root}}/tutorial/create-portfolio) is the section you would want to check out.*


## Table of Content

- [Syntax Guide](syntax-guide)
  - [Basic Syntax](syntax-guide#basic-syntax)
  - [Abell Components](syntax-guide#abell-components)
- [Abell API Reference](api-reference)
  - [Abell.$root `<string>`](api-reference)
  - Abell.$path `<string>`
  - Abell.importContent `{Function (pathToMarkdown<string>): htmlString<string>}`
  - Abell.meta `<MetaInfo>`
    - Abell.meta.$root `<string>`
    - Abell.meta.$path `<string>`
    - Abell.meta.$createdAt `<Date>`
    - Abell.meta.$modifiedAt `<Date>`
  - Abell.contentArray `<MetaInfo[]>`
  - Abell.contentObj `{Object.<string, MetaInfo>}`
- Dynamic Page Generation
- How to Create Abell Starter
- How to Build Abell Plugins
- Best Practices
