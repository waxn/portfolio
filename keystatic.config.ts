import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'github',
    repo: 'waxn/portfolio',
  },
  collections: {
    blog: collection({
      label: 'Blog Posts',
      slugField: 'title',
      path: 'src/content/blog/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.text({ label: 'Description', multiline: true }),
        author: fields.text({ label: 'Author', defaultValue: 'Linus Thoreson' }),
        pubDate: fields.text({ label: 'Publish Date', defaultValue: 'Jan 01 2025' }),
        updatedDate: fields.text({ label: 'Updated Date' }),
        heroImage: fields.image({
          label: 'Hero Image',
          directory: 'src/assets/images',
          publicPath: '../../assets/images/',
        }),
        category: fields.select({
          label: 'Category',
          options: [
            { label: 'Tools', value: 'Tools' },
            { label: 'Tutorial', value: 'Tutorial' },
            { label: 'Personal', value: 'Personal' },
            { label: 'Web Development', value: 'Web Development' },
          ],
          defaultValue: 'Tools',
        }),
        tags: fields.array(
          fields.text({ label: 'Tag' }),
          { label: 'Tags', itemLabel: (props) => props.value }
        ),
        content: fields.markdoc({ label: 'Content' }),
      },
    }),
  },
});