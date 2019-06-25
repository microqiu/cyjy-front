import request from 'umi-request';
import { ResultBean, Product } from './data.d';

export async function queryProducts(): Promise<ResultBean<Product>> {
  return request('/admin-api/products');
}

export async function removeProduct(id: number) {
  return request(`/admin-api/products/${id}`, {method: 'DELETE'});
}

export async function addProduct(params: Product) {
  return request('/admin-api/products', {
    method: 'POST',
    data: params,
  });
}

export async function updateProduct(params: Product) {
  return request('/admin-api/products', {
    method: 'PUT',
    data: params,
  });
}
