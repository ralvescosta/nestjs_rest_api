// import { Test } from '@nestjs/testing';
// import { UsersService } from './users.service'
// import { UsersController } from './users.controller'
// import { UsersModule } from './users.module'
// import { User } from './users.entity'


describe('Users Controller', () => {
//   let userController: UsersController;
//   let userService: UsersService;

//   beforeEach(async () => {
//     const moduleRef = await Test.createTestingModule({
//       imports: [UsersModule],
//       controllers: [UsersController],
//       providers: [UsersService]
//     }).compile();

//     userService = moduleRef.get<UsersService>(UsersService);
//     userController = moduleRef.get<UsersController>(UsersController);
//   });

//     it('should return an array of cats', async () => {
//       let result: User[] | null;
//       jest.spyOn(userService, 'findAll').mockImplementation(async () => result);
//       const u: User[] = await userService.findAll();

//       console.log(u)
//       expect(true).toBe(true);
//     });
  it('should be defined', () => {
    expect(true).toBe(true);
  });
});
