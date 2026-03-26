import imgVector from "figma:asset/a553e5bc52e1ba8f039087a006ce0aa826ae132b.png";

function LogoTransparentSvg() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[32px] top-1/2" data-name="logo_transparent.svg">
      <div className="absolute inset-[6.32%]" data-name="Vector">
        <img alt="" className="absolute block max-w-none size-full" height="27.953" src={imgVector} width="27.953" />
      </div>
    </div>
  );
}

export default function LogoTransparentSvgFill() {
  return (
    <div className="relative size-full" data-name="logo_transparent.svg fill">
      <LogoTransparentSvg />
    </div>
  );
}