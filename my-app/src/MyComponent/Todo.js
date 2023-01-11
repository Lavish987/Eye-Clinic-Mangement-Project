import ImageSlider from "./ImageSlider";
export default function Todo() {
  const slides = [
    { url: "http://localhost:3000/1.jpg", title: "first" },
    { url: "http://localhost:3000/2.jpg", title: "second" },
    { url: "http://localhost:3000/3.jpg", title: "third" },
  ];
  const containerStyles = {
    width: "700px",
    height: "380px",
    margin: "0 auto",
  };
  return (
    <div>
      
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};
