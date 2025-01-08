import { CollectionConfig } from 'payload';

const Carousels: CollectionConfig = {
  slug: 'carousels', // Collection slug
  admin: {
    useAsTitle: 'title', // Use the 'title' field as the title in the admin UI
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      type: 'richText', // Use the richText field for content
      required: true,
    },
    {
      name: 'icon',
      type: 'upload', // Use the upload field for images
      relationTo: 'media', // Link to the media collection
      required: true,
    },
    {
      name: 'backgroundImage',
      type: 'upload', // Use the upload field for images
      relationTo: 'media', // Link to the media collection
      required: true,
    },
  ],
};

export default Carousels;