import { MigrationInterface, QueryRunner } from "typeorm";

export class renameOrdersToShoppingItems1665606294177 implements MigrationInterface {
    name = 'renameOrdersToShoppingItems1665606294177'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "shopping_items" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "quantity" integer NOT NULL DEFAULT '0', "shoppingId" integer, "bookId" integer, CONSTRAINT "PK_36f295ec7314c9001968ca2c6f9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "shopping_items" ADD CONSTRAINT "FK_6067fcdabd25109972e8bb57a13" FOREIGN KEY ("shoppingId") REFERENCES "shoppings"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "shopping_items" ADD CONSTRAINT "FK_e4e5c774735f2da83f3dccbd6c1" FOREIGN KEY ("bookId") REFERENCES "books"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "shopping_items" DROP CONSTRAINT "FK_e4e5c774735f2da83f3dccbd6c1"`);
        await queryRunner.query(`ALTER TABLE "shopping_items" DROP CONSTRAINT "FK_6067fcdabd25109972e8bb57a13"`);
        await queryRunner.query(`DROP TABLE "shopping_items"`);
    }

}
