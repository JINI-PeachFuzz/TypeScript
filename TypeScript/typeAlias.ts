//typeAlias == 타입 별명

type person = { name: string; age: number; gender: string };
type college = { id: number; grade: number; major: string };
type collegeStudent = person & college;

const c1: person = { name: "뾰롱", age: 21, gender: "남" };

const c2: person[] = [{},
    {},
];

const c3: collegeStudent = {
  age: 21,
  id: 12345,
  gender: "여성",
  grade: 1,
  major: "철학과",
  name: "주효",
};

//빵집
type product = { name: string; price: number };
type meal = { calories: number; category: string };
type dessert = { calories: number; sweetnessLevel: number };

const saltBread: product & meal = {
  name: "소금빵",
  calories: 150,
  category: "빵",
  price: 1500,
};

const eggTart: product & dessert = {
  name: "에타",
  calories: 200,
  price: 2500,
  sweetnessLevel: 3,
};
