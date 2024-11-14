import { Product } from '../types/product';
import { db, storage } from '../lib/firebase';
import { collection, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export const addProduct = async (product: Omit<Product, 'id'>): Promise<string> => {
  try {
    // Upload images first
    const imageUrls = await Promise.all(
      product.images.map(async (image) => {
        const storageRef = ref(storage, `products/${Date.now()}-${image.name}`);
        await uploadBytes(storageRef, image);
        return getDownloadURL(storageRef);
      })
    );

    // Upload main image if exists
    let mainImageUrl = null;
    if (product.mainImage) {
      const mainImageRef = ref(storage, `products/main-${Date.now()}-${product.mainImage.name}`);
      await uploadBytes(mainImageRef, product.mainImage);
      mainImageUrl = await getDownloadURL(mainImageRef);
    }

    // Create product document
    const productData = {
      ...product,
      images: imageUrls,
      mainImage: mainImageUrl,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    const docRef = await addDoc(collection(db, 'products'), productData);
    return docRef.id;
  } catch (error) {
    console.error('Error adding product:', error);
    throw new Error('Failed to add product');
  }
};

export const updateProduct = async (id: string, product: Partial<Product>): Promise<void> => {
  try {
    const productRef = doc(db, 'products', id);
    
    // Handle image updates if any
    let imageUrls = [];
    if (product.images?.length) {
      imageUrls = await Promise.all(
        product.images.map(async (image) => {
          if (image instanceof File) {
            const storageRef = ref(storage, `products/${Date.now()}-${image.name}`);
            await uploadBytes(storageRef, image);
            return getDownloadURL(storageRef);
          }
          return image;
        })
      );
    }

    // Handle main image update if any
    let mainImageUrl = product.mainImage;
    if (product.mainImage instanceof File) {
      const mainImageRef = ref(storage, `products/main-${Date.now()}-${product.mainImage.name}`);
      await uploadBytes(mainImageRef, product.mainImage);
      mainImageUrl = await getDownloadURL(mainImageRef);
    }

    await updateDoc(productRef, {
      ...product,
      images: imageUrls.length ? imageUrls : product.images,
      mainImage: mainImageUrl,
      updatedAt: new Date()
    });
  } catch (error) {
    console.error('Error updating product:', error);
    throw new Error('Failed to update product');
  }
};

export const deleteProduct = async (id: string): Promise<void> => {
  try {
    await deleteDoc(doc(db, 'products', id));
  } catch (error) {
    console.error('Error deleting product:', error);
    throw new Error('Failed to delete product');
  }
};