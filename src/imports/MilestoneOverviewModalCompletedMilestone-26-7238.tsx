import svgPaths from "./svg-7ugp41kaun";
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

function Frame22() {
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
      <Frame22 />
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

function Frame8() {
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

function Frame7() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pl-[40px] pr-[16px] py-[12px] relative w-full">
          <Frame8 />
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
        <Frame7 />
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

function Frame10() {
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

function Frame13() {
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

function Frame14() {
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

function Frame15() {
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

function Frame16() {
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
      <Frame13 />
      <Frame14 />
      <Frame15 />
      <Frame16 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute bg-[#f4f4f4] content-stretch flex gap-[10px] items-center justify-center left-[-2px] px-[6px] py-[12px] rounded-[4px] top-[53px] w-[47px]">
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">{`M1: Infrastructure & Auth`}</p>
      </div>
    </div>
  );
}

function Frame6() {
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

function Frame11() {
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

function Frame12() {
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

function Frame17() {
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

function Frame19() {
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

function Frame18() {
  return (
    <div className="absolute content-stretch flex flex-col h-[920px] items-center left-[50px] top-0 w-[119px]">
      <Frame19 />
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
      <Frame18 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute h-[920px] left-[347px] top-0 w-[1037px]">
      <Container44 />
      <Frame5 />
      <Frame6 />
      <Frame11 />
      <Frame12 />
      <Frame17 />
      <TimelineHeader />
    </div>
  );
}

function GanttChartView() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px overflow-clip relative w-full z-[1]" data-name="Gantt Chart View">
      <Frame10 />
      <Frame9 />
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

function Frame20() {
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

function Frame24() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[28px]">{`M2: Auth & Onboarding`}</p>
      </div>
    </div>
  );
}

function Svg17() {
  return (
    <div className="absolute left-0 size-[16px] top-0" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d="M12 4L4 12" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M4 4L12 12" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="opacity-70 relative rounded-[4px] shrink-0 size-[16px]" data-name="Button">
      <Svg17 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pt-[24px] px-[24px] relative w-full">
          <Frame24 />
          <Button6 />
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

function Container48() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">
        <p className="leading-[20px]">Phase</p>
      </div>
      <BackgroundBorder1 />
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 text-[#6b7280]">
      <p className="leading-[normal] relative shrink-0">Feb 10 – Feb 24, 2026</p>
      <ul className="block leading-[0] relative shrink-0">
        <li className="list-disc ms-[21px]">
          <span className="leading-[normal]">14 Days</span>
        </li>
      </ul>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal items-center justify-between not-italic relative shrink-0 text-[14px] w-full whitespace-nowrap" data-name="Container">
      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-black">
        <p className="leading-[20px]">Estimated Sprint Duration:</p>
      </div>
      <Frame56 />
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal items-center justify-between not-italic relative shrink-0 text-[14px] w-full whitespace-nowrap" data-name="Container">
      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-black">
        <p className="leading-[20px]">Estimated Story Points</p>
      </div>
      <p className="leading-[normal] relative shrink-0 text-[#6b7280]">8</p>
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal items-center justify-between not-italic relative shrink-0 text-[14px] w-full" data-name="Container">
      <div className="flex flex-col h-[20px] justify-center leading-[0] relative shrink-0 text-black w-[145.06px]">
        <p className="leading-[20px]">Model In Use:</p>
      </div>
      <p className="leading-[normal] relative shrink-0 text-[#6b7280] whitespace-nowrap">Claude Opus 4.6</p>
    </div>
  );
}

function ProgTrack() {
  return <div className="bg-[#22c55e] h-[6px] rounded-[3px] shrink-0 w-[350px]" data-name="progTrack" />;
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <ProgTrack />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#008330] text-[12px] whitespace-nowrap">100%</p>
    </div>
  );
}

function ProgRow() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-name="progRow">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">
        <p className="leading-[20px]">Overall Progress:</p>
      </div>
      <Frame23 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Container48 />
      <Container49 />
      <Container50 />
      <Container51 />
      <ProgRow />
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center py-[4px] relative shrink-0 w-[16px]">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#16a34a] text-[16px] w-full">🔗</p>
    </div>
  );
}

function BannerText() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[normal] min-h-px min-w-px not-italic overflow-clip relative text-[14px] whitespace-nowrap" data-name="bannerText">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#065f46]">A Preview Is Ready!</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#008330]">staging.spryn.io/m2-auth-review</p>
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-start min-h-px min-w-px relative">
      <Frame55 />
      <BannerText />
    </div>
  );
}

function Btn() {
  return (
    <div className="bg-[#16a34a] content-stretch flex flex-col items-center justify-center overflow-clip px-[20px] py-[12px] relative rounded-[8px] shrink-0" data-name="btn">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Open ↗</p>
    </div>
  );
}

function PreviewBanner() {
  return (
    <div className="bg-[#f0fdf4] relative rounded-[8px] shrink-0 w-full" data-name="previewBanner">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[14px] py-[12px] relative w-full">
          <Frame54 />
          <Btn />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#bbf7d0] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
    </div>
  );
}

function FrameG0Etp() {
  return <div className="bg-[#e5e7eb] h-px shrink-0 w-full" data-name="Frame G0ETP" />;
}

function ChangesCol() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="changesCol">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#374151] text-[14px] w-[494px]">
        <ul className="list-disc whitespace-pre-wrap">
          <li className="mb-[8px] ms-[21px]">
            <span className="leading-[20px]">{`Added  src/auth/sso-provider.ts — OAuth2 callback + session binding`}</span>
          </li>
          <li className="mb-[8px] ms-[21px]">
            <span className="leading-[20px]">{`Added  src/auth/magic-link-handler.ts — token gen, expiry, reuse guard`}</span>
          </li>
          <li className="mb-[8px] ms-[21px]">
            <span className="leading-[20px]">{`Updated  src/auth/session.ts — concurrent session prevention`}</span>
          </li>
          <li className="ms-[21px]">
            <span className="leading-[20px] text-[#374151]">{`Added  src/auth/tests/ — 24 tests, all passing`}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function FrameZOpvj() {
  return <div className="bg-[#e5e7eb] h-px shrink-0 w-full" data-name="Frame zOPVJ" />;
}

function Svg18() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="SVG">
          <path d={svgPaths.p6aae680} fill="var(--fill-0, #22C55E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Margin9() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[10px] relative shrink-0" data-name="Margin">
      <Svg18 />
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Item">
      <Margin9 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#374151] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">{`User Login & Registration Flow`}</p>
      </div>
    </div>
  );
}

function Svg19() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="SVG">
          <path d={svgPaths.p6aae680} fill="var(--fill-0, #22C55E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Margin10() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[10px] relative shrink-0" data-name="Margin">
      <Svg19 />
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Item">
      <Margin10 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#374151] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">{`SSO & Magic Link`}</p>
      </div>
    </div>
  );
}

function Svg20() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="SVG">
          <path d={svgPaths.p6aae680} fill="var(--fill-0, #22C55E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Margin11() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[10px] relative shrink-0" data-name="Margin">
      <Svg20 />
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Item">
      <Margin11 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#374151] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Role Based Access Control</p>
      </div>
    </div>
  );
}

