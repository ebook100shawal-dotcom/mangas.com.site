const BOOKS = [
  {
    "id": 1,
    "title": "The Moonlit Delivery",
    "genre": "Adventure",
    "synopsis": "A courier races across floating islands to deliver a mysterious parcel before sunrise.",
    "free": true,
    "author": "MangaVerse Studio",
    "chapters": 1,
    "color": "#ff6b6b"
  },
  {
    "id": 2,
    "title": "Goblin Snack Club",
    "genre": "Comedy",
    "synopsis": "Three tiny goblins open a snack stall and accidentally become the kingdom's most wanted chefs.",
    "free": true,
    "author": "MangaVerse Studio",
    "chapters": 1,
    "color": "#6c63ff"
  },
  {
    "id": 3,
    "title": "Clockwork Fox",
    "genre": "Fantasy",
    "synopsis": "A clever fox discovers a broken clock that can pause one minute of time.",
    "free": true,
    "author": "MangaVerse Studio",
    "chapters": 1,
    "color": "#20bfa9"
  },
  {
    "id": 4,
    "title": "Thunderball Academy",
    "genre": "Action",
    "synopsis": "An anxious student joins a school where sports are powered by elemental magic.",
    "free": true,
    "author": "MangaVerse Studio",
    "chapters": 1,
    "color": "#f4a261"
  },
  {
    "id": 5,
    "title": "The Last Library Dragon",
    "genre": "Fantasy",
    "synopsis": "A young librarian befriends a dragon who protects stories that the world has forgotten.",
    "free": true,
    "author": "MangaVerse Studio",
    "chapters": 1,
    "color": "#3a86ff"
  },
  {
    "id": 6,
    "title": "Noodle Ninja",
    "genre": "Comedy",
    "synopsis": "A noodle-shop apprentice fights food thieves with spectacularly messy secret techniques.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#b56576"
  },
  {
    "id": 7,
    "title": "Starship Sidekicks",
    "genre": "Sci-Fi",
    "synopsis": "A mismatched crew of rookies tries to save a galaxy that keeps ignoring their emergency calls.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#588157"
  },
  {
    "id": 8,
    "title": "The Haunted Homework",
    "genre": "Supernatural Comedy",
    "synopsis": "A cursed notebook completes assignments but demands increasingly ridiculous favors.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#e76f51"
  },
  {
    "id": 9,
    "title": "Moss Kingdom Mystery",
    "genre": "Mystery",
    "synopsis": "A detective mushroom investigates who stole the forest's royal acorn.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#ff6b6b"
  },
  {
    "id": 10,
    "title": "Skyrail Explorers",
    "genre": "Adventure",
    "synopsis": "Two friends map an abandoned railway that travels through clouds.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#6c63ff"
  },
  {
    "id": 11,
    "title": "Pocket Volcano",
    "genre": "Comedy",
    "synopsis": "A student discovers a tiny volcano in their backpack and must keep it from erupting during class.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#20bfa9"
  },
  {
    "id": 12,
    "title": "The Paper Crane Pact",
    "genre": "Drama",
    "synopsis": "Two rivals exchange magical paper cranes that reveal one honest thought each day.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#f4a261"
  },
  {
    "id": 13,
    "title": "Midnight Bakery",
    "genre": "Fantasy",
    "synopsis": "A baker serves desserts to ghosts and learns why one customer never leaves.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#3a86ff"
  },
  {
    "id": 14,
    "title": "Robo-Raccoon Rescue",
    "genre": "Sci-Fi Comedy",
    "synopsis": "A scrapyard raccoon builds a robot suit to rescue lost pets across the city.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#b56576"
  },
  {
    "id": 15,
    "title": "The Coral Crown",
    "genre": "Adventure",
    "synopsis": "A young diver searches for a crown that can restore a dying reef.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#588157"
  },
  {
    "id": 16,
    "title": "Witch on Wheels",
    "genre": "Comedy",
    "synopsis": "A novice witch delivers potions by scooter, with unpredictable results.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#e76f51"
  },
  {
    "id": 17,
    "title": "Lanterns of Ember Bay",
    "genre": "Fantasy",
    "synopsis": "A quiet village's lantern festival hides a map to a lost kingdom.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#ff6b6b"
  },
  {
    "id": 18,
    "title": "The Tiny Titan",
    "genre": "Action Comedy",
    "synopsis": "A hero shrinks every time they boast, which makes villain battles complicated.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#6c63ff"
  },
  {
    "id": 19,
    "title": "Paper Moon Detectives",
    "genre": "Mystery",
    "synopsis": "Two siblings solve mysteries that appear only in origami scenes.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#20bfa9"
  },
  {
    "id": 20,
    "title": "Dragon's Day Off",
    "genre": "Comedy",
    "synopsis": "A legendary dragon attempts one peaceful day away from adventurers.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#f4a261"
  },
  {
    "id": 21,
    "title": "Cosmic Witches Festival",
    "genre": "Slice of Life",
    "synopsis": "An original slice of life manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#3a86ff"
  },
  {
    "id": 22,
    "title": "Silver Lantern Keepers Club",
    "genre": "Fantasy",
    "synopsis": "An original fantasy manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#b56576"
  },
  {
    "id": 23,
    "title": "Storm Cloud Riders Adventure",
    "genre": "Sci-Fi",
    "synopsis": "An original sci-fi manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#588157"
  },
  {
    "id": 24,
    "title": "Hidden Foxes and the Lost Map",
    "genre": "Adventure",
    "synopsis": "An original adventure manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#e76f51"
  },
  {
    "id": 25,
    "title": "Moonbeam Tiny Giants Academy",
    "genre": "Action",
    "synopsis": "An original action manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#ff6b6b"
  },
  {
    "id": 26,
    "title": "Whispering Sky Pirates Rising",
    "genre": "Slice of Life",
    "synopsis": "An original slice of life manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#6c63ff"
  },
  {
    "id": 27,
    "title": "Electric Library Cats Chronicles",
    "genre": "Fantasy",
    "synopsis": "An original fantasy manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#20bfa9"
  },
  {
    "id": 28,
    "title": "Wild Witches Festival",
    "genre": "Sci-Fi",
    "synopsis": "An original sci-fi manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#f4a261"
  },
  {
    "id": 29,
    "title": "Midnight Dream Gardeners Club",
    "genre": "Adventure",
    "synopsis": "An original adventure manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#3a86ff"
  },
  {
    "id": 30,
    "title": "Pocket Detectives Adventure",
    "genre": "Mystery",
    "synopsis": "An original mystery manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#b56576"
  },
  {
    "id": 31,
    "title": "Jolly Foxes and the Lost Map",
    "genre": "Slice of Life",
    "synopsis": "An original slice of life manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#588157"
  },
  {
    "id": 32,
    "title": "Lucky Inventors Academy",
    "genre": "Fantasy",
    "synopsis": "An original fantasy manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#e76f51"
  },
  {
    "id": 33,
    "title": "Silver Cafeterias Rising",
    "genre": "Sci-Fi",
    "synopsis": "An original sci-fi manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#ff6b6b"
  },
  {
    "id": 34,
    "title": "Storm Library Cats Chronicles",
    "genre": "Adventure",
    "synopsis": "An original adventure manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#6c63ff"
  },
  {
    "id": 35,
    "title": "Hidden Robots Festival",
    "genre": "Mystery",
    "synopsis": "An original mystery manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#20bfa9"
  },
  {
    "id": 36,
    "title": "Curious Jelly Knights Club",
    "genre": "Supernatural",
    "synopsis": "An original supernatural manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#f4a261"
  },
  {
    "id": 37,
    "title": "Whispering Detectives Adventure",
    "genre": "Fantasy",
    "synopsis": "An original fantasy manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#3a86ff"
  },
  {
    "id": 38,
    "title": "Electric Noodle Ninjas and the Lost Map",
    "genre": "Sci-Fi",
    "synopsis": "An original sci-fi manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#b56576"
  },
  {
    "id": 39,
    "title": "Wild Ghosts Academy",
    "genre": "Adventure",
    "synopsis": "An original adventure manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#588157"
  },
  {
    "id": 40,
    "title": "Brave Cafeterias Rising",
    "genre": "Mystery",
    "synopsis": "An original mystery manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#e76f51"
  },
  {
    "id": 41,
    "title": "Pocket Star Bakers Chronicles",
    "genre": "Supernatural",
    "synopsis": "An original supernatural manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#ff6b6b"
  },
  {
    "id": 42,
    "title": "Jolly Mushrooms Festival",
    "genre": "Comedy",
    "synopsis": "An original comedy manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#6c63ff"
  },
  {
    "id": 43,
    "title": "Lucky Jelly Knights Club",
    "genre": "Sci-Fi",
    "synopsis": "An original sci-fi manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#20bfa9"
  },
  {
    "id": 44,
    "title": "Crimson Sea Dragons Adventure",
    "genre": "Adventure",
    "synopsis": "An original adventure manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#f4a261"
  },
  {
    "id": 45,
    "title": "Storm Lantern Keepers and the Lost Map",
    "genre": "Mystery",
    "synopsis": "An original mystery manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#3a86ff"
  },
  {
    "id": 46,
    "title": "Hidden Ghosts Academy",
    "genre": "Supernatural",
    "synopsis": "An original supernatural manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#b56576"
  },
  {
    "id": 47,
    "title": "Curious Comets Rising",
    "genre": "Comedy",
    "synopsis": "An original comedy manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#588157"
  },
  {
    "id": 48,
    "title": "Neon Tiny Giants Chronicles",
    "genre": "Action",
    "synopsis": "An original action manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#e76f51"
  },
  {
    "id": 49,
    "title": "Electric Mushrooms Festival",
    "genre": "Adventure",
    "synopsis": "An original adventure manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#ff6b6b"
  },
  {
    "id": 50,
    "title": "Wild Time Thieves Club",
    "genre": "Mystery",
    "synopsis": "An original mystery manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#6c63ff"
  },
  {
    "id": 51,
    "title": "Brave Witches Adventure",
    "genre": "Supernatural",
    "synopsis": "An original supernatural manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#20bfa9"
  },
  {
    "id": 52,
    "title": "Wandering Lantern Keepers and the Lost Map",
    "genre": "Comedy",
    "synopsis": "An original comedy manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#f4a261"
  },
  {
    "id": 53,
    "title": "Jolly Cloud Riders Academy",
    "genre": "Action",
    "synopsis": "An original action manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#3a86ff"
  },
  {
    "id": 54,
    "title": "Lucky Foxes Rising",
    "genre": "Slice of Life",
    "synopsis": "An original slice of life manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#b56576"
  },
  {
    "id": 55,
    "title": "Crimson Tiny Giants Chronicles",
    "genre": "Mystery",
    "synopsis": "An original mystery manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#588157"
  },
  {
    "id": 56,
    "title": "Crystal Sky Pirates Festival",
    "genre": "Supernatural",
    "synopsis": "An original supernatural manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#e76f51"
  },
  {
    "id": 57,
    "title": "Hidden Library Cats Club",
    "genre": "Comedy",
    "synopsis": "An original comedy manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#ff6b6b"
  },
  {
    "id": 58,
    "title": "Curious Witches Adventure",
    "genre": "Action",
    "synopsis": "An original action manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#6c63ff"
  },
  {
    "id": 59,
    "title": "Neon Dream Gardeners and the Lost Map",
    "genre": "Slice of Life",
    "synopsis": "An original slice of life manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#20bfa9"
  },
  {
    "id": 60,
    "title": "Golden Detectives Academy",
    "genre": "Fantasy",
    "synopsis": "An original fantasy manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#f4a261"
  },
  {
    "id": 61,
    "title": "Wild Foxes Rising",
    "genre": "Supernatural",
    "synopsis": "An original supernatural manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#3a86ff"
  },
  {
    "id": 62,
    "title": "Brave Inventors Chronicles",
    "genre": "Comedy",
    "synopsis": "An original comedy manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#b56576"
  },
  {
    "id": 63,
    "title": "Wandering Cafeterias Festival",
    "genre": "Action",
    "synopsis": "An original action manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#588157"
  },
  {
    "id": 64,
    "title": "Secret Library Cats Club",
    "genre": "Slice of Life",
    "synopsis": "An original slice of life manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#e76f51"
  },
  {
    "id": 65,
    "title": "Lucky Robots Adventure",
    "genre": "Fantasy",
    "synopsis": "An original fantasy manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#ff6b6b"
  },
  {
    "id": 66,
    "title": "Crimson Jelly Knights and the Lost Map",
    "genre": "Sci-Fi",
    "synopsis": "An original sci-fi manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#6c63ff"
  },
  {
    "id": 67,
    "title": "Crystal Detectives Academy",
    "genre": "Comedy",
    "synopsis": "An original comedy manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#20bfa9"
  },
  {
    "id": 68,
    "title": "Cosmic Noodle Ninjas Rising",
    "genre": "Action",
    "synopsis": "An original action manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#f4a261"
  },
  {
    "id": 69,
    "title": "Curious Ghosts Chronicles",
    "genre": "Slice of Life",
    "synopsis": "An original slice of life manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#3a86ff"
  },
  {
    "id": 70,
    "title": "Neon Cafeterias Festival",
    "genre": "Fantasy",
    "synopsis": "An original fantasy manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#b56576"
  },
  {
    "id": 71,
    "title": "Golden Star Bakers Club",
    "genre": "Sci-Fi",
    "synopsis": "An original sci-fi manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#588157"
  },
  {
    "id": 72,
    "title": "Moonbeam Mushrooms Adventure",
    "genre": "Adventure",
    "synopsis": "An original adventure manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#e76f51"
  },
  {
    "id": 73,
    "title": "Brave Jelly Knights and the Lost Map",
    "genre": "Action",
    "synopsis": "An original action manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#ff6b6b"
  },
  {
    "id": 74,
    "title": "Wandering Sea Dragons Academy",
    "genre": "Slice of Life",
    "synopsis": "An original slice of life manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#6c63ff"
  },
  {
    "id": 75,
    "title": "Secret Lantern Keepers Rising",
    "genre": "Fantasy",
    "synopsis": "An original fantasy manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#20bfa9"
  },
  {
    "id": 76,
    "title": "Midnight Ghosts Chronicles",
    "genre": "Sci-Fi",
    "synopsis": "An original sci-fi manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#f4a261"
  },
  {
    "id": 77,
    "title": "Crimson Comets Festival",
    "genre": "Adventure",
    "synopsis": "An original adventure manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#3a86ff"
  },
  {
    "id": 78,
    "title": "Crystal Tiny Giants Club",
    "genre": "Mystery",
    "synopsis": "An original mystery manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#b56576"
  },
  {
    "id": 79,
    "title": "Cosmic Mushrooms Adventure",
    "genre": "Slice of Life",
    "synopsis": "An original slice of life manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#588157"
  },
  {
    "id": 80,
    "title": "Silver Time Thieves and the Lost Map",
    "genre": "Fantasy",
    "synopsis": "An original fantasy manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#e76f51"
  },
  {
    "id": 81,
    "title": "Neon Witches Academy",
    "genre": "Sci-Fi",
    "synopsis": "An original sci-fi manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#ff6b6b"
  },
  {
    "id": 82,
    "title": "Golden Lantern Keepers Rising",
    "genre": "Adventure",
    "synopsis": "An original adventure manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#6c63ff"
  },
  {
    "id": 83,
    "title": "Moonbeam Cloud Riders Chronicles",
    "genre": "Mystery",
    "synopsis": "An original mystery manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#20bfa9"
  },
  {
    "id": 84,
    "title": "Whispering Foxes Festival",
    "genre": "Supernatural",
    "synopsis": "An original supernatural manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#f4a261"
  },
  {
    "id": 85,
    "title": "Wandering Tiny Giants Club",
    "genre": "Fantasy",
    "synopsis": "An original fantasy manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#3a86ff"
  },
  {
    "id": 86,
    "title": "Secret Sky Pirates Adventure",
    "genre": "Sci-Fi",
    "synopsis": "An original sci-fi manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#b56576"
  },
  {
    "id": 87,
    "title": "Midnight Library Cats and the Lost Map",
    "genre": "Adventure",
    "synopsis": "An original adventure manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#588157"
  },
  {
    "id": 88,
    "title": "Pocket Witches Academy",
    "genre": "Mystery",
    "synopsis": "An original mystery manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#e76f51"
  },
  {
    "id": 89,
    "title": "Crystal Dream Gardeners Rising",
    "genre": "Supernatural",
    "synopsis": "An original supernatural manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#ff6b6b"
  },
  {
    "id": 90,
    "title": "Cosmic Detectives Chronicles",
    "genre": "Comedy",
    "synopsis": "An original comedy manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#6c63ff"
  },
  {
    "id": 91,
    "title": "Silver Foxes Festival",
    "genre": "Sci-Fi",
    "synopsis": "An original sci-fi manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#20bfa9"
  },
  {
    "id": 92,
    "title": "Storm Inventors Club",
    "genre": "Adventure",
    "synopsis": "An original adventure manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#f4a261"
  },
  {
    "id": 93,
    "title": "Golden Cafeterias Adventure",
    "genre": "Mystery",
    "synopsis": "An original mystery manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#3a86ff"
  },
  {
    "id": 94,
    "title": "Moonbeam Library Cats and the Lost Map",
    "genre": "Supernatural",
    "synopsis": "An original supernatural manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#b56576"
  },
  {
    "id": 95,
    "title": "Whispering Robots Academy",
    "genre": "Comedy",
    "synopsis": "An original comedy manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#588157"
  },
  {
    "id": 96,
    "title": "Electric Jelly Knights Rising",
    "genre": "Action",
    "synopsis": "An original action manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#e76f51"
  },
  {
    "id": 97,
    "title": "Secret Detectives Chronicles",
    "genre": "Adventure",
    "synopsis": "An original adventure manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#ff6b6b"
  },
  {
    "id": 98,
    "title": "Midnight Noodle Ninjas Festival",
    "genre": "Mystery",
    "synopsis": "An original mystery manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#6c63ff"
  },
  {
    "id": 99,
    "title": "Pocket Ghosts Club",
    "genre": "Supernatural",
    "synopsis": "An original supernatural manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#20bfa9"
  },
  {
    "id": 100,
    "title": "Jolly Cafeterias Adventure",
    "genre": "Comedy",
    "synopsis": "An original comedy manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#f4a261"
  },
  {
    "id": 101,
    "title": "Cosmic Star Bakers and the Lost Map",
    "genre": "Action",
    "synopsis": "An original action manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#3a86ff"
  },
  {
    "id": 102,
    "title": "Silver Mushrooms Academy",
    "genre": "Slice of Life",
    "synopsis": "An original slice of life manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#b56576"
  },
  {
    "id": 103,
    "title": "Storm Jelly Knights Rising",
    "genre": "Mystery",
    "synopsis": "An original mystery manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#588157"
  },
  {
    "id": 104,
    "title": "Hidden Sea Dragons Chronicles",
    "genre": "Supernatural",
    "synopsis": "An original supernatural manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#e76f51"
  },
  {
    "id": 105,
    "title": "Moonbeam Lantern Keepers Festival",
    "genre": "Comedy",
    "synopsis": "An original comedy manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#ff6b6b"
  },
  {
    "id": 106,
    "title": "Whispering Ghosts Club",
    "genre": "Action",
    "synopsis": "An original action manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#6c63ff"
  },
  {
    "id": 107,
    "title": "Electric Comets Adventure",
    "genre": "Slice of Life",
    "synopsis": "An original slice of life manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#20bfa9"
  },
  {
    "id": 108,
    "title": "Wild Tiny Giants and the Lost Map",
    "genre": "Fantasy",
    "synopsis": "An original fantasy manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#f4a261"
  },
  {
    "id": 109,
    "title": "Midnight Mushrooms Academy",
    "genre": "Supernatural",
    "synopsis": "An original supernatural manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#3a86ff"
  },
  {
    "id": 110,
    "title": "Pocket Time Thieves Rising",
    "genre": "Comedy",
    "synopsis": "An original comedy manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#b56576"
  },
  {
    "id": 111,
    "title": "Jolly Witches Chronicles",
    "genre": "Action",
    "synopsis": "An original action manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#588157"
  },
  {
    "id": 112,
    "title": "Lucky Lantern Keepers Festival",
    "genre": "Slice of Life",
    "synopsis": "An original slice of life manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#e76f51"
  },
  {
    "id": 113,
    "title": "Silver Cloud Riders Club",
    "genre": "Fantasy",
    "synopsis": "An original fantasy manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#ff6b6b"
  },
  {
    "id": 114,
    "title": "Storm Foxes Adventure",
    "genre": "Sci-Fi",
    "synopsis": "An original sci-fi manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#6c63ff"
  },
  {
    "id": 115,
    "title": "Hidden Tiny Giants and the Lost Map",
    "genre": "Comedy",
    "synopsis": "An original comedy manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#20bfa9"
  },
  {
    "id": 116,
    "title": "Curious Sky Pirates Academy",
    "genre": "Action",
    "synopsis": "An original action manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#f4a261"
  },
  {
    "id": 117,
    "title": "Whispering Library Cats Rising",
    "genre": "Slice of Life",
    "synopsis": "An original slice of life manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#3a86ff"
  },
  {
    "id": 118,
    "title": "Electric Witches Chronicles",
    "genre": "Fantasy",
    "synopsis": "An original fantasy manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#b56576"
  },
  {
    "id": 119,
    "title": "Wild Dream Gardeners Festival",
    "genre": "Sci-Fi",
    "synopsis": "An original sci-fi manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#588157"
  },
  {
    "id": 120,
    "title": "Brave Detectives Club",
    "genre": "Adventure",
    "synopsis": "An original adventure manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#e76f51"
  },
  {
    "id": 121,
    "title": "Pocket Foxes Adventure",
    "genre": "Action",
    "synopsis": "An original action manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#ff6b6b"
  },
  {
    "id": 122,
    "title": "Jolly Inventors and the Lost Map",
    "genre": "Slice of Life",
    "synopsis": "An original slice of life manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#6c63ff"
  },
  {
    "id": 123,
    "title": "Lucky Cafeterias Academy",
    "genre": "Fantasy",
    "synopsis": "An original fantasy manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#20bfa9"
  },
  {
    "id": 124,
    "title": "Crimson Library Cats Rising",
    "genre": "Sci-Fi",
    "synopsis": "An original sci-fi manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#f4a261"
  },
  {
    "id": 125,
    "title": "Storm Robots Chronicles",
    "genre": "Adventure",
    "synopsis": "An original adventure manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#3a86ff"
  },
  {
    "id": 126,
    "title": "Hidden Jelly Knights Festival",
    "genre": "Mystery",
    "synopsis": "An original mystery manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#b56576"
  },
  {
    "id": 127,
    "title": "Curious Detectives Club",
    "genre": "Slice of Life",
    "synopsis": "An original slice of life manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#588157"
  },
  {
    "id": 128,
    "title": "Neon Noodle Ninjas Adventure",
    "genre": "Fantasy",
    "synopsis": "An original fantasy manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#e76f51"
  },
  {
    "id": 129,
    "title": "Electric Ghosts and the Lost Map",
    "genre": "Sci-Fi",
    "synopsis": "An original sci-fi manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#ff6b6b"
  },
  {
    "id": 130,
    "title": "Wild Cafeterias Academy",
    "genre": "Adventure",
    "synopsis": "An original adventure manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#6c63ff"
  },
  {
    "id": 131,
    "title": "Brave Star Bakers Rising",
    "genre": "Mystery",
    "synopsis": "An original mystery manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#20bfa9"
  },
  {
    "id": 132,
    "title": "Wandering Mushrooms Chronicles",
    "genre": "Supernatural",
    "synopsis": "An original supernatural manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#f4a261"
  },
  {
    "id": 133,
    "title": "Jolly Jelly Knights Festival",
    "genre": "Fantasy",
    "synopsis": "An original fantasy manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#3a86ff"
  },
  {
    "id": 134,
    "title": "Lucky Sea Dragons Club",
    "genre": "Sci-Fi",
    "synopsis": "An original sci-fi manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#b56576"
  },
  {
    "id": 135,
    "title": "Crimson Lantern Keepers Adventure",
    "genre": "Adventure",
    "synopsis": "An original adventure manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#588157"
  },
  {
    "id": 136,
    "title": "Crystal Ghosts and the Lost Map",
    "genre": "Mystery",
    "synopsis": "An original mystery manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#e76f51"
  },
  {
    "id": 137,
    "title": "Hidden Comets Academy",
    "genre": "Supernatural",
    "synopsis": "An original supernatural manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#ff6b6b"
  },
  {
    "id": 138,
    "title": "Curious Tiny Giants Rising",
    "genre": "Comedy",
    "synopsis": "An original comedy manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#6c63ff"
  },
  {
    "id": 139,
    "title": "Neon Mushrooms Chronicles",
    "genre": "Sci-Fi",
    "synopsis": "An original sci-fi manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#20bfa9"
  },
  {
    "id": 140,
    "title": "Golden Time Thieves Festival",
    "genre": "Adventure",
    "synopsis": "An original adventure manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#f4a261"
  },
  {
    "id": 141,
    "title": "Wild Witches Club",
    "genre": "Mystery",
    "synopsis": "An original mystery manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#3a86ff"
  },
  {
    "id": 142,
    "title": "Brave Lantern Keepers Adventure",
    "genre": "Supernatural",
    "synopsis": "An original supernatural manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#b56576"
  },
  {
    "id": 143,
    "title": "Wandering Cloud Riders and the Lost Map",
    "genre": "Comedy",
    "synopsis": "An original comedy manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#588157"
  },
  {
    "id": 144,
    "title": "Secret Foxes Academy",
    "genre": "Action",
    "synopsis": "An original action manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#e76f51"
  },
  {
    "id": 145,
    "title": "Lucky Tiny Giants Rising",
    "genre": "Adventure",
    "synopsis": "An original adventure manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#ff6b6b"
  },
  {
    "id": 146,
    "title": "Crimson Sky Pirates Chronicles",
    "genre": "Mystery",
    "synopsis": "An original mystery manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#6c63ff"
  },
  {
    "id": 147,
    "title": "Crystal Library Cats Festival",
    "genre": "Supernatural",
    "synopsis": "An original supernatural manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#20bfa9"
  },
  {
    "id": 148,
    "title": "Cosmic Witches Club",
    "genre": "Comedy",
    "synopsis": "An original comedy manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#f4a261"
  },
  {
    "id": 149,
    "title": "Curious Dream Gardeners Adventure",
    "genre": "Action",
    "synopsis": "An original action manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#3a86ff"
  },
  {
    "id": 150,
    "title": "Neon Detectives and the Lost Map",
    "genre": "Slice of Life",
    "synopsis": "An original slice of life manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#b56576"
  },
  {
    "id": 151,
    "title": "Golden Foxes Academy",
    "genre": "Mystery",
    "synopsis": "An original mystery manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#588157"
  },
  {
    "id": 152,
    "title": "Moonbeam Inventors Rising",
    "genre": "Supernatural",
    "synopsis": "An original supernatural manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#e76f51"
  },
  {
    "id": 153,
    "title": "Brave Cafeterias Chronicles",
    "genre": "Comedy",
    "synopsis": "An original comedy manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#ff6b6b"
  },
  {
    "id": 154,
    "title": "Wandering Library Cats Festival",
    "genre": "Action",
    "synopsis": "An original action manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#6c63ff"
  },
  {
    "id": 155,
    "title": "Secret Robots Club",
    "genre": "Slice of Life",
    "synopsis": "An original slice of life manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#20bfa9"
  },
  {
    "id": 156,
    "title": "Midnight Jelly Knights Adventure",
    "genre": "Fantasy",
    "synopsis": "An original fantasy manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#f4a261"
  },
  {
    "id": 157,
    "title": "Crimson Detectives and the Lost Map",
    "genre": "Supernatural",
    "synopsis": "An original supernatural manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#3a86ff"
  },
  {
    "id": 158,
    "title": "Crystal Noodle Ninjas Academy",
    "genre": "Comedy",
    "synopsis": "An original comedy manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#b56576"
  },
  {
    "id": 159,
    "title": "Cosmic Ghosts Rising",
    "genre": "Action",
    "synopsis": "An original action manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#588157"
  },
  {
    "id": 160,
    "title": "Silver Cafeterias Chronicles",
    "genre": "Slice of Life",
    "synopsis": "An original slice of life manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#e76f51"
  },
  {
    "id": 161,
    "title": "Neon Star Bakers Festival",
    "genre": "Fantasy",
    "synopsis": "An original fantasy manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#ff6b6b"
  },
  {
    "id": 162,
    "title": "Golden Mushrooms Club",
    "genre": "Sci-Fi",
    "synopsis": "An original sci-fi manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#6c63ff"
  },
  {
    "id": 163,
    "title": "Moonbeam Jelly Knights Adventure",
    "genre": "Comedy",
    "synopsis": "An original comedy manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#20bfa9"
  },
  {
    "id": 164,
    "title": "Whispering Sea Dragons and the Lost Map",
    "genre": "Action",
    "synopsis": "An original action manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#f4a261"
  },
  {
    "id": 165,
    "title": "Wandering Lantern Keepers Academy",
    "genre": "Slice of Life",
    "synopsis": "An original slice of life manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#3a86ff"
  },
  {
    "id": 166,
    "title": "Secret Ghosts Rising",
    "genre": "Fantasy",
    "synopsis": "An original fantasy manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#b56576"
  },
  {
    "id": 167,
    "title": "Midnight Comets Chronicles",
    "genre": "Sci-Fi",
    "synopsis": "An original sci-fi manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#588157"
  },
  {
    "id": 168,
    "title": "Pocket Tiny Giants Festival",
    "genre": "Adventure",
    "synopsis": "An original adventure manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#e76f51"
  },
  {
    "id": 169,
    "title": "Crystal Mushrooms Club",
    "genre": "Action",
    "synopsis": "An original action manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#ff6b6b"
  },
  {
    "id": 170,
    "title": "Cosmic Time Thieves Adventure",
    "genre": "Slice of Life",
    "synopsis": "An original slice of life manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#6c63ff"
  },
  {
    "id": 171,
    "title": "Silver Witches and the Lost Map",
    "genre": "Fantasy",
    "synopsis": "An original fantasy manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#20bfa9"
  },
  {
    "id": 172,
    "title": "Storm Lantern Keepers Academy",
    "genre": "Sci-Fi",
    "synopsis": "An original sci-fi manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#f4a261"
  },
  {
    "id": 173,
    "title": "Golden Cloud Riders Rising",
    "genre": "Adventure",
    "synopsis": "An original adventure manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#3a86ff"
  },
  {
    "id": 174,
    "title": "Moonbeam Foxes Chronicles",
    "genre": "Mystery",
    "synopsis": "An original mystery manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#b56576"
  },
  {
    "id": 175,
    "title": "Whispering Tiny Giants Festival",
    "genre": "Slice of Life",
    "synopsis": "An original slice of life manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#588157"
  },
  {
    "id": 176,
    "title": "Electric Sky Pirates Club",
    "genre": "Fantasy",
    "synopsis": "An original fantasy manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#e76f51"
  },
  {
    "id": 177,
    "title": "Secret Library Cats Adventure",
    "genre": "Sci-Fi",
    "synopsis": "An original sci-fi manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#ff6b6b"
  },
  {
    "id": 178,
    "title": "Midnight Witches and the Lost Map",
    "genre": "Adventure",
    "synopsis": "An original adventure manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#6c63ff"
  },
  {
    "id": 179,
    "title": "Pocket Dream Gardeners Academy",
    "genre": "Mystery",
    "synopsis": "An original mystery manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#20bfa9"
  },
  {
    "id": 180,
    "title": "Jolly Detectives Rising",
    "genre": "Supernatural",
    "synopsis": "An original supernatural manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#f4a261"
  },
  {
    "id": 181,
    "title": "Cosmic Foxes Chronicles",
    "genre": "Fantasy",
    "synopsis": "An original fantasy manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#3a86ff"
  },
  {
    "id": 182,
    "title": "Silver Inventors Festival",
    "genre": "Sci-Fi",
    "synopsis": "An original sci-fi manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#b56576"
  },
  {
    "id": 183,
    "title": "Storm Cafeterias Club",
    "genre": "Adventure",
    "synopsis": "An original adventure manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#588157"
  },
  {
    "id": 184,
    "title": "Hidden Library Cats Adventure",
    "genre": "Mystery",
    "synopsis": "An original mystery manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#e76f51"
  },
  {
    "id": 185,
    "title": "Moonbeam Robots and the Lost Map",
    "genre": "Supernatural",
    "synopsis": "An original supernatural manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#ff6b6b"
  },
  {
    "id": 186,
    "title": "Whispering Jelly Knights Academy",
    "genre": "Comedy",
    "synopsis": "An original comedy manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#6c63ff"
  },
  {
    "id": 187,
    "title": "Electric Detectives Rising",
    "genre": "Sci-Fi",
    "synopsis": "An original sci-fi manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#20bfa9"
  },
  {
    "id": 188,
    "title": "Wild Noodle Ninjas Chronicles",
    "genre": "Adventure",
    "synopsis": "An original adventure manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#f4a261"
  },
  {
    "id": 189,
    "title": "Midnight Ghosts Festival",
    "genre": "Mystery",
    "synopsis": "An original mystery manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#3a86ff"
  },
  {
    "id": 190,
    "title": "Pocket Cafeterias Club",
    "genre": "Supernatural",
    "synopsis": "An original supernatural manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#b56576"
  },
  {
    "id": 191,
    "title": "Jolly Star Bakers Adventure",
    "genre": "Comedy",
    "synopsis": "An original comedy manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#588157"
  },
  {
    "id": 192,
    "title": "Lucky Mushrooms and the Lost Map",
    "genre": "Action",
    "synopsis": "An original action manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#e76f51"
  },
  {
    "id": 193,
    "title": "Silver Jelly Knights Academy",
    "genre": "Adventure",
    "synopsis": "An original adventure manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#ff6b6b"
  },
  {
    "id": 194,
    "title": "Storm Sea Dragons Rising",
    "genre": "Mystery",
    "synopsis": "An original mystery manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#6c63ff"
  },
  {
    "id": 195,
    "title": "Hidden Lantern Keepers Chronicles",
    "genre": "Supernatural",
    "synopsis": "An original supernatural manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#20bfa9"
  },
  {
    "id": 196,
    "title": "Curious Ghosts Festival",
    "genre": "Comedy",
    "synopsis": "An original comedy manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#f4a261"
  },
  {
    "id": 197,
    "title": "Whispering Comets Club",
    "genre": "Action",
    "synopsis": "An original action manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#3a86ff"
  },
  {
    "id": 198,
    "title": "Electric Tiny Giants Adventure",
    "genre": "Slice of Life",
    "synopsis": "An original slice of life manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#b56576"
  },
  {
    "id": 199,
    "title": "Wild Mushrooms and the Lost Map",
    "genre": "Mystery",
    "synopsis": "An original mystery manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#588157"
  },
  {
    "id": 200,
    "title": "Brave Time Thieves Academy",
    "genre": "Supernatural",
    "synopsis": "An original supernatural manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#e76f51"
  },
  {
    "id": 201,
    "title": "Pocket Witches Rising",
    "genre": "Comedy",
    "synopsis": "An original comedy manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#ff6b6b"
  },
  {
    "id": 202,
    "title": "Jolly Lantern Keepers Chronicles",
    "genre": "Action",
    "synopsis": "An original action manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#6c63ff"
  },
  {
    "id": 203,
    "title": "Lucky Cloud Riders Festival",
    "genre": "Slice of Life",
    "synopsis": "An original slice of life manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#20bfa9"
  },
  {
    "id": 204,
    "title": "Crimson Foxes Club",
    "genre": "Fantasy",
    "synopsis": "An original fantasy manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#f4a261"
  },
  {
    "id": 205,
    "title": "Storm Tiny Giants Adventure",
    "genre": "Supernatural",
    "synopsis": "An original supernatural manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#3a86ff"
  },
  {
    "id": 206,
    "title": "Hidden Sky Pirates and the Lost Map",
    "genre": "Comedy",
    "synopsis": "An original comedy manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#b56576"
  },
  {
    "id": 207,
    "title": "Curious Library Cats Academy",
    "genre": "Action",
    "synopsis": "An original action manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#588157"
  },
  {
    "id": 208,
    "title": "Neon Witches Rising",
    "genre": "Slice of Life",
    "synopsis": "An original slice of life manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#e76f51"
  },
  {
    "id": 209,
    "title": "Electric Dream Gardeners Chronicles",
    "genre": "Fantasy",
    "synopsis": "An original fantasy manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#ff6b6b"
  },
  {
    "id": 210,
    "title": "Wild Detectives Festival",
    "genre": "Sci-Fi",
    "synopsis": "An original sci-fi manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#6c63ff"
  },
  {
    "id": 211,
    "title": "Brave Foxes Club",
    "genre": "Comedy",
    "synopsis": "An original comedy manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#20bfa9"
  },
  {
    "id": 212,
    "title": "Wandering Inventors Adventure",
    "genre": "Action",
    "synopsis": "An original action manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#f4a261"
  },
  {
    "id": 213,
    "title": "Jolly Cafeterias and the Lost Map",
    "genre": "Slice of Life",
    "synopsis": "An original slice of life manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#3a86ff"
  },
  {
    "id": 214,
    "title": "Lucky Library Cats Academy",
    "genre": "Fantasy",
    "synopsis": "An original fantasy manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#b56576"
  },
  {
    "id": 215,
    "title": "Crimson Robots Rising",
    "genre": "Sci-Fi",
    "synopsis": "An original sci-fi manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#588157"
  },
  {
    "id": 216,
    "title": "Crystal Jelly Knights Chronicles",
    "genre": "Adventure",
    "synopsis": "An original adventure manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#e76f51"
  },
  {
    "id": 217,
    "title": "Hidden Detectives Festival",
    "genre": "Action",
    "synopsis": "An original action manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#ff6b6b"
  },
  {
    "id": 218,
    "title": "Curious Noodle Ninjas Club",
    "genre": "Slice of Life",
    "synopsis": "An original slice of life manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#6c63ff"
  },
  {
    "id": 219,
    "title": "Neon Ghosts Adventure",
    "genre": "Fantasy",
    "synopsis": "An original fantasy manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#20bfa9"
  },
  {
    "id": 220,
    "title": "Golden Cafeterias and the Lost Map",
    "genre": "Sci-Fi",
    "synopsis": "An original sci-fi manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#f4a261"
  },
  {
    "id": 221,
    "title": "Wild Star Bakers Academy",
    "genre": "Adventure",
    "synopsis": "An original adventure manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#3a86ff"
  },
  {
    "id": 222,
    "title": "Brave Mushrooms Rising",
    "genre": "Mystery",
    "synopsis": "An original mystery manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#b56576"
  },
  {
    "id": 223,
    "title": "Wandering Jelly Knights Chronicles",
    "genre": "Slice of Life",
    "synopsis": "An original slice of life manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#588157"
  },
  {
    "id": 224,
    "title": "Secret Sea Dragons Festival",
    "genre": "Fantasy",
    "synopsis": "An original fantasy manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#e76f51"
  },
  {
    "id": 225,
    "title": "Lucky Lantern Keepers Club",
    "genre": "Sci-Fi",
    "synopsis": "An original sci-fi manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#ff6b6b"
  },
  {
    "id": 226,
    "title": "Crimson Ghosts Adventure",
    "genre": "Adventure",
    "synopsis": "An original adventure manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#6c63ff"
  },
  {
    "id": 227,
    "title": "Crystal Comets and the Lost Map",
    "genre": "Mystery",
    "synopsis": "An original mystery manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#20bfa9"
  },
  {
    "id": 228,
    "title": "Cosmic Tiny Giants Academy",
    "genre": "Supernatural",
    "synopsis": "An original supernatural manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#f4a261"
  },
  {
    "id": 229,
    "title": "Curious Mushrooms Rising",
    "genre": "Fantasy",
    "synopsis": "An original fantasy manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#3a86ff"
  },
  {
    "id": 230,
    "title": "Neon Time Thieves Chronicles",
    "genre": "Sci-Fi",
    "synopsis": "An original sci-fi manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#b56576"
  },
  {
    "id": 231,
    "title": "Golden Witches Festival",
    "genre": "Adventure",
    "synopsis": "An original adventure manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#588157"
  },
  {
    "id": 232,
    "title": "Moonbeam Lantern Keepers Club",
    "genre": "Mystery",
    "synopsis": "An original mystery manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#e76f51"
  },
  {
    "id": 233,
    "title": "Brave Cloud Riders Adventure",
    "genre": "Supernatural",
    "synopsis": "An original supernatural manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#ff6b6b"
  },
  {
    "id": 234,
    "title": "Wandering Foxes and the Lost Map",
    "genre": "Comedy",
    "synopsis": "An original comedy manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#6c63ff"
  },
  {
    "id": 235,
    "title": "Secret Tiny Giants Academy",
    "genre": "Sci-Fi",
    "synopsis": "An original sci-fi manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#20bfa9"
  },
  {
    "id": 236,
    "title": "Midnight Sky Pirates Rising",
    "genre": "Adventure",
    "synopsis": "An original adventure manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#f4a261"
  },
  {
    "id": 237,
    "title": "Crimson Library Cats Chronicles",
    "genre": "Mystery",
    "synopsis": "An original mystery manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#3a86ff"
  },
  {
    "id": 238,
    "title": "Crystal Witches Festival",
    "genre": "Supernatural",
    "synopsis": "An original supernatural manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#b56576"
  },
  {
    "id": 239,
    "title": "Cosmic Dream Gardeners Club",
    "genre": "Comedy",
    "synopsis": "An original comedy manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#588157"
  },
  {
    "id": 240,
    "title": "Silver Detectives Adventure",
    "genre": "Action",
    "synopsis": "An original action manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#e76f51"
  },
  {
    "id": 241,
    "title": "Neon Foxes and the Lost Map",
    "genre": "Adventure",
    "synopsis": "An original adventure manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#ff6b6b"
  },
  {
    "id": 242,
    "title": "Golden Inventors Academy",
    "genre": "Mystery",
    "synopsis": "An original mystery manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#6c63ff"
  },
  {
    "id": 243,
    "title": "Moonbeam Cafeterias Rising",
    "genre": "Supernatural",
    "synopsis": "An original supernatural manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#20bfa9"
  },
  {
    "id": 244,
    "title": "Whispering Library Cats Chronicles",
    "genre": "Comedy",
    "synopsis": "An original comedy manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#f4a261"
  },
  {
    "id": 245,
    "title": "Wandering Robots Festival",
    "genre": "Action",
    "synopsis": "An original action manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#3a86ff"
  },
  {
    "id": 246,
    "title": "Secret Jelly Knights Club",
    "genre": "Slice of Life",
    "synopsis": "An original slice of life manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#b56576"
  },
  {
    "id": 247,
    "title": "Midnight Detectives Adventure",
    "genre": "Mystery",
    "synopsis": "An original mystery manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#588157"
  },
  {
    "id": 248,
    "title": "Pocket Noodle Ninjas and the Lost Map",
    "genre": "Supernatural",
    "synopsis": "An original supernatural manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#e76f51"
  },
  {
    "id": 249,
    "title": "Crystal Ghosts Academy",
    "genre": "Comedy",
    "synopsis": "An original comedy manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#ff6b6b"
  },
  {
    "id": 250,
    "title": "Cosmic Cafeterias Rising",
    "genre": "Action",
    "synopsis": "An original action manga about unexpected friends, a strange discovery, and a daring journey that changes their world.",
    "free": false,
    "author": "MangaVerse Studio",
    "chapters": 0,
    "color": "#6c63ff"
  }
];
