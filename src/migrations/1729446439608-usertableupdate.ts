import { MigrationInterface, QueryRunner } from "typeorm";

export class Usertableupdate1729446439608 implements MigrationInterface {
    name = 'Usertableupdate1729446439608'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "phone" character varying(15) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "phone"`);
    }

}
