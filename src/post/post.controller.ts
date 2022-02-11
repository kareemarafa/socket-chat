import { Controller, Get } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Post as PostEntity } from './post.entity';
import { PostService } from './post.service';
import { ApiTags } from '@nestjs/swagger';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Crud({
  model: {
    type: PostEntity,
  },
})
@Controller('posts')
@ApiTags('Posts')
export class PostController implements CrudController<PostEntity> {
  constructor(
    public service: PostService,
    private eventEmitter: EventEmitter2,
  ) {}

  get base(): CrudController<PostEntity> {
    return this;
  }

  @Get('test')
  createItem() {
    return this.eventEmitter.emit('chat', { message: 'created!', userId: 3 });
  }
}
