import "reflect-metadata";
import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProduct1747359270854 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "products",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
          },
          {
            name: "description",
            type: "varchar",
          },
          {
            name: "category",
            type: "varchar",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
        ]
      })
    );
    await queryRunner.createTable(
      new Table({
        name: "varieties",
        columns: [
          {
            name: "product_id",
            type: "int",
            isPrimary: true,
            isUnique: true
          },
          {
            name: "color",
            type: "varchar",
          },
          {
            name: "price",
            type: "decimal",
            precision: 10,
            scale: 2
          },
          {
            name: "available_sizes",
            type: "jsonb",
          },
          {
            name: "on_sale",
            type: "boolean",
          },
          {
            name: "sale_price",
            type: "decimal",
            precision: 10,
            scale: 2,
            isNullable: true
          },
          {
            name: "stock",
            type: "int",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
        ],
        foreignKeys: [{
          name: 'product_id',
          columnNames: ['product_id'],
          referencedTableName: 'products',
          referencedColumnNames: ['id'],
          onDelete: "CASCADE",
          onUpdate: "CASCADE",
        }]
      })
    );
    
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("varieties");
    await queryRunner.dropTable("products");
  }
}
