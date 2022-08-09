import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

// Data Transfer Object
export class CreateUserDto {
  @ApiProperty({
    example: 'user@gmail.com',
    description: 'Email',
  })
  @IsString({ message: 'Should be string' })
  @IsEmail({}, { message: 'Incorrect Email' })
  readonly email: string;
  @ApiProperty({
    example: '12345',
    description: 'Password',
  })
  @IsString({ message: 'Should be string' })
  @Length(4, 16, { message: 'More then 4 and less then 16 characters' })
  readonly password: string;
}
