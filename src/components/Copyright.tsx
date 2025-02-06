interface CopyrightProps {
  show: boolean;
  inMainContainer: boolean;
}

const Copyright = ({ show, inMainContainer }: CopyrightProps) => {
  let divClassName = inMainContainer ? "" : "form-group mt-4 content-div";
  let pClassName = inMainContainer ? "photo-font copyright" : "copyright";
  return (
    <>
      {show && (
        <div className={divClassName}>
          <p className={pClassName}>
            ©2025 Matthew Saffert. All rights reserved.
          </p>
        </div>
      )}
    </>
  );
};

export default Copyright;
