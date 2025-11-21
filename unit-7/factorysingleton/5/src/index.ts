type ProductConstructor = new (name: string, price: number) => Product;

const productMap: Record<string, ProductConstructor> = {
  Laptop: Laptop,
  Mobile: Mobile,
  Tablet: Tablet
};

class ProductFactory {
  static createProduct(type: string, name: string, price: number): Product {
    const ProductClass = productMap[type];
    if (!ProductClass) throw new Error("Unknown product type");
    return new ProductClass(name, price);
  }
}