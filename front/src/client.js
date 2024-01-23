{/*import { SanityClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url'
export const client = SanityClient({
    projectId :'u0hblkbm',
    dataset : 'production' ,
    apiVersion : '2022-02-01' ,
    useCdn : true ,
    token : 'skO1ZFuMtLm1gDVb0rW4fbiwEEZQ0bThxpFyLxRs6yYbRn3IYGpqyC7LEisQzBPk8PVZwAqht6z8HIPmdnmJS1YEBYomJn0PlYC0Sfd8Ni7wAV6xpyShPLF0tIcYhM2jWrEPUmnFXe3bZQhdu7N4LnHvvggjNXPuCB5j2mN3t6Ovf2wiOnzr'
    
})
const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)


*/}
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId: 'u0hblkbm',
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: 'skO1ZFuMtLm1gDVb0rW4fbiwEEZQ0bThxpFyLxRs6yYbRn3IYGpqyC7LEisQzBPk8PVZwAqht6z8HIPmdnmJS1YEBYomJn0PlYC0Sfd8Ni7wAV6xpyShPLF0tIcYhM2jWrEPUmnFXe3bZQhdu7N4LnHvvggjNXPuCB5j2mN3t6Ovf2wiOnzr',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
