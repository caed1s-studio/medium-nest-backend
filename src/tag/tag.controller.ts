import { TagService } from '@app/tag/tag.service';
import { Controller, Get } from '@nestjs/common';

@Controller('api/tags')
export class TagController {
  constructor(private readonly tagService: TagService) {}
  @Get()
  async findAll(): Promise<{ tags: string[] }> {
    const tags = await this.tagService.findAll();

    return {
      tags: tags.map((x) => x.name),
    };
  }
}
