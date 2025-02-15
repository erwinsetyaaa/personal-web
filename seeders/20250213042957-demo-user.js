"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     * seeder berguna untuk membuat data dummy atau bohongan supaya tabel tidak kosong
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    return queryInterface.bulkInsert("Users", [
      {
        name: "Amir Mahmud",
        email: "example@example.com",
        password: "1234",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Erwin Setya",
        email: "example@example.com",
        password: "12345",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Rizal Khudori",
        email: "example@example.com",
        password: "123456",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("Users", null, {});
  },
};
