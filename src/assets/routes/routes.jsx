import { Routes, Route } from 'react-router-dom';

import { OrderPanel } from '../pages/order/order';
import { ProductPanel } from '../pages/product/product';
import { ClientPanel } from '../pages/client/client';
import { HomePanel } from '../pages/home/home';
import { FinancierPanel } from '../pages/financier/financier';

export const MyRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePanel />} />
        <Route path="/financier" element={<FinancierPanel />} />
        <Route path="/orders" element={<OrderPanel />} />
        <Route path="/products" element={<ProductPanel />} />
        <Route path="/clients" element={<ClientPanel />} />
      </Routes>
    </>
  );
};
