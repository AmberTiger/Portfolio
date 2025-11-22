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
            {images.map((img, idx) => (
              <div className={idx === 0 ? 'image1div' : 'image2div'}>
              <a
                key={idx}
                href={img.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className={idx === 0 ? 'image1' : 'image2'}
                  src={img.src}
                  alt={`image-${index * 2 + idx + 1}`}
                />
              </a>
              </div>
            ))}
          </div>
        );
      })}
    </>
  );
};
export default PortfolioWall;