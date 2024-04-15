var funcs = require('./funcs');

test('Sum: 1 + 2 = 3' , () => {

  // arrange
  var first = 1;
  var second = 2;
  var expR = 3;
  
  // act
  var res = funcs.sum(first,second);
  
  // assert
  expect(res).toBe(expR);
});

test('Divide: 1 / 2 = 0.5' , () => {

  // arrange
  var first = 1;
  var second = 2;
  var expR = 0.5;
    
  // act
  var res = funcs.division(first,second);
    
  // assert
  expect(res).toBe(expR);
});
  
    
test('Divide: 0 / 2 = 0' , () => {

  // arrange
  var first = 0;
  var second = 2;
  var expR = 0;
    
  // act
  var res = funcs.division(first,second);
    
  // assert
  expect(res).toBe(expR);
});

test('Divide: 1 / 0 = Inf' , () => {

  // arrange
  var first = 1;
  var second = 0;
  var expR = Infinity;
      
  // act
  var res = funcs.division(first,second);
      
  // assert
  expect(res).toBe(expR);
});


test('Divide: 0 / 0 = NaN' , () => {

  // arrange
  var first = 0;
  var second = 0;
        
  // act
  var res = funcs.division(first,second);
        
  // assert
  expect(res).toBeNaN();
});

test('Divide: -1 / 0 = -Inf' , () => {

  // arrange
  var first = -1;
  var second = 0;
  var expR = -Infinity;
          
  // act
  var res = funcs.division(first,second);
          
  // assert
  expect(res).toBe(expR);
});