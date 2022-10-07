import { MigrationInterface, QueryRunner } from "typeorm";

export class authorsBooksTable1665181161794 implements MigrationInterface {
    name = 'authorsBooksTable1665181161794'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "authors_books" ("booksId" integer NOT NULL, "authorsId" integer NOT NULL, CONSTRAINT "PK_e17a149a4c3bff5956e9ec9cc5b" PRIMARY KEY ("booksId", "authorsId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_c86acfd1c820e4ed85143992f2" ON "authors_books" ("booksId") `);
        await queryRunner.query(`CREATE INDEX "IDX_f4af22f7a4fda41851223e60e9" ON "authors_books" ("authorsId") `);
        await queryRunner.query(`ALTER TABLE "authors_books" ADD CONSTRAINT "FK_c86acfd1c820e4ed85143992f28" FOREIGN KEY ("booksId") REFERENCES "books"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "authors_books" ADD CONSTRAINT "FK_f4af22f7a4fda41851223e60e98" FOREIGN KEY ("authorsId") REFERENCES "authors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "authors_books" DROP CONSTRAINT "FK_f4af22f7a4fda41851223e60e98"`);
        await queryRunner.query(`ALTER TABLE "authors_books" DROP CONSTRAINT "FK_c86acfd1c820e4ed85143992f28"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_f4af22f7a4fda41851223e60e9"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_c86acfd1c820e4ed85143992f2"`);
        await queryRunner.query(`DROP TABLE "authors_books"`);
    }

}
