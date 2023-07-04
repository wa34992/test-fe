import React from 'react';
import { Table } from 'antd';
import { ColumnProps } from 'antd/lib/table';

interface Product {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
  stock: number;
}

const data: Product[] = [
  {
    id: 1,
    image: 'src/assets/images/shirt.png',
    title: 'Product 1',
    description: 'Product description goes here',
    price: 19.99,
    stock: 10,
  },
  {
    id: 2,
    image: 'src/assets/images/shirt.png',
    title: 'Product 1',
    description: 'Product description goes here',
    price: 15.99,
    stock: 6,
  },
];

const columns: ColumnProps<Product>[] = [
  {
    title: 'Image',
    dataIndex: 'image',
    key: 'image',
    render: (image: string) => <img src={image} alt="Product" width={50} />,
  },
  {
    title: 'Title & Description',
    dataIndex: 'title',
    key: 'title',
    render: (title: string, record: Product) => (
      <>
        <h4>{title}</h4>
        <p>{record.description}</p>
      </>
    ),
    sorter: (a: Product, b: Product) => a.title.localeCompare(b.title),
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
    render: (price: number) => `$${price.toFixed(2)}`,
    sorter: (a: Product, b: Product) => a.price - b.price,
  },
  {
    title: 'Stock',
    dataIndex: 'stock',
    key: 'stock',
    sorter: (a: Product, b: Product) => a.stock - b.stock,
  },
];

const ProductTableV2 = () => {
  return (
    <Table<Product>
      dataSource={data}
      columns={columns}
      rowKey="id"
      onChange={(pagination, filters, sorter) => {
        console.log(sorter);
      }}
    />
  );
};

export default ProductTableV2;
