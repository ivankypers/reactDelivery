import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    className="pizza-spinner"
    speed={2}
    width={280}
    height={455}
    viewBox="0 0 280 455"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="103" cy="104" r="90" />
    <rect x="2" y="217" rx="14" ry="14" width="210" height="33" />
    <rect x="2" y="280" rx="15" ry="15" width="213" height="65" />
    <rect x="1" y="370" rx="15" ry="15" width="214" height="23" />
  </ContentLoader>
);

export default Skeleton;