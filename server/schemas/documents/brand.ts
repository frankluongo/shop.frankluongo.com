export default {
  name: 'brand',
  title: 'Brands',
  type: 'document',
  icon: () => '📁',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Brand Name',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
  ],
  preview: {
    select: {name: 'name'},
    prepare: (e: any) => ({title: ''.concat(e.name)}),
  },
}
