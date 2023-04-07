import MediaQuery, { useMediaQuery } from "react-responsive";

const App = () => {
  const handleMediaQueryChange = (matches) => {
    if(matches) {
      // do something if true
    } else {
      // do something if false
    }
  };
  const isDesktop = useMediaQuery(
    { minWidth: 1224 }, undefined,  handleMediaQueryChange
  );

  return (
    <Wrapper>
      <MediaQuery minWidth={1224} onChange={handleMediaQueryChange}>
      ...
      </MediaQuery>
      {"or"}
      {isDesktop && <div>Welcome to desktop view...</div>}
    </Wrapper>
  )
}