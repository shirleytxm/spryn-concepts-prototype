import svgPaths from "./svg-yl5locevo6";
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

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[28px]">Milestone Details</p>
      </div>
      <Button />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame2 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[18px] whitespace-nowrap">
        <p className="leading-[28px]">{`M2: Auth & Onboarding`}</p>
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#f7e3bb] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[9999px] shrink-0" data-name="Background+Border">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#805c15] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">In Progress</p>
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
        <p className="leading-[20px]">25%</p>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#ccc] content-stretch flex flex-col h-[6px] items-start justify-center overflow-clip relative rounded-[9999px] shrink-0 w-[128px]" data-name="Background">
      <div className="bg-[#d10f19] flex-[1_0_0] min-h-px min-w-px rounded-[9999px] w-[34px]" data-name="Background" />
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

function Frame8() {
  return (
    <div className="bg-[#f6f6f6] flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]">
      <div aria-hidden="true" className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[12px] relative w-full">
          <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#374151] text-[14px]">
            <ul className="list-disc whitespace-pre-wrap">
              <li className="mb-0 ms-[21px]">
                <span className="leading-[20px]">As a registered user</span>
              </li>
              <li className="mb-0 ms-[21px]">
                <span className="leading-[20px]">I want to log in securely using email/password or existing session</span>
              </li>
              <li className="ms-[21px]">
                <span className="leading-[20px]">So that I can access my authenticated dashboard and personal data</span>
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
          <Frame8 />
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
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#374151] text-[14px] whitespace-nowrap">
            <p className="leading-[20px]">User can log in with valid email and password</p>
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
            <p className="leading-[20px] whitespace-pre-wrap">System validates credentials and shows inline error for invalid credentials</p>
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
            <p className="leading-[20px] whitespace-pre-wrap">System prevents concurrent sessions and notifies user on suspicious activity</p>
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
            <p className="leading-[20px] whitespace-pre-wrap">Data is persisted securely with user session tokens stored server-side</p>
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
            <p className="leading-[20px] whitespace-pre-wrap">{`Clicking 'Forgot password' navigates to password reset flow and shows reset instructions`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame5() {
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

function Frame12() {
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

function Frame15() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-start justify-center relative shrink-0 w-[100px]">
      <BackgroundBorder2 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex h-[24px] items-center px-[8px] relative shrink-0 w-[120px]">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">-</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Frame5 />
      <Frame12 />
      <Frame15 />
      <Frame16 />
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

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative w-[16px]" data-name="Container">
      <Svg7 />
    </div>
  );
}

function Item7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Item">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <Container7 />
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#374151] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">{`SSO & Magic Link`}</p>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-[#f6f6f6] flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]">
      <div aria-hidden="true" className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[12px] relative w-full">
          <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#374151] text-[14px]">
            <ul className="list-disc whitespace-pre-wrap">
              <li className="mb-0 ms-[21px]">
                <span className="leading-[20px]">As a registered user</span>
              </li>
              <li className="mb-0 ms-[21px]">
                <span className="leading-[20px]">I want to sign in via SSO or magic link</span>
              </li>
              <li className="ms-[21px]">
                <span className="leading-[20px]">So that I can access the platform without remembering credentials</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function Item8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] relative w-full">
          <Frame9 />
        </div>
      </div>
    </div>
  );
}

function Svg8() {
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

function Margin6() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[10px] relative shrink-0" data-name="Margin">
      <Svg8 />
    </div>
  );
}

function Item9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] relative w-full">
          <Margin6 />
          <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#374151] text-[14px]">
            <p className="leading-[20px] whitespace-pre-wrap">{`User can authenticate via SSO provider and receive successful login response `}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Margin7() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[10px] relative shrink-0" data-name="Margin">
      <div className="bg-[#ffb625] rounded-[9999px] shrink-0 size-[12px]" data-name="Background+Shadow" />
    </div>
  );
}

function Item10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] relative w-full">
          <Margin7 />
          <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#374151] text-[14px]">
            <p className="leading-[20px] whitespace-pre-wrap">{`Magic link can be sent within 2 minutes to the user's email and expires after 15 minutes `}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Margin8() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[10px] relative shrink-0" data-name="Margin">
      <div className="bg-[#ccc] rounded-[9999px] shrink-0 size-[12px]" data-name="Background+Shadow" />
    </div>
  );
}

