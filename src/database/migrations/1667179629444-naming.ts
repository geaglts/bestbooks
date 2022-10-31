import { MigrationInterface, QueryRunner } from "typeorm";

export class naming1667179629444 implements MigrationInterface {
    name = 'naming1667179629444'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "shopping_items" DROP CONSTRAINT "FK_6067fcdabd25109972e8bb57a13"`);
        await queryRunner.query(`ALTER TABLE "shopping_items" DROP CONSTRAINT "FK_e4e5c774735f2da83f3dccbd6c1"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "shopping_items" DROP COLUMN "bookId"`);
        await queryRunner.query(`ALTER TABLE "shopping_items" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "shopping_items" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "shopping_items" DROP COLUMN "shoppingId"`);
        await queryRunner.query(`ALTER TABLE "books" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "books" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "users" ADD "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "shopping_items" ADD "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "shopping_items" ADD "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "shopping_items" ADD "shopping_id" integer`);
        await queryRunner.query(`ALTER TABLE "shopping_items" ADD "book_id" integer`);
        await queryRunner.query(`ALTER TABLE "books" ADD "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "books" ADD "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "shopping_items" ADD CONSTRAINT "FK_d778feffb92b5e684b4b6267265" FOREIGN KEY ("shopping_id") REFERENCES "shoppings"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "shopping_items" ADD CONSTRAINT "FK_6076654a5af15d76bf535cb26b6" FOREIGN KEY ("book_id") REFERENCES "books"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "shopping_items" DROP CONSTRAINT "FK_6076654a5af15d76bf535cb26b6"`);
        await queryRunner.query(`ALTER TABLE "shopping_items" DROP CONSTRAINT "FK_d778feffb92b5e684b4b6267265"`);
        await queryRunner.query(`ALTER TABLE "books" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "books" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "shopping_items" DROP COLUMN "book_id"`);
        await queryRunner.query(`ALTER TABLE "shopping_items" DROP COLUMN "shopping_id"`);
        await queryRunner.query(`ALTER TABLE "shopping_items" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "shopping_items" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "books" ADD "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "books" ADD "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "shopping_items" ADD "shoppingId" integer`);
        await queryRunner.query(`ALTER TABLE "shopping_items" ADD "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "shopping_items" ADD "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "shopping_items" ADD "bookId" integer`);
        await queryRunner.query(`ALTER TABLE "users" ADD "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "users" ADD "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "shopping_items" ADD CONSTRAINT "FK_e4e5c774735f2da83f3dccbd6c1" FOREIGN KEY ("bookId") REFERENCES "books"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "shopping_items" ADD CONSTRAINT "FK_6067fcdabd25109972e8bb57a13" FOREIGN KEY ("shoppingId") REFERENCES "shoppings"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
