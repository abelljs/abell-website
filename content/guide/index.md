# Detailed Guide for Abell

This section takes you through all the concepts of Abell and the API reference.

*Note: This section is an API reference. If you are looking for a step-by-step method to learn Abell, [Tutorial]({{Abell.$root}}/tutorial/create-portfolio) is the section you would want to check out.*


## Table of Content

- [Installation and Setup](installation)
- [Syntax Guide](syntax-guide)
  - [Basic Syntax](syntax-guide#basic-syntax)
  - [Abell Components](syntax-guide#abell-components)
- [Abell API Reference](api-reference)
  - [Abell.$root `<string>`](api-reference#abellroot-ltstringgt)
  - [Abell.$path `<string>`](api-reference#abellpath-ltstringgt)
  - [Abell.globalMeta `<any>`](api-reference#abellglobalmeta-ltanygt)
  - [Abell.importContent `<function(pathToMarkdown<string>): htmlString<string>>`](api-reference#abellimportcontent-ltfunctiongt)
  - [Abell.meta `<MetaInfo>`](api-reference#abellmeta-ltmetainfogt) (Only defined in `theme/[path]/*.abell`)
    - [User Defined Meta](api-reference#user-defined-meta-properties)
    - [Abell.meta.$root `<string>`](api-reference#abellmetaroot-ltstringgt)
    - [Abell.meta.$path `<string>`](api-reference#abellmetapath-ltstringgt)
    - [Abell.meta.$createdAt `<Date>`](api-reference#abellmetacreatedat-ltdategt)
    - [Abell.meta.$modifiedAt `<Date>`](api-reference#abellmetamodifiedat-ltdategt)
  - [Abell.contentArray `<MetaInfo[]>`](api-reference#abellcontentarray-ltmetainfogt)
  - [Abell.contentObj `{Object.<string, MetaInfo>}`](api-reference#abellcontentobj-objectltstring-metainfogt)
- Best Practices (In Progress)
