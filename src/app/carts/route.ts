import { NextRequest } from 'next/server';
import { products } from './data';

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const query = searchParams.get('category');
  const filteredProducts = query
    ? products.filter((product) => product.category === query)
    : products;
  return new Response(JSON.stringify(filteredProducts), {
    status: 200,
    statusText: 'Ok',
  });
}

export async function POST(req: Request) {
  const reqBody = await req.json();
  const newProduct = {
    id: products.length + 1,
    title: reqBody.title,
    price: reqBody.price,
    description: reqBody.description,
    category: reqBody.category,
    image: reqBody.image,
    rating: {
      rate: reqBody.rating.rate,
      count: reqBody.rating.count,
    },
  };
  products.push(newProduct);
  return new Response(JSON.stringify(newProduct), {
    status: 201,
    statusText: 'Created',
  });
}
