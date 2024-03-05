import { PartialType } from '@nestjs/mapped-types';
import { CreateFoodDto } from './create-food.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateFoodDto extends PartialType(CreateFoodDto) {
  @IsString()
  @IsNotEmpty()
  id: string;
  @IsString()
  username?: string;
  @IsString()
  password?: string;
  @IsString()
  dias: [
    {
      segunda: [
        {
          almoco: string;
          jantar: string;
        },
      ];
      terca: [
        {
          almoco: string;
          jantar: string;
        },
      ];
      quarta: [
        {
          almoco: string;
          jantar: string;
        },
      ];
      quinta: [
        {
          almoco: string;
          jantar: string;
        },
      ];
      sexta: [
        {
          almoco: string;
          jantar: string;
        },
      ];
      sabado: [
        {
          almoco: string;
          jantar: string;
        },
      ];
      domingo: [
        {
          almoco: string;
          jantar: string;
        },
      ];
    },
  ];
}
