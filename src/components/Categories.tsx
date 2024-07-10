import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppRootState } from "../redux/store";
import { fetchCategories, ICategory } from "../redux/category/categorySlice";

const Categories: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { categories, status, error } = useSelector((state: AppRootState) => state.category);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCategories());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <div className="text-center text-2xl">Loading...</div>;
  }

  if (status === 'failed') {
    return <div className="text-center text-2xl text-red-500">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Categories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((category: ICategory) => (
          <div key={category.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={category.image} alt={category.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{category.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;