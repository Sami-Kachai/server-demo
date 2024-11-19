export const typeDefs = `#graphql 
type Project {
    id: ID!
    name:String!
    type:String!
    status:String!
    products:[Product!]
}
type Customer {
    id:ID!
    title:String!
    address:String!
    position: Position!
    color:String!
    status:String!
    verified:Boolean!
    projects:[Project!]
    products:[Product!]
}
type Product {
    id:ID!
    name: String!
    techStacks:[String!]!
    logoUrl:String!
    cost:Float!
    project:Project!
    customer:Customer!
}
type Position {
    lat:Float!
    lng:Float!
}

type Query {
    projects:[Project]
    customers: [Customer]
    products: [Product]
    project(id:ID!):Project
    customer(id:ID!):Customer
    product(id:ID!):Product
}

type Mutation {
    addProject(project: AddProjectInput):Project
    updateProject(id:ID!,project:EditProjectInput!):Project
    deleteProject(id:ID!):[Project]
    addCustomer(customer:AddCustomerInput!):Customer
}

input AddProjectInput {
    name:String!
    type:String!
    status:String!
}

input EditProjectInput {
    name:String
    type:String
    status:String
}
input AddCustomerInput {
    title:String!
    address:String!
    position: AddPositionInput!
    color:String!
    status:String!
    verified:Boolean!
}
input AddPositionInput {
    lat:Float!
    lng:Float!
}
`;
