import { useMediaQuery } from "react-responsive";
...
const Card = ({ img, name, description }: CProps) => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1224px)"
  });

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