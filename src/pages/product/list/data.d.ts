
interface ResultBean<T> {
  code: number;
  data: T;
  message: string;
}

interface Product {
  id: number;
  name: string;
  describe: string;
  shortDescribe: string;
  image: string;
  inventory: number;
  price: number;
  unit: string;
  barCode: string;
  standard: string;
  discount: number;
  createTime: number;
  updateTime: number;
}



export interface TableListItem {
  key: number;
  disabled?: boolean;
  href: string;
  avatar: string;
  name: string;
  title: string;
  owner: string;
  desc: string;
  callNo: number;
  status: number;
  updatedAt: Date;
  createdAt: Date;
  progress: number;
}

export interface TableListPagination {
  total: number;
  pageSize: number;
  current: number;
}

export interface TableListDate {
  list: TableListItem[];
  pagination: Partial<TableListPagination>;
}

export interface TableListParams {
  sorter: string;
  status: string;
  name: string;
  pageSize: number;
  currentPage: number;
}
