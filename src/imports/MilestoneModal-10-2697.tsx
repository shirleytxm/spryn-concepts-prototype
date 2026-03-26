import svgPaths from "./svg-9m2vrc4hgp";
import imgBackgroundBorder from "figma:asset/4a0b625d1a14616d01c408a075f1459f85bd6c5e.png";
import imgBackgroundBorder1 from "figma:asset/a8e0e7565684673839b7b5b3bf9c6932e53c0e10.png";
import imgBackgroundBorder2 from "figma:asset/b8b63f1eb93b65b2e908b0d691deef97f32c3a33.png";

function Svg() {
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

function Button() {
  return (
    <div className="opacity-70 relative rounded-[4px] shrink-0 size-[16px]" data-name="Button">
      <Svg />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[28px]">Milestone Details</p>
      </div>
      <Button />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[18px] whitespace-nowrap">
        <p className="leading-[28px]">{`M1: Infrastructure & Authentication`}</p>
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#dcfce7] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[9999px] shrink-0" data-name="Background+Border">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#15803d] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Completed</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <Heading />
      <BackgroundBorder />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[14px] w-[145.06px]">
        <p className="leading-[20px] whitespace-pre-wrap">Feb 10 - Feb 24, 2026</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative">
        <Container1 />
        <Container2 />
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">100%</p>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#ccc] content-stretch flex flex-col h-[6px] items-start justify-center overflow-clip relative rounded-[9999px] shrink-0 w-[128px]" data-name="Background">
      <div className="bg-[#22c55e] flex-[1_0_0] min-h-px min-w-px rounded-[9999px] w-full" data-name="Background" />
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end relative">
        <Margin />
        <Background />
      </div>
    </div>
  );
}

function OverlayHorizontalBorder() {
  return (
    <div className="bg-[rgba(243,243,243,0.5)] relative shrink-0 w-full" data-name="Overlay+HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[21px] pt-[20px] px-[20px] relative w-full">
        <Container />
        <Container3 />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex font-['Inter:Semi_Bold',sans-serif] font-semibold items-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[12px] tracking-[0.6px] uppercase w-full" data-name="Heading 4">
      <div className="flex flex-[1_0_0] flex-col justify-center min-h-px min-w-px relative">
        <p className="leading-[16px] whitespace-pre-wrap">Deliverables</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-[80px]">
        <p className="leading-[16px] whitespace-pre-wrap">Effort</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-[100px]">
        <p className="leading-[16px] whitespace-pre-wrap">Status</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-[120px]">
        <p className="leading-[16px] whitespace-pre-wrap">Active Agent</p>
      </div>
    </div>
  );
}

function Svg1() {
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

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative w-[16px]" data-name="Container">
      <Svg1 />
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Item">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <Container6 />
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#374151] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">{`User Login & Registration Flow`}</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[#f6f6f6] flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]">
      <div aria-hidden="true" className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[12px] relative w-full">
          <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#374151] text-[14px]">
            <ul className="list-disc whitespace-pre-wrap">
              <li className="mb-0 ms-[21px]">
                <span className="leading-[20px]">As a Frontend Developer</span>
              </li>
              <li className="mb-0 ms-[21px]">
                <span className="leading-[20px]">I want to write concise design aesthetic, rules and design system guidance to CLAUDE.md, customize Colors/Theme in tailwind.css to project context, create a modular entry point</span>
              </li>
              <li className="ms-[21px]">
                <span className="leading-[20px]">So that the project has a maintainable design foundation and a visually cohesive starting page.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function Item1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] relative w-full">
          <Frame5 />
        </div>
      </div>
    </div>
  );
}

function Svg2() {
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

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[10px] relative shrink-0" data-name="Margin">
      <Svg2 />
    </div>
  );
}

function Item2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] relative w-full">
          <Margin1 />
          <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#374151] text-[14px]">
            <p className="leading-[20px] whitespace-pre-wrap">User can view CLAUDE.md containing design system guidelines and color tokens</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Svg3() {
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

function Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[10px] relative shrink-0" data-name="Margin">
      <Svg3 />
    </div>
  );
}

function Item3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] relative w-full">
          <Margin2 />
          <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#374151] text-[14px]">
            <p className="leading-[20px] whitespace-pre-wrap">Tailwind config reflects project colors/theme and builds without errors</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Svg4() {
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

function Margin3() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[10px] relative shrink-0" data-name="Margin">
      <Svg4 />
    </div>
  );
}

