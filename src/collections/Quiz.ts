import { CollectionConfig } from 'payload';

const Quiz: CollectionConfig = {
  slug: 'quiz', // Collection slug
  admin: {
    useAsTitle: 'question', // Use the 'question' field as the title in the admin UI
  },
  fields: [
    {
      name: 'question',
      type: 'text',
      required: true,
    },
    {
      name: 'question_type',
      type: 'select', // Use a select field for question type
      options: [
        {
          label: 'Options',
          value: 'options',
        },
        {
          label: 'Text',
          value: 'text',
        },
      ],
      defaultValue: 'options', // Default to 'options'
      required: true,
    },
    {
      name: 'answer',
      type: 'array', // Use an array field for multiple answers
      fields: [
        {
          name: 'answerText',
          type: 'text',
          required: true,
        },
      ],
      admin: {
        condition: (data) => data.question_type === 'options', // Show only if question_type is 'options'
      },
    },
  ],
};

export default Quiz;