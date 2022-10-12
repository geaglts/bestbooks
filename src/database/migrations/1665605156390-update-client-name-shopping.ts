import { MigrationInterface, QueryRunner } from "typeorm";

export class updateClientNameShopping1665605156390 implements MigrationInterface {
    name = 'updateClientNameShopping1665605156390'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "shoppings" DROP CONSTRAINT "FK_24c773fa71f5464d2a845032a91"`);
        await queryRunner.query(`ALTER TABLE "shoppings" RENAME COLUMN "clientIdId" TO "clientId"`);
        await queryRunner.query(`ALTER TABLE "shoppings" ADD CONSTRAINT "FK_a7954c97f4f568b98d15a13421d" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "shoppings" DROP CONSTRAINT "FK_a7954c97f4f568b98d15a13421d"`);
        await queryRunner.query(`ALTER TABLE "shoppings" RENAME COLUMN "clientId" TO "clientIdId"`);
        await queryRunner.query(`ALTER TABLE "shoppings" ADD CONSTRAINT "FK_24c773fa71f5464d2a845032a91" FOREIGN KEY ("clientIdId") REFERENCES "clients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