function Item11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] relative w-full">
          <Margin8 />
          <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#374151] text-[14px]">
            <p className="leading-[20px] whitespace-pre-wrap">{`System validates SSO assertion/magic link and creates a user session `}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Margin9() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[10px] relative shrink-0" data-name="Margin">
      <div className="bg-[#ccc] rounded-[9999px] shrink-0 size-[12px]" data-name="Background+Shadow" />
    </div>
  );
}

function Item12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] relative w-full">
          <Margin9 />
          <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#374151] text-[14px]">
            <p className="leading-[20px] whitespace-pre-wrap">{`Fallback to email-based login if SSO/magic link fails `}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Margin10() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[10px] relative shrink-0" data-name="Margin">
      <div className="bg-[#ccc] rounded-[9999px] shrink-0 size-[12px]" data-name="Background+Shadow" />
    </div>
  );
}

function Item13() {
  return (
    <div className="relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] relative w-full">
          <Margin10 />
          <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#374151] text-[14px]">
            <p className="leading-[20px] whitespace-pre-wrap">Security checks prevent reuse of magic link tokens and monitor for phishing attempts</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[546px]">
      <Item7 />
      <Item8 />
      <Item9 />
      <Item10 />
      <Item11 />
      <Item12 />
      <Item13 />
    </div>
  );
}

function BackgroundBorder3() {
  return (
    <div className="bg-[#f7e3bb] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[9999px] shrink-0" data-name="Background+Border">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#805c15] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Medium</p>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-start justify-center relative shrink-0 w-[80px]">
      <BackgroundBorder3 />
    </div>
  );
}

function BackgroundBorder4() {
  return (
    <div className="bg-[#f7e3bb] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[9999px] shrink-0" data-name="Background+Border">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#805c15] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">In Progress</p>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-start justify-center relative shrink-0 w-[100px]">
      <BackgroundBorder4 />
    </div>
  );
}

function Frame() {
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
    <div className="bg-[#f2f2f2] relative rounded-[9999px] shrink-0 size-[24px]" data-name="Background">
      <Frame />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[4px] h-[24px] items-center px-[8px] relative shrink-0 w-[120px]">
      <Background1 />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#737373] text-[12px]">
        <p className="leading-[16px] whitespace-pre-wrap">Developer</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Frame18 />
      <Frame13 />
      <Frame17 />
      <Frame19 />
    </div>
  );
}

function Svg9() {
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

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative w-[16px]" data-name="Container">
      <Svg9 />
    </div>
  );
}

function Item14() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Item">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <Container8 />
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#374151] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Onboarding Setup</p>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="bg-[#f6f6f6] flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]">
      <div aria-hidden="true" className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[12px] relative w-full">
          <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#374151] text-[14px]">
            <ul className="list-disc whitespace-pre-wrap">
              <li className="mb-0 ms-[21px]">
                <span className="leading-[20px]">As a new user</span>
              </li>
              <li className="mb-0 ms-[21px]">
                <span className="leading-[20px]">I want to complete onboarding setup including profile, preferences, and initial data sync</span>
              </li>
              <li className="ms-[21px]">
                <span className="leading-[20px]">So that I can start using the platform with tailored settings</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function Item15() {
  return (
    <div className="relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] relative w-full">
          <Frame11 />
        </div>
      </div>
    </div>
  );
}

function Svg10() {
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
      <Svg10 />
    </div>
  );
}

