import { PartialType } from '@nestjs/mapped-types';
import { CreateFoodDto } from './create-food.dto';

export class UpdateFoodDto extends PartialType(CreateFoodDto) {
  id: string;
  usuario?: string;
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
