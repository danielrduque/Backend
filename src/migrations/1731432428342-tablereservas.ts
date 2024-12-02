import { MigrationInterface, QueryRunner } from "typeorm";

export class Tablereservas1731432428342 implements MigrationInterface {
    name = 'Tablereservas1731432428342'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "reservas" ("id" SERIAL NOT NULL, "nombre" character varying(50) NOT NULL, "fecha" date NOT NULL, "hora" character varying(20) NOT NULL, CONSTRAINT "PK_309c659053bcf5e56f8e40a2b42" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "reservas"`);
    }

}
