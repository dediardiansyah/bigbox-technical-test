const customers = [
  { id: 1, nama: "Eri", alamat: "jln graha jati no 15" },
  { id: 2, nama: "Akbar", alamat: "jln dipati uku no 15" },
];

const products = [
  { id: 1, product_name: "Baju", price: 100000 },
  { id: 2, product_name: "Celana", price: 150000 },
];

const transactions = [
  {
    id: 1,
    customers_id: 1,
    product_id: 1,
    purchase_date: "2021-05-24",
    quantity: 2,
  },
  {
    id: 2,
    customers_id: 1,
    product_id: 2,
    purchase_date: "2021-05-24",
    quantity: 1,
  },
  {
    id: 1,
    customers_id: 2,
    product_id: 1,
    purchase_date: "2021-05-23",
    quantity: 2,
  },
];

const results = customers.map((customer) => {
  customer["transactions"] = transactions.filter((transaction) => {
    if (transaction.customers_id == customer.id) {
      transaction["product"] = products.filter(
        (product) => product.id == transaction.product_id
      );
      return transaction;
    }
  });
  return customer;
});

console.log(JSON.stringify(results, null, 2));
