exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(() => {
      // Inserts seed entries
      return knex("users").insert([
        {
          id: 1,
          type_id: 1,
          state_id: 21,
          identification_type_id: 11,
          identification: "0123456789",
          name: "Johao Perlaza",
          email: "perlazajohao@gmail.com",
          address: "Quito",
          phone: "0978970998",
          password: "1234",
          createdAt: new Date(),
        },
        {
          id: 2,
          type_id: 1,
          state_id: 21,
          identification_type_id: 11,
          identification: "0123456788",
          name: "Joel Simbaña",
          email: "jas.vargas@yavirac.edu.ec",
          address: "Quito",
          phone: "0979099544",
          password: "1234",
          createdAt: new Date(),
        },
      ]);
    });
};
