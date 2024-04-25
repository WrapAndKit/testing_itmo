import {sum, division} from './funcs';

test('Sum: 1 + 2 = 3' , () => {

  // arrange
  var first = 1;
  var second = 2;
  var expR = 3;
  
  // act
  var res = sum(first,second);
  
  // assert
  expect(res).toBe(expR);
});

test('Divide: 1 / 2 = 0.5' , () => {

  // arrange
  var first = 1;
  var second = 2;
  var expR = 0.5;
    
  // act
  var res = division(first,second);
    
  // assert
  expect(res).toBe(expR);
});