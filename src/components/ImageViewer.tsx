const ImageViewer = () => {
  return (
    <div className="image">
      <img
        // eslint-disable-next-line global-require
        src={require('../../../input/Adidas-W-Varilite-jakke_484168_60_front.jpg')}
        alt="Product"
      />
    </div>
  );
};

export default ImageViewer;
