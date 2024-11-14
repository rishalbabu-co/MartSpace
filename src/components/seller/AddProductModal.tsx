import { useState } from 'react';
import { X, Upload, Package, Info, DollarSign, Settings, Image as ImageIcon, Tag, Box, Truck } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { categories } from '../../data/products';
import toast from 'react-hot-toast';
import { PriceRange, Specification } from '../../types/product';

interface AddProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  editProduct?: any;
  onSave: (productData: any) => Promise<void>;
}

export default function AddProductModal({ isOpen, onClose, editProduct, onSave }: AddProductModalProps) {
  const { currentUser } = useAuth();
  const [activeTab, setActiveTab] = useState('basic');
  const [loading, setLoading] = useState(false);
  const [productData, setProductData] = useState({
    name: editProduct?.name || '',
    description: editProduct?.description || '',
    category: editProduct?.category || '',
    brand: editProduct?.brand || '',
    model: editProduct?.model || '',
    sku: editProduct?.sku || '',
    price: editProduct?.price || {
      min: '',
      max: '',
      currency: 'USD'
    } as PriceRange,
    moq: editProduct?.moq || '',
    unit: editProduct?.unit || '',
    specifications: editProduct?.specifications || [] as Specification[],
    images: [] as File[],
    imageUrls: editProduct?.imageUrls || [],
    keywords: editProduct?.keywords || [],
    customization: editProduct?.customization || {
      available: false,
      options: []
    },
    warranty: editProduct?.warranty || '',
    leadTime: editProduct?.leadTime || '',
    shipping: {
      weight: '',
      dimensions: {
        length: '',
        width: '',
        height: ''
      },
      freeShipping: false,
      shippingMethods: []
    }
  });

  const [newSpecification, setNewSpecification] = useState({
    id: '',
    group: '',
    key: '',
    value: '',
    unit: ''
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newImages = Array.from(e.target.files);
      setProductData(prev => ({
        ...prev,
        images: [...prev.images, ...newImages]
      }));
    }
  };

  const handleRemoveImage = (index: number, type: 'new' | 'existing') => {
    setProductData(prev => ({
      ...prev,
      [type === 'new' ? 'images' : 'imageUrls']: prev[type === 'new' ? 'images' : 'imageUrls'].filter((_, i) => i !== index)
    }));
  };

  const handleAddSpecification = () => {
    if (newSpecification.key && newSpecification.value) {
      setProductData(prev => ({
        ...prev,
        specifications: [...prev.specifications, { ...newSpecification, id: Date.now().toString() }]
      }));
      setNewSpecification({ id: '', group: '', key: '', value: '', unit: '' });
    }
  };

  const handleRemoveSpecification = (id: string) => {
    setProductData(prev => ({
      ...prev,
      specifications: prev.specifications.filter(spec => spec.id !== id)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await onSave(productData);
      toast.success(editProduct ? 'Product updated successfully' : 'Product added successfully');
      onClose();
    } catch (error) {
      console.error('Error saving product:', error);
      toast.error('Error saving product. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setProductData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (!isOpen) return null;

  const tabs = [
    { id: 'basic', label: 'Basic Info', icon: Package },
    { id: 'pricing', label: 'Pricing', icon: DollarSign },
    { id: 'images', label: 'Images', icon: ImageIcon },
    { id: 'specs', label: 'Specifications', icon: Settings },
    { id: 'shipping', label: 'Shipping', icon: Truck },
    
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="fixed inset-0 bg-black bg-opacity-25 transition-opacity" onClick={onClose} />
        
        <div className="relative w-full max-w-4xl rounded-lg bg-white p-6 shadow-xl">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              {editProduct ? 'Edit Product' : 'Add New Product'}
            </h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Tabs */}
          <div className="flex space-x-4 mb-6 border-b overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-4 py-2 border-b-2 whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <Icon className="h-5 w-5 mr-2" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Info Tab */}
            <div className={activeTab === 'basic' ? 'block' : 'hidden'}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Product Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={productData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Category
                  </label>
                  <select
                    name="category"
                    required
                    value={productData.category}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select Category</option>
                    {categories.map((category) => (
                      <option key={category.name} value={category.name}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Brand
                  </label>
                  <input
                    type="text"
                    name="brand"
                    value={productData.brand}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Model
                  </label>
                  <input
                    type="text"
                    name="model"
                    value={productData.model}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                  </label>
                  <textarea
                    name="description"
                    required
                    value={productData.description}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Pricing Tab */}
            <div className={activeTab === 'pricing' ? 'block' : 'hidden'}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Minimum Price
                  </label>
                  <input
                    type="number"
                    name="price.min"
                    required
                    value={productData.price.min}
                    onChange={(e) => setProductData(prev => ({
                      ...prev,
                      price: { ...prev.price, min: e.target.value }
                    }))}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Maximum Price
                  </label>
                  <input
                    type="number"
                    name="price.max"
                    required
                    value={productData.price.max}
                    onChange={(e) => setProductData(prev => ({
                      ...prev,
                      price: { ...prev.price, max: e.target.value }
                    }))}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Currency
                  </label>
                  <select
                    name="price.currency"
                    value={productData.price.currency}
                    onChange={(e) => setProductData(prev => ({
                      ...prev,
                      price: { ...prev.price, currency: e.target.value }
                    }))}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                    <option value="JPY">JPY</option>
                    <option value="CNY">CNY</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    MOQ (Minimum Order Quantity)
                  </label>
                  <input
                    type="text"
                    name="moq"
                    required
                    value={productData.moq}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Unit
                  </label>
                  <input
                    type="text"
                    name="unit"
                    required
                    value={productData.unit}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g., Pieces, Sets, Kg"
                  />
                </div>
              </div>
            </div>

            {/* Images Tab */}
            <div className={activeTab === 'images' ? 'block' : 'hidden'}>
              <div className="space-y-4">
                <div className="flex items-center justify-center w-full">
                  <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <Upload className="w-10 h-10 mb-3 text-gray-400" />
                      <p className="mb-2 text-sm text-gray-500">
                        <span className="font-semibold">Click to upload</span> or drag and drop
                      </p>
                      <p className="text-xs text-gray-500">PNG, JPG or JPEG (MAX. 800x400px)</p>
                    </div>
                    <input
                      type="file"
                      className="hidden"
                      multiple
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                  </label>
                </div>

                {/* Preview Images */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {productData.imageUrls.map((url, index) => (
                    <div key={index} className="relative">
                      <img
                        src={url}
                        alt={`Product ${index + 1}`}
                        className="w-full h-32 object-cover rounded-lg"
                      />
                      <button
                        type="button"
                        onClick={() => handleRemoveImage(index, 'existing')}
                        className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                  {productData.images.map((file, index) => (
                    <div key={`new-${index}`} className="relative">
                      <img
                        src={URL.createObjectURL(file)}
                        alt={`New Product ${index + 1}`}
                        className="w-full h-32 object-cover rounded-lg"
                      />
                      <button
                        type="button"
                        onClick={() => handleRemoveImage(index, 'new')}
                        className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Specifications Tab */}
            <div className={activeTab === 'specs' ? 'block' : 'hidden'}>
              <div className="space-y-6">
                {/* Add New Specification */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Group
                    </label>
                    <input
                      type="text"
                      value={newSpecification.group}
                      onChange={(e) => setNewSpecification(prev => ({ ...prev, group: e.target.value }))}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="e.g., Technical"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Specification
                    </label>
                    <input
                      type="text"
                      value={newSpecification.key}
                      onChange={(e) => setNewSpecification(prev => ({ ...prev, key: e.target.value }))}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="e.g., Weight"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Value
                    </label>
                    <input
                      type="text"
                      value={newSpecification.value}
                      onChange={(e) => setNewSpecification(prev => ({ ...prev, value: e.target.value }))}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="e.g., 100"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Unit
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={newSpecification.unit}
                        onChange={(e) => setNewSpecification(prev => ({ ...prev, unit: e.target.value }))}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="e.g., kg"
                      />
                      <button
                        type="button"
                        onClick={handleAddSpecification}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>

                {/* Specifications List */}
                <div className="space-y-2">
                  {productData.specifications.map((spec) => (
                    <div
                      key={spec.id}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                    >
                      <div className="grid grid-cols-4 gap-4 flex-1">
                        <div className="text-sm text-gray-600">{spec.group}</div>
                        <div className="text-sm font-medium text-gray-800">{spec.key}</div>
                        <div className="text-sm text-gray-600">{spec.value}</div>
                        <div className="text-sm text-gray-600">{spec.unit}</div>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleRemoveSpecification(spec.id)}
                        className="ml-4 text-red-600 hover:text-red-700"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Shipping Tab */}
            <div className={activeTab === 'shipping' ? 'block' : 'hidden'}>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Weight (kg)
                    </label>
                    <input
                      type="number"
                      value={productData.shipping.weight}
                      onChange={(e) => setProductData(prev => ({
                        ...prev,
                        shipping: { ...prev.shipping, weight: e.target.value }
                      }))}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Length (cm)
                    </label>
                    <input
                      type="number"
                      value={productData.shipping.dimensions.length}
                      onChange={(e) => setProductData(prev => ({
                        ...prev,
                        shipping: {
                          ...prev.shipping,
                          dimensions: { ...prev.shipping.dimensions, length: e.target.value }
                        }
                      }))}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Width (cm)
                    </label>
                    <input
                      type="number"
                      value={productData.shipping.dimensions.width}
                      onChange={(e) => setProductData(prev => ({
                        ...prev,
                        shipping: {
                          ...prev.shipping,
                          dimensions: { ...prev.shipping.dimensions, width: e.target.value }
                        }
                      }))}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="freeShipping"
                    checked={productData.shipping.freeShipping}
                    onChange={(e) => setProductData(prev => ({
                      ...prev,
                      shipping: { ...prev.shipping, freeShipping: e.target.checked }
                    }))}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="freeShipping" className="ml-2 text-sm text-gray-700">
                    Offer Free Shipping
                  </label>
                </div>
              </div>
            </div>

            {/* Save Button */}
            <div className="flex justify-end space-x-4 pt-4 border-t">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
              >
                {loading ? 'Saving...' : (editProduct ? 'Update Product' : 'Add Product')}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}