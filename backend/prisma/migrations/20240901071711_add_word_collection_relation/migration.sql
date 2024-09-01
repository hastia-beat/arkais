-- AddForeignKey
ALTER TABLE `collections` ADD CONSTRAINT `collections_wordId_fkey` FOREIGN KEY (`wordId`) REFERENCES `words`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
