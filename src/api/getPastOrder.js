export default async function getPastOrders(order) {
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate network delay
  const response = await fetch(`/api/past-order/${order}`);
  const data = await response.json();
  return data;
}
