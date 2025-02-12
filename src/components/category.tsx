import React from 'react';
import { Badge } from './shadcn/badge';

interface CategoryProps {
  text: string;
}

function Category({ text }: CategoryProps) {
  return <Badge className="badge">{text}</Badge>;
}

export default Category;
