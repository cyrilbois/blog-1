---
title: GraphQL
lang: en-US
description: Using GraphQL for querying node backends
---

A better way to communicate between client and server GraphQL can be seen as a layer between the client and server that handles queries between them using a certain format. GraphQL does not care how or if the server persists data. The name derives Graph from [graph theory] and QL stands for query language.

## What is GraphQL

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

## Resources

* Discoverability: Check out [Graphiql](https://graphql.github.io/swapi-graphql/)
* [KnowThen GraphQL Course](https://courses.knowthen.com/courses/384035/)


