const palette = {
  // Color Palette
  lightBgColor: "#37393E",
  deepBgColor: "#313338",
  hlColor: "#7689D4",
  hl2Color: "#6B7CBF",
  mainFontColor: "#FFFFFF",
  subFontColor: "#86888C",
  errorColor: "#FF4042",
};

const ui = {
  AuthInput: `width: 415px;
  height: 40px;
  position: relative;
  border-radius: 5px;
  background-color: ${palette.deepBgColor};
  border: 1px solid black;
  font-size: 14px;
  font-weight: 300;
  color: white;
  padding: 0px 10px;

  &:focus {
    outline: none;
    border: 1px solid ${palette.hlColor};
  }`,

  hlText: `color: ${palette.hlColor};
  font-size: 15px;
  margin-bottom: 25px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }`,

  hlButton: `width: 415px;
  height: 45px;
  border-radius: 5px;
  background-color: ${palette.hlColor};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${palette.mainFontColor};
  font-size: 15px;
  cursor: pointer;

  &:hover {
    background-color: ${palette.hl2Color};
  }`,
};

export default { ...palette, ...ui };
