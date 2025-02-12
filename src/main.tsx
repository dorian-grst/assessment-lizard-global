import React from 'react';
import { createRoot } from 'react-dom/client';

/**
 * This file can be ignored, please work in ./components/App.tsx
 */

// Include mock API.
import './mock';

// Include styles.
import './styles/index.css';

// Include application component.
import Home from './page/home';
import Detail from './page/detail';
import { BrowserRouter, Route, Routes } from 'react-router';
import Layout from './components/layout';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const root = createRoot(document.getElementById('root')!);
const queryClient = new QueryClient();
root.render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="detail/:id" element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>,
);
