import data from './_database.js';

export const resolvers = {
  Query: {
    projects() {
      return data.projects;
    },
    customers() {
      return data.customers;
    },
    products() {
      return data.products;
    },
    project(_, args) {
      return data.projects.find((project) => project.id === args.id);
    },
    customer(_, args) {
      return data.customers.find((customer) => customer.id === args.id);
    },
    product(_, args) {
      return data.products.find((product) => product.id === args.id);
    },
  },
  Project: {
    products(parent) {
      return data.products.filter(
        (product) => product.project_id === parent.id
      );
    },
  },
  Customer: {
    projects(parent) {
      return data.projects.filter(
        (project) => project.customer_id === parent.id
      );
    },
    products(parent) {
      return data.products.filter(
        (product) => product.customer_id === parent.id
      );
    },
  },
  Product: {
    customer(parent) {
      return data.customers.find(
        (customer) => customer.id === parent.customer_id
      );
    },
    project(parent) {
      return data.projects.find((project) => project.id === parent.project_id);
    },
  },
  Mutation: {
    addProject(_, args) {
      let project = {
        ...args.project,
        id: Math.floor(Math.random() * 10000).toString(),
      };
      data.projects.push(project);
      return project;
    },
    updateProject(_, args) {
      data.projects = data.projects.map((project) => {
        if (project.id === args.id) {
          return { ...project, ...args.project };
        }
        return project;
      });
      return data.projects.find((project) => project.id === args.id);
    },
    deleteProject(_, args) {
      data.projects = data.projects.filter((project) => project.id !== args.id);
      return data.projects;
    },
    addCustomer(_, args) {
      let customer = {
        ...args.customer,
        id: Math.floor(Math.random() * 10000).toString(),
      };
      data.customers.push(customer);
      return customer;
    },
  },
};
