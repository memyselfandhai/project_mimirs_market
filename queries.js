Product.findAll({ where: { categoryId: "5" } }).then(lg);
Product.findAll()
  .limit(10)
  .then(lg);

Product.findById(1).then(lg);
