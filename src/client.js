import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId:"mhhx4do5" ,
    dataset:'production',
    apiVersion:'2024-03-01',
    useCdn:'true',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);