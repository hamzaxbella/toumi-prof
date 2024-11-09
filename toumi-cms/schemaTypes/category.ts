import { defineField, defineType } from "sanity";

export const category = defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title', // Renaming to 'title' instead of 'category' for clarity
      title: 'Title',
      type: 'string',
    }),
  ],
});
