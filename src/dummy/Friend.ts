import { fakerKO as faker } from '@faker-js/faker';

export const MEMBER_LIST = Array.from({ length: 30 }, () => ({
  memberId: faker.string.uuid(),
  nickname: faker.person.lastName() + faker.person.firstName(),
  status: faker.number.int({ min: 1, max: 2 }),
}));

export const FRIEND_LIST = Array.from({ length: 30 }, () => ({
  memberId: faker.string.uuid(),
  nickname: faker.person.lastName() + faker.person.firstName(),
  status: 0,
}));
