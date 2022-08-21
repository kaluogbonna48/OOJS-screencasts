const duck = {
  hasBill: true,
  feet: 'orange'
};
const beaver = {
  hasTail: true
};
const otter = {
  hasFur: true,
  feet: 'webbed'
};

const platypus = Object.assign({}, duck, otter, beaver);

console.log(platypus);
