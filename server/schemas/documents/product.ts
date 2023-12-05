export default {
  name: 'product',
  title: 'Products',
  type: 'document',
  icon: () => '📦',
  groups: [
    {title: 'Content', name: 'page', default: true},
    {title: 'Properties', name: 'properties'},
  ],
  fields: [
    // PROPERTIES:
    {
      name: 'published',
      title: 'Published?',
      type: 'boolean',
      group: 'properties',
    },
    // PAGE CONTENT:
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'page',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 100,
      },
      group: 'page',
    },
    {
      name: 'brand',
      title: 'Brand',
      type: 'reference',
      to: [{type: 'brand'}],
      group: 'page',
    },
    {
      title: 'Product Page',
      description: "The product page on the seller's website",
      name: 'url',
      type: 'url',
      group: 'page',
    },
    {
      title: 'Original Price',
      description: 'The price I paid for it',
      name: 'originalPrice',
      type: 'number',
      group: 'page',
    },
    {
      title: 'Asking Price',
      description: "The price I'm charging for it",
      name: 'price',
      type: 'number',
      group: 'page',
    },
    {
      name: 'thumbnail',
      title: 'Thumbnail Image',
      type: 'image',
      group: 'page',
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{type: 'image'}],
      group: 'page',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'block'}],
      group: 'page',
    },
  ],
  preview: {
    select: {title: 'title', media: 'thumbnail'},
    prepare: (e: any) => ({
      title: `${e.title}`,
      media: e.media,
    }),
  },
}
