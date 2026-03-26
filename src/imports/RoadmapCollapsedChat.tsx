import svgPaths from "./svg-kpn7lac33t";
import imgVector from "figma:asset/a553e5bc52e1ba8f039087a006ce0aa826ae132b.png";
import imgScreenshot20260224At103629Pm1 from "figma:asset/4a0b625d1a14616d01c408a075f1459f85bd6c5e.png";
import imgScreenshot20260224At103645Pm1 from "figma:asset/a8e0e7565684673839b7b5b3bf9c6932e53c0e10.png";
import imgScreenshot20260224At103830Pm1 from "figma:asset/b8b63f1eb93b65b2e908b0d691deef97f32c3a33.png";

function LogoTransparentSvg() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[32px] top-1/2" data-name="logo_transparent.svg">
      <div className="absolute inset-[6.32%]" data-name="Vector">
        <img alt="" className="absolute block max-w-none size-full" height="27.953" src={imgVector} width="27.953" />
      </div>
    </div>
  );
}

function LogoTransparentSvgFill() {
  return (
    <div className="absolute left-0 overflow-clip size-[32px] top-0" data-name="logo_transparent.svg fill">
      <LogoTransparentSvg />
    </div>
  );
}

function SprynLogo() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[32px] top-[calc(50%-418px)]" data-name="Spryn logo">
      <LogoTransparentSvgFill />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute inset-[20%]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p3ce5e700} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Projects() {
  return (
    <div className="h-[40px] relative rounded-[6px] shrink-0 w-full" data-name="Projects">
      <Frame />
    </div>
  );
}

function Svg() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[24px] top-1/2" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d={svgPaths.pc0a4f21} id="Vector" stroke="var(--stroke-0, white)" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Artifacts() {
  return (
    <div className="relative rounded-[6px] shrink-0 size-[40px]" data-name="Artifacts">
      <Svg />
    </div>
  );
}

function Frame1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[24px] top-1/2" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p1beb9e00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Projects1() {
  return (
    <div className="relative rounded-[6px] shrink-0 size-[40px]" data-name="Projects">
      <Frame1 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-[8px] top-[64px] w-[40px]">
      <Projects />
      <Artifacts />
      <Projects1 />
    </div>
  );
}

function Sidebar() {
  return (
    <div className="absolute bg-[#541b1f] h-[900px] left-0 top-0 w-[56px]" data-name="Sidebar">
      <SprynLogo />
      <Frame19 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Frame">
          <path d={svgPaths.p3885cf00} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Plus Minus Clinic</p>
      </div>
    </div>
  );
}

function Svg1() {
  return (
    <div className="h-[12px] relative shrink-0 w-[7.5px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.5 12">
        <g id="SVG">
          <path d={svgPaths.p2d6f8600} fill="var(--fill-0, #9CA3AF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg1 />
    </div>
  );
}

function Svg2() {
  return (
    <div className="h-[14px] relative shrink-0 w-[15.75px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.75 14">
        <g id="SVG">
          <path d={svgPaths.p34604900} fill="var(--fill-0, #D10F19)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg2 />
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Button">
      <Container4 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[14px] text-center w-[63.13px]">
        <p className="leading-[20px] whitespace-pre-wrap">Roadmap</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Button />
    </div>
  );
}

function Container() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative">
        <Frame2 />
        <Container1 />
        <Container2 />
        <Container3 />
      </div>
    </div>
  );
}

function Svg3() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p151f3900} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.pc1efc0} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2d6e5280} id="Vector_3" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function ButtonMenuDocumentActions() {
  return (
    <div className="relative rounded-[6px] shrink-0 size-[32px]" data-name="Button menu - Document actions">
      <Svg3 />
    </div>
  );
}

function Svg4() {
  return (
    <div className="h-[12px] relative shrink-0 w-[9px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 12">
        <g id="SVG">
          <path d={svgPaths.pdb2cfc0} fill="var(--fill-0, #2E2E2E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg4 />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center px-[12px] py-[6px] relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d10f19] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container6 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#2e2e2e] text-[14px] text-center w-[54.02px]">
        <p className="leading-[16px] whitespace-pre-wrap">Preview</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative">
        <ButtonMenuDocumentActions />
        <Button1 />
      </div>
    </div>
  );
}

function TopNavigationHeader() {
  return (
    <div className="bg-white h-[56px] relative shrink-0 w-full z-[3]" data-name="Top Navigation / Header">
      <div aria-hidden="true" className="absolute border-[#ccc] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-px px-[16px] relative size-full">
          <Container />
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-white relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#ccc] border-r border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center pl-[8px] pr-[9px] py-[2px] relative">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[12px] text-center w-[12.05px]">
          <p className="leading-[16px] whitespace-pre-wrap">D</p>
        </div>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#ccc] border-r border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center pl-[8px] pr-[9px] py-[2px] relative">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[12px] text-center w-[8.67px]">
          <p className="leading-[16px] whitespace-pre-wrap">W</p>
        </div>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[8px] py-[2px] relative">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[12px] text-center w-[10.84px]">
          <p className="leading-[16px] whitespace-pre-wrap">M</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#f3f4f6] relative rounded-[4px] shrink-0" data-name="Background+Border">
      <div className="content-stretch flex items-start overflow-clip p-px relative rounded-[inherit]">
        <Button2 />
        <Button3 />
        <Button4 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Zoom:</p>
      </div>
      <BackgroundBorder />
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[8px] relative shrink-0" data-name="Margin">
      <Container8 />
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative">
        <Margin />
      </div>
    </div>
  );
}

