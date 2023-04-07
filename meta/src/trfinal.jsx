import { useMediaQuery } from "react-responsive";
...
const Card = ({ img, name, description }: CProps) => {
  const handleMediaQueryChange = (matches: boolean) => {
    if(matches) {
    window.alert("Trigger a window's alert at viewport of 1244px")
    }
  };

  const isDesktop = useMediaQuery(
    { minWidth: 1224 }, undefined,  handleMediaQueryChange
  );

  return (
    <Wrapper bg={img} className="SpinWhot project">
      <div className="project-name-holder">
        <p className="project-name-holder-SpinWhot project-title">{name}</p>
      </div>

      <Glass className="">{isDesktop && description}</Glass>
    </Wrapper>
  );
};
...