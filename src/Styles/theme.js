const palette = {
  // Color Palette
  lightBgColor: "#37393E",
  deepBgColor: "#313338",
  darkBgColor: "#292B2F",
  deepDarkBgColor: "#202225",
  animColor: "#3F4247",
  hlColor: "#7689D4",
  hl2Color: "#6B7CBF",
  mainFontColor: "#FFFFFF",
  subFontColor: "#86888C",
  hiddenFontColor: "#50545B",
  errorColor: "#FF4042",
  borderColor: "#434549",
};

const ui = {
  AuthInput: `width: 415px;
  height: 40px;
  position: relative;
  border-radius: 5px;
  background-color: ${palette.deepBgColor};
  border: 1px solid #232428;
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

  hlButton: `width: 435px;
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

  titleText: `
  font-size: 17px;
  font-weight: 500;`,

  BarTitleText: `
  font-size: 17px;
  font-weight: 600;
  color: ${palette.mainFontColor};
  margin-left: 10px;
`,

  BarTitle: `
  display: flex;
  align-items: center;
  height: 25px;
  padding: 0px 20px;
  border-right: 1px solid ${palette.borderColor};
`,

  OuterMenu: `
  position: relative;
  color: ${palette.subFontColor};
  font-size: 18px;
  margin-right: 25px;
  cursor: pointer;

  &:hover .overlay {
    opacity: 1;
  }
`,

  OuterMenuOverlay: `
  z-index: 10;
  opacity: 0;
  position: absolute;
  top: -200%;
  left: 50%;
  transform: translateX(-50%);
  background-color: black;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`,
};

export default { ...palette, ...ui };
