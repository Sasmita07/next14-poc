export default async function ProductLineDataCachingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const response = await fetch('http://localhost:3001/products');
  const products = await response.json();
  console.log(products);
  return (
    <>
      <p style={{ color: 'red', marginTop: '2rem' }}>
        ProductLineDataCaching Layout Example:
      </p>
      {children}
    </>
  );
}