function Svg5() {
  return (
    <div className="h-[12px] relative shrink-0 w-[10.5px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 12">
        <g id="SVG">
          <path d={svgPaths.p2ae96740} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg5 />
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#d10f19] relative rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center px-[12px] py-[8px] relative">
        <Container9 />
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
          <p className="leading-[16px]">New Milestone</p>
        </div>
      </div>
    </div>
  );
}

function Toolbar() {
  return (
    <div className="bg-white h-[48px] relative shrink-0 w-full z-[2]" data-name="Toolbar">
      <div aria-hidden="true" className="absolute border-[#ccc] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-px px-[16px] relative size-full">
          <Container7 />
          <Button5 />
        </div>
      </div>
    </div>
  );
}

function SidebarHeader() {
  return (
    <div className="bg-[#f9fafb] h-[47px] relative shrink-0 w-full" data-name="Sidebar Header">
      <div aria-hidden="true" className="absolute border-[#ccc] border-b border-r border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex font-['Inter:Semi_Bold',sans-serif] font-semibold items-center justify-between leading-[0] not-italic pb-px pl-[16px] pr-[17px] relative size-full text-[12px] tracking-[0.6px] uppercase">
          <div className="flex flex-col justify-center relative shrink-0 text-[#4b5563] whitespace-nowrap">
            <p className="leading-[16px]">Milestones</p>
          </div>
          <div className="flex flex-col h-[16px] justify-center relative shrink-0 text-[#6b7280] text-right w-[69.3px]">
            <p className="leading-[16px] whitespace-pre-wrap">Progress</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Svg6() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="SVG">
          <path d={svgPaths.p3da0b180} fill="var(--fill-0, #6B7280)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[16px]" data-name="Container">
      <Svg6 />
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col h-[8px] items-start pr-[8px] relative shrink-0 w-[16px]" data-name="Margin">
      <div className="bg-[#22c55e] rounded-[9999px] shadow-[0px_0px_5px_0px_rgba(34,197,94,0.5)] shrink-0 size-[8px]" data-name="Background+Shadow" />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">{`M1: Infrastructure & Set Up`}</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative">
        <Container11 />
        <Margin1 />
        <Container12 />
      </div>
    </div>
  );
}

function Row1Milestone1Expanded() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row 1: Milestone 1 (Expanded)">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[19px] pt-[18px] px-[16px] relative w-full">
          <Container10 />
          <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#22c55e] text-[12px] text-right w-[33.55px]">
            <p className="leading-[16px] whitespace-pre-wrap">100%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Svg7() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="SVG">
          <path d={svgPaths.p3da0b180} fill="var(--fill-0, #6B7280)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative w-[16px]" data-name="Container">
      <Svg7 />
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col h-[8px] items-start pr-[8px] relative shrink-0 w-[16px]" data-name="Margin">
      <div className="bg-[rgba(255,255,255,0)] rounded-[9999px] shadow-[0px_0px_5px_0px_rgba(245,158,11,0.5)] shrink-0 size-[8px]" data-name="Overlay+Shadow" />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">
        <p className="leading-[20px]">{`M2: Auth & Onboarding`}</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <Container15 />
        </div>
      </div>
      <Margin2 />
      <Container16 />
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[16px] py-[18px] relative w-full">
          <Container14 />
          <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#60a5fa] text-[12px] text-right w-[27.75px]">
            <p className="leading-[16px] whitespace-pre-wrap">25%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Svg8() {
  return (
    <div className="h-[12px] relative shrink-0 w-[9px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 12">
        <g id="SVG">
          <path d={svgPaths.p2c31c200} fill="var(--fill-0, #4B5563)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[20px]" data-name="Container">
      <Svg8 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black w-full">
        <p className="leading-[16px] whitespace-pre-wrap">User Login Flow</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-end opacity-0 relative shrink-0 w-[64px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-black text-right w-[22.06px]">
        <p className="leading-[15px] whitespace-pre-wrap">50%</p>
      </div>
    </div>
  );
}

function Subtask() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Subtask 1">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[40px] pr-[16px] relative size-full">
          <Container17 />
          <Container18 />
          <Container19 />
        </div>
      </div>
    </div>
  );
}

function Svg9() {
  return (
    <div className="h-[12px] relative shrink-0 w-[9px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 12">
        <g id="SVG">
          <path d={svgPaths.p2c31c200} fill="var(--fill-0, #4B5563)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[20px]" data-name="Container">
      <Svg9 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black w-full">
        <p className="leading-[16px] whitespace-pre-wrap">{`SSO & Magic Link`}</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-end opacity-0 relative shrink-0 w-[64px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-black text-right w-[22.06px]">
        <p className="leading-[15px] whitespace-pre-wrap">50%</p>
      </div>
    </div>
  );
}

function Subtask1() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Subtask 2">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[40px] pr-[16px] relative size-full">
          <Container20 />
          <Container21 />
          <Container22 />
        </div>
      </div>
    </div>
  );
}

