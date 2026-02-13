const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const UPLOAD_PRESET = 'unsigned_preset'; // You should create an unsigned upload preset in your Cloudinary dashboard if you haven't already.

/**
 * Uploads an image to Cloudinary.
 * Note: For production apps, it is recommended to use signed uploads with a backend server 
 * to avoid exposing your API Secret, or use an Unsigned Upload Preset.
 * 
 * @param {File} file - The file to upload
 * @returns {Promise<string>} - The URL of the uploaded image
 */
export const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', UPLOAD_PRESET);
    // If you are using signed uploads, you would need to generate a signature here using your API Key and Secret
    // typically done via a backend endpoint.

    try {
        const response = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error.message || 'Image upload failed');
        }

        const data = await response.json();
        return data.secure_url;
    } catch (error) {
        console.error('Error uploading image to Cloudinary:', error);
        throw error;
    }
};
