import { products } from '../data';

export async function GET(
  _req: Request,
  { params }: { params: { id: string } }
) {
  const product = products.find(
    (product) => product.id === parseInt(params.id)
  );
  return new Response(JSON.stringify(product), {
    status: 200,
    statusText: 'Ok',
  });
}

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  const reqBody = await req.json();
  const product = products.find(
    (product) => product.id === parseInt(params.id)
  );
  if (product) {
    product.title = reqBody.title;
  }
  return new Response(JSON.stringify(product), {
    status: 200,
    statusText: 'Ok',
  });
}

export async function DELETE(
  _req: Request,
  { params }: { params: { id: string } }
) {
  const productIndex = products.findIndex(
    (product) => product.id === parseInt(params.id)
  );
  products.splice(productIndex, 1);
  return new Response(JSON.stringify(products), {
    status: 200,
    statusText: 'Ok',
  });
}
