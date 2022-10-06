import { MigrationInterface, QueryRunner } from 'typeorm';

export class newBookTable1665088045357 implements MigrationInterface {
  name = 'newBookTable1665088045357';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "books" ("id" SERIAL NOT NULL, "name" character varying(50) NOT NULL, "pages" integer NOT NULL, "price" double precision NOT NULL, "quantity" integer NOT NULL, "publisher" integer NOT NULL, "publication_year" integer NOT NULL, CONSTRAINT "PK_3ea5638ccafa8799838e68fad46" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "books"`);
  }
}