function Svg10() {
  return (
    <div className="h-[12px] relative shrink-0 w-[9px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 12">
        <g id="SVG">
          <path d={svgPaths.p2c31c200} fill="var(--fill-0, #4B5563)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[20px]" data-name="Container">
      <Svg10 />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black w-full">
        <p className="leading-[16px] whitespace-pre-wrap">Onboarding Setup</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-end opacity-0 relative shrink-0 w-[64px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-black text-right w-[22.06px]">
        <p className="leading-[15px] whitespace-pre-wrap">50%</p>
      </div>
    </div>
  );
}

function Subtask2() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Subtask 3">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[40px] pr-[16px] relative size-full">
          <Container23 />
          <Container24 />
          <Container25 />
        </div>
      </div>
    </div>
  );
}

function Subtasks() {
  return (
    <div className="relative shrink-0 w-full" data-name="Subtasks">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <Subtask />
        <Subtask1 />
        <Subtask2 />
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] h-[52px] items-center min-h-px min-w-px overflow-clip relative">
      <div className="aspect-[3024/1652] h-full relative shrink-0" data-name="Screenshot 2026-02-24 at 10.36.29 PM 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgScreenshot20260224At103629Pm1} />
      </div>
      <div className="aspect-[3024/1654] h-full relative shrink-0" data-name="Screenshot 2026-02-24 at 10.36.45 PM 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgScreenshot20260224At103645Pm1} />
      </div>
      <div className="aspect-[3024/1652] h-full relative shrink-0" data-name="Screenshot 2026-02-24 at 10.38.30 PM 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgScreenshot20260224At103830Pm1} />
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pl-[40px] pr-[16px] py-[12px] relative w-full">
          <Frame6 />
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="icon">
            <div className="absolute inset-[20.83%_33.33%]" data-name="Vector (Stroke)">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.99985 13.9998">
                <path d={svgPaths.p2042fd00} fill="var(--fill-0, #737373)" id="Vector (Stroke)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row2Milestone2Expanded() {
  return (
    <div className="bg-[#f9fafb] relative shrink-0 w-full" data-name="Row 2: Milestone 2 (Expanded)">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px relative w-full">
        <Container13 />
        <Subtasks />
        <Frame5 />
      </div>
    </div>
  );
}

function Svg11() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="SVG">
          <path d={svgPaths.p3da0b180} fill="var(--fill-0, #6B7280)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[16px]" data-name="Container">
      <Svg11 />
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col h-[8px] items-start pr-[8px] relative shrink-0 w-[16px]" data-name="Margin">
      <div className="bg-[#ccc] rounded-[9999px] shrink-0 size-[8px]" data-name="Background+Shadow" />
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[14px] w-[166.36px]">
        <p className="leading-[20px] whitespace-pre-wrap">{`M3: Dashboard & Clients`}</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative">
        <Container27 />
        <Margin3 />
        <Container28 />
      </div>
    </div>
  );
}

function Row1Milestone1Expanded1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row 1: Milestone 1 (Expanded)">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[19px] pt-[18px] px-[16px] relative w-full">
          <Container26 />
          <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#676767] text-[12px] text-right w-[33.55px]">
            <p className="leading-[16px] whitespace-pre-wrap">0%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Svg12() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="SVG">
          <path d={svgPaths.p3da0b180} fill="var(--fill-0, #6B7280)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[16px]" data-name="Container">
      <Svg12 />
    </div>
  );
}

function Margin4() {
  return (
    <div className="content-stretch flex flex-col h-[8px] items-start pr-[8px] relative shrink-0 w-[16px]" data-name="Margin">
      <div className="bg-[#ccc] rounded-[9999px] shrink-0 size-[8px]" data-name="Background+Shadow" />
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[14px] w-[166.36px]">
        <p className="leading-[20px] whitespace-pre-wrap">{`M4: Dashboard & Clients`}</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative">
        <Container30 />
        <Margin4 />
        <Container31 />
      </div>
    </div>
  );
}

function Row1Milestone1Expanded2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row 1: Milestone 1 (Expanded)">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[19px] pt-[18px] px-[16px] relative w-full">
          <Container29 />
          <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#676767] text-[12px] text-right w-[33.55px]">
            <p className="leading-[16px] whitespace-pre-wrap">0%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Svg13() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="SVG">
          <path d={svgPaths.p3da0b180} fill="var(--fill-0, #6B7280)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[16px]" data-name="Container">
      <Svg13 />
    </div>
  );
}

function Margin5() {
  return (
    <div className="content-stretch flex flex-col h-[8px] items-start pr-[8px] relative shrink-0 w-[16px]" data-name="Margin">
      <div className="bg-[#ccc] rounded-[9999px] shrink-0 size-[8px]" data-name="Background+Shadow" />
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[14px] w-[166.36px]">
        <p className="leading-[20px] whitespace-pre-wrap">{`M5: Dashboard & Clients`}</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative">
        <Container33 />
        <Margin5 />
        <Container34 />
      </div>
    </div>
  );
}

