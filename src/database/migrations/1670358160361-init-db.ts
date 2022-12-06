import { MigrationInterface, QueryRunner } from "typeorm";

export class initDb1670358160361 implements MigrationInterface {
    name = 'initDb1670358160361'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "authors" ("id" SERIAL NOT NULL, "name" character varying(50) NOT NULL, "last_name" character varying(50) NOT NULL, "second_last_name" character varying(50) NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_d2ed02fabd9b52847ccb85e6b88" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "categories" ("id" SERIAL NOT NULL, "name" character varying(60) NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "publishers" ("id" SERIAL NOT NULL, "name" character varying(50) NOT NULL, "short_name" character varying(50) NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_9d73f23749dca512efc3ccbea6a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "password" text NOT NULL, "rol" character varying NOT NULL, "admin" boolean NOT NULL DEFAULT false, "username" character varying(40) NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "clientId" integer, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "UQ_fe0bb3f6520ee0469504521e710" UNIQUE ("username"), CONSTRAINT "REL_6c3a73bbc9d8a8082816adc870" UNIQUE ("clientId"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_97672ac88f789774dd47f7c8be" ON "users" ("email") `);
        await queryRunner.query(`CREATE TABLE "shopping_items" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "quantity" integer NOT NULL DEFAULT '0', "shopping_id" integer, "book_id" integer, CONSTRAINT "PK_36f295ec7314c9001968ca2c6f9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "shoppings" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "clientId" integer, CONSTRAINT "PK_cc408f27d45bf560f1a043fb1aa" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "clients" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "last_name" character varying NOT NULL, "second_last_name" character varying NOT NULL, "credits" integer NOT NULL DEFAULT '0', "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_f1ab7cf3a5714dbc6bb4e1c28a4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "books" ("id" SERIAL NOT NULL, "name" character varying(50) NOT NULL, "pages" integer NOT NULL, "price" double precision NOT NULL, "quantity" integer NOT NULL, "publication_year" integer NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "publisherId" integer, CONSTRAINT "PK_f3f2f25a099d24e12545b70b022" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_fb769186a87fea497f4bdb55f2" ON "books" ("price") `);
        await queryRunner.query(`CREATE TABLE "favorites" ("client_id" integer NOT NULL, "book_id" integer NOT NULL, CONSTRAINT "PK_3f1bc65e20fd06ff2ab2ce57448" PRIMARY KEY ("client_id", "book_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_24fdfbe6e47f3884e12b2c0534" ON "favorites" ("client_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_c8d071ffaabce995984f4f94f4" ON "favorites" ("book_id") `);
        await queryRunner.query(`CREATE TABLE "authors_books" ("booksId" integer NOT NULL, "authorsId" integer NOT NULL, CONSTRAINT "PK_e17a149a4c3bff5956e9ec9cc5b" PRIMARY KEY ("booksId", "authorsId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_c86acfd1c820e4ed85143992f2" ON "authors_books" ("booksId") `);
        await queryRunner.query(`CREATE INDEX "IDX_f4af22f7a4fda41851223e60e9" ON "authors_books" ("authorsId") `);
        await queryRunner.query(`CREATE TABLE "book_categories" ("booksId" integer NOT NULL, "categoriesId" integer NOT NULL, CONSTRAINT "PK_7930b4961d43647f95ad191d32c" PRIMARY KEY ("booksId", "categoriesId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_d393576379411d6f5c321536f3" ON "book_categories" ("booksId") `);
        await queryRunner.query(`CREATE INDEX "IDX_78ea9e36c585bb76b40173cd3d" ON "book_categories" ("categoriesId") `);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_6c3a73bbc9d8a8082816adc870e" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "shopping_items" ADD CONSTRAINT "FK_d778feffb92b5e684b4b6267265" FOREIGN KEY ("shopping_id") REFERENCES "shoppings"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "shopping_items" ADD CONSTRAINT "FK_6076654a5af15d76bf535cb26b6" FOREIGN KEY ("book_id") REFERENCES "books"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "shoppings" ADD CONSTRAINT "FK_a7954c97f4f568b98d15a13421d" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "books" ADD CONSTRAINT "FK_594ad92cc478a33e51fd0e31bf3" FOREIGN KEY ("publisherId") REFERENCES "publishers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "favorites" ADD CONSTRAINT "FK_24fdfbe6e47f3884e12b2c05346" FOREIGN KEY ("client_id") REFERENCES "clients"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "favorites" ADD CONSTRAINT "FK_c8d071ffaabce995984f4f94f4b" FOREIGN KEY ("book_id") REFERENCES "books"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "authors_books" ADD CONSTRAINT "FK_c86acfd1c820e4ed85143992f28" FOREIGN KEY ("booksId") REFERENCES "books"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "authors_books" ADD CONSTRAINT "FK_f4af22f7a4fda41851223e60e98" FOREIGN KEY ("authorsId") REFERENCES "authors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "book_categories" ADD CONSTRAINT "FK_d393576379411d6f5c321536f36" FOREIGN KEY ("booksId") REFERENCES "books"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "book_categories" ADD CONSTRAINT "FK_78ea9e36c585bb76b40173cd3d0" FOREIGN KEY ("categoriesId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "book_categories" DROP CONSTRAINT "FK_78ea9e36c585bb76b40173cd3d0"`);
        await queryRunner.query(`ALTER TABLE "book_categories" DROP CONSTRAINT "FK_d393576379411d6f5c321536f36"`);
        await queryRunner.query(`ALTER TABLE "authors_books" DROP CONSTRAINT "FK_f4af22f7a4fda41851223e60e98"`);
        await queryRunner.query(`ALTER TABLE "authors_books" DROP CONSTRAINT "FK_c86acfd1c820e4ed85143992f28"`);
        await queryRunner.query(`ALTER TABLE "favorites" DROP CONSTRAINT "FK_c8d071ffaabce995984f4f94f4b"`);
        await queryRunner.query(`ALTER TABLE "favorites" DROP CONSTRAINT "FK_24fdfbe6e47f3884e12b2c05346"`);
        await queryRunner.query(`ALTER TABLE "books" DROP CONSTRAINT "FK_594ad92cc478a33e51fd0e31bf3"`);
        await queryRunner.query(`ALTER TABLE "shoppings" DROP CONSTRAINT "FK_a7954c97f4f568b98d15a13421d"`);
        await queryRunner.query(`ALTER TABLE "shopping_items" DROP CONSTRAINT "FK_6076654a5af15d76bf535cb26b6"`);
        await queryRunner.query(`ALTER TABLE "shopping_items" DROP CONSTRAINT "FK_d778feffb92b5e684b4b6267265"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_6c3a73bbc9d8a8082816adc870e"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_78ea9e36c585bb76b40173cd3d"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_d393576379411d6f5c321536f3"`);
        await queryRunner.query(`DROP TABLE "book_categories"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_f4af22f7a4fda41851223e60e9"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_c86acfd1c820e4ed85143992f2"`);
        await queryRunner.query(`DROP TABLE "authors_books"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_c8d071ffaabce995984f4f94f4"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_24fdfbe6e47f3884e12b2c0534"`);
        await queryRunner.query(`DROP TABLE "favorites"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_fb769186a87fea497f4bdb55f2"`);
        await queryRunner.query(`DROP TABLE "books"`);
        await queryRunner.query(`DROP TABLE "clients"`);
        await queryRunner.query(`DROP TABLE "shoppings"`);
        await queryRunner.query(`DROP TABLE "shopping_items"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_97672ac88f789774dd47f7c8be"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "publishers"`);
        await queryRunner.query(`DROP TABLE "categories"`);
        await queryRunner.query(`DROP TABLE "authors"`);
    }

}
