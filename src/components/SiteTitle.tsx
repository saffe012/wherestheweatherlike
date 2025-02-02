function SiteTitle() {
  let displaySize = window.innerHeight > 768 ? "display-1" : "display-4";
  return (
    <div className="form-group">
      <h1 className={displaySize + " photo-font oswald-header"}>
        Where's the Weather Like?
      </h1>

      <p className="mt-4 px-5 mx-5 photo-font site-description display-6">
        Use the form below to enter a specific month and your desired weather,
        then click 'Get Destinations.' We'll display worldwide vacation
        destinations that match your selected weather for the time of year you
        chose.
      </p>
    </div>
  );
}

export default SiteTitle;
