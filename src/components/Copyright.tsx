interface CopyrightProps {
  show: boolean;
  inBackgroundContainer: boolean;
}

const Copyright = ({ show, inBackgroundContainer }: CopyrightProps) => {
  let divClassName = inBackgroundContainer ? "" : "form-group mt-4 content-div";
  let pClassName = inBackgroundContainer ? "photo-font copyright" : "copyright";
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
