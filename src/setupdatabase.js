const db = require('better-sqlite3')('database.db');

db.prepare('CREATE TABLE "tags" ("name"	TEXT, "title" TEXT, "description" TEXT, "image" TEXT, PRIMARY KEY("name"))').run();
