var set1 = [12, 13, 6, 10];
var set2 = [13, 10, 16, 15];

function overlapSum(x, y) {
  var sum = 0;
  for (i in x) {
    if (y.includes(x[i])) {
      sum += x[i];
    }
  }
  for (i in y) {
    if (x.includes(y[i])) {
      sum += y[i];
    }
  }
  console.log(sum);
}
overlapSum(set1, set2);



function distinctSum(x, y) {
  var sum = 0;
  for (i in x) {
    if (!y.includes(x[i])) {
      sum += x[i];
    }
  }
  for (i in y) {
    if (!x.includes(y[i])) {
      sum += y[i];
    }
  }
  console.log(sum);
}
distinctSum(set1, set2);



function distinctSumHash(x, y) {
  var sum = 0;
  var z = x.concat(y);
  var hashTable = z.reduce(
    (acc, key) => ((acc[key] = (acc[key] || 0) + 1), acc),
    {}
  );

  console.log(hashTable);
  Object.keys(hashTable).map(function (key) {
    if (hashTable[key] == 1) {
      sum = sum + parseInt(key);
    }
  });
  console.log(sum);
}
distinctSumHash(set1, set2);

function SumHash(x, y) {
  var sum = 0;
  var z = x.concat(y);
  console.log(z)
  var object = {};
  for (var i in z) {
    if (!object[z[i]]) {
      object[z[i]] = 1;
    } else {
      ++object[z[i]]
    }
  }
  Object.keys(object).forEach(function (key) {
    if (object[key] == 1) {
      sum += parseInt(key)
    }
  })
  console.log(object, sum);
}
SumHash(set1, set2)


