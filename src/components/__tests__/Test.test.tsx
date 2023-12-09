test('two plus two is four', ()=>{
	expect(2+2).toBe(4);
});

type dataType = {
  one: number;
  [key: string]: number | undefined;
};

test('object assignment', () => {
  let data : dataType = {one: 1};
  data['two'] = 2;
  expect(data).toEqual({one: 1, two: 2});
});