function Item16() {
  return (
    <div className="relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] relative w-full">
          <Margin11 />
          <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#374151] text-[14px]">
            <p className="leading-[20px] whitespace-pre-wrap">{`User completes profile with required fields `}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Svg11() {
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
      <Svg11 />
    </div>
  );
}

function Item17() {
  return (
    <div className="relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] relative w-full">
          <Margin12 />
          <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#374151] text-[14px]">
            <p className="leading-[20px] whitespace-pre-wrap">{`System validates profile data format and required fields `}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Margin13() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[10px] relative shrink-0" data-name="Margin">
      <div className="bg-[#ffb625] rounded-[9999px] shrink-0 size-[12px]" data-name="Background+Shadow" />
    </div>
  );
}

function Item18() {
  return (
    <div className="relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] relative w-full">
          <Margin13 />
          <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#374151] text-[14px]">
            <p className="leading-[20px] whitespace-pre-wrap">{`Initial data sync starts after onboarding and reports status `}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Margin14() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[10px] relative shrink-0" data-name="Margin">
      <div className="bg-[#ccc] rounded-[9999px] shrink-0 size-[12px]" data-name="Background+Shadow" />
    </div>
  );
}

function Item19() {
  return (
    <div className="relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] relative w-full">
          <Margin14 />
          <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#374151] text-[14px]">
            <p className="leading-[20px] whitespace-pre-wrap">{`Preferences saved and applied to dashboard visuals `}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Margin15() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[10px] relative shrink-0" data-name="Margin">
      <div className="bg-[#ccc] rounded-[9999px] shrink-0 size-[12px]" data-name="Background+Shadow" />
    </div>
  );
}

function Item20() {
  return (
    <div className="relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] relative w-full">
          <Margin15 />
          <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#374151] text-[14px]">
            <p className="leading-[20px] whitespace-pre-wrap">Onboarding progress persists and can be resumed if interrupted</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[546px]">
      <Item14 />
      <Item15 />
      <Item16 />
      <Item17 />
      <Item18 />
      <Item19 />
      <Item20 />
    </div>
  );
}

function BackgroundBorder5() {
  return (
    <div className="bg-[#f7e3bb] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[9999px] shrink-0" data-name="Background+Border">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#805c15] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Medium</p>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-start justify-center relative shrink-0 w-[80px]">
      <BackgroundBorder5 />
    </div>
  );
}

function BackgroundBorder6() {
  return (
    <div className="bg-[#f7e3bb] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[9999px] shrink-0" data-name="Background+Border">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#805c15] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">In Progress</p>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-start justify-center relative shrink-0 w-[100px]">
      <BackgroundBorder6 />
    </div>
  );
}

function Frame1() {
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

function Background2() {
  return (
    <div className="bg-[#f2f2f2] relative rounded-[9999px] shrink-0 size-[24px]" data-name="Background">
      <Frame1 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[4px] h-[24px] items-center px-[8px] relative shrink-0 w-[120px]">
      <Background2 />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#737373] text-[12px]">
        <p className="leading-[16px] whitespace-pre-wrap">Developer</p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Frame20 />
      <Frame14 />
      <Frame21 />
      <Frame22 />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="List">
      <Frame6 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 846 1">
            <line id="Line 22" stroke="var(--stroke-0, #E7E7E7)" x2="846" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame7 />
      <Frame10 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 846 1">
            <line id="Line 22" stroke="var(--stroke-0, #E7E7E7)" x2="846" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
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

function Frame4() {
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

function Svg12() {
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
      <Svg12 />
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute inset-px" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Shadow />
      </div>
    </div>
  );
}

function BackgroundBorder7() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Background+Border">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBackgroundBorder} />
      <LoginScreen />
      <Container11 />
    </div>
  );
}

function Container12() {
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
      <BackgroundBorder7 />
      <Container12 />
    </div>
  );
}

function SignupFlow() {
  return <div className="h-[118px] shrink-0 w-full" data-name="Signup Flow" />;
}

function Svg13() {
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
      <Svg13 />
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute inset-px" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Shadow1 />
      </div>
    </div>
  );
}

function BackgroundBorder8() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Background+Border">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBackgroundBorder1} />
      <SignupFlow />
      <Container13 />
    </div>
  );
}

function Container14() {
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
      <BackgroundBorder8 />
      <Container14 />
    </div>
  );
}

function Onboarding() {
  return <div className="h-[118px] shrink-0 w-full" data-name="Onboarding" />;
}

function Svg14() {
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
      <Svg14 />
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute inset-px" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Shadow2 />
      </div>
    </div>
  );
}

function BackgroundBorder9() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Background+Border">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBackgroundBorder2} />
      <Onboarding />
      <Container15 />
    </div>
  );
}

function Container16() {
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
      <BackgroundBorder9 />
      <Container16 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex gap-[16px] items-start overflow-clip pb-[8px] relative shrink-0 w-full" data-name="Container">
      <DesignCard />
      <DesignCard1 />
      <DesignCard2 />
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-[#f6f6f6] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[20px] relative w-full">
        <Heading2 />
        <Container10 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <Frame4 />
        <Container9 />
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
        <Frame3 />
        <BackgroundBorderShadow />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
    </div>
  );
}