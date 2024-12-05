import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateCategoryDto {
  @IsNotEmpty({
    message: 'name should not be empty',
  })
  @IsString({
    message: 'name must be a string',
  })
  name: string;

  @IsOptional()
  @IsString({
    message: 'description must be a string',
  })
  description?: string;
}
