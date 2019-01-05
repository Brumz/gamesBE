exports.seed = (knex, Promise) => {
  return knex("games").del()
    .then(() => {
      return knex("games").insert([{
          title: "Rainbow Six Siege",
          publisher: "Ubisoft",
          developer: "Ubisoft Montreal",
          year: 2015,
          multiplayer: true,
          rating: 8,
          poster: "https://i.pinimg.com/originals/25/ce/55/25ce55dc0c0415ed4d02871b1f27b270.jpg"
        },
        {
          title: "Rocket League",
          publisher: "Psyonix",
          developer: "Psyonix",
          year: 2015,
          multiplayer: true,
          rating: 9,
          poster: "https://www.mobygames.com/images/covers/l/441545-rocket-league-xbox-one-front-cover.jpg"
        },
        {
          title: "Fortnite",
          publisher: "Epic Games",
          developer: "Epic Games",
          year: 2017,
          multiplayer: true,
          rating: 5,
          poster: "https://healthnewshub.org/wp-content/uploads/2018/03/NewsFortnite-452x452.jpg"
        },
        {
          title: "Forza Horizon 4",
          publisher: "Microsoft Studios",
          developer: "Turn 10 Studios",
          year: 2018,
          multiplayer: true,
          rating: 7,
          poster: "https://news.xbox.com/en-us/wp-content/uploads/Forza-Horizon-4-Key-Art-Horizontal-small-small-small.jpg"
        },
        {
          title: "Skyrim",
          publisher: "Bethesda",
          developer: "Bethesda Game Studios",
          year: 2011,
          multiplayer: false,
          rating: 10,
          poster: "https://www.mobygames.com/images/covers/l/376858-the-elder-scrolls-v-skyrim-special-edition-xbox-one-front-cover.png"
        },
        {
          title: "Call of Duty: Modern Warfare 2",
          publisher: "Activision",
          developer: "Infinity Ward",
          year: 2009,
          multiplayer: true,
          rating: 10,
          poster: "https://images-na.ssl-images-amazon.com/images/I/61Ng4XdZsLL._SY550_.jpg"
        },
        {
          title: "The Last of Us",
          publisher: "Sony Computer Entertainment",
          developer: "Naughty Dog",
          year: 2013,
          multiplayer: false,
          rating: 10,
          poster: "https://news-cdn.softpedia.com/images/news2/The-Last-of-Us-Review-2.png"
        }

      ]);
    });
};