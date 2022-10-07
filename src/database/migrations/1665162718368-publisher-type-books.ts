import { MigrationInterface, QueryRunner } from "typeorm";

export class publisherTypeBooks1665162718368 implements MigrationInterface {
    name = 'publisherTypeBooks1665162718368'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "books" ALTER COLUMN "publisher" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "books" ALTER COLUMN "publisher" SET NOT NULL`);
    }

}
