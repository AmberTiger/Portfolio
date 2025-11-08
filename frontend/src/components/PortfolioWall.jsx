import '../App.css';
import PortfolioData from '../data/PortfolioData';
const rowClasses = ['row1', 'row2', 'row3'];
const PortfolioWall = () => {

const { portfolioImages } = PortfolioData;
console.log(PortfolioData)
  const rows = [];
  for (let i = 0; i < portfolioImages.length; i += 2) {
    rows.push(portfolioImages.slice(i, i + 2));
  }
  console.log(rows)
  return (
    <>
      {rows.map((images, index) => {
        const rowClass = rowClasses[index % rowClasses.length]; 
        return (
          <div key={index} className={rowClass}>
            <img className="image1" src={images[0]} alt={`image-${index * 2 + 1}`} />
            {images[1] && (
              <img className="image2" src={images[1]} alt={`image-${index * 2 + 2}`} />
            )}
          </div>
        );
      })}
    </>
  );
};
export default PortfolioWall;