import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId:"mhhx4do5" ,
    dataset:'production',
    apiVersion:'2024-03-01',
    useCdn:'true',
    token: "skBzQ1Jzjpwwe4fNOvWmqGytMhLAOdsM2aVKOrmswbj6UojIXFh0yzOVyrX7NDkYBVgtIWarm11B2ihOLXcSODfR4NxihvmJ0WljjU10H2OObL0lIijXv3tS3Uy0UGwMipzMN1OHy7IyfD3nw79mm3cEYhVhwm1uwphMCg7aZX3tjPirubXg",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);