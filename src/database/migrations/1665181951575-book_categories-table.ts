import { MigrationInterface, QueryRunner } from "typeorm";

export class bookCategoriesTable1665181951575 implements MigrationInterface {
    name = 'bookCategoriesTable1665181951575'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "book_categories" ("booksId" integer NOT NULL, "categoriesId" integer NOT NULL, CONSTRAINT "PK_7930b4961d43647f95ad191d32c" PRIMARY KEY ("booksId", "categoriesId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_d393576379411d6f5c321536f3" ON "book_categories" ("booksId") `);
        await queryRunner.query(`CREATE INDEX "IDX_78ea9e36c585bb76b40173cd3d" ON "book_categories" ("categoriesId") `);
        await queryRunner.query(`ALTER TABLE "book_categories" ADD CONSTRAINT "FK_d393576379411d6f5c321536f36" FOREIGN KEY ("booksId") REFERENCES "books"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "book_categories" ADD CONSTRAINT "FK_78ea9e36c585bb76b40173cd3d0" FOREIGN KEY ("categoriesId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "book_categories" DROP CONSTRAINT "FK_78ea9e36c585bb76b40173cd3d0"`);
        await queryRunner.query(`ALTER TABLE "book_categories" DROP CONSTRAINT "FK_d393576379411d6f5c321536f36"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_78ea9e36c585bb76b40173cd3d"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_d393576379411d6f5c321536f3"`);
        await queryRunner.query(`DROP TABLE "book_categories"`);
    }

}
