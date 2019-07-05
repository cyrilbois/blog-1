---
title: GraphQL
lang: en-US
date: 2019-01-09
description: Using GraphQL for querying node backends
---

## What is GraphQL

With GraphQL you can typically create faster and more flexible APIs giving clients the option to ask for just the data they need.

Fewer HTTP requests. Flexible data querying. Less code.

A better way to communicate between client and server GraphQL can be seen as a layer between the client and server that handles queries between them using a certain format. GraphQL does not care how or if the server persists data. The name derives Graph from [graph theory] and QL stands for query language.

1. a Query language for your app
2. A server-side runtime handling the queries

## Compared to  REST

* Less chatty
* Better Discoverability
* Less over- and underfetching
* Ofter faster to develop because new req demands less server-side code/changes
* Avoids N+1 fetch workarounds

Mutations are queries that change data.
GraphQL queries are more restricted by default than SQL queries. You have to explicitly expose what users can do.
GraphQL doesn't specify what format a server response should use. Could be JSON, XML, YAML etc.

Query Format:

```js
{
  books {
    title
    image
    rating
    description
    authors { name }
  }
}
```

## GraphiQL

GraphiQL is like the GraphQL version of a REST API testing tool like Postman. It has syntax hightlighting, intelligent autocomplete, real-time error highlighting and query completion to help you build graphql queries. It's browser based.



## Resources

* [Awesome GraphQL](https://github.com/chentsulin/awesome-graphql)
* [Public APIs](https://github.com/APIs-guru/graphql-apis)
* [Facebook Announcement](https://code.fb.com/core-data/graphql-a-data-query-language/)
* [Apollo](https://www.apollographql.com/), [apollo-server](https://github.com/apollographql/apollo-server), [tutorial kit](https://github.com/apollographql/apollo-tutorial-kit)
* Discoverability: Check out [Graphiql](https://graphql.github.io/swapi-graphql/)
* [KnowThen Course](https://courses.knowthen.com/p/graphql-for-beginners-with-javascript) - GraphQL For Beginners with JavaScript
* [Prisma](https://www.prisma.io/)
* [Graphcool](https://www.graph.cool/)
* [Andrew Mead Course Playground](https://graphql-demo.mead.io/)
* [The GraphQL Guide](https://graphql.guide/)
* [Frontend Masters Course](https://frontendmasters.com/courses/graphql/)




## Resources