function Row1Milestone1Expanded3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row 1: Milestone 1 (Expanded)">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[19px] pt-[18px] px-[16px] relative w-full">
          <Container32 />
          <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#676767] text-[12px] text-right w-[33.55px]">
            <p className="leading-[16px] whitespace-pre-wrap">0%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Svg14() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="SVG">
          <path d={svgPaths.p3da0b180} fill="var(--fill-0, #6B7280)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[16px]" data-name="Container">
      <Svg14 />
    </div>
  );
}

function Margin6() {
  return (
    <div className="content-stretch flex flex-col h-[8px] items-start pr-[8px] relative shrink-0 w-[16px]" data-name="Margin">
      <div className="bg-[#ccc] rounded-[9999px] shrink-0 size-[8px]" data-name="Background+Shadow" />
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[14px] w-[166.36px]">
        <p className="leading-[20px] whitespace-pre-wrap">{`M6: Dashboard & Clients`}</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative">
        <Container36 />
        <Margin6 />
        <Container37 />
      </div>
    </div>
  );
}

function Row1Milestone1Expanded4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row 1: Milestone 1 (Expanded)">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[19px] pt-[18px] px-[16px] relative w-full">
          <Container35 />
          <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#676767] text-[12px] text-right w-[33.55px]">
            <p className="leading-[16px] whitespace-pre-wrap">0%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Svg15() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="SVG">
          <path d={svgPaths.p3da0b180} fill="var(--fill-0, #6B7280)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[16px]" data-name="Container">
      <Svg15 />
    </div>
  );
}

function Margin7() {
  return (
    <div className="content-stretch flex flex-col h-[8px] items-start pr-[8px] relative shrink-0 w-[16px]" data-name="Margin">
      <div className="bg-[#ccc] rounded-[9999px] shrink-0 size-[8px]" data-name="Background+Shadow" />
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[14px] w-[166.36px]">
        <p className="leading-[20px] whitespace-pre-wrap">{`M7: Dashboard & Clients`}</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative">
        <Container39 />
        <Margin7 />
        <Container40 />
      </div>
    </div>
  );
}

function Row1Milestone1Expanded5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row 1: Milestone 1 (Expanded)">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[19px] pt-[18px] px-[16px] relative w-full">
          <Container38 />
          <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#676767] text-[12px] text-right w-[33.55px]">
            <p className="leading-[16px] whitespace-pre-wrap">0%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Svg16() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="SVG">
          <path d={svgPaths.p3da0b180} fill="var(--fill-0, #6B7280)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[16px]" data-name="Container">
      <Svg16 />
    </div>
  );
}

function Margin8() {
  return (
    <div className="content-stretch flex flex-col h-[8px] items-start pr-[8px] relative shrink-0 w-[16px]" data-name="Margin">
      <div className="bg-[#ccc] rounded-[9999px] shrink-0 size-[8px]" data-name="Background+Shadow" />
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[14px] w-[166.36px]">
        <p className="leading-[20px] whitespace-pre-wrap">{`M8: Dashboard & Clients`}</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative">
        <Container42 />
        <Margin8 />
        <Container43 />
      </div>
    </div>
  );
}

function Row1Milestone1Expanded6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row 1: Milestone 1 (Expanded)">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[19px] pt-[18px] px-[16px] relative w-full">
          <Container41 />
          <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#676767] text-[12px] text-right w-[33.55px]">
            <p className="leading-[16px] whitespace-pre-wrap">0%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TaskListLeftPane() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[872px] items-start pr-px relative shrink-0 w-full" data-name="Task List (Left Pane)">
      <div aria-hidden="true" className="absolute border-[#ccc] border-r border-solid inset-0 pointer-events-none" />
      <Row1Milestone1Expanded />
      <Row2Milestone2Expanded />
      <Row1Milestone1Expanded1 />
      <Row1Milestone1Expanded2 />
      <Row1Milestone1Expanded3 />
      <Row1Milestone1Expanded4 />
      <Row1Milestone1Expanded5 />
      <Row1Milestone1Expanded6 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute content-stretch flex flex-col gap-px items-start left-0 top-0 w-[347px]">
      <SidebarHeader />
      <TaskListLeftPane />
    </div>
  );
}

