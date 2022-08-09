import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { FilesService } from 'src/files/files.service';
import { CreatePostDto } from './dto/create-post.dto';
import { Post } from './posts.model';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(Post) private postRepository: typeof Post,
    private fileService: FilesService,
  ) {}
  async create(dto: CreatePostDto, image: any) {
    const file_name = await this.fileService.create_file(image);
    const post = await this.postRepository.create({ ...dto, image: file_name });
    return post;
  }
}
