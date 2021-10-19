function staircase (n) {
  let stair = '#';
  for(let i =1; i <= n; i++) {
    console.log(stair.repeat(i));
  }
}

staircase(10);