function VerticalBorder() {
  return (
    <div className="h-full relative shrink-0 w-[45px]" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-r border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function VerticalBorder1() {
  return (
    <div className="h-full relative shrink-0 w-[45px]" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-r border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function BackgroundVerticalBorder() {
  return (
    <div className="bg-[#ffefef] h-full relative shrink-0 w-[45px]" data-name="Background+VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#ebe5e5] border-r border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function VerticalBorder2() {
  return (
    <div className="h-full relative shrink-0 w-[45px]" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-r border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function VerticalBorder3() {
  return (
    <div className="h-full relative shrink-0 w-[45px]" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-r border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function BackgroundVerticalBorder1() {
  return (
    <div className="bg-[#f3f4f6] h-full relative shrink-0 w-[45px]" data-name="Background+VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-r border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function BackgroundVerticalBorder2() {
  return <div className="bg-[#f3f4f6] h-full shrink-0 w-[45px]" data-name="Background+VerticalBorder" />;
}

function Frame11() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0">
      <div aria-hidden="true" className="absolute border-[#ccc] border-r border-solid inset-[0_-1px_0_0] pointer-events-none" />
      <VerticalBorder />
      <VerticalBorder1 />
      <BackgroundVerticalBorder />
      <VerticalBorder2 />
      <VerticalBorder3 />
      <BackgroundVerticalBorder1 />
      <BackgroundVerticalBorder2 />
    </div>
  );
}

function VerticalBorder4() {
  return (
    <div className="h-full relative shrink-0 w-[45px]" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-r border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function VerticalBorder5() {
  return (
    <div className="h-full relative shrink-0 w-[45px]" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-r border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function BackgroundVerticalBorder3() {
  return (
    <div className="bg-white h-full relative shrink-0 w-[45px]" data-name="Background+VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-r border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function VerticalBorder6() {
  return (
    <div className="h-full relative shrink-0 w-[45px]" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-r border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function VerticalBorder7() {
  return (
    <div className="h-full relative shrink-0 w-[45px]" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-r border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function BackgroundVerticalBorder4() {
  return (
    <div className="bg-[#f3f4f6] h-full relative shrink-0 w-[45px]" data-name="Background+VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-r border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function BackgroundVerticalBorder5() {
  return <div className="bg-[#f3f4f6] h-full shrink-0 w-[45px]" data-name="Background+VerticalBorder" />;
}

function Frame12() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0">
      <div aria-hidden="true" className="absolute border-[#ccc] border-r border-solid inset-[0_-1px_0_0] pointer-events-none" />
      <VerticalBorder4 />
      <VerticalBorder5 />
      <BackgroundVerticalBorder3 />
      <VerticalBorder6 />
      <VerticalBorder7 />
      <BackgroundVerticalBorder4 />
      <BackgroundVerticalBorder5 />
    </div>
  );
}

function VerticalBorder8() {
  return (
    <div className="h-full relative shrink-0 w-[45px]" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-r border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function VerticalBorder9() {
  return (
    <div className="h-full relative shrink-0 w-[45px]" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-r border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function BackgroundVerticalBorder6() {
  return (
    <div className="bg-white h-full relative shrink-0 w-[45px]" data-name="Background+VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-r border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function VerticalBorder10() {
  return (
    <div className="h-full relative shrink-0 w-[45px]" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-r border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function VerticalBorder11() {
  return (
    <div className="h-full relative shrink-0 w-[45px]" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-r border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function BackgroundVerticalBorder7() {
  return (
    <div className="bg-[#f3f4f6] h-full relative shrink-0 w-[45px]" data-name="Background+VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-r border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function BackgroundVerticalBorder8() {
  return <div className="bg-[#f3f4f6] h-full shrink-0 w-[45px]" data-name="Background+VerticalBorder" />;
}

function Frame13() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0">
      <div aria-hidden="true" className="absolute border-[#ccc] border-r border-solid inset-[0_-1px_0_0] pointer-events-none" />
      <VerticalBorder8 />
      <VerticalBorder9 />
      <BackgroundVerticalBorder6 />
      <VerticalBorder10 />
      <VerticalBorder11 />
      <BackgroundVerticalBorder7 />
      <BackgroundVerticalBorder8 />
    </div>
  );
}

function VerticalBorder12() {
  return (
    <div className="h-full relative shrink-0 w-[45px]" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-r border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function VerticalBorder13() {
  return (
    <div className="h-full relative shrink-0 w-[45px]" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-r border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function BackgroundVerticalBorder9() {
  return (
    <div className="bg-[#eff6ff] h-full relative shrink-0 w-[45px]" data-name="Background+VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-r border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function VerticalBorder14() {
  return (
    <div className="h-full relative shrink-0 w-[45px]" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-r border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function VerticalBorder15() {
  return (
    <div className="h-full relative shrink-0 w-[45px]" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-r border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function BackgroundVerticalBorder10() {
  return (
    <div className="bg-[#f3f4f6] h-full relative shrink-0 w-[45px]" data-name="Background+VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-r border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function BackgroundVerticalBorder11() {
  return <div className="bg-[#f3f4f6] h-full shrink-0 w-[45px]" data-name="Background+VerticalBorder" />;
}

function Frame14() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0">
      <div aria-hidden="true" className="absolute border-[#ccc] border-r border-solid inset-[0_-1px_0_0] pointer-events-none" />
      <VerticalBorder12 />
      <VerticalBorder13 />
      <BackgroundVerticalBorder9 />
      <VerticalBorder14 />
      <VerticalBorder15 />
      <BackgroundVerticalBorder10 />
      <BackgroundVerticalBorder11 />
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute content-stretch flex h-[872px] items-start left-0 top-[46px] w-[1037px]" data-name="Container">
      <Frame11 />
      <Frame12 />
      <Frame13 />
      <Frame14 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute bg-[#f4f4f4] content-stretch flex gap-[10px] items-center justify-center left-[-2px] px-[6px] py-[12px] rounded-[4px] top-[53px] w-[47px]">
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">{`M1: Infrastructure & Auth`}</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute bg-[#f4f4f4] content-stretch flex gap-[10px] items-center justify-center left-[45px] px-[6px] py-[12px] rounded-[4px] top-[103px] w-[270px]">
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">{`M2: Auth & Onboarding`}</p>
      </div>
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-right w-[27.75px]">
        <p className="leading-[16px] whitespace-pre-wrap">25%</p>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute bg-[#f4f4f4] content-stretch flex gap-[10px] items-center justify-center left-[381px] px-[6px] py-[12px] rounded-[4px] top-[333px] w-[244px]">
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">{`M3: Dashboard & Clients`}</p>
      </div>
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-right w-[27.75px]">
        <p className="leading-[16px] whitespace-pre-wrap">0%</p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute bg-[#f4f4f4] content-stretch flex gap-[10px] items-center justify-center left-[630px] px-[6px] py-[12px] rounded-[4px] top-[397px] w-[360px]">
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">{`M4: Dashboard & Clients`}</p>
      </div>
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-right w-[27.75px]">
        <p className="leading-[16px] whitespace-pre-wrap">0%</p>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="absolute bg-[#f4f4f4] content-stretch flex gap-[10px] items-center justify-center left-[990px] px-[6px] py-[12px] rounded-[4px] top-[454px] w-[366px]">
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">{`M5: Dashboard & Clients`}</p>
      </div>
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#1a4f8f] text-[12px] text-right w-[27.75px]">
        <p className="leading-[16px] whitespace-pre-wrap">50%</p>
      </div>
    </div>
  );
}

function BackgroundHorizontalBorder() {
  return (
    <div className="bg-[#f9fafb] h-[24px] relative shrink-0 w-full" data-name="Background+HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pb-[5px] pl-[9px] pr-[8px] pt-[3px] relative size-full">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#374151] text-[12px] w-[84.81px]">
            <p className="leading-[16px] whitespace-pre-wrap">February 2026</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function VerticalBorder16() {
  return (
    <div className="content-stretch flex h-full items-center justify-center pb-[5.5px] pr-px pt-[3.5px] relative shrink-0 w-[45px]" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-r border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[10px] text-center w-[24.13px]">
        <p className="leading-[15px] whitespace-pre-wrap">23 M</p>
      </div>
    </div>
  );
}

function VerticalBorder17() {
  return (
    <div className="content-stretch flex h-full items-center justify-center pb-[5.5px] pr-px pt-[3.5px] relative shrink-0 w-[45px]" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-r border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[10px] text-center w-[21.67px]">
        <p className="leading-[15px] whitespace-pre-wrap">24 T</p>
      </div>
    </div>
  );
}

function BackgroundVerticalBorder12() {
  return (
    <div className="bg-[#ffefef] content-stretch flex h-full items-center justify-center pb-[5.5px] pr-px pt-[3.5px] relative shrink-0 w-[45px]" data-name="Background+VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-r border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[10px] text-center w-[25.27px]">
        <p className="leading-[15px] whitespace-pre-wrap">25 W</p>
      </div>
    </div>
  );
}

function VerticalBorder18() {
  return (
    <div className="content-stretch flex h-full items-center justify-center pb-[5.5px] pr-px pt-[3.5px] relative shrink-0 w-[45px]" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-r border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[10px] text-center w-[21.58px]">
        <p className="leading-[15px] whitespace-pre-wrap">26 T</p>
      </div>
    </div>
  );
}

function VerticalBorder19() {
  return (
    <div className="content-stretch flex h-full items-center justify-center pb-[5.5px] pr-px pt-[3.5px] relative shrink-0 w-[45px]" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-r border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[10px] text-center w-[20.48px]">
        <p className="leading-[15px] whitespace-pre-wrap">27 F</p>
      </div>
    </div>
  );
}

function BackgroundVerticalBorder13() {
  return (
    <div className="bg-[#f3f4f6] content-stretch flex h-full items-center justify-center pb-[5.5px] pr-px pt-[3.5px] relative shrink-0 w-[45px]" data-name="Background+VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-r border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[10px] text-center w-[21.52px]">
        <p className="leading-[15px] whitespace-pre-wrap">28 S</p>
      </div>
    </div>
  );
}

function BackgroundVerticalBorder14() {
  return (
    <div className="bg-[#f3f4f6] content-stretch flex h-full items-center justify-center pb-[5.5px] pt-[3.5px] relative shrink-0 w-[45px]" data-name="Background+VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[10px] text-center w-[13.3px]">
        <p className="leading-[15px] whitespace-pre-wrap">1 S</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
        <VerticalBorder16 />
        <VerticalBorder17 />
        <BackgroundVerticalBorder12 />
        <VerticalBorder18 />
        <VerticalBorder19 />
        <BackgroundVerticalBorder13 />
        <BackgroundVerticalBorder14 />
      </div>
    </div>
  );
}

function Feb() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0 w-[315px]" data-name="Feb 2026">
      <div aria-hidden="true" className="absolute border-[#ccc] border-r border-solid inset-[0_-1px_0_0] pointer-events-none" />
      <BackgroundHorizontalBorder />
      <Container46 />
    </div>
  );
}

function BackgroundHorizontalBorder1() {
  return (
    <div className="bg-[#f9fafb] h-[24px] relative shrink-0 w-full" data-name="Background+HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pb-[5px] pt-[3px] px-[8px] relative size-full">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#374151] text-[12px] w-[69.63px]">
            <p className="leading-[16px] whitespace-pre-wrap">March 2026</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Week() {
  return (
    <div className="content-stretch flex h-full items-center justify-center pb-[4.5px] pr-px pt-[3.5px] relative shrink-0 w-[45px]" data-name="Week 1">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-r border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[10px] text-center w-[17.95px]">
        <p className="leading-[15px] whitespace-pre-wrap">2 M</p>
      </div>
    </div>
  );
}

function VerticalBorder20() {
  return (
    <div className="content-stretch flex h-full items-center justify-center pb-[4.5px] pr-px pt-[3.5px] relative shrink-0 w-[45px]" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-r border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[10px] text-center w-[15.45px]">
        <p className="leading-[15px] whitespace-pre-wrap">3 T</p>
      </div>
    </div>
  );
}

function VerticalBorder21() {
  return (
    <div className="content-stretch flex h-full items-center justify-center pb-[4.5px] pr-px pt-[3.5px] relative shrink-0 w-[45px]" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-r border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[10px] text-center w-[19.14px]">
        <p className="leading-[15px] whitespace-pre-wrap">4 W</p>
      </div>
    </div>
  );
}

function VerticalBorder22() {
  return (
    <div className="content-stretch flex h-full items-center justify-center pb-[4.5px] pr-px pt-[3.5px] relative shrink-0 w-[45px]" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-r border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[10px] text-center w-[15.2px]">
        <p className="leading-[15px] whitespace-pre-wrap">5 T</p>
      </div>
    </div>
  );
}

function VerticalBorder23() {
  return (
    <div className="content-stretch flex h-full items-center justify-center pb-[4.5px] pr-px pt-[3.5px] relative shrink-0 w-[45px]" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-r border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[10px] text-center w-[14.92px]">
        <p className="leading-[15px] whitespace-pre-wrap">6 F</p>
      </div>
    </div>
  );
}

function BackgroundVerticalBorder15() {
  return (
    <div className="bg-[#f3f4f6] content-stretch flex h-full items-center justify-center pb-[4.5px] pr-px pt-[3.5px] relative shrink-0 w-[45px]" data-name="Background+VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-r border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[10px] text-center w-[14.89px]">
        <p className="leading-[15px] whitespace-pre-wrap">7 S</p>
      </div>
    </div>
  );
}

function BackgroundVerticalBorder16() {
  return (
    <div className="bg-[#f3f4f6] content-stretch flex h-full items-center justify-center pb-[4.5px] pr-px pt-[3.5px] relative shrink-0 w-[45px]" data-name="Background+VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-r border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[10px] text-center w-[15.42px]">
        <p className="leading-[15px] whitespace-pre-wrap">8 S</p>
      </div>
    </div>
  );
}

function Week1() {
  return (
    <div className="content-stretch flex h-full items-center justify-center pb-[4.5px] pr-px pt-[3.5px] relative shrink-0 w-[45px]" data-name="Week 2">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-r border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[10px] text-center w-[18.05px]">
        <p className="leading-[15px] whitespace-pre-wrap">9 M</p>
      </div>
    </div>
  );
}

function VerticalBorder24() {
  return (
    <div className="content-stretch flex h-full items-center justify-center pb-[4.5px] pr-px pt-[3.5px] relative shrink-0 w-[45px]" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-r border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[10px] text-center w-[19.66px]">
        <p className="leading-[15px] whitespace-pre-wrap">10 T</p>
      </div>
    </div>
  );
}

function VerticalBorder25() {
  return (
    <div className="content-stretch flex h-full items-center justify-center pb-[4.5px] pr-px pt-[3.5px] relative shrink-0 w-[45px]" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-r border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[10px] text-center w-[20.81px]">
        <p className="leading-[15px] whitespace-pre-wrap">11 W</p>
      </div>
    </div>
  );
}

function VerticalBorder26() {
  return (
    <div className="content-stretch flex h-full items-center justify-center pb-[4.5px] pr-px pt-[3.5px] relative shrink-0 w-[45px]" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-r border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[10px] text-center w-[19.44px]">
        <p className="leading-[15px] whitespace-pre-wrap">12 T</p>
      </div>
    </div>
  );
}

function VerticalBorder27() {
  return (
    <div className="content-stretch flex h-full items-center justify-center pb-[4.5px] pr-px pt-[3.5px] relative shrink-0 w-[45px]" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-r border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[10px] text-center w-[18.97px]">
        <p className="leading-[15px] whitespace-pre-wrap">13 F</p>
      </div>
    </div>
  );
}

function BackgroundVerticalBorder17() {
  return (
    <div className="bg-[#f3f4f6] content-stretch flex h-full items-center justify-center pb-[4.5px] pr-px pt-[3.5px] relative shrink-0 w-[45px]" data-name="Background+VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-r border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[10px] text-center w-[19.77px]">
        <p className="leading-[15px] whitespace-pre-wrap">14 S</p>
      </div>
    </div>
  );
}

function BackgroundVerticalBorder18() {
  return (
    <div className="bg-[#f3f4f6] content-stretch flex h-full items-center justify-center pb-[4.5px] pr-px pt-[3.5px] relative shrink-0 w-[45px]" data-name="Background+VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-r border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[10px] text-center w-[19.23px]">
        <p className="leading-[15px] whitespace-pre-wrap">15 S</p>
      </div>
    </div>
  );
}

function Week2() {
  return (
    <div className="content-stretch flex h-full items-center justify-center pb-[4.5px] pr-px pt-[3.5px] relative shrink-0 w-[45px]" data-name="Week 3">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-r border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[10px] text-center w-[22.13px]">
        <p className="leading-[15px] whitespace-pre-wrap">16 M</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Week />
        <VerticalBorder20 />
        <VerticalBorder21 />
        <VerticalBorder22 />
        <VerticalBorder23 />
        <BackgroundVerticalBorder15 />
        <BackgroundVerticalBorder16 />
        <Week1 />
        <VerticalBorder24 />
        <VerticalBorder25 />
        <VerticalBorder26 />
        <VerticalBorder27 />
        <BackgroundVerticalBorder17 />
        <BackgroundVerticalBorder18 />
        <Week2 />
        <div className="h-full relative shrink-0 w-[45px]" data-name="VerticalBorder">
          <div aria-hidden="true" className="absolute border-[#e5e7eb] border-r border-solid inset-0 pointer-events-none" />
        </div>
        <div className="h-full relative shrink-0 w-[45px]" data-name="VerticalBorder">
          <div aria-hidden="true" className="absolute border-[#e5e7eb] border-r border-solid inset-0 pointer-events-none" />
        </div>
        <div className="h-full relative shrink-0 w-[45px]" data-name="VerticalBorder">
          <div aria-hidden="true" className="absolute border-[#e5e7eb] border-r border-solid inset-0 pointer-events-none" />
        </div>
        <div className="h-full relative shrink-0 w-[45px]" data-name="VerticalBorder">
          <div aria-hidden="true" className="absolute border-[#e5e7eb] border-r border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-[#f3f4f6] h-full relative shrink-0 w-[45px]" data-name="Background+VerticalBorder">
          <div aria-hidden="true" className="absolute border-[#e5e7eb] border-r border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-[#f3f4f6] h-full relative shrink-0 w-[45px]" data-name="Background+VerticalBorder">
          <div aria-hidden="true" className="absolute border-[#e5e7eb] border-r border-solid inset-0 pointer-events-none" />
        </div>
      </div>
    </div>
  );
}

function Mar() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0 w-[675px]" data-name="Mar 2026">
      <BackgroundHorizontalBorder1 />
      <Container47 />
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute bottom-0 content-stretch flex items-start left-0 top-0 w-[2000px]" data-name="Container">
      <Feb />
      <Mar />
    </div>
  );
}

function Frame17() {
  return (
    <div className="bg-[#eeb4b8] relative rounded-bl-[16px] rounded-br-[16px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] py-[6px] relative w-full">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[14px] text-black text-ellipsis whitespace-nowrap">
            <p className="leading-[20px] overflow-hidden">Today</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="absolute content-stretch flex flex-col h-[920px] items-center left-[50px] top-0 w-[119px]">
      <Frame17 />
      <div className="flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none h-full">
          <div className="h-full relative w-[888px]">
            <div className="absolute inset-[-2px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 888 2">
                <line id="Line 18" stroke="var(--stroke-0, #EEB4B8)" strokeWidth="2" x2="888" y1="1" y2="1" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TimelineHeader() {
  return (
    <div className="absolute h-[47px] left-0 top-0 w-[1037px]" data-name="Timeline Header">
      <Container45 />
      <Frame16 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute h-[920px] left-[347px] top-0 w-[1037px]">
      <Container44 />
      <Frame3 />
      <Frame4 />
      <Frame9 />
      <Frame10 />
      <Frame15 />
      <TimelineHeader />
    </div>
  );
}

function GanttChartView() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px overflow-clip relative w-full z-[1]" data-name="Gantt Chart View">
      <Frame8 />
      <Frame7 />
    </div>
  );
}

function MainContentArea() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col inset-[0_0_0_56px] isolate items-start overflow-clip" data-name="Main Content Area">
      <TopNavigationHeader />
      <Toolbar />
      <GanttChartView />
    </div>
  );
}

function Frame18() {
  return (
    <div className="absolute bg-[#eeb4b8] content-stretch flex flex-col items-center justify-center pl-[8px] pr-[2px] py-[12px] right-0 rounded-bl-[30px] rounded-tl-[30px] top-[441px] w-[26px]">
      <div aria-hidden="true" className="absolute border-[#ccc] border-b border-l border-solid border-t inset-0 pointer-events-none rounded-bl-[30px] rounded-tl-[30px]" />
      <div className="aspect-[24/24] overflow-clip relative shrink-0 w-full" data-name="icon">
        <div className="absolute inset-[8.33%]" data-name="Vector (Stroke)">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3331 13.3331">
            <path d={svgPaths.p6351060} fill="var(--fill-0, black)" id="Vector (Stroke)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function RoadmapCollapsedChat() {
  return (
    <div className="bg-[#f2f2f2] relative size-full" data-name="Roadmap Collapsed Chat">
      <Sidebar />
      <MainContentArea />
      <Frame18 />
    </div>
  );
}