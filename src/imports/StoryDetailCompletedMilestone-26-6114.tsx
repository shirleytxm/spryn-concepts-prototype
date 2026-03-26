import svgPaths from "./svg-puusebl6nn";
import imgVector from "figma:asset/8e3e1fd8b3f03cf0772a7984ed845c3add4284b6.png";
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

function Frame24() {
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
      <Frame24 />
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
        <p className="leading-[20px]">Roadmap</p>
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
        <p className="leading-[16px]">Preview</p>
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
          <p className="leading-[16px]">D</p>
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
          <p className="leading-[16px]">W</p>
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
          <p className="leading-[16px]">M</p>
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
            <p className="leading-[16px]">Progress</p>
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
            <p className="leading-[16px]">100%</p>
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
      <div className="bg-[#f59e0b] rounded-[9999px] shrink-0 size-[8px]" data-name="Overlay+Shadow" />
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
            <p className="leading-[16px]">25%</p>
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
        <p className="leading-[16px]">User Login Flow</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-end opacity-0 relative shrink-0 w-[64px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-black text-right w-[22.06px]">
        <p className="leading-[15px]">50%</p>
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
        <p className="leading-[16px]">{`SSO & Magic Link`}</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-end opacity-0 relative shrink-0 w-[64px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-black text-right w-[22.06px]">
        <p className="leading-[15px]">50%</p>
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
        <p className="leading-[16px]">Onboarding Setup</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-end opacity-0 relative shrink-0 w-[64px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-black text-right w-[22.06px]">
        <p className="leading-[15px]">50%</p>
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

function Frame11() {
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

function Frame10() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pl-[40px] pr-[16px] py-[12px] relative w-full">
          <Frame11 />
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
        <Frame10 />
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
        <p className="leading-[20px]">{`M3: Dashboard & Clients`}</p>
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
            <p className="leading-[16px]">0%</p>
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
        <p className="leading-[20px]">{`M4: Dashboard & Clients`}</p>
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
            <p className="leading-[16px]">0%</p>
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
        <p className="leading-[20px]">{`M5: Dashboard & Clients`}</p>
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
            <p className="leading-[16px]">0%</p>
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
        <p className="leading-[20px]">{`M6: Dashboard & Clients`}</p>
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
            <p className="leading-[16px]">0%</p>
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
        <p className="leading-[20px]">{`M7: Dashboard & Clients`}</p>
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
            <p className="leading-[16px]">0%</p>
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
        <p className="leading-[20px]">{`M8: Dashboard & Clients`}</p>
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
            <p className="leading-[16px]">0%</p>
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

function Frame13() {
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
      <div className="flex flex-row items-center justify-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function VerticalBorder1() {
  return (
    <div className="h-full relative shrink-0 w-[45px]" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-r border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function BackgroundVerticalBorder() {
  return (
    <div className="bg-[#ffefef] h-full relative shrink-0 w-[45px]" data-name="Background+VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#ebe5e5] border-r border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function VerticalBorder2() {
  return (
    <div className="h-full relative shrink-0 w-[45px]" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-r border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function VerticalBorder3() {
  return (
    <div className="h-full relative shrink-0 w-[45px]" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-r border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function BackgroundVerticalBorder1() {
  return (
    <div className="bg-[#f3f4f6] h-full relative shrink-0 w-[45px]" data-name="Background+VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-r border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function BackgroundVerticalBorder2() {
  return (
    <div className="bg-[#f3f4f6] h-full relative shrink-0 w-[45px]" data-name="Background+VerticalBorder">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function Frame16() {
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
      <div className="flex flex-row items-center justify-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function VerticalBorder5() {
  return (
    <div className="h-full relative shrink-0 w-[45px]" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-r border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function BackgroundVerticalBorder3() {
  return (
    <div className="bg-white h-full relative shrink-0 w-[45px]" data-name="Background+VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-r border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function VerticalBorder6() {
  return (
    <div className="h-full relative shrink-0 w-[45px]" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-r border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function VerticalBorder7() {
  return (
    <div className="h-full relative shrink-0 w-[45px]" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-r border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function BackgroundVerticalBorder4() {
  return (
    <div className="bg-[#f3f4f6] h-full relative shrink-0 w-[45px]" data-name="Background+VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-r border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function BackgroundVerticalBorder5() {
  return (
    <div className="bg-[#f3f4f6] h-full relative shrink-0 w-[45px]" data-name="Background+VerticalBorder">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function Frame17() {
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
      <div className="flex flex-row items-center justify-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function VerticalBorder9() {
  return (
    <div className="h-full relative shrink-0 w-[45px]" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-r border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function BackgroundVerticalBorder6() {
  return (
    <div className="bg-white h-full relative shrink-0 w-[45px]" data-name="Background+VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-r border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function VerticalBorder10() {
  return (
    <div className="h-full relative shrink-0 w-[45px]" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-r border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function VerticalBorder11() {
  return (
    <div className="h-full relative shrink-0 w-[45px]" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-r border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function BackgroundVerticalBorder7() {
  return (
    <div className="bg-[#f3f4f6] h-full relative shrink-0 w-[45px]" data-name="Background+VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-r border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function BackgroundVerticalBorder8() {
  return (
    <div className="bg-[#f3f4f6] h-full relative shrink-0 w-[45px]" data-name="Background+VerticalBorder">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function Frame18() {
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
      <div className="flex flex-row items-center justify-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function VerticalBorder13() {
  return (
    <div className="h-full relative shrink-0 w-[45px]" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-r border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function BackgroundVerticalBorder9() {
  return (
    <div className="bg-[#eff6ff] h-full relative shrink-0 w-[45px]" data-name="Background+VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-r border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function VerticalBorder14() {
  return (
    <div className="h-full relative shrink-0 w-[45px]" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-r border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function VerticalBorder15() {
  return (
    <div className="h-full relative shrink-0 w-[45px]" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-r border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function BackgroundVerticalBorder10() {
  return (
    <div className="bg-[#f3f4f6] h-full relative shrink-0 w-[45px]" data-name="Background+VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-r border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function BackgroundVerticalBorder11() {
  return (
    <div className="bg-[#f3f4f6] h-full relative shrink-0 w-[45px]" data-name="Background+VerticalBorder">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function Frame19() {
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
      <Frame16 />
      <Frame17 />
      <Frame18 />
      <Frame19 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute bg-[#f4f4f4] content-stretch flex gap-[10px] items-center justify-center left-[-2px] px-[6px] py-[12px] rounded-[4px] top-[53px] w-[47px]">
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">{`M1: Infrastructure & Auth`}</p>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute bg-[#f4f4f4] content-stretch flex gap-[10px] items-center justify-center left-[45px] px-[6px] py-[12px] rounded-[4px] top-[103px] w-[270px]">
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">{`M2: Auth & Onboarding`}</p>
      </div>
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-right w-[27.75px]">
        <p className="leading-[16px]">25%</p>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="absolute bg-[#f4f4f4] content-stretch flex gap-[10px] items-center justify-center left-[381px] px-[6px] py-[12px] rounded-[4px] top-[333px] w-[244px]">
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">{`M3: Dashboard & Clients`}</p>
      </div>
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-right w-[27.75px]">
        <p className="leading-[16px]">0%</p>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="absolute bg-[#f4f4f4] content-stretch flex gap-[10px] items-center justify-center left-[630px] px-[6px] py-[12px] rounded-[4px] top-[397px] w-[360px]">
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">{`M4: Dashboard & Clients`}</p>
      </div>
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-right w-[27.75px]">
        <p className="leading-[16px]">0%</p>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="absolute bg-[#f4f4f4] content-stretch flex gap-[10px] items-center justify-center left-[990px] px-[6px] py-[12px] rounded-[4px] top-[454px] w-[366px]">
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">{`M5: Dashboard & Clients`}</p>
      </div>
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#1a4f8f] text-[12px] text-right w-[27.75px]">
        <p className="leading-[16px]">50%</p>
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
            <p className="leading-[16px]">February 2026</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function VerticalBorder16() {
  return (
    <div className="h-full relative shrink-0 w-[45px]" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-r border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pb-[5.5px] pr-px pt-[3.5px] relative size-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[10px] text-center w-[24.13px]">
            <p className="leading-[15px]">23 M</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function VerticalBorder17() {
  return (
    <div className="h-full relative shrink-0 w-[45px]" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-r border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pb-[5.5px] pr-px pt-[3.5px] relative size-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[10px] text-center w-[21.67px]">
            <p className="leading-[15px]">24 T</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BackgroundVerticalBorder12() {
  return (
    <div className="bg-[#ffefef] h-full relative shrink-0 w-[45px]" data-name="Background+VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-r border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pb-[5.5px] pr-px pt-[3.5px] relative size-full">
          <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[10px] text-center w-[25.27px]">
            <p className="leading-[15px]">25 W</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function VerticalBorder18() {
  return (
    <div className="h-full relative shrink-0 w-[45px]" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-r border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pb-[5.5px] pr-px pt-[3.5px] relative size-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[10px] text-center w-[21.58px]">
            <p className="leading-[15px]">26 T</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function VerticalBorder19() {
  return (
    <div className="h-full relative shrink-0 w-[45px]" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-r border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pb-[5.5px] pr-px pt-[3.5px] relative size-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[10px] text-center w-[20.48px]">
            <p className="leading-[15px]">27 F</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BackgroundVerticalBorder13() {
  return (
    <div className="bg-[#f3f4f6] h-full relative shrink-0 w-[45px]" data-name="Background+VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-r border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pb-[5.5px] pr-px pt-[3.5px] relative size-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[10px] text-center w-[21.52px]">
            <p className="leading-[15px]">28 S</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BackgroundVerticalBorder14() {
  return (
    <div className="bg-[#f3f4f6] h-full relative shrink-0 w-[45px]" data-name="Background+VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pb-[5.5px] pt-[3.5px] relative size-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[10px] text-center w-[13.3px]">
            <p className="leading-[15px]">1 S</p>
          </div>
        </div>
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
            <p className="leading-[16px]">March 2026</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Week() {
  return (
    <div className="h-full relative shrink-0 w-[45px]" data-name="Week 1">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-r border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pb-[4.5px] pr-px pt-[3.5px] relative size-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[10px] text-center w-[17.95px]">
            <p className="leading-[15px]">2 M</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function VerticalBorder20() {
  return (
    <div className="h-full relative shrink-0 w-[45px]" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-r border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pb-[4.5px] pr-px pt-[3.5px] relative size-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[10px] text-center w-[15.45px]">
            <p className="leading-[15px]">3 T</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function VerticalBorder21() {
  return (
    <div className="h-full relative shrink-0 w-[45px]" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-r border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pb-[4.5px] pr-px pt-[3.5px] relative size-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[10px] text-center w-[19.14px]">
            <p className="leading-[15px]">4 W</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function VerticalBorder22() {
  return (
    <div className="h-full relative shrink-0 w-[45px]" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-r border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pb-[4.5px] pr-px pt-[3.5px] relative size-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[10px] text-center w-[15.2px]">
            <p className="leading-[15px]">5 T</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function VerticalBorder23() {
  return (
    <div className="h-full relative shrink-0 w-[45px]" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-r border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pb-[4.5px] pr-px pt-[3.5px] relative size-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[10px] text-center w-[14.92px]">
            <p className="leading-[15px]">6 F</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BackgroundVerticalBorder15() {
  return (
    <div className="bg-[#f3f4f6] h-full relative shrink-0 w-[45px]" data-name="Background+VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-r border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pb-[4.5px] pr-px pt-[3.5px] relative size-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[10px] text-center w-[14.89px]">
            <p className="leading-[15px]">7 S</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BackgroundVerticalBorder16() {
  return (
    <div className="bg-[#f3f4f6] h-full relative shrink-0 w-[45px]" data-name="Background+VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-r border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pb-[4.5px] pr-px pt-[3.5px] relative size-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[10px] text-center w-[15.42px]">
            <p className="leading-[15px]">8 S</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Week1() {
  return (
    <div className="h-full relative shrink-0 w-[45px]" data-name="Week 2">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-r border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pb-[4.5px] pr-px pt-[3.5px] relative size-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[10px] text-center w-[18.05px]">
            <p className="leading-[15px]">9 M</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function VerticalBorder24() {
  return (
    <div className="h-full relative shrink-0 w-[45px]" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-r border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pb-[4.5px] pr-px pt-[3.5px] relative size-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[10px] text-center w-[19.66px]">
            <p className="leading-[15px]">10 T</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function VerticalBorder25() {
  return (
    <div className="h-full relative shrink-0 w-[45px]" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-r border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pb-[4.5px] pr-px pt-[3.5px] relative size-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[10px] text-center w-[20.81px]">
            <p className="leading-[15px]">11 W</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function VerticalBorder26() {
  return (
    <div className="h-full relative shrink-0 w-[45px]" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-r border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pb-[4.5px] pr-px pt-[3.5px] relative size-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[10px] text-center w-[19.44px]">
            <p className="leading-[15px]">12 T</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function VerticalBorder27() {
  return (
    <div className="h-full relative shrink-0 w-[45px]" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-r border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pb-[4.5px] pr-px pt-[3.5px] relative size-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[10px] text-center w-[18.97px]">
            <p className="leading-[15px]">13 F</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BackgroundVerticalBorder17() {
  return (
    <div className="bg-[#f3f4f6] h-full relative shrink-0 w-[45px]" data-name="Background+VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-r border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pb-[4.5px] pr-px pt-[3.5px] relative size-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[10px] text-center w-[19.77px]">
            <p className="leading-[15px]">14 S</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BackgroundVerticalBorder18() {
  return (
    <div className="bg-[#f3f4f6] h-full relative shrink-0 w-[45px]" data-name="Background+VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-r border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pb-[4.5px] pr-px pt-[3.5px] relative size-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[10px] text-center w-[19.23px]">
            <p className="leading-[15px]">15 S</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Week2() {
  return (
    <div className="h-full relative shrink-0 w-[45px]" data-name="Week 3">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-r border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pb-[4.5px] pr-px pt-[3.5px] relative size-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[10px] text-center w-[22.13px]">
            <p className="leading-[15px]">16 M</p>
          </div>
        </div>
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

function Frame22() {
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

function Frame21() {
  return (
    <div className="absolute content-stretch flex flex-col h-[920px] items-center left-[50px] top-0 w-[119px]">
      <Frame22 />
      <div className="flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "19" } as React.CSSProperties}>
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
      <Frame21 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="absolute h-[920px] left-[347px] top-0 w-[1037px]">
      <Container44 />
      <Frame8 />
      <Frame9 />
      <Frame14 />
      <Frame15 />
      <Frame20 />
      <TimelineHeader />
    </div>
  );
}

function GanttChartView() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px overflow-clip relative w-full z-[1]" data-name="Gantt Chart View">
      <Frame13 />
      <Frame12 />
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

function Frame23() {
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

function Svg17() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p203476e0} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M12.6667 8H3.33333" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="relative rounded-[6px] shrink-0 size-[32px]" data-name="Button">
      <Svg17 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Button6 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">
        <p className="leading-[1.5]">Back</p>
      </div>
    </div>
  );
}

function Svg18() {
  return (
    <div className="h-[16px] relative shrink-0 w-[10px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 16">
        <g id="SVG">
          <path d={svgPaths.p23f92880} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex items-start py-[2px] relative shrink-0" data-name="Container">
      <Svg18 />
    </div>
  );
}

function Button7() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[6px] py-[4px] relative rounded-[4px] shrink-0" data-name="Button">
      <Container48 />
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[8px] relative shrink-0 w-[120px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">
        <p className="leading-[1.5]">Story 3 of 4</p>
      </div>
    </div>
  );
}

function Svg19() {
  return (
    <div className="h-[16px] relative shrink-0 w-[10px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 16">
        <g id="SVG">
          <path d={svgPaths.p20766000} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex items-start py-[2px] relative shrink-0" data-name="Container">
      <Svg19 />
    </div>
  );
}

function Button8() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[6px] py-[4px] relative rounded-[4px] shrink-0" data-name="Button">
      <Container50 />
    </div>
  );
}

function Background() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative rounded-[8px] shrink-0" data-name="Background">
      <Button7 />
      <Container49 />
      <Button8 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[24px] py-[12px] relative w-full">
          <Frame26 />
          <Background />
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-[#bbf7bc] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[9999px] shrink-0" data-name="Background+Border">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#158017] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">UAT</p>
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#6b7280] text-[10px] tracking-[0.8px] whitespace-nowrap">MILESTONE</p>
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#111827] text-[14px] whitespace-nowrap">{`M2: Auth & Onboarding`}</p>
      <BackgroundBorder1 />
    </div>
  );
}

function LpTrack() {
  return <div className="bg-[#22c55e] flex-[1_0_0] h-[6px] min-h-px min-w-px rounded-[3px]" data-name="lpTrack" />;
}

function Frame28() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <LpTrack />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#008330] text-[11px] whitespace-nowrap">100%</p>
    </div>
  );
}

function ProgBlock() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-full" data-name="progBlock">
      <Frame28 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#6b7280] text-[10px] tracking-[0.8px] whitespace-nowrap">STORY</p>
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#111827] text-[14px] whitespace-nowrap">Biometric Login</p>
      <ProgBlock />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#374151] text-[12px] w-[min-content]">
        <ul className="list-disc">
          <li className="mb-[6px] ms-[18px]">
            <span className="leading-[20px]">As a user</span>
          </li>
          <li className="mb-[6px] ms-[18px]">
            <span className="leading-[20px]">I want to sign in using Face ID or fingerprint,</span>
          </li>
          <li className="ms-[18px]">
            <span className="leading-[20px]">so that I can access the app without a password.</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex gap-[6px] items-start relative shrink-0 w-full">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#22c55e] text-[16px] whitespace-nowrap">✓</p>
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px relative text-[#6b7280] text-[12px]">Biometric prompt appears within 500ms of app open</p>
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex gap-[6px] items-start relative shrink-0 w-full">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#22c55e] text-[16px] whitespace-nowrap">✓</p>
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px relative text-[#6b7280] text-[12px]">Supports iOS Face ID and Android fingerprint</p>
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex gap-[6px] items-start relative shrink-0 w-full">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#22c55e] text-[16px] whitespace-nowrap">✓</p>
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px relative text-[#6b7280] text-[12px]">Fallback PIN shown after 3 failed biometric attempts</p>
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex gap-[6px] items-start relative shrink-0 w-full">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#22c55e] text-[16px] whitespace-nowrap">✓</p>
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px relative text-[#6b7280] text-[12px]">Session token refreshes on successful re-auth</p>
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
      <Frame62 />
      <Frame63 />
      <Frame64 />
      <Frame66 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start not-italic relative shrink-0 w-full">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#6b7280] text-[10px] tracking-[0.8px] whitespace-nowrap">ACCEPTANCE CRITERIA</p>
      <Frame61 />
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="bg-[#ffefef] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[9999px] shrink-0" data-name="Background+Border">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#d10f19] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">High</p>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#6b7280] text-[10px] tracking-[0.8px] whitespace-nowrap">EFFORT</p>
      <BackgroundBorder2 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex h-[24px] items-center relative shrink-0 w-[120px]">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#737373] text-[12px]">
        <p className="leading-[16px]">-</p>
      </div>
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame25 />
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame68 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#6b7280] text-[10px] tracking-[0.8px] whitespace-nowrap">ACTIVE AGENTS</p>
      <Frame72 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start not-italic relative shrink-0 text-[#6b7280] w-full whitespace-nowrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[10px] tracking-[0.8px]">MODEL IN USE</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[12px]">Claude Opus 4.6</p>
    </div>
  );
}

function LeftPanel() {
  return (
    <div className="bg-[#f3f4f6] content-stretch flex flex-col gap-[18px] items-start overflow-clip pb-[24px] pt-[16px] px-[20px] relative shrink-0 w-[311px]" data-name="left-panel">
      <Frame34 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 271 1">
            <line id="Line 29" stroke="var(--stroke-0, #D9D9D9)" x2="271" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame30 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 271 1">
            <line id="Line 29" stroke="var(--stroke-0, #D9D9D9)" x2="271" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame29 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 271 1">
            <line id="Line 29" stroke="var(--stroke-0, #D9D9D9)" x2="271" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame31 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 271 1">
            <line id="Line 29" stroke="var(--stroke-0, #D9D9D9)" x2="271" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame32 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 271 1">
            <line id="Line 29" stroke="var(--stroke-0, #D9D9D9)" x2="271" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame33 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute inset-[20%]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4 14.4">
        <g id="Frame">
          <path d={svgPaths.pa23ca00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-white relative rounded-[9999px] shrink-0 size-[24px]" data-name="Background">
      <Frame3 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Background1 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#111827] text-[12px] whitespace-nowrap">Developer</p>
    </div>
  );
}

function LogText() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="logText3">
      <Frame36 />
    </div>
  );
}

function LogItem() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="logItem3">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative w-full">
          <LogText />
        </div>
      </div>
    </div>
  );
}

function LogItem1() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="logItem3">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start pl-[36px] py-[8px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px not-italic relative text-[11px] text-black">BIO-47 acknowledged...</p>
        </div>
      </div>
    </div>
  );
}

function LogItem2() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="logItem3">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start pl-[36px] py-[8px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px not-italic relative text-[11px] text-black">Pulled the error-fallback screen. The PIN button has tabIndex=-1 set erroneously in the component. Quick fix, 10 minutes.</p>
        </div>
      </div>
    </div>
  );
}

function LogItem3() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="logItem3">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start pl-[36px] py-[8px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px not-italic relative text-[11px] text-black">Fixing focus order in error-fallback</p>
        </div>
      </div>
    </div>
  );
}

function LogItem4() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="logItem3">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start pl-[36px] py-[8px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px not-italic relative text-[12px] text-black">Removing tabIndex=-1 from PINFallbackButton and updating focus trap logic. Re-test will follow automatically.</p>
        </div>
      </div>
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#eeb4b8] border-l-2 border-solid inset-0 pointer-events-none" />
      <LogItem />
      <LogItem1 />
      <LogItem2 />
      <LogItem3 />
      <LogItem4 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[12px] top-1/2" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_24_4888)" id="Frame">
          <path d={svgPaths.p5653680} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
        <defs>
          <clipPath id="clip0_24_4888">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-white relative rounded-[9999px] shrink-0 size-[24px]" data-name="Background">
      <Frame4 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Background2 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#111827] text-[12px] whitespace-nowrap">QA</p>
    </div>
  );
}

function LogText1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="logText3">
      <Frame37 />
    </div>
  );
}

function LogItem5() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="logItem3">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative w-full">
          <LogText1 />
        </div>
      </div>
    </div>
  );
}

function Frame47() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[36px] py-[8px] relative w-full">
          <p className="font-['Courier_New:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1d4ed8] text-[12px] whitespace-nowrap">escalated AC4 failure to PM agent</p>
        </div>
      </div>
    </div>
  );
}

function LogItem6() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="logItem3">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start pl-[36px] py-[8px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px not-italic relative text-[12px] text-black">3 ACs passing, 1 failing (VoiceOver focus order). Bug BIO-47 filed. This is an accessibility regression — requires [username]’s decision on sprint impact.</p>
        </div>
      </div>
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#eeb4b8] border-l-2 border-solid inset-0 pointer-events-none" />
      <LogItem5 />
      <Frame47 />
      <LogItem6 />
    </div>
  );
}

function Svg20() {
  return (
    <div className="absolute inset-[20.83%_19.17%_19.17%_20.83%]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4 14.4">
        <g id="SVG">
          <path d={svgPaths.p316c7f00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
          <path d="M8.4 1.2V4.8H12" id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
          <path d="M9.6 7.8H4.8" id="Vector_3" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
          <path d="M9.6 10.2H4.8" id="Vector_4" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
          <path d="M6 5.4H4.8" id="Vector_5" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-white relative rounded-[9999px] shrink-0 size-[24px]" data-name="Background">
      <Svg20 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Background3 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#111827] text-[12px] whitespace-nowrap">PM</p>
    </div>
  );
}

function LogText2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="logText3">
      <Frame38 />
    </div>
  );
}

function LogItem7() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="logItem3">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative w-full">
          <LogText2 />
        </div>
      </div>
    </div>
  );
}

function LogItem8() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="logItem3">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-start pl-[36px] py-[8px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px not-italic relative text-[12px] text-black">{`Biometric Login scoped and assigned — High priority, this milestone. @Developer @QA are tagged. @Architect please confirm the token expiry strategy before implementation begins. Want to make sure we're not creating new infra when AuthSessionManager can handle it.`}</p>
        </div>
      </div>
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#eeb4b8] border-l-2 border-solid inset-0 pointer-events-none" />
      <LogItem7 />
      <LogItem8 />
    </div>
  );
}

function Svg21() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+0.2px)] size-[14.4px] top-[calc(50%+0.2px)]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4 14.4">
        <g id="SVG">
          <path d={svgPaths.p34b0a900} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
          <path d={svgPaths.p3d1f95f0} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
          <path d="M3.6 3.6H3.606" id="Vector_3" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
          <path d="M3.6 10.8H3.606" id="Vector_4" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-white relative rounded-[9999px] shrink-0 size-[24px]" data-name="Background">
      <Svg21 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Background4 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#111827] text-[12px] whitespace-nowrap">Architect</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">(replying to PM)</p>
    </div>
  );
}

function LogText3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="logText3">
      <Frame39 />
    </div>
  );
}

function LogItem9() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="logItem3">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative w-full">
          <LogText3 />
        </div>
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="bg-[#fff8f8] content-stretch flex items-center justify-center p-[4px] relative rounded-[4px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#ffd0d0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Courier_New:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#7e2f2f] text-[10px] whitespace-nowrap">session-management.md</p>
    </div>
  );
}

function Frame44() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[36px] py-[8px] relative w-full">
          <p className="font-['Courier_New:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1d4ed8] text-[12px] whitespace-nowrap">read</p>
          <Frame35 />
        </div>
      </div>
    </div>
  );
}

function LogItem10() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="logItem3">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-start pl-[36px] py-[8px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px not-italic relative text-[12px] text-black">{`Token strategy confirmed. Biometric sessions: 15-min expiry. Refresh tokens: 7-day rolling window. AuthSessionManager already handles rotation and revocation — no new infrastructure needed. @Developer you're clear to begin. Use the existing BiometricAuthStub in src/auth/ as your entry point.`}</p>
        </div>
      </div>
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#eeb4b8] border-l-2 border-solid inset-0 pointer-events-none" />
      <LogItem9 />
      <Frame44 />
      <LogItem10 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute inset-[20%]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4 14.4">
        <g id="Frame">
          <path d={svgPaths.pa23ca00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function Background5() {
  return (
    <div className="bg-white relative rounded-[9999px] shrink-0 size-[24px]" data-name="Background">
      <Frame5 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Background5 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#111827] text-[12px] whitespace-nowrap">Developer</p>
    </div>
  );
}

function LogText4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="logText3">
      <Frame40 />
    </div>
  );
}

function LogItem11() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="logItem3">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative w-full">
          <LogText4 />
        </div>
      </div>
    </div>
  );
}

function Frame41() {
  return (
    <div className="bg-[#fff8f8] content-stretch flex items-center justify-center p-[4px] relative rounded-[4px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#ffd0d0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Courier_New:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#7e2f2f] text-[10px] whitespace-nowrap">biometric.ts</p>
    </div>
  );
}

function Frame45() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[36px] py-[8px] relative w-full">
          <p className="font-['Courier_New:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1d4ed8] text-[12px] whitespace-nowrap">read</p>
          <Frame41 />
        </div>
      </div>
    </div>
  );
}

function LogItem12() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="logItem3">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start pl-[36px] py-[8px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px not-italic relative text-[12px] text-black">{`Found BiometricAuthStub — it's a clean entry point. Starting implementation: Face ID prompt layer, PIN fallback after 3 failures, and session persistence wired to AuthSessionManager. Working across 3 files.`}</p>
        </div>
      </div>
    </div>
  );
}

function Frame42() {
  return (
    <div className="bg-[#fff8f8] content-stretch flex items-center justify-center p-[4px] relative rounded-[4px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#ffd0d0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Courier_New:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#7e2f2f] text-[10px] whitespace-nowrap">src/auth/biometric.ts</p>
    </div>
  );
}

function Frame53() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[36px] py-[8px] relative w-full">
          <p className="font-['Courier_New:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1d4ed8] text-[12px] whitespace-nowrap">write</p>
          <Frame42 />
        </div>
      </div>
    </div>
  );
}

function Frame43() {
  return (
    <div className="bg-[#fff8f8] content-stretch flex items-center justify-center p-[4px] relative rounded-[4px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#ffd0d0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Courier_New:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#7e2f2f] text-[10px] whitespace-nowrap">useBiometric.ts</p>
    </div>
  );
}

function Frame54() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[36px] py-[8px] relative w-full">
          <p className="font-['Courier_New:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1d4ed8] text-[12px] whitespace-nowrap">write</p>
          <Frame43 />
        </div>
      </div>
    </div>
  );
}

function Frame57() {
  return (
    <div className="bg-[#fff8f8] content-stretch flex items-center justify-center p-[4px] relative rounded-[4px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#ffd0d0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Courier_New:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#7e2f2f] text-[10px] whitespace-nowrap">LoginScreen.ts</p>
    </div>
  );
}

function Frame55() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[36px] py-[8px] relative w-full">
          <p className="font-['Courier_New:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1d4ed8] text-[12px] whitespace-nowrap">write</p>
          <Frame57 />
        </div>
      </div>
    </div>
  );
}

function LogItem13() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="logItem3">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start pl-[36px] py-[8px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px not-italic relative text-[12px] text-black">3 files updated. Face ID prompt, PIN fallback flow, and session refresh all wired to AuthSessionManager. Diff is clean — no regressions in adjacent auth flows. QA ready for your suite.</p>
        </div>
      </div>
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#eeb4b8] border-l-2 border-solid inset-0 pointer-events-none" />
      <LogItem11 />
      <Frame45 />
      <LogItem12 />
      <Frame53 />
      <Frame54 />
      <Frame55 />
      <LogItem13 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute inset-[20.83%_19.17%_19.17%_20.83%]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4 14.4">
        <g id="Frame">
          <path d={svgPaths.p2a530680} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function Background6() {
  return (
    <div className="bg-white relative rounded-[9999px] shrink-0 size-[24px]" data-name="Background">
      <Frame6 />
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Background6 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#111827] text-[12px] whitespace-nowrap">QA</p>
    </div>
  );
}

function LogText5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="logText3">
      <Frame59 />
    </div>
  );
}

function LogItem14() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="logItem3">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative w-full">
          <LogText5 />
        </div>
      </div>
    </div>
  );
}

function Frame60() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[36px] py-[8px] relative w-full">
          <p className="font-['Courier_New:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1d4ed8] text-[12px] whitespace-nowrap">started AC verification suite</p>
        </div>
      </div>
    </div>
  );
}

function LogItem15() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="logItem3">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start pl-[36px] py-[8px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px not-italic relative text-[11px] text-black">Running acceptance tests against all 4 ACs. Executing biometric-prompt flow, PIN fallback, and session persistence checks.</p>
        </div>
      </div>
    </div>
  );
}

function Frame73() {
  return (
    <div className="h-[8px] relative shrink-0 w-full">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 515 8">
        <g id="Frame 219199581">
          <line id="Line 30" stroke="var(--stroke-0, #334155)" x2="515" y1="3.5" y2="3.5" />
        </g>
      </svg>
    </div>
  );
}

function FrameMN() {
  return (
    <div className="bg-[#1e1e2e] flex-[1_0_0] min-h-px min-w-px relative rounded-[6px]" data-name="Frame mN088">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[3px] items-start px-[10px] py-[8px] relative w-full">
          <p className="font-['Courier_New:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#9ca3af] text-[10px] whitespace-nowrap">$ npx spryn test --story biometric-auth --acs</p>
          <p className="font-['Courier_New:Bold','Noto_Sans_Symbols2:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#4ade80] text-[10px] whitespace-pre">{`✓  AC1: Biometric prompt on login          PASS`}</p>
          <p className="font-['Courier_New:Bold','Noto_Sans_Symbols2:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#4ade80] text-[10px] whitespace-pre">{`✓  AC2: Fallback to PIN if biometric fails  PASS`}</p>
          <p className="font-['Courier_New:Bold','Noto_Sans_Symbols2:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#4ade80] text-[10px] whitespace-pre">{`✓  AC3: Session persists 30 days           PASS`}</p>
          <p className="font-['Courier_New:Bold','Noto_Sans_Symbols2:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#4ade80] text-[10px] whitespace-pre">{`✓  AC4: Session token refresh on re-auth         PASS`}</p>
          <Frame73 />
          <p className="font-['Courier_New:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#4ade80] text-[10px] whitespace-nowrap">4/4 passed · 0 failed · 98% coverage</p>
        </div>
      </div>
    </div>
  );
}

function LogItem16() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="logItem3">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-start pl-[36px] py-[8px] relative w-full">
          <FrameMN />
        </div>
      </div>
    </div>
  );
}

function LogItem17() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="logItem3">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start pl-[36px] py-[8px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px not-italic relative text-[11px] text-black">All 4 ACs verified — zero failures, 98% coverage. No regressions in adjacent flows (SSO, Magic Link). PM story is clear.</p>
        </div>
      </div>
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#eeb4b8] border-l-2 border-solid inset-0 pointer-events-none" />
      <LogItem14 />
      <Frame60 />
      <LogItem15 />
      <LogItem16 />
      <LogItem17 />
    </div>
  );
}

function Svg22() {
  return (
    <div className="absolute inset-[20.83%_19.17%_19.17%_20.83%]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4 14.4">
        <g id="SVG">
          <path d={svgPaths.p316c7f00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
          <path d="M8.4 1.2V4.8H12" id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
          <path d="M9.6 7.8H4.8" id="Vector_3" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
          <path d="M9.6 10.2H4.8" id="Vector_4" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
          <path d="M6 5.4H4.8" id="Vector_5" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function Background7() {
  return (
    <div className="bg-white relative rounded-[9999px] shrink-0 size-[24px]" data-name="Background">
      <Svg22 />
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Background7 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#111827] text-[12px] whitespace-nowrap">PM</p>
    </div>
  );
}

function LogText6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="logText3">
      <Frame67 />
    </div>
  );
}

function LogItem18() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="logItem3">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-start p-[8px] relative w-full">
          <LogText6 />
        </div>
      </div>
    </div>
  );
}

function LogItem19() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="logItem3">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-start pl-[36px] py-[8px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px not-italic relative text-[12px] text-black whitespace-pre-wrap">{`All checks green ✓  Closing Biometric Login. Every AC verified, coverage at 98%, clean diff — this one moved fast and landed clean. Great execution, team. Story complete.`}</p>
        </div>
      </div>
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#eeb4b8] border-l-2 border-solid inset-0 pointer-events-none" />
      <LogItem18 />
      <LogItem19 />
    </div>
  );
}

function BannerText() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px overflow-clip relative text-[12px]" data-name="bannerText">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#065f46]">Story Completed</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#008330]">All tasks finished · 4 tests passing · Build successful</p>
    </div>
  );
}

function Frame69() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-start leading-[normal] min-h-px min-w-px not-italic relative whitespace-nowrap">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#16a34a] text-[18px]">✓</p>
      <BannerText />
    </div>
  );
}

function PreviewBanner() {
  return (
    <div className="bg-[#f0fdf4] relative rounded-[8px] shrink-0 w-full" data-name="previewBanner">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[14px] py-[12px] relative w-full">
          <Frame69 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#bbf7d0] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
    </div>
  );
}

function Frame56() {
  return (
    <div className="absolute bottom-[0.5px] content-stretch flex flex-col gap-[12px] items-start left-0 pb-[16px] pt-[6px] px-[20px] w-[611px]">
      <Frame46 />
      <Frame49 />
      <Frame50 />
      <Frame51 />
      <Frame52 />
      <Frame58 />
      <Frame65 />
      <PreviewBanner />
    </div>
  );
}

function Frame70() {
  return (
    <div className="bg-[#fafafa] relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[12px] pt-[16px] px-[20px] relative w-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#6b7280] text-[10px] tracking-[0.8px] whitespace-nowrap">AGENT ACTIVITY</p>
        </div>
      </div>
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full">
      <Frame56 />
      <Frame70 />
    </div>
  );
}

function TextareaChatMessageInput() {
  return (
    <div className="bg-white flex-[1_0_0] h-[40px] min-h-px min-w-px relative rounded-[8px]" data-name="Textarea - Chat message input">
      <div className="overflow-auto relative size-full">
        <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] left-[13px] not-italic text-[#737373] text-[12px] top-[19px] w-[118.513px]">
          <p className="leading-[20px]">Type something...</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Svg23() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p1b0900} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 12.6663V3.33301" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function ButtonSendMessage() {
  return (
    <div className="bg-[#d1d5db] overflow-clip relative rounded-[9999px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0 size-[40px]" data-name="Button - Send message">
      <Svg23 />
    </div>
  );
}

function Frame71() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <TextareaChatMessageInput />
      <ButtonSendMessage />
    </div>
  );
}

function BackgroundHorizontalBorder2() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Background+HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#e7e7e7] border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start p-[16px] relative w-full">
        <Frame71 />
      </div>
    </div>
  );
}

function RightPanel() {
  return (
    <div className="bg-[#fafafa] flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="right-panel">
      <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative rounded-[inherit] size-full">
        <Frame48 />
        <BackgroundHorizontalBorder2 />
      </div>
      <div aria-hidden="true" className="absolute border-[#e7e7e7] border-l border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[922px]">
      <LeftPanel />
      <RightPanel />
    </div>
  );
}

function MilestoneModal() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white left-1/2 rounded-[8px] top-1/2 w-[922px]" data-name="Milestone Modal">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <Frame7 />
        <Frame27 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

export default function StoryDetailCompletedMilestone() {
  return (
    <div className="bg-[#f2f2f2] relative size-full" data-name="Story Detail - Completed Milestone">
      <Sidebar />
      <MainContentArea />
      <Frame23 />
      <div className="absolute bg-[rgba(0,0,0,0.8)] h-[900px] left-0 top-0 w-[1441px]" data-name="Overlay" />
      <MilestoneModal />
    </div>
  );
}