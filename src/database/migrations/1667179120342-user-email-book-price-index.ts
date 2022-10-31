import { MigrationInterface, QueryRunner } from "typeorm";

export class userEmailBookPriceIndex1667179120342 implements MigrationInterface {
    name = 'userEmailBookPriceIndex1667179120342'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE INDEX "IDX_97672ac88f789774dd47f7c8be" ON "users" ("email") `);
        await queryRunner.query(`CREATE INDEX "IDX_fb769186a87fea497f4bdb55f2" ON "books" ("price") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."IDX_fb769186a87fea497f4bdb55f2"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_97672ac88f789774dd47f7c8be"`);
    }

}
