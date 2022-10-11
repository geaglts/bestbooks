import { MigrationInterface, QueryRunner } from "typeorm";

export class favoritesBooks1665513843866 implements MigrationInterface {
    name = 'favoritesBooks1665513843866'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "favorites" ("clientsId" integer NOT NULL, "booksId" integer NOT NULL, CONSTRAINT "PK_fe432f3aa7063325208b65d5d93" PRIMARY KEY ("clientsId", "booksId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_a4fd70f86b0237d7200d28e91f" ON "favorites" ("clientsId") `);
        await queryRunner.query(`CREATE INDEX "IDX_622b3f878c69cc6bc6400691e4" ON "favorites" ("booksId") `);
        await queryRunner.query(`ALTER TABLE "favorites" ADD CONSTRAINT "FK_a4fd70f86b0237d7200d28e91f7" FOREIGN KEY ("clientsId") REFERENCES "clients"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "favorites" ADD CONSTRAINT "FK_622b3f878c69cc6bc6400691e40" FOREIGN KEY ("booksId") REFERENCES "books"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "favorites" DROP CONSTRAINT "FK_622b3f878c69cc6bc6400691e40"`);
        await queryRunner.query(`ALTER TABLE "favorites" DROP CONSTRAINT "FK_a4fd70f86b0237d7200d28e91f7"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_622b3f878c69cc6bc6400691e4"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_a4fd70f86b0237d7200d28e91f"`);
        await queryRunner.query(`DROP TABLE "favorites"`);
    }

}
