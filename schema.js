import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLList
} from 'graphql';
import {
  nodeDefinitions,
  globalIdField,
  fromGlobalId
} from 'graphql-relay';
import content from './content'
import { resolveImage } from './content'
const config = require("json-loader!yaml-loader!~/static/admin/config.yml")
const collectionTypes = {}
const queryFields = {}

const GraphQLImage = new GraphQLObjectType({
  name: "Image",
  fields: () => ({
    src: { type: GraphQLString },
    srcset: { type: GraphQLString },
  })
})




function fieldFor(field) {
  if (field.widget == "string" || field.widget == "markdown" || field.widget == "select") {
    return {
      type: GraphQLString
    };
  } else if (field.widget == "number") {
    return {
      type: GraphQLInt
    }
  } else if (field.widget == "boolean") {
    return {
      type: GraphQLBoolean
    }
  } else if (field.widget == "image") {
    return {
      type: GraphQLImage,
      resolve: obj => resolveImage(obj[field.name])
    };
  } else if (field.widget == "list") {
    return listFor(field)
  } else if (field.widget == "relation") {
    return {
      type: collectionTypes[field.collection],
      resolve: obj => content(field.collection, obj.title)
    }
  }
  throw new Error(`Unknown widget ${field.widget}`)
}

function listFor(field) {
  var listType;
  if (field.field) {
    const singular = fieldFor(field.field)
    listType = singular.type
  } else {
    listType = new GraphQLObjectType({
      name: field.name,
      fields: () => ({
        ...fieldsFor(field)
      })
    });
  }
  return {
    type: GraphQLList(listType)
  };
}

function fieldsFor(collection) {
  const fields = {
    url: { type: GraphQLString }
  }
  if (collection.files) {
    collection.files.forEach(file => {
      var fileType = new GraphQLObjectType({
        name: file.name,
        fields: () => ({
          id: globalIdField(),
          ...fieldsFor(file)
        }),
        interfaces: [nodeInterface]
      });
      fields[file.name] = {
        type: fileType,
        resolve: () => content(collection.name, file.name)
      }
    })
  } else if (collection.fields) {
    collection.fields.forEach(field => {
      fields[field.name] = fieldFor(field)

    })
  }
  return fields;
}

var {
  nodeInterface,
  nodeField
} = nodeDefinitions(
  (globalId) => {
    var {
      type,
      id
    } = fromGlobalId(globalId);
    return content(type, id);
  },
  (obj) => {
    return collectionTypes[obj.type]
  });


config.collections.forEach(collection => {
  var collectionField = {}
  if (collection.files) {
    var collectionType = new GraphQLObjectType({
      name: collection.name,
      fields: () => ({
        id: globalIdField(),
        ...fieldsFor(collection)
      })
    });
    collectionField = {
      type: collectionType,
      resolve: () => content(collection.name)
    }
  } else if (collection.fields) {
    var collectionType = new GraphQLObjectType({
      name: collection.name,
      fields: () => ({
        id: globalIdField(),
        ...fieldsFor(collection)
      }),
      interfaces: [nodeInterface]
    });
    collectionField = {
      type: GraphQLList(collectionType),
      resolve: () => content(collection.name)
    }
  }
  queryFields[collection.name] = collectionField
  collectionTypes[collection.name] = collectionType
})
var queryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    node: nodeField,
    ...queryFields
  })
});
export default new GraphQLSchema({
  query: queryType
});