function Svg21() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="SVG">
          <path d={svgPaths.p6aae680} fill="var(--fill-0, #22C55E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Margin12() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[10px] relative shrink-0" data-name="Margin">
      <Svg21 />
    </div>
  );
}

function Item3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Item">
      <Margin12 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#374151] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Onboarding Setup</p>
      </div>
    </div>
  );
}

function StoriesCheck() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-name="storiesCheck">
      <Item />
      <Item1 />
      <Item2 />
      <Item3 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.p2b7e84c0} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
          <path d={svgPaths.p28ae6680} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
        </g>
      </svg>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-white relative rounded-[9999px] shrink-0 size-[24px]" data-name="Background">
      <Frame3 />
    </div>
  );
}

function Ghrow() {
  return (
    <div className="bg-[#ededed] relative rounded-[8px] shrink-0 w-full" data-name="ghrow">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[14px] py-[10px] relative w-full">
          <Background />
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#2563eb] text-[12px] whitespace-pre">
            <span className="decoration-solid leading-[normal] underline">{`View GitHub PR #147  - feat/m2-auth-onboarding-screens`}</span>
            <span className="leading-[normal]">{`  ↗`}</span>
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function PrSec() {
  return (
    <div className="bg-[#f9fafb] relative rounded-[8px] shrink-0 w-full" data-name="prSec">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-start px-[16px] py-[14px] relative w-full">
          <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-black tracking-[-0.5px] whitespace-nowrap">
            <p className="leading-[28px]">Milestone Summary</p>
          </div>
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#374151] text-[14px] w-[min-content]">
            <p className="leading-[24px]">Implements full authentication layer for Spryn platform covering email/password login, SSO via OAuth2 providers, and magic link authentication with session management.</p>
          </div>
          <FrameG0Etp />
          <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-black tracking-[-0.5px] whitespace-nowrap">
            <p className="leading-[28px]">What changed</p>
          </div>
          <ChangesCol />
          <FrameZOpvj />
          <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-black tracking-[-0.5px] whitespace-nowrap">
            <p className="leading-[28px]">Stories completed</p>
          </div>
          <StoriesCheck />
          <Ghrow />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
    </div>
  );
}

function LoginScreen() {
  return <div className="h-[118px] shrink-0 w-full" data-name="Login Screen" />;
}

function Svg22() {
  return (
    <div className="h-[16px] relative shrink-0 w-[14px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 16">
        <g id="SVG">
          <path d={svgPaths.p3339a100} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Shadow() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-0 relative shadow-[0px_2px_2px_0px_rgba(0,0,0,0.06),0px_4px_3px_0px_rgba(0,0,0,0.07)] shrink-0" data-name="Shadow">
      <Svg22 />
    </div>
  );
}

function Container53() {
  return (
    <div className="absolute inset-px" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Shadow />
      </div>
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Background+Border">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgScreenshot20260224At103629Pm1} />
      <LoginScreen />
      <Container53 />
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#374151] text-[12px] w-full">
        <p className="leading-[16px]">Login Screen</p>
      </div>
    </div>
  );
}

function DesignCard() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative self-stretch shrink-0 w-[192px]" data-name="Design Card 1">
      <BackgroundBorder2 />
      <Container54 />
    </div>
  );
}

