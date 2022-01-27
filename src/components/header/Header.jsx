import "./header.css";


export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">CryptoVault</span>
        <span className="headerTitleLg"></span>
      </div>
      <img
        className="headerImg"
        src="https://spectrum.ieee.org/media-library/illustration-of-bitcoin-and-other-types-of-cryptocurrency-floating-on-a-gold-background.jpg?id=25589877&width=1200&coordinates=0%2C31%2C0%2C32&height=600"
        alt=""
      />
    </div>
  );
}
