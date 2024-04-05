import { Module } from "@nestjs/common";
import { AuditController } from "./audit.controller";
import { PrismaModule } from "src/prisma/prisma.module";
import { AuditService } from "./audit.service";
import { PrismaService } from "src/prisma/prisma.service";

@Module({
    imports: [PrismaModule],
    exports: [AuditService],
    providers: [PrismaService, AuditService],
    controllers: [AuditController],
})
export class AuditModule {

}
