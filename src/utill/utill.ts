// 이미지를 읽어서 Base64로 변환하는 함수
export function convertToBase64(file: File) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
    return reader.result;
  });
}
