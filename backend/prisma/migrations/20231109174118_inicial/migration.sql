-- AlterTable
ALTER TABLE `produtos` ADD COLUMN `carrinhoId` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `carrinho` (
    `id` VARCHAR(191) NOT NULL,
    `create_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `produtos` ADD CONSTRAINT `produtos_carrinhoId_fkey` FOREIGN KEY (`carrinhoId`) REFERENCES `carrinho`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
