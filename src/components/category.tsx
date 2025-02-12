import React from 'react';
import { Badge } from './shadcn/badge';

interface CategoryProps {
  text: string;
}

// Simple component that displays a category badge for the details page.
function Category({ text }: CategoryProps) {
  return <Badge className="badge">{text}</Badge>;
}

export default Category;
