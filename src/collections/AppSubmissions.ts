import type { CollectionConfig } from 'payload'

const AppSubmissions: CollectionConfig = {
  slug: 'appsubmissions', // The URL-friendly name for the collection
  fields: [
    {
      name: 'id',
      type: 'number',
      required: true,
      unique: true,
    },
    {
      name: 'created_at',
      type: 'date',
      required: true,
      defaultValue: () => new Date(), // Automatically set to the current date/time
    },
    {
      name: 'user_id',
      type: 'text',
      required: true,
    },
    {
      name: 'client_name',
      type: 'text',
      required: true,
    },
    {
      name: 'client_goal',
      type: 'textarea',
      required: true,
    },
    {
      name: 'client_challenges',
      type: 'textarea',
      required: true,
    },
    {
      name: 'tone',
      type: 'text',
      required: true,
    },
    {
      name: 'transcription',
      type: 'textarea',
      required: true,
    },
    {
      name: 'audio_name',
      type: 'text',
      required: true,
    },
    {
      name: 'audio_link',
      type: 'text',
      required: true,
    },
  ],
};

export default AppSubmissions;