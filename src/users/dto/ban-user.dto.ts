import { IsNumber, IsString } from 'class-validator';

export class BanUserDto {
  @IsNumber({}, { message: 'Should be number' })
  readonly user_id: number;
  @IsString({ message: 'Should be string' })
  readonly banReason: string;
}
