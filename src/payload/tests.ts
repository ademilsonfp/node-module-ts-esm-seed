
import { ImportTest } from './more-tests.js';

const CONST_A = 'a';
const CONST_B = 'b';

type ConstA = typeof CONST_A;
type ConstB = typeof CONST_B;

export type Const = ConstA | ConstB;

export type TestA = {
  literal: 'hello',
  flag: boolean
};

export type TestB = {
  literal: 'world',
  flag: number
};

export type TestC = {
  hello: 'foo'
};

export type TestD = {
  world: 'bar'
};

export type UnionTest = TestA | TestB | ImportTest;
export type MergeTest = TestC & TestD;

export type GenericResponse<T> = {
  data: T
};

export type TestResponseA = GenericResponse<TestA>;
export type TestResponseB = GenericResponse<TestB>;