function SignupFlow() {
  return <div className="h-[118px] shrink-0 w-full" data-name="Signup Flow" />;
}

function Svg23() {
  return (
    <div className="h-[16px] relative shrink-0 w-[14px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 16">
        <g id="SVG">
          <path d={svgPaths.p3339a100} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Shadow1() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-0 relative shadow-[0px_2px_2px_0px_rgba(0,0,0,0.06),0px_4px_3px_0px_rgba(0,0,0,0.07)] shrink-0" data-name="Shadow">
      <Svg23 />
    </div>
  );
}

function Container55() {
  return (
    <div className="absolute inset-px" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Shadow1 />
      </div>
    </div>
  );
}

function BackgroundBorder3() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Background+Border">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgScreenshot20260224At103645Pm1} />
      <SignupFlow />
      <Container55 />
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#374151] text-[12px] w-full">
        <p className="leading-[16px]">Signup Flow</p>
      </div>
    </div>
  );
}

function DesignCard1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative self-stretch shrink-0 w-[192px]" data-name="Design Card 2">
      <BackgroundBorder3 />
      <Container56 />
    </div>
  );
}

function Onboarding() {
  return <div className="h-[118px] shrink-0 w-full" data-name="Onboarding" />;
}

function Svg24() {
  return (
    <div className="h-[16px] relative shrink-0 w-[14px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 16">
        <g id="SVG">
          <path d={svgPaths.p3339a100} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Shadow2() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-0 relative shadow-[0px_2px_2px_0px_rgba(0,0,0,0.06),0px_4px_3px_0px_rgba(0,0,0,0.07)] shrink-0" data-name="Shadow">
      <Svg24 />
    </div>
  );
}

