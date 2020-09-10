exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex("catalogues")
    .del()
    .then(() => {
      // Inserts seed entries
      return knex("catalogues").insert([
        //ESPACIO DE 20 IDs ENTRE CADA TIPO
        {
          id: 1,
          name: "Administrator",
          type: "users_type",
          createdAt: new Date(),
        },
        {
          id: 11,
          name: "Identification card",
          type: "identifications_type",
          createdAt: new Date(),
        },
        {
          id: 12,
          name: "Passport",
          type: "identifications_type",
          createdAt: new Date(),
        },
        { id: 21, name: "Active", type: "users_state", createdAt: new Date() },
        {
          id: 22,
          name: "Inactive",
          type: "users_state",
          createdAt: new Date(),
        },
        { id: 23, name: "Deleted", type: "users_state", createdAt: new Date() },
        {
          id: 41,
          name: "Approved",
          type: "reserves_state",
          createdAt: new Date(),
        },
        {
          id: 42,
          name: "Rejected",
          type: "reserves_state",
          createdAt: new Date(),
        },
        {
          id: 43,
          name: "Awaiting approval",
          type: "reserves_state",
          createdAt: new Date(),
        },
        {
          id: 61,
          name: "Available",
          type: "books_state",
          createdAt: new Date(),
        },
        {
          id: 62,
          name: "Deleted",
          type: "books_state",
          createdAt: new Date(),
        },
        {
          id: 63,
          name: "In bad condition",
          type: "books_state",
          createdAt: new Date(),
        },
      ]);
    });
};
