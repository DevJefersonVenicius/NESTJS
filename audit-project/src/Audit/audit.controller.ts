import { Controller, Post, Body, Get, Put, Patch, Delete, Param, ParseIntPipe} from "@nestjs/common";
import { CreateAuditDTO } from "./dto/create-audit-dto";
import { UpdatePatchAuditDTO } from "./dto/update-patch-audit-dto";
import { UpdateAuditDTO } from "./dto/update-audit-dto";
import { AuditService } from "./audit.service";

@Controller('audit')
export class AuditController {
    constructor(private readonly auditService: AuditService) {}

    @Get()
    async read() {
        return this.auditService.list()
    }

    @Get(':id')
    async readOne(@Param('id', ParseIntPipe) id: number) {
        return this.auditService.show(id)
    }

    @Post()
    create(@Body() data: CreateAuditDTO ) {
        return this.auditService.create(data)
    }

    @Put(':id')
    async update(@Body() data: UpdateAuditDTO, @Param('id', ParseIntPipe) id: number) {
        return this.auditService.update(id, data)
    }

    @Patch(':id') 
    async updatePartial(@Body() data: UpdatePatchAuditDTO, @Param('id', ParseIntPipe) id: number) {
        return this.auditService.updatePartial(id, data)
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number) {
        return this.auditService.delete(id)
    }
 
}
