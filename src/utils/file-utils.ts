import CryptoJS from 'crypto-js';

// --- INTERNAL HELPERS ---

/**
 * Decrypts an AES-encrypted string and converts it to a Blob URL.
 */
const convertEncryptedToBlob = (encryptedData: string, secretKey: string, mimeType: string): string => {
  try {
    if (!encryptedData || !secretKey) return '';

    const bytes = CryptoJS.AES.decrypt(encryptedData, secretKey);
    const decryptedString = bytes.toString(CryptoJS.enc.Utf8);

    if (!decryptedString) {
      console.error("❌ Decryption failed. Key might be wrong or file is empty.");
      return '';
    }

    let base64Data = '';
    if (decryptedString.startsWith("data:")) {
      // Format: "data:image/jpeg;base64,....." -> Split it
      base64Data = decryptedString.split(',')[1];
    } else {
      // Format: "....." (Raw Base64) -> Use directly
      base64Data = decryptedString;
    }

    const byteCharacters = atob(base64Data);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    
    const blob = new Blob([byteArray], { type: mimeType });
    return URL.createObjectURL(blob);

  } catch (error) {
    console.error("❌ Error processing asset:", error);
    return '';
  }
};

// --- EXPORTED FUNCTIONS ---

/**
 * Fetches an encrypted text file from the public folder, decrypts it, and returns a Blob URL.
 */
export const fetchAndDecryptAsset = async (
  filePath: string, 
  secretKey: string,
  mimeType: string = 'image/jpeg' 
): Promise<string> => {
  try {
    const response = await fetch(filePath);
    if (!response.ok) throw new Error("File not found");
    
    const encryptedString = await response.text();
    return convertEncryptedToBlob(encryptedString.trim(), secretKey, mimeType);
  } catch (err) {
    console.error(`Failed to fetch/decrypt ${filePath}`, err);
    return '';
  }
};

/**
 * Triggers a download for a URL
 */
export const triggerDownload = (url: string, fileName: string) => {
  if (!url) return;
  const link = document.createElement('a');
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};