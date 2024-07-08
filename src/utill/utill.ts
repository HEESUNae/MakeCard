import domtoimage from 'dom-to-image';

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

// 이미지 JPG로 다운로드 함수
export function downloadImg(dom: Node) {
  domtoimage.toJpeg(dom, { quality: 0.95 }).then(function (dataUrl) {
    var link = document.createElement('a');
    link.download = 'my-card.jpeg';
    link.href = dataUrl;
    link.click();
  });
}
