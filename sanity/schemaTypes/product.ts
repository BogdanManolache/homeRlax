export default {
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Product Name',
    },
    {
      name: 'image',
      type: 'image', // "array" for multiple images
      title: 'Product Image',
      // of: [{type: 'image'}],
    },
    {
      name: 'description',
      type: 'text', // "string"
      title: 'Product Description',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Product Slug',
      options: {
        source: 'name',
      },
    },
    {
      name: 'price',
      type: 'number',
      title: 'Product Price',
    },
    {
      name: 'price_id',
      type: 'string',
      title: 'Stripe price id',
    },
    {
      name: 'category',
      type: 'reference',
      title: 'Product Category',
      to: [{type: 'category'}],
    },
  ],
}
