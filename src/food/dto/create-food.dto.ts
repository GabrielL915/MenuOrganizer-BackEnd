import { IsNotEmpty, IsString } from 'class-validator';

export class CreateFoodDto {
  @IsString()
  @IsNotEmpty()
  id: string;
  @IsString()
  usuario?: string;
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
