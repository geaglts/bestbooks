import { MigrationInterface, QueryRunner } from "typeorm";

export class publisherBookRelation1665166104955 implements MigrationInterface {
    name = 'publisherBookRelation1665166104955'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "books" RENAME COLUMN "publisher" TO "publisherId"`);
        await queryRunner.query(`ALTER TABLE "books" ADD CONSTRAINT "FK_594ad92cc478a33e51fd0e31bf3" FOREIGN KEY ("publisherId") REFERENCES "publishers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "books" DROP CONSTRAINT "FK_594ad92cc478a33e51fd0e31bf3"`);
        await queryRunner.query(`ALTER TABLE "books" RENAME COLUMN "publisherId" TO "publisher"`);
    }

}
