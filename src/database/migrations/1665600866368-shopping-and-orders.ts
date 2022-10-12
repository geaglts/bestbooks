import { MigrationInterface, QueryRunner } from "typeorm";

export class shoppingAndOrders1665600866368 implements MigrationInterface {
    name = 'shoppingAndOrders1665600866368'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "orders" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "quantity" integer NOT NULL DEFAULT '0', "shoppingId" integer, "bookId" integer, CONSTRAINT "PK_710e2d4957aa5878dfe94e4ac2f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "shoppings" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "clientIdId" integer, CONSTRAINT "PK_cc408f27d45bf560f1a043fb1aa" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_5b1b73e6e9a84e9bdb4bb046078" FOREIGN KEY ("shoppingId") REFERENCES "shoppings"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_44fba34a7052127480dde32f290" FOREIGN KEY ("bookId") REFERENCES "books"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "shoppings" ADD CONSTRAINT "FK_24c773fa71f5464d2a845032a91" FOREIGN KEY ("clientIdId") REFERENCES "clients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "shoppings" DROP CONSTRAINT "FK_24c773fa71f5464d2a845032a91"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_44fba34a7052127480dde32f290"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_5b1b73e6e9a84e9bdb4bb046078"`);
        await queryRunner.query(`DROP TABLE "shoppings"`);
        await queryRunner.query(`DROP TABLE "orders"`);
    }

}
