let projects = [
  {
    id: '1',
    name: 'Project1',
    type: 'Development',
    status: 'Ongoing',
    customer_id: '2',
  },
  {
    id: '2',
    name: 'Project2',
    type: 'Sales',
    status: 'On Hold',
    customer_id: '1',
  },
];

let customers = [
  {
    id: '1',
    title: 'Customer1',
    address: 'Somewhere in the world',
    position: { lat: 51.505, lng: 10.587 },
    color: 'green',
    status: 'active',
    verified: true,
  },
  {
    id: '2',
    title: 'Customer2',
    address: 'Somewhere in the world',
    position: {
      lat: 10.16,
      lng: 69.02,
    },
    color: 'red',
    status: 'blocked',
    verified: false,
  },
  {
    id: '3',
    title: 'Customer3',
    address: 'Somewhere in the world',
    position: {
      lat: 60.16,
      lng: 20.02,
    },
    color: 'red',
    status: 'blocked',
    verified: false,
  },
];

let products = [
  {
    id: '1',
    name: 'Product 1',
    techStacks: ['Angular', 'NodeJS', 'PostgreSQL'],
    logoUrl: 'https://dummyUrl.com',
    cost: 2000.0,
    project_id: '1',
    customer_id: '2',
  },
  {
    id: '2',
    name: 'Product 2',
    techStacks: ['React', '.NET Core', 'MariaDB'],
    logoUrl: 'https://dummyUrl.com',
    cost: 67125.55,
    project_id: '1',
    customer_id: '1',
  },
  {
    id: '5',
    name: 'Product 5',
    techStacks: ['PHP', 'Python', 'Redis'],
    logoUrl: 'https://dummyUrl.com',
    cost: 6580.254,
    project_id: '2',
    customer_id: '1',
  },
];

export default { projects, customers, products };
