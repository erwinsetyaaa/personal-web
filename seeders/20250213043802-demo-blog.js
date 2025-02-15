'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert("Blogs", [
      {
        authorId: 1,
        title: "PHP vs NodeJS",
        image: "/img/coding.jpg",
        content : " Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        authorId: 1,
        title: "Javascript is very easy",
        image: "/img/coding.jpg",
        content : " Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        authorId: 2,
        title: "Postgres is the best database",
        image: "/img/blog-img.jpg",
        content : " Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("Blogs", null, {});
  }
};
