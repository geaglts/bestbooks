import { Min, IsPositive, IsOptional } from 'class-validator';

export class PaginationProductDTO {
  @IsOptional()
  @IsPositive()
  limit: number;

  @IsOptional()
  @Min(0)
  offset: number;
}
