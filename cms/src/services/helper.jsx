// if we have image url on array
export async function convertBlobUrlsToBinary(blobUrls) {
  console.log(blobUrls);
  const binaryFiles = [];

  for (const url of blobUrls) {
    const response = await fetch(url); // Fetch the blob from the URL
    const blob = await response.blob(); // Convert response to a Blob

    // Optional: Convert Blob to File (if needed)
    const file = new File([blob], `image-${Date.now()}.jpg`, { type: blob.type });

    binaryFiles.push(file);
  }

  return binaryFiles; // Return an array of binary files
}

// if we have single url  of image
export async function convertSingleBlobUrlToBinary(blobUrl) {
  console.log(blobUrl);
  const response = await fetch(blobUrl); // Fetch the blob from the URL
  const blob = await response.blob(); // Convert response to a Blob

  // Convert Blob to File (optional, if needed)
  const file = new File([blob], `image-${Date.now()}.jpg`, { type: blob.type });

  return file; // Return the binary File object
}
