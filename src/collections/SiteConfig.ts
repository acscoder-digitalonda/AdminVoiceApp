import { GlobalConfig } from 'payload';

const SiteConfig: GlobalConfig = {
  slug: 'site-config', // Unique slug for the global
  fields: [
    {
      name: 'siteName',
      type: 'text',
      required: true,
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media', // Link to the media collection for file uploads
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'socialLinks',
      type: 'array',
      fields: [
        {
          name: 'platform',
          type: 'text',
          required: true,
        },
        {
          name: 'url',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'Slider Homepage',
      type: 'relationship', // Use the relationship field
      relationTo: 'carousels', // Link to the Carousels collection
      hasMany: false, // Allow one Carousels to be selected
    },
  ],
  
};

export default SiteConfig;