function Container57() {
  return (
    <div className="absolute inset-px" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Shadow2 />
      </div>
    </div>
  );
}

function BackgroundBorder4() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Background+Border">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgScreenshot20260224At103830Pm1} />
      <Onboarding />
      <Container57 />
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#374151] text-[12px] w-full">
        <p className="leading-[16px]">Onboarding Steps</p>
      </div>
    </div>
  );
}

function DesignCard2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative self-stretch shrink-0 w-[192px]" data-name="Design Card 3">
      <BackgroundBorder4 />
      <Container58 />
    </div>
  );
}

function LoginScreen1() {
  return <div className="h-[118px] shrink-0 w-full" data-name="Login Screen" />;
}

function Svg25() {
  return (
    <div className="h-[16px] relative shrink-0 w-[14px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 16">
        <g id="SVG">
          <path d={svgPaths.p3339a100} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Shadow3() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-0 relative shadow-[0px_2px_2px_0px_rgba(0,0,0,0.06),0px_4px_3px_0px_rgba(0,0,0,0.07)] shrink-0" data-name="Shadow">
      <Svg25 />
    </div>
  );
}

function Container59() {
  return (
    <div className="absolute inset-px" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Shadow3 />
      </div>
    </div>
  );
}

function BackgroundBorder5() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Background+Border">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgScreenshot20260224At103629Pm1} />
      <LoginScreen1 />
      <Container59 />
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#374151] text-[12px] w-full">
        <p className="leading-[16px]">Login Screen</p>
      </div>
    </div>
  );
}

function DesignCard3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative self-stretch shrink-0 w-[192px]" data-name="Design Card 4">
      <BackgroundBorder5 />
      <Container60 />
    </div>
  );
}

function Onboarding1() {
  return <div className="h-[118px] shrink-0 w-full" data-name="Onboarding" />;
}

function Svg26() {
  return (
    <div className="h-[16px] relative shrink-0 w-[14px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 16">
        <g id="SVG">
          <path d={svgPaths.p3339a100} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Shadow4() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-0 relative shadow-[0px_2px_2px_0px_rgba(0,0,0,0.06),0px_4px_3px_0px_rgba(0,0,0,0.07)] shrink-0" data-name="Shadow">
      <Svg26 />
    </div>
  );
}

function Container61() {
  return (
    <div className="absolute inset-px" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Shadow4 />
      </div>
    </div>
  );
}

function BackgroundBorder6() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Background+Border">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgScreenshot20260224At103830Pm1} />
      <Onboarding1 />
      <Container61 />
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#374151] text-[12px] w-full">
        <p className="leading-[16px]">Onboarding Steps</p>
      </div>
    </div>
  );
}

function DesignCard4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative self-stretch shrink-0 w-[192px]" data-name="Design Card 5">
      <BackgroundBorder6 />
      <Container62 />
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex gap-[16px] h-[150px] items-start overflow-clip pb-[8px] relative shrink-0 w-full" data-name="Container">
      <DesignCard />
      <DesignCard1 />
      <DesignCard2 />
      <DesignCard3 />
      <DesignCard4 />
    </div>
  );
}

function Icon() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[20px] top-1/2" data-name="icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icon">
          <path d={svgPaths.p1b8fd80} fill="var(--fill-0, #737373)" id="Vector (Stroke)" />
          <path d={svgPaths.p3f45c1c0} fill="var(--fill-0, #737373)" id="Vector (Stroke)_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame58() {
  return (
    <div className="-translate-y-1/2 absolute bg-[rgba(255,255,255,0.85)] right-[10px] rounded-[200px] size-[36px] top-[calc(50%+6px)]">
      <div aria-hidden="true" className="absolute border border-[#737373] border-solid inset-0 pointer-events-none rounded-[200px]" />
      <Icon />
    </div>
  );
}

