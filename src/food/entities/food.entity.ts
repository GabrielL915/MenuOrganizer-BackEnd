export interface Food {
  id: string;
  username?: string;
  password?: string;
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