function Item4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] relative w-full">
          <Margin3 />
          <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#374151] text-[14px]">
            <p className="leading-[20px] whitespace-pre-wrap">Home.tsx renders a responsive landing page at root path with modular component structure</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Svg5() {
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

function Margin4() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[10px] relative shrink-0" data-name="Margin">
      <Svg5 />
    </div>
  );
}

function Item5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] relative w-full">
          <Margin4 />
          <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#374151] text-[14px]">
            <p className="leading-[20px] whitespace-pre-wrap">Design tokens and styles are organized into separate files and imported correctly</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Svg6() {
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

function Margin5() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[10px] relative shrink-0" data-name="Margin">
      <Svg6 />
    </div>
  );
}

function Item6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] relative w-full">
          <Margin5 />
          <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#374151] text-[14px]">
            <p className="leading-[20px] whitespace-pre-wrap">Clicking nav leads to expected content on the landing page</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
      <Item />
      <Item1 />
      <Item2 />
      <Item3 />
      <Item4 />
      <Item5 />
      <Item6 />
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-[#f7e3bb] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[9999px] shrink-0" data-name="Background+Border">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#805c15] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Medium</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-start justify-center relative shrink-0 w-[80px]">
      <BackgroundBorder1 />
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="bg-[#dcfce7] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[9999px] shrink-0" data-name="Background+Border">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#15803d] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Completed</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-start justify-center relative shrink-0 w-[100px]">
      <BackgroundBorder2 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex h-[24px] items-center px-[8px] relative shrink-0 w-[120px]">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">-</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Frame3 />
      <Frame6 />
      <Frame7 />
      <Frame8 />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="List">
      <Frame4 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative" data-name="Container">
      <Heading1 />
      <List />
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex items-start p-[20px] relative w-full">
        <Container5 />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[12px] tracking-[0.6px] uppercase w-full">
        <p className="leading-[16px] whitespace-pre-wrap">UI Designs</p>
      </div>
    </div>
  );
}

function LoginScreen() {
  return <div className="h-[118px] shrink-0 w-full" data-name="Login Screen" />;
}

function Svg7() {
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
      <Svg7 />
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute inset-px" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Shadow />
      </div>
    </div>
  );
}

function BackgroundBorder3() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Background+Border">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBackgroundBorder} />
      <LoginScreen />
      <Container9 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#374151] text-[12px] w-full">
        <p className="leading-[16px] whitespace-pre-wrap">Login Screen</p>
      </div>
    </div>
  );
}

function DesignCard() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative self-stretch shrink-0 w-[192px]" data-name="Design Card 1">
      <BackgroundBorder3 />
      <Container10 />
    </div>
  );
}

function SignupFlow() {
  return <div className="h-[118px] shrink-0 w-full" data-name="Signup Flow" />;
}

function Svg8() {
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
      <Svg8 />
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute inset-px" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Shadow1 />
      </div>
    </div>
  );
}

function BackgroundBorder4() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Background+Border">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBackgroundBorder1} />
      <SignupFlow />
      <Container11 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#374151] text-[12px] w-full">
        <p className="leading-[16px] whitespace-pre-wrap">Signup Flow</p>
      </div>
    </div>
  );
}

function DesignCard1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative self-stretch shrink-0 w-[192px]" data-name="Design Card 2">
      <BackgroundBorder4 />
      <Container12 />
    </div>
  );
}

function Onboarding() {
  return <div className="h-[118px] shrink-0 w-full" data-name="Onboarding" />;
}

function Svg9() {
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
      <Svg9 />
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute inset-px" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Shadow2 />
      </div>
    </div>
  );
}

function BackgroundBorder5() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Background+Border">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBackgroundBorder2} />
      <Onboarding />
      <Container13 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#374151] text-[12px] w-full">
        <p className="leading-[16px] whitespace-pre-wrap">Onboarding Steps</p>
      </div>
    </div>
  );
}

function DesignCard2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative self-stretch shrink-0 w-[192px]" data-name="Design Card 3">
      <BackgroundBorder5 />
      <Container14 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex gap-[16px] items-start overflow-clip pb-[8px] relative shrink-0 w-full" data-name="Container">
      <DesignCard />
      <DesignCard1 />
      <DesignCard2 />
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-[#f6f6f6] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[20px] relative w-full">
        <Heading2 />
        <Container8 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <Frame2 />
        <Container7 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Background+Border+Shadow">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] w-full">
        <OverlayHorizontalBorder />
        <Container4 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

export default function MilestoneModal() {
  return (
    <div className="bg-white relative rounded-[8px] size-full" data-name="Milestone Modal">
      <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip p-[17px] relative rounded-[inherit] size-full">
        <Frame1 />
        <BackgroundBorderShadow />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
    </div>
  );
}