function PrSec1() {
  return (
    <div className="bg-[#f9fafb] relative rounded-[8px] shrink-0 w-full" data-name="prSec">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-start px-[16px] py-[14px] relative w-full">
          <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-black tracking-[-0.5px] whitespace-nowrap">
            <p className="leading-[28px]">Screen Designs</p>
          </div>
          <Container52 />
          <Frame58 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex font-['Inter:Semi_Bold',sans-serif] font-semibold gap-[16px] items-center relative shrink-0 text-[#6b7280] text-[12px] tracking-[0.6px] uppercase" data-name="Heading 4">
      <div className="flex flex-col justify-center relative shrink-0 w-[85px]">
        <p className="leading-[16px]">Status</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-[85px]">
        <p className="leading-[16px]">Effort</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-[120px]">
        <p className="leading-[16px]">Active Agent</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex gap-[32px] items-center leading-[0] not-italic relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Bold',sans-serif] font-bold justify-center min-h-px min-w-px relative text-[18px] text-black tracking-[-0.5px]">
        <p className="leading-[28px]">Deliverables</p>
      </div>
      <Heading1 />
    </div>
  );
}

function Chevron() {
  return (
    <div className="relative size-[20px]" data-name="chevron">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="chevron">
          <path d="M5 12.5L10 7.5L15 12.5" id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-[500px]">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-180">
          <Chevron />
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#374151] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">{`User Login & Registration Flow`}</p>
      </div>
    </div>
  );
}

function BackgroundBorder7() {
  return (
    <div className="bg-[#dcfce7] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[9999px] shrink-0" data-name="Background+Border">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#15803d] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Completed</p>
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[85px]">
      <BackgroundBorder7 />
    </div>
  );
}

function BackgroundBorder8() {
  return (
    <div className="bg-[#dcfce7] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[9999px] shrink-0 w-[40px]" data-name="Background+Border">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#15803d] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Low</p>
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[85px]">
      <BackgroundBorder8 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Frame38 />
      <Frame39 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">-</p>
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0 w-full">
      <Frame41 />
      <Frame26 />
    </div>
  );
}

function Svg27() {
  return (
    <div className="relative size-[16px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p203476e0} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M12.6667 8H3.33333" id="Vector_2" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[14px] whitespace-nowrap">
        <p className="leading-[1.5]">View Details</p>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <Svg27 />
        </div>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="bg-[#f9fafb] relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col items-end size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-end p-[20px] relative w-full">
          <Frame27 />
          <Frame37 />
        </div>
      </div>
    </div>
  );
}

function Chevron1() {
  return (
    <div className="relative size-[20px]" data-name="chevron">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="chevron">
          <path d="M5 12.5L10 7.5L15 12.5" id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-[500px]">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-180">
          <Chevron1 />
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#374151] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">{`SSO & Magic Link`}</p>
      </div>
    </div>
  );
}

function BackgroundBorder9() {
  return (
    <div className="bg-[#dcfce7] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[9999px] shrink-0" data-name="Background+Border">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#15803d] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Completed</p>
      </div>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[85px]">
      <BackgroundBorder9 />
    </div>
  );
}

function BackgroundBorder10() {
  return (
    <div className="bg-[#dcfce7] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[9999px] shrink-0 w-[40px]" data-name="Background+Border">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#15803d] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Low</p>
      </div>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[85px]">
      <BackgroundBorder10 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Frame40 />
      <Frame43 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">-</p>
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0 w-full">
      <Frame42 />
      <Frame29 />
    </div>
  );
}

function Svg28() {
  return (
    <div className="relative size-[16px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p203476e0} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M12.6667 8H3.33333" id="Vector_2" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[14px] whitespace-nowrap">
        <p className="leading-[1.5]">View Details</p>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <Svg28 />
        </div>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="bg-[#f9fafb] relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col items-end size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-end p-[20px] relative w-full">
          <Frame28 />
          <Frame46 />
        </div>
      </div>
    </div>
  );
}

function Chevron2() {
  return (
    <div className="relative size-[20px]" data-name="chevron">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="chevron">
          <path d="M5 12.5L10 7.5L15 12.5" id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-[500px]">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-180">
          <Chevron2 />
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#374151] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Biometric Login</p>
      </div>
    </div>
  );
}

function BackgroundBorder11() {
  return (
    <div className="bg-[#dcfce7] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[9999px] shrink-0" data-name="Background+Border">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#15803d] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Completed</p>
      </div>
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[85px]">
      <BackgroundBorder11 />
    </div>
  );
}

function BackgroundBorder12() {
  return (
    <div className="bg-[#ffefef] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[9999px] shrink-0" data-name="Background+Border">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#d10f19] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">High</p>
      </div>
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[85px]">
      <BackgroundBorder12 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Frame48 />
      <Frame49 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">-</p>
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0 w-full">
      <Frame47 />
      <Frame33 />
    </div>
  );
}

function Svg29() {
  return (
    <div className="relative size-[16px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p203476e0} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M12.6667 8H3.33333" id="Vector_2" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[14px] whitespace-nowrap">
        <p className="leading-[1.5]">View Details</p>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <Svg29 />
        </div>
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="bg-[#f9fafb] relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col items-end size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-end p-[20px] relative w-full">
          <Frame30 />
          <Frame50 />
        </div>
      </div>
    </div>
  );
}

function Chevron3() {
  return (
    <div className="relative size-[20px]" data-name="chevron">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="chevron">
          <path d="M5 12.5L10 7.5L15 12.5" id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-[500px]">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-180">
          <Chevron3 />
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#374151] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Onboarding Setup</p>
      </div>
    </div>
  );
}

function BackgroundBorder13() {
  return (
    <div className="bg-[#dcfce7] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[9999px] shrink-0" data-name="Background+Border">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#15803d] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Completed</p>
      </div>
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[85px]">
      <BackgroundBorder13 />
    </div>
  );
}

function BackgroundBorder14() {
  return (
    <div className="bg-[#f7e3bb] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[9999px] shrink-0" data-name="Background+Border">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#805c15] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Medium</p>
      </div>
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[85px]">
      <BackgroundBorder14 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Frame52 />
      <Frame53 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">-</p>
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0 w-full">
      <Frame51 />
      <Frame36 />
    </div>
  );
}

function Svg30() {
  return (
    <div className="relative size-[16px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p203476e0} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M12.6667 8H3.33333" id="Vector_2" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[14px] whitespace-nowrap">
        <p className="leading-[1.5]">View Details</p>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <Svg30 />
        </div>
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="bg-[#f9fafb] relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col items-end size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-end p-[20px] relative w-full">
          <Frame35 />
          <Frame57 />
        </div>
      </div>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full">
      <Frame21 />
      <Frame31 />
      <Frame32 />
      <Frame34 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[24px] items-start pb-[24px] px-[24px] relative w-full">
        <Frame25 />
        <div className="h-0 relative shrink-0 w-full">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 874 1">
              <line id="Line 29" stroke="var(--stroke-0, #D9D9D9)" x2="874" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <PreviewBanner />
        <PrSec />
        <PrSec1 />
        <Heading />
        <Frame45 />
      </div>
    </div>
  );
}

function MilestoneModal() {
  return (
    <div className="-translate-x-1/2 absolute bg-white left-1/2 rounded-[8px] top-[24px] w-[922px]" data-name="Milestone Modal">
      <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative rounded-[inherit] w-full">
        <Frame4 />
        <Frame44 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

export default function MilestoneOverviewModalCompletedMilestone() {
  return (
    <div className="bg-[#f2f2f2] relative size-full" data-name="Milestone Overview Modal - Completed Milestone">
      <Sidebar />
      <MainContentArea />
      <Frame20 />
      <div className="absolute bg-[rgba(0,0,0,0.8)] h-[900px] left-0 top-0 w-[1441px]" data-name="Overlay" />
      <MilestoneModal />
    </div>
  );
}