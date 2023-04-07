import MediaQuery from "react-responsive";
 
const App = () => (
  <Wrapper>
    <MediaQuery minWidth={1224}>
      <DeskTopView>This will display in desktop screen</DeskTopView>
      <MediaQuery minWidth={1824}>
        <Banner text="this will dsiplay on larger screen size" />
      </MediaQuery>
    </MediaQuery>
    <MediaQuery minResolution="2dppx">
      {(matches) =>
        matches
          ? <Retina>This is a retina view</Retina>
          : <div>This isn't a retina</div>
      }
    </MediaQuery>
  </Wrapper>
)