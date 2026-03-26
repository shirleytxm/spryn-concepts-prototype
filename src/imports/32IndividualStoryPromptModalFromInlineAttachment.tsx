import svgPaths from "./svg-acuxt4etet";
import imgVector from "figma:asset/f7871b4bf2ee7b42af8de7e542550b71e24756bf.png";
import imgVector1 from "figma:asset/8e3e1fd8b3f03cf0772a7984ed845c3add4284b6.png";

function Frame20() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="breadcrumb-icons">
        <div className="absolute inset-[8.33%_4.15%_12.5%_4.17%]" data-name="Vector (Stroke)">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6689 12.6667">
            <path d={svgPaths.p3d72b600} fill="var(--fill-0, #6B7280)" id="Vector (Stroke)" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Project Title</p>
      </div>
    </div>
  );
}

function Svg() {
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
      <Svg />
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Button">
      <div className="relative shrink-0 size-[16px]" data-name="breadcrumb-icons">
        <div className="absolute inset-[8.33%_16.67%]" data-name="Vector">
          <div className="absolute inset-[-4.87%_-6.09%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9667 14.6333">
              <path d={svgPaths.p3729e400} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[8.33%_16.67%_66.67%_58.33%]" data-name="Vector">
          <div className="absolute inset-[-16.25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.3 5.3">
              <path d="M0.65 0.65V4.65H4.65" id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[54.17%_33.33%_45.83%_33.33%]" data-name="Vector">
          <div className="absolute inset-[-0.65px_-12.19%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.63333 1.3">
              <path d="M5.98333 0.65H0.65" id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[70.83%_33.33%_29.17%_33.33%]" data-name="Vector">
          <div className="absolute inset-[-0.65px_-12.19%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.63333 1.3">
              <path d="M5.98333 0.65H0.65" id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[37.5%_58.33%_62.5%_33.33%]" data-name="Vector">
          <div className="absolute inset-[-0.65px_-48.75%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.63333 1.3">
              <path d="M1.98333 0.65H0.65" id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Product Requirements Document</p>
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

function Container1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Container">
      <Frame20 />
      <Container2 />
      <Container3 />
    </div>
  );
}

function LeftPanelOpen() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="left-panel_open">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="left-panel_open">
          <path d={svgPaths.p1cec7ff0} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p158bc480} id="Vector_2" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Svg1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p1cb03b80} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p367a8600} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3af3c780} id="Vector_3" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon">
        <div className="absolute inset-[4.17%]" data-name="Vector (Stroke)">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 18.3333">
            <path d={svgPaths.p374e0780} fill="var(--fill-0, #737373)" id="Vector (Stroke)" />
          </svg>
        </div>
        <div className="absolute inset-[45.83%_45.83%_29.17%_45.83%]" data-name="Vector (Stroke)">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66667 5">
            <path d={svgPaths.p67ff180} fill="var(--fill-0, #737373)" id="Vector (Stroke)" />
          </svg>
        </div>
        <div className="absolute inset-[29.17%_45.79%_62.5%_45.83%]" data-name="Vector (Stroke)">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.6748 1.66667">
            <path d={svgPaths.p3d9a4800} fill="var(--fill-0, #737373)" id="Vector (Stroke)" />
          </svg>
        </div>
      </div>
      <Svg1 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <Frame31 />
    </div>
  );
}

function EditorHeader() {
  return (
    <div className="bg-[#fbfbfb] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full" data-name="editor-header">
      <div aria-hidden="true" className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-tl-[12px] rounded-tr-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[20px] py-[16px] relative w-full">
          <LeftPanelOpen />
          <Frame15 />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p31104300} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p35a82800} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p327dbb00} id="Vector_3" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame33() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center justify-center left-0 top-[808px]">
      <Frame />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0050c9] text-[16px] whitespace-nowrap">
        <p className="leading-[1.5]">story3.1_screen-prompts</p>
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="absolute h-[1441px] left-[28px] top-[-521px] w-[480px]">
      <div className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32px] left-0 not-italic text-[0px] text-black top-0 w-[480px]" style={{ fontFeatureSettings: "'kern' 0" }}>
        <p className="font-['Inter:Bold',sans-serif] font-bold mb-[12px] text-[24px]">{`Epic 3: Screen Prompts, File Upload & Pitch (r1.2)`}</p>
        <p className="text-[16px]">Goal: Add file/image upload, AI-generated screen prompts, screen-epic association, and the BD agent Pitch workflow with embedded screen designs and slides-format PDF export.</p>
      </div>
      <div className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32px] left-0 not-italic text-[0px] text-black top-[199px] w-[480px]" style={{ fontFeatureSettings: "'kern' 0" }}>
        <p className="font-['Inter:Bold',sans-serif] font-bold mb-[8px] text-[18px]">Story 3.1: Image Upload via Slash Command</p>
        <p className="text-[16px]">As a user, I want the system to generate AI-powered screen prompts derived from my UX Spec, PRD, and Epics, So that I have actionable descriptions for creating screen designs for each feature.</p>
      </div>
      <div className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[0] left-0 not-italic text-[0px] text-[16px] text-black top-[392px] w-[480px]" style={{ fontFeatureSettings: "'kern' 0" }}>
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[32px] mb-[8px]">Acceptance Criteria:</p>
        <p>
          <span className="font-['Inter:Bold',sans-serif] font-bold leading-[32px] not-italic">Given</span>
          <span className="leading-[32px]">
            {` the user has a project with UX Spec, PRD, and Epics artifacts`}
            <br aria-hidden="true" />
          </span>
          <span className="font-['Inter:Bold',sans-serif] font-bold leading-[32px] not-italic">When</span>
          <span className="leading-[32px]">
            {` the user initiates screen prompt generation via the chat workflow or a dedicated action`}
            <br aria-hidden="true" />
          </span>
          <span className="font-['Inter:Bold',sans-serif] font-bold leading-[32px] not-italic">Then</span>
          <span className="leading-[32px]">
            {` screen prompts are created as a screen-prompts artifact type (FR39)`}
            <br aria-hidden="true" />
          </span>
          <span className="font-['Inter:Bold',sans-serif] font-bold leading-[32px] not-italic">And</span>
          <span className="leading-[32px]">
            {` each prompt references the relevant epic and user flows And prompts incorporate design direction from the UX Spec`}
            <br aria-hidden="true" />
          </span>
          <span className="font-['Inter:Bold',sans-serif] font-bold leading-[32px] not-italic">And</span>
          <span className="leading-[32px]">
            {` the screen-prompts artifact appears under the "Previews" category in the ArtifactsDrawer`}
            <br aria-hidden="true" />
          </span>
          <span className="font-['Inter:Bold',sans-serif] font-bold leading-[32px] not-italic">And</span>
          <span className="leading-[32px]">{` the user can view and browse the generated prompts`}</span>
        </p>
      </div>
      <Frame33 />
      <div className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32px] left-0 not-italic text-[0px] text-black top-[856px] w-[480px]" style={{ fontFeatureSettings: "'kern' 0" }}>
        <p className="font-['Inter:Bold',sans-serif] font-bold mb-[8px] text-[18px]">Story 3.2: AI Screen Prompts Generation</p>
        <p className="text-[16px]">As a user, I want the system to generate AI-powered screen prompts derived from my UX Spec, PRD, and Epics, So that I have actionable descriptions for creating screen designs for each feature.</p>
      </div>
      <div className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[0] left-0 not-italic text-[0px] text-[16px] text-black top-[1049px] w-[480px]" style={{ fontFeatureSettings: "'kern' 0" }}>
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[32px] mb-[8px]">Acceptance Criteria:</p>
        <p>
          <span className="font-['Inter:Bold',sans-serif] font-bold leading-[32px] not-italic">Given</span>
          <span className="leading-[32px]">
            {` the user has a project with UX Spec, PRD, and Epics artifacts`}
            <br aria-hidden="true" />
          </span>
          <span className="font-['Inter:Bold',sans-serif] font-bold leading-[32px] not-italic">When</span>
          <span className="leading-[32px]">
            {` the user initiates screen prompt generation via the chat workflow or a dedicated action`}
            <br aria-hidden="true" />
          </span>
          <span className="font-['Inter:Bold',sans-serif] font-bold leading-[32px] not-italic">Then</span>
          <span className="leading-[32px]">
            {` screen prompts are created as a screen-prompts artifact type (FR39)`}
            <br aria-hidden="true" />
          </span>
          <span className="font-['Inter:Bold',sans-serif] font-bold leading-[32px] not-italic">And</span>
          <span className="leading-[32px]">
            {` each prompt references the relevant epic and user flows And prompts incorporate design direction from the UX Spec`}
            <br aria-hidden="true" />
          </span>
          <span className="font-['Inter:Bold',sans-serif] font-bold leading-[32px] not-italic">And</span>
          <span className="leading-[32px]">
            {` the screen-prompts artifact appears under the "Previews" category in the ArtifactsDrawer`}
            <br aria-hidden="true" />
          </span>
          <span className="font-['Inter:Bold',sans-serif] font-bold leading-[32px] not-italic">And</span>
          <span className="leading-[32px]">{` the user can view and browse the generated prompts`}</span>
        </p>
      </div>
    </div>
  );
}

function EditorBody() {
  return (
    <div className="bg-white h-[1497px] relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full" data-name="editor-body">
      <div className="overflow-auto size-full">
        <div className="content-stretch flex flex-col items-start p-[28px] relative size-full">
          <Frame36 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e7e7e7] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-bl-[8px] rounded-br-[8px]" />
    </div>
  );
}

function Editor1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px relative" data-name="editor">
      <EditorHeader />
      <EditorBody />
    </div>
  );
}

function Editor() {
  return (
    <div className="relative shrink-0 w-full" data-name="editor">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center px-[12px] py-[16px] relative w-full">
          <Editor1 />
        </div>
      </div>
    </div>
  );
}

function EditorPanel() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="editor-panel">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="bg-white relative shrink-0 w-full" data-name="editor-panel_header">
          <div aria-hidden="true" className="absolute border-[#ccc] border-b border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center justify-between px-[16px] py-[14px] relative w-full">
              <Container1 />
            </div>
          </div>
        </div>
        <Editor />
      </div>
      <div aria-hidden="true" className="absolute border-[#ccc] border-r border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function LogoTransparentSvg() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[24px] top-1/2" data-name="logo_transparent.svg">
      <div className="absolute inset-[6.32%]" data-name="Vector">
        <img alt="" className="absolute block max-w-none size-full" height="20.964" src={imgVector} width="20.964" />
      </div>
    </div>
  );
}

function LogoTransparentSvgFill() {
  return (
    <div className="absolute left-0 overflow-clip size-[24px] top-0" data-name="logo_transparent.svg fill">
      <LogoTransparentSvg />
    </div>
  );
}

function SprynLogo() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Spryn logo">
      <LogoTransparentSvgFill />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <SprynLogo />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black w-[46.551px]">
        <p className="leading-[24px]">Spryn</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white h-[32px] relative rounded-[6px] shrink-0 w-[114.77px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[14.5px] justify-center leading-[0] left-[calc(50%+0.17px)] not-italic text-[12px] text-black text-center top-[calc(50%-0.25px)] w-[89.107px]">
        <p className="leading-[16px]">Send Feedback</p>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <Button1 />
      <div className="flex h-[32px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[32px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 1">
                <line id="Line 1" stroke="var(--stroke-0, #CCCCCC)" x2="32" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="panel-icons">
        <div className="absolute inset-[12.5%]" data-name="Vector">
          <div className="absolute inset-[-5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 16.5">
              <path d={svgPaths.p379b6900} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[12.5%_37.5%_12.5%_62.5%]" data-name="Vector">
          <div className="absolute inset-[-5%_-0.75px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.5 16.5">
              <path d="M0.75 0.75V15.75" id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Svg2() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[20px] top-1/2" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p23feab80} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1a9c7f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">
        <p className="leading-[20px]">Product Brief</p>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame12 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(115,115,115,0.8)] whitespace-nowrap">
        <p className="leading-[20px]">Capture project goals and requirements</p>
      </div>
    </div>
  );
}

function Chevron() {
  return (
    <div className="relative size-[20px]" data-name="chevron">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="chevron">
          <path d="M5 7.5L10 12.5L15 7.5" id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Frame44() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[8px] relative w-full">
          <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="active-workflow">
            <div className="bg-[#f2f2f2] relative rounded-[9999px] shrink-0 size-[40px]" data-name="workflow-icons">
              <Svg2 />
            </div>
            <Frame11 />
          </div>
          <div className="flex items-center justify-center relative shrink-0">
            <div className="-scale-y-100 flex-none rotate-180">
              <Chevron />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Svg3() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[14px] top-1/2" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="SVG">
          <path d={svgPaths.p3de7e600} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#d20f1f] relative rounded-[9999px] shrink-0 size-[24px]" data-name="Background">
      <Svg3 />
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(210,15,31,0.8)] relative rounded-[9999px] shrink-0 size-[24px]" data-name="Overlay">
      <div className="-translate-y-1/2 absolute bg-[rgba(255,255,255,0)] left-0 rounded-[9999px] shadow-[0px_0px_0px_2px_rgba(210,15,31,0.3)] size-[24px] top-1/2" data-name="Overlay+Shadow" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] left-[calc(50%+0.19px)] not-italic text-[12px] text-center text-white top-[calc(50%-0.5px)] w-[7.77px]">
        <p className="leading-[16px]">2</p>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#f2f2f2] relative rounded-[9999px] shrink-0 size-[24px]" data-name="Background">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] left-[calc(50%+0.18px)] not-italic text-[#737373] text-[12px] text-center top-[calc(50%-0.5px)] w-[7.893px]">
        <p className="leading-[16px]">3</p>
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#f2f2f2] relative rounded-[9999px] shrink-0 size-[24px]" data-name="Background">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] left-[calc(50%+0.19px)] not-italic text-[#737373] text-[12px] text-center top-[calc(50%-0.5px)] w-[8.252px]">
        <p className="leading-[16px]">4</p>
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#f2f2f2] relative rounded-[9999px] shrink-0 size-[24px]" data-name="Background">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] left-[calc(50%+0.17px)] not-italic text-[#737373] text-[12px] text-center top-[calc(50%-0.5px)] w-[7.586px]">
        <p className="leading-[16px]">5</p>
      </div>
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#f2f2f2] relative rounded-[9999px] shrink-0 size-[24px]" data-name="Background">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] left-[calc(50%+0.18px)] not-italic text-[#737373] text-[12px] text-center top-[calc(50%-0.5px)] w-[7.924px]">
        <p className="leading-[16px]">6</p>
      </div>
    </div>
  );
}

function Background5() {
  return (
    <div className="bg-[#f2f2f2] relative rounded-[9999px] shrink-0 size-[24px]" data-name="Background">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] left-[calc(50%+0.16px)] not-italic text-[#737373] text-[12px] text-center top-[calc(50%-0.5px)] w-[7.207px]">
        <p className="leading-[16px]">7</p>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Background />
      <Overlay />
      <Background1 />
      <Background2 />
      <Background3 />
      <Background4 />
      <Background5 />
    </div>
  );
}

function WorkflowStepper() {
  return (
    <div className="absolute bg-[#fafafa] content-stretch flex flex-col gap-[8px] items-start left-0 px-[16px] py-[12px] right-0 top-0" data-name="Workflow Stepper">
      <div aria-hidden="true" className="absolute border-[#ccc] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black w-full">
        <p className="leading-[20px]">{`Step 2 of 7: Problem & Goals`}</p>
      </div>
      <Frame13 />
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[12px] relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#374151] text-[14px] w-full whitespace-pre-wrap">
          <p className="leading-[20px] mb-0">{`Hi there! I'm Sally, your UX Designer. 🎨`}</p>
          <p className="leading-[20px] mb-0">&nbsp;</p>
          <p className="leading-[20px] mb-0">{`I'm here to help you craft user experiences that don't just look good — they feel right. Every interaction tells a story, and together we'll make sure yours resonates with the people who matter most: your users.`}</p>
          <p className="leading-[20px] mb-0">&nbsp;</p>
          <p className="leading-[20px] mb-0">{`Here's what I can help you with:`}</p>
          <p className="mb-0">
            <span className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic">[MH</span>
            <span className="leading-[20px]">{`] Redisplay Menu Help `}</span>
          </p>
          <p className="mb-0">
            <span className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic">[CH</span>
            <span className="leading-[20px]">{`] Chat with the Agent about anything `}</span>
          </p>
          <p className="mb-0">
            <span className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic">[CU</span>
            <span className="leading-[20px]">{`] Create UX: Guidance through realizing the plan for your UX to inform architecture and implementation. Provides more details than what was discovered in the PRD `}</span>
          </p>
          <p className="mb-0">
            <span className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic">[GP]</span>
            <span className="leading-[20px]">{` Generate prompts for screen designs`}</span>
          </p>
          <p className="leading-[20px] mb-0">&nbsp;</p>
          <p className="leading-[20px]">What would you like to work on?</p>
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[8px] items-start pl-[20px] pr-[80px] relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[12px] w-[98.412px]">
          <p className="leading-[16px]">UX Designer</p>
        </div>
        <Container5 />
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">16 Jan 2026, 17:17</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-[#541b1f] relative rounded-[10px] shrink-0 w-[273px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[12px] relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white w-full">
          <p className="leading-[20px]">generate screen prompts for story 3.1</p>
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-end size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-end pl-[80px] pr-[20px] relative w-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">
            <p className="leading-[16px]">Me</p>
          </div>
          <Container7 />
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">25 Feb 2026, 12:08</p>
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[12px] relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[20px] not-italic relative shrink-0 text-[#374151] text-[14px] w-full whitespace-pre-wrap">
          <p className="mb-0">{`I've generated screen prompts for all 6 epics in your project. Each prompt is tailored to your UX Spec's design direction and ready to use in v0, Lovable, or Bolt. `}</p>
          <p className="mb-0">&nbsp;</p>
          <p>I’ve added it to your epics document as attachment. Click on it to view the prompts</p>
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[8px] items-start pl-[20px] pr-[80px] relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[12px] w-[98.412px]">
          <p className="leading-[16px]">UX Designer</p>
        </div>
        <Container9 />
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">16 Jan 2026, 17:17</p>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[26px] items-start left-0 right-0 top-[-72px]">
      <Container4 />
      <Container6 />
      <Container8 />
    </div>
  );
}

function Chat() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-auto relative w-full" data-name="chat">
      <Frame19 />
    </div>
  );
}

function TextareaChatMessageInput() {
  return (
    <div className="bg-white flex-[1_0_0] h-[40px] min-h-px min-w-px relative rounded-[8px]" data-name="Textarea - Chat message input">
      <div className="overflow-auto relative size-full">
        <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] left-[13px] not-italic text-[#737373] text-[14px] top-[19px] w-[118.513px]">
          <p className="leading-[20px]">Type something...</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Svg4() {
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
      <Svg4 />
    </div>
  );
}

function ChatPanel() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col h-full items-start min-h-px min-w-px relative" data-name="chat-panel">
      <div className="bg-white relative shrink-0 w-full" data-name="chat-panel_header">
        <div aria-hidden="true" className="absolute border-[#ccc] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center justify-between px-[16px] py-[12px] relative w-full">
            <Frame1 />
            <Frame16 />
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="workflow-selector/Collapsed">
        <div aria-hidden="true" className="absolute border-[#ccc] border-b border-solid inset-0 pointer-events-none" />
        <div className="bg-white relative shrink-0 w-full" data-name="workflow-selector">
          <div className="content-stretch flex flex-col gap-[12px] items-start p-[16px] relative w-full">
            <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">
              <p className="leading-[20px]">Select a Workflow:</p>
            </div>
            <Frame44 />
          </div>
        </div>
      </div>
      <div className="h-[76px] relative shrink-0 w-full" data-name="workflow-stepper">
        <WorkflowStepper />
      </div>
      <Chat />
      <div className="bg-white relative shrink-0 w-full" data-name="chat-input">
        <div aria-hidden="true" className="absolute border-[#ccc] border-solid border-t inset-0 pointer-events-none" />
        <div className="content-stretch flex gap-[12px] items-start p-[16px] relative w-full">
          <TextareaChatMessageInput />
          <ButtonSendMessage />
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex h-[912px] items-center justify-between left-[320px] right-0 top-0" data-name="Container">
      <EditorPanel />
      <ChatPanel />
    </div>
  );
}

function LogoTransparentSvg1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[32px] top-1/2" data-name="logo_transparent.svg">
      <div className="absolute inset-[6.32%]" data-name="Vector">
        <img alt="" className="absolute block max-w-none size-full" height="27.953" src={imgVector1} width="27.953" />
      </div>
    </div>
  );
}

function LogoTransparentSvgFill1() {
  return (
    <div className="absolute left-0 overflow-clip size-[32px] top-0" data-name="logo_transparent.svg fill">
      <LogoTransparentSvg1 />
    </div>
  );
}

function SprynLogo1() {
  return (
    <div className="aspect-[32/32] overflow-clip relative shrink-0 w-full" data-name="Spryn logo">
      <LogoTransparentSvgFill1 />
    </div>
  );
}

function Frame2() {
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
      <Frame2 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute inset-[20%]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p20ee5200} id="Vector" stroke="var(--stroke-0, #D10F19)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.pb4bb020} id="Vector_2" stroke="var(--stroke-0, #D10F19)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p138e0700} id="Vector_3" stroke="var(--stroke-0, #D10F19)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Artifacts() {
  return (
    <div className="bg-[#ffb0b3] h-[40px] relative rounded-[6px] shrink-0 w-full" data-name="Artifacts">
      <Frame3 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute inset-[20%]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p3d7cb000} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M8 17L12 13L16 17" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Assets() {
  return (
    <div className="h-[40px] relative rounded-[6px] shrink-0 w-full" data-name="Assets">
      <Frame4 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Projects />
      <Artifacts />
      <Assets />
    </div>
  );
}

function Sidebar() {
  return (
    <div className="bg-[#541b1f] h-full relative shrink-0 w-[56px]" data-name="Sidebar">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center px-[8px] py-[16px] relative size-full">
          <SprynLogo1 />
          <Frame18 />
        </div>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[14px] w-[76.648px]">
        <p className="leading-[20px]">Artifacts</p>
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#e5e5e5] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[4px] items-start px-[16px] py-[12px] relative w-full">
        <Frame17 />
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full not-italic overflow-hidden relative shrink-0 text-[#737373] text-[12px] text-ellipsis w-[min-content] whitespace-nowrap">
          <p className="leading-[20px] overflow-hidden">AI-generated outputs</p>
        </div>
      </div>
    </div>
  );
}

function Frame43() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] py-[6px] relative w-full">
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
            <p className="leading-[16px]">specifications</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="overflow-auto size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start px-[16px] py-[12px] relative w-full">
          <Frame43 />
          <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[6px] relative rounded-[4px] shrink-0 w-[224px]" data-name="drawer-item">
            <div className="relative shrink-0 size-[16px]" data-name="drawer-icon">
              <div className="absolute inset-[8.33%_16.67%]" data-name="Vector">
                <div className="absolute inset-[-5%_-6.25%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 14.6667">
                    <path d={svgPaths.p6f8d400} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[8.33%_16.67%_66.67%_58.33%]" data-name="Vector">
                <div className="absolute inset-[-16.67%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.33333 5.33333">
                    <path d={svgPaths.p59eee40} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[54.17%_33.33%_45.83%_33.33%]" data-name="Vector">
                <div className="absolute inset-[-0.67px_-12.5%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.66667 1.33333">
                    <path d="M6 0.666667H0.666667" id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[70.83%_33.33%_29.17%_33.33%]" data-name="Vector">
                <div className="absolute inset-[-0.67px_-12.5%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.66667 1.33333">
                    <path d="M6 0.666667H0.666667" id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[37.5%_58.33%_62.5%_33.33%]" data-name="Vector">
                <div className="absolute inset-[-0.67px_-50%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.66667 1.33333">
                    <path d="M2 0.666667H0.666667" id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#404040] text-[14px] text-ellipsis whitespace-nowrap">
              <p className="leading-[20px] overflow-hidden">Product Brief</p>
            </div>
          </div>
          <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[6px] relative rounded-[4px] shrink-0 w-[224px]" data-name="drawer-item">
            <div className="relative shrink-0 size-[16px]" data-name="drawer-icon">
              <div className="absolute inset-[8.33%_16.67%]" data-name="Vector">
                <div className="absolute inset-[-5%_-6.25%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 14.6667">
                    <path d={svgPaths.p6f8d400} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[8.33%_16.67%_66.67%_58.33%]" data-name="Vector">
                <div className="absolute inset-[-16.67%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.33333 5.33333">
                    <path d={svgPaths.p59eee40} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[54.17%_33.33%_45.83%_33.33%]" data-name="Vector">
                <div className="absolute inset-[-0.67px_-12.5%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.66667 1.33333">
                    <path d="M6 0.666667H0.666667" id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[70.83%_33.33%_29.17%_33.33%]" data-name="Vector">
                <div className="absolute inset-[-0.67px_-12.5%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.66667 1.33333">
                    <path d="M6 0.666667H0.666667" id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[37.5%_58.33%_62.5%_33.33%]" data-name="Vector">
                <div className="absolute inset-[-0.67px_-50%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.66667 1.33333">
                    <path d="M2 0.666667H0.666667" id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#404040] text-[14px] text-ellipsis whitespace-nowrap">
              <p className="leading-[20px] overflow-hidden">Product Requirements Document</p>
            </div>
          </div>
          <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[6px] relative rounded-[4px] shrink-0 w-[224px]" data-name="drawer-item">
            <div className="relative shrink-0 size-[16px]" data-name="drawer-icon">
              <div className="absolute inset-[8.33%_16.67%]" data-name="Vector">
                <div className="absolute inset-[-5%_-6.25%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 14.6667">
                    <path d={svgPaths.p6f8d400} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[8.33%_16.67%_66.67%_58.33%]" data-name="Vector">
                <div className="absolute inset-[-16.67%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.33333 5.33333">
                    <path d={svgPaths.p59eee40} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[54.17%_33.33%_45.83%_33.33%]" data-name="Vector">
                <div className="absolute inset-[-0.67px_-12.5%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.66667 1.33333">
                    <path d="M6 0.666667H0.666667" id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[70.83%_33.33%_29.17%_33.33%]" data-name="Vector">
                <div className="absolute inset-[-0.67px_-12.5%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.66667 1.33333">
                    <path d="M6 0.666667H0.666667" id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[37.5%_58.33%_62.5%_33.33%]" data-name="Vector">
                <div className="absolute inset-[-0.67px_-50%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.66667 1.33333">
                    <path d="M2 0.666667H0.666667" id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#404040] text-[14px] text-ellipsis whitespace-nowrap">
              <p className="leading-[20px] overflow-hidden">UX Specifications</p>
            </div>
          </div>
          <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[6px] relative rounded-[4px] shrink-0 w-[224px]" data-name="drawer-item">
            <div className="relative shrink-0 size-[16px]" data-name="drawer-icon">
              <div className="absolute inset-[8.33%_16.67%]" data-name="Vector">
                <div className="absolute inset-[-5%_-6.25%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 14.6667">
                    <path d={svgPaths.p6f8d400} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[8.33%_16.67%_66.67%_58.33%]" data-name="Vector">
                <div className="absolute inset-[-16.67%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.33333 5.33333">
                    <path d={svgPaths.p59eee40} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[54.17%_33.33%_45.83%_33.33%]" data-name="Vector">
                <div className="absolute inset-[-0.67px_-12.5%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.66667 1.33333">
                    <path d="M6 0.666667H0.666667" id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[70.83%_33.33%_29.17%_33.33%]" data-name="Vector">
                <div className="absolute inset-[-0.67px_-12.5%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.66667 1.33333">
                    <path d="M6 0.666667H0.666667" id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[37.5%_58.33%_62.5%_33.33%]" data-name="Vector">
                <div className="absolute inset-[-0.67px_-50%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.66667 1.33333">
                    <path d="M2 0.666667H0.666667" id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#404040] text-[14px] text-ellipsis whitespace-nowrap">
              <p className="leading-[20px] overflow-hidden">Architecture</p>
            </div>
          </div>
          <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[6px] relative rounded-[4px] shrink-0 w-[224px]" data-name="drawer-item">
            <div className="relative shrink-0 size-[16px]" data-name="drawer-icon">
              <div className="absolute inset-[8.33%_16.67%]" data-name="Vector">
                <div className="absolute inset-[-5%_-6.25%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 14.6667">
                    <path d={svgPaths.p6f8d400} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[8.33%_16.67%_66.67%_58.33%]" data-name="Vector">
                <div className="absolute inset-[-16.67%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.33333 5.33333">
                    <path d={svgPaths.p59eee40} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[54.17%_33.33%_45.83%_33.33%]" data-name="Vector">
                <div className="absolute inset-[-0.67px_-12.5%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.66667 1.33333">
                    <path d="M6 0.666667H0.666667" id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[70.83%_33.33%_29.17%_33.33%]" data-name="Vector">
                <div className="absolute inset-[-0.67px_-12.5%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.66667 1.33333">
                    <path d="M6 0.666667H0.666667" id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[37.5%_58.33%_62.5%_33.33%]" data-name="Vector">
                <div className="absolute inset-[-0.67px_-50%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.66667 1.33333">
                    <path d="M2 0.666667H0.666667" id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#404040] text-[14px] text-ellipsis whitespace-nowrap">
              <p className="leading-[20px] overflow-hidden">Epics</p>
            </div>
          </div>
          <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[6px] relative rounded-[4px] shrink-0 w-[224px]" data-name="drawer-item">
            <div className="relative shrink-0 size-[16px]" data-name="drawer-icon">
              <div className="absolute inset-[8.33%_16.67%]" data-name="Vector">
                <div className="absolute inset-[-5%_-6.25%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 14.6667">
                    <path d={svgPaths.p6f8d400} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[8.33%_16.67%_66.67%_58.33%]" data-name="Vector">
                <div className="absolute inset-[-16.67%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.33333 5.33333">
                    <path d={svgPaths.p59eee40} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[54.17%_33.33%_45.83%_33.33%]" data-name="Vector">
                <div className="absolute inset-[-0.67px_-12.5%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.66667 1.33333">
                    <path d="M6 0.666667H0.666667" id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[70.83%_33.33%_29.17%_33.33%]" data-name="Vector">
                <div className="absolute inset-[-0.67px_-12.5%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.66667 1.33333">
                    <path d="M6 0.666667H0.666667" id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[37.5%_58.33%_62.5%_33.33%]" data-name="Vector">
                <div className="absolute inset-[-0.67px_-50%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.66667 1.33333">
                    <path d="M2 0.666667H0.666667" id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#404040] text-[14px] text-ellipsis whitespace-nowrap">
              <p className="leading-[20px] overflow-hidden">Pitch</p>
            </div>
          </div>
          <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[6px] relative rounded-[4px] shrink-0 w-[224px]" data-name="drawer-item">
            <div className="relative shrink-0 size-[16px]" data-name="drawer-icon">
              <div className="absolute inset-[8.33%_16.67%]" data-name="Vector">
                <div className="absolute inset-[-5%_-6.25%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 14.6667">
                    <path d={svgPaths.p6f8d400} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[8.33%_16.67%_66.67%_58.33%]" data-name="Vector">
                <div className="absolute inset-[-16.67%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.33333 5.33333">
                    <path d={svgPaths.p59eee40} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[54.17%_33.33%_45.83%_33.33%]" data-name="Vector">
                <div className="absolute inset-[-0.67px_-12.5%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.66667 1.33333">
                    <path d="M6 0.666667H0.666667" id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[70.83%_33.33%_29.17%_33.33%]" data-name="Vector">
                <div className="absolute inset-[-0.67px_-12.5%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.66667 1.33333">
                    <path d="M6 0.666667H0.666667" id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[37.5%_58.33%_62.5%_33.33%]" data-name="Vector">
                <div className="absolute inset-[-0.67px_-50%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.66667 1.33333">
                    <path d="M2 0.666667H0.666667" id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#404040] text-[14px] text-ellipsis whitespace-nowrap">
              <p className="leading-[20px] overflow-hidden">Proposal</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ArtifactsSidebarDrawer() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[900px] items-start relative shrink-0 w-[256px]" data-name="Artifacts Sidebar Drawer">
      <div aria-hidden="true" className="absolute border-[#e5e5e5] border-r border-solid inset-0 pointer-events-none" />
      <HorizontalBorder />
      <Container10 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[24px] relative w-full">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black whitespace-nowrap">
            <p className="leading-[30px]">Story 3.1: Image Upload via Slash Command</p>
          </div>
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="icon">
            <div className="absolute inset-[20.83%]" data-name="Vector (Stroke)">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9998 13.9998">
                <path d={svgPaths.p3364c680} fill="var(--fill-0, black)" id="Vector (Stroke)" />
              </svg>
            </div>
            <div className="absolute inset-[20.83%]" data-name="Vector (Stroke)">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9998 13.9998">
                <path d={svgPaths.p3906de00} fill="var(--fill-0, black)" id="Vector (Stroke)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[16px] text-black text-ellipsis whitespace-nowrap">
        <p className="leading-[19.5px] overflow-hidden">Screen Title #1</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[12px] relative w-full">
          <div className="flex flex-[1_0_0] flex-col font-['Space_Mono:Regular',sans-serif] justify-center leading-[1.5] max-h-[300px] min-h-px min-w-px not-italic relative text-[16px] text-black">
            <p className="mb-0">Design a full-screen modal overlay that presents a comprehensive 4-column browse layout for screen prompts. The modal should feature:</p>
            <p className="mb-0">{`Header Section: A prominent title "Browse Screen Prompts" aligned left, with a close button (X icon) positioned in the top-right corner. Include a search bar below the title with placeholder text "Search by epic, story, or screen name..." that spans the full width with subtle rounded corners and a light gray background.`}</p>
            <p className="mb-0">{`Filter Bar: Below the search, display a horizontal row of filter chips including "All Epics", "Epic 1", "Epic 2", "Epic 3", etc. The active filter should be highlighted with the brand red color (#D10F19), while inactive filters maintain a light gray appearance. Each chip should have subtle over states.`}</p>
            <p className="mb-0">Grid Layout: The main content area displays screen prompt cards in a 4-column grid with consistent spacing. Each card includes: a thumbnail preview image at the top (16:9 aspect ratio), the screen name as a heading, the parent story name in smaller gray text, and a brief one-line description. Cards should have subtle shadows and scale slightly on hover.</p>
            <p className="mb-0">{`Card Interaction: When hovering over a card, display an overlay with two action buttons: "View Prompt" (primary) and "Copy" (secondary). The overlay should have a semi-transparent dark background that smoothly fades in.`}</p>
            <p className="mb-0">{`Footer: At the bottom of the modal, include pagination controls centered horizontally, showing "← Previous" and "Next →" buttons with the current page indicator "Page 1 of 4" between them.`}</p>
            <p className="mb-0">Visual Style: Maintain a clean, minimal aesthetic with ample white space. Use the Inter font throughout, with the brand red (#D10F19) for primary actions and interactive elements. The modal background should be white with a subtle drop shadow, and the overlay behind the modal should be semi-transparent dark gray (rgba(0,0,0,0.5)).</p>
            <p>Ensure the modal is responsive and maintains readability across different screen sizes, with the grid collapsing to 3, 2, or 1 column on smaller viewports.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_18_2029)" id="icon">
          <path d={svgPaths.p4350bf0} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p171ee8e0} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_18_2029">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-white content-stretch flex items-center p-[8px] right-[12px] rounded-[4px] top-[12px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Icon />
    </div>
  );
}

function CodeBlock() {
  return (
    <div className="bg-[#f2f2f2] relative rounded-[8px] shrink-0 w-full" data-name="Code Block">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start p-[12px] relative w-full">
          <Frame5 />
          <Button2 />
        </div>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame22 />
      <CodeBlock />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[16px] text-black text-ellipsis whitespace-nowrap">
        <p className="leading-[19.5px] overflow-hidden">Screen Title #2</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[12px] relative w-full">
          <div className="flex flex-[1_0_0] flex-col font-['Space_Mono:Regular',sans-serif] justify-center leading-[1.5] max-h-[300px] min-h-px min-w-px not-italic overflow-hidden relative text-[16px] text-black text-ellipsis">
            <p className="mb-0">Design a full-screen modal overlay that presents a comprehensive 4-column browse layout for screen prompts. The modal should feature:</p>
            <p className="mb-0">{`Header Section: A prominent title "Browse Screen Prompts" aligned left, with a close button (X icon) positioned in the top-right corner. Include a search bar below the title with placeholder text "Search by epic, story, or screen name..." that spans the full width with subtle rounded corners and a light gray background.`}</p>
            <p className="mb-0">{`Filter Bar: Below the search, display a horizontal row of filter chips including "All Epics", "Epic 1", "Epic 2", "Epic 3", etc. The active filter should be highlighted with the brand red color (#D10F19), while inactive filters maintain a light gray appearance. Each chip should have subtle over states.`}</p>
            <p className="mb-0">Grid Layout: The main content area displays screen prompt cards in a 4-column grid with consistent spacing. Each card includes: a thumbnail preview image at the top (16:9 aspect ratio), the screen name as a heading, the parent story name in smaller gray text, and a brief one-line description. Cards should have subtle shadows and scale slightly on hover.</p>
            <p className="mb-0">{`Card Interaction: When hovering over a card, display an overlay with two action buttons: "View Prompt" (primary) and "Copy" (secondary). The overlay should have a semi-transparent dark background that smoothly fades in.`}</p>
            <p className="mb-0">{`Footer: At the bottom of the modal, include pagination controls centered horizontally, showing "← Previous" and "Next →" buttons with the current page indicator "Page 1 of 4" between them.`}</p>
            <p className="mb-0">Visual Style: Maintain a clean, minimal aesthetic with ample white space. Use the Inter font throughout, with the brand red (#D10F19) for primary actions and interactive elements. The modal background should be white with a subtle drop shadow, and the overlay behind the modal should be semi-transparent dark gray (rgba(0,0,0,0.5)).</p>
            <p>Ensure the modal is responsive and maintains readability across different screen sizes, with the grid collapsing to 3, 2, or 1 column on smaller viewports.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_18_2029)" id="icon">
          <path d={svgPaths.p4350bf0} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p171ee8e0} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_18_2029">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-white content-stretch flex items-center p-[8px] right-[12px] rounded-[4px] top-[12px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Icon1 />
    </div>
  );
}

function CodeBlock1() {
  return (
    <div className="bg-[#f2f2f2] relative rounded-[8px] shrink-0 w-full" data-name="Code Block">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start p-[12px] relative w-full">
          <Frame6 />
          <Button3 />
        </div>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame25 />
      <CodeBlock1 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[16px] text-black text-ellipsis whitespace-nowrap">
        <p className="leading-[19.5px] overflow-hidden">Screen Title #3</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[12px] relative w-full">
          <div className="flex flex-[1_0_0] flex-col font-['Space_Mono:Regular','Noto_Sans:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px relative text-[16px] text-black" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
            <p className="leading-[1.5]">{`Design a responsive web app called "Session Keeper" that streamlines the scheduling and management of tabletop RPG sessions for GMs (Game Masters), players, and admins. The app enables GMs to list games, form groups, and schedule sessions; players to browse, join, and RSVP to games; and admins to oversee and approve room bookings. Prioritize reducing manual coordination, maximizing space usage, and offering clear, role-based dashboards. The UI must be highly usable on both desktop and mobile, minimize friction in scheduling/booking, and provide real-time feedback and error prevention. `}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_18_2029)" id="icon">
          <path d={svgPaths.p4350bf0} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p171ee8e0} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_18_2029">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute bg-white content-stretch flex items-center p-[8px] right-[12px] rounded-[4px] top-[12px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Icon2 />
    </div>
  );
}

function CodeBlock2() {
  return (
    <div className="bg-[#f2f2f2] relative rounded-[8px] shrink-0 w-full" data-name="Code Block">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start p-[12px] relative w-full">
          <Frame7 />
          <Button4 />
        </div>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame27 />
      <CodeBlock2 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <Frame23 />
      <Frame24 />
      <Frame26 />
    </div>
  );
}

function Svg5() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="SVG">
          <path d={svgPaths.p3c672480} fill="var(--fill-0, #737373)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Item">
      <Svg5 />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[32px] not-italic relative shrink-0 text-[18px] text-black whitespace-nowrap" style={{ fontFeatureSettings: "'kern' 0" }}>
        Story 3.1: Image Upload via Slash Command
      </p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[16px] text-black text-ellipsis whitespace-nowrap">
        <p className="leading-[19.5px] overflow-hidden">Screen Title #1</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[12px] relative w-full">
          <div className="flex flex-[1_0_0] flex-col font-['Space_Mono:Regular',sans-serif] justify-center leading-[1.5] max-h-[300px] min-h-px min-w-px not-italic overflow-hidden relative text-[16px] text-black text-ellipsis">
            <p className="mb-0">Design a full-screen modal overlay that presents a comprehensive 4-column browse layout for screen prompts. The modal should feature:</p>
            <p className="mb-0">{`Header Section: A prominent title "Browse Screen Prompts" aligned left, with a close button (X icon) positioned in the top-right corner. Include a search bar below the title with placeholder text "Search by epic, story, or screen name..." that spans the full width with subtle rounded corners and a light gray background.`}</p>
            <p className="mb-0">{`Filter Bar: Below the search, display a horizontal row of filter chips including "All Epics", "Epic 1", "Epic 2", "Epic 3", etc. The active filter should be highlighted with the brand red color (#D10F19), while inactive filters maintain a light gray appearance. Each chip should have subtle over states.`}</p>
            <p className="mb-0">Grid Layout: The main content area displays screen prompt cards in a 4-column grid with consistent spacing. Each card includes: a thumbnail preview image at the top (16:9 aspect ratio), the screen name as a heading, the parent story name in smaller gray text, and a brief one-line description. Cards should have subtle shadows and scale slightly on hover.</p>
            <p className="mb-0">{`Card Interaction: When hovering over a card, display an overlay with two action buttons: "View Prompt" (primary) and "Copy" (secondary). The overlay should have a semi-transparent dark background that smoothly fades in.`}</p>
            <p className="mb-0">{`Footer: At the bottom of the modal, include pagination controls centered horizontally, showing "← Previous" and "Next →" buttons with the current page indicator "Page 1 of 4" between them.`}</p>
            <p className="mb-0">Visual Style: Maintain a clean, minimal aesthetic with ample white space. Use the Inter font throughout, with the brand red (#D10F19) for primary actions and interactive elements. The modal background should be white with a subtle drop shadow, and the overlay behind the modal should be semi-transparent dark gray (rgba(0,0,0,0.5)).</p>
            <p>Ensure the modal is responsive and maintains readability across different screen sizes, with the grid collapsing to 3, 2, or 1 column on smaller viewports.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_18_2029)" id="icon">
          <path d={svgPaths.p4350bf0} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p171ee8e0} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_18_2029">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute bg-white content-stretch flex items-center p-[8px] right-[12px] rounded-[4px] top-[12px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Icon3 />
    </div>
  );
}

function CodeBlock3() {
  return (
    <div className="bg-[#f2f2f2] relative rounded-[8px] shrink-0 w-full" data-name="Code Block">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start p-[12px] relative w-full">
          <Frame8 />
          <Button5 />
        </div>
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame29 />
      <CodeBlock3 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[16px] text-black text-ellipsis whitespace-nowrap">
        <p className="leading-[19.5px] overflow-hidden">Screen Title #2</p>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[12px] relative w-full">
          <div className="flex flex-[1_0_0] flex-col font-['Space_Mono:Regular',sans-serif] justify-center leading-[1.5] max-h-[300px] min-h-px min-w-px not-italic overflow-hidden relative text-[16px] text-black text-ellipsis">
            <p className="mb-0">Design a full-screen modal overlay that presents a comprehensive 4-column browse layout for screen prompts. The modal should feature:</p>
            <p className="mb-0">{`Header Section: A prominent title "Browse Screen Prompts" aligned left, with a close button (X icon) positioned in the top-right corner. Include a search bar below the title with placeholder text "Search by epic, story, or screen name..." that spans the full width with subtle rounded corners and a light gray background.`}</p>
            <p className="mb-0">{`Filter Bar: Below the search, display a horizontal row of filter chips including "All Epics", "Epic 1", "Epic 2", "Epic 3", etc. The active filter should be highlighted with the brand red color (#D10F19), while inactive filters maintain a light gray appearance. Each chip should have subtle over states.`}</p>
            <p className="mb-0">Grid Layout: The main content area displays screen prompt cards in a 4-column grid with consistent spacing. Each card includes: a thumbnail preview image at the top (16:9 aspect ratio), the screen name as a heading, the parent story name in smaller gray text, and a brief one-line description. Cards should have subtle shadows and scale slightly on hover.</p>
            <p className="mb-0">{`Card Interaction: When hovering over a card, display an overlay with two action buttons: "View Prompt" (primary) and "Copy" (secondary). The overlay should have a semi-transparent dark background that smoothly fades in.`}</p>
            <p className="mb-0">{`Footer: At the bottom of the modal, include pagination controls centered horizontally, showing "← Previous" and "Next →" buttons with the current page indicator "Page 1 of 4" between them.`}</p>
            <p className="mb-0">Visual Style: Maintain a clean, minimal aesthetic with ample white space. Use the Inter font throughout, with the brand red (#D10F19) for primary actions and interactive elements. The modal background should be white with a subtle drop shadow, and the overlay behind the modal should be semi-transparent dark gray (rgba(0,0,0,0.5)).</p>
            <p>Ensure the modal is responsive and maintains readability across different screen sizes, with the grid collapsing to 3, 2, or 1 column on smaller viewports.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_18_2029)" id="icon">
          <path d={svgPaths.p4350bf0} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p171ee8e0} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_18_2029">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute bg-white content-stretch flex items-center p-[8px] right-[12px] rounded-[4px] top-[12px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Icon4 />
    </div>
  );
}

function CodeBlock4() {
  return (
    <div className="bg-[#f2f2f2] relative rounded-[8px] shrink-0 w-full" data-name="Code Block">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start p-[12px] relative w-full">
          <Frame9 />
          <Button6 />
        </div>
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame32 />
      <CodeBlock4 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[16px] text-black text-ellipsis whitespace-nowrap">
        <p className="leading-[19.5px] overflow-hidden">Screen Title #3</p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[12px] relative w-full">
          <div className="flex flex-[1_0_0] flex-col font-['Space_Mono:Regular','Noto_Sans:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px relative text-[16px] text-black" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
            <p className="leading-[1.5]">{`Design a responsive web app called "Session Keeper" that streamlines the scheduling and management of tabletop RPG sessions for GMs (Game Masters), players, and admins. The app enables GMs to list games, form groups, and schedule sessions; players to browse, join, and RSVP to games; and admins to oversee and approve room bookings. Prioritize reducing manual coordination, maximizing space usage, and offering clear, role-based dashboards. The UI must be highly usable on both desktop and mobile, minimize friction in scheduling/booking, and provide real-time feedback and error prevention. `}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_18_2029)" id="icon">
          <path d={svgPaths.p4350bf0} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p171ee8e0} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_18_2029">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute bg-white content-stretch flex items-center p-[8px] right-[12px] rounded-[4px] top-[12px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Icon5 />
    </div>
  );
}

function CodeBlock5() {
  return (
    <div className="bg-[#f2f2f2] relative rounded-[8px] shrink-0 w-full" data-name="Code Block">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start p-[12px] relative w-full">
          <Frame10 />
          <Button7 />
        </div>
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame35 />
      <CodeBlock5 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <Item />
      <Frame28 />
      <Frame30 />
      <Frame34 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] items-start left-[24px] top-0 w-[697px]">
      <Frame39 />
      <Frame40 />
    </div>
  );
}

function Frame21() {
  return <div className="absolute bg-[#ccc] h-[450px] right-[6px] rounded-[20px] top-[12px] w-[4px]" />;
}

function Frame41() {
  return <div className="absolute bg-[#ccc] h-[294px] right-[28px] rounded-[20px] top-[44px] w-[4px]" />;
}

function Frame37() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-start pb-[24px] pt-[12px] px-[24px] relative size-full">
          <Frame38 />
          <Frame21 />
          <Frame41 />
        </div>
      </div>
    </div>
  );
}

function Frame42() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex items-center justify-end p-[24px] relative w-full">
          <div className="bg-[#d10f19] content-stretch flex gap-[8px] items-center justify-center max-w-[400px] min-w-[100px] p-[8px] relative rounded-[4px] shrink-0" data-name="Button">
            <div className="relative shrink-0 size-[20px]" data-name="icon">
              <div className="absolute inset-[8.61%_8.57%_37.48%_41.67%]" data-name="Vector">
                <div className="absolute inset-[-6.96%_-7.54%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.453 12.2822">
                    <path d={svgPaths.p33d7c240} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[37.48%_41.67%_8.61%_8.57%]" data-name="Vector">
                <div className="absolute inset-[-6.96%_-7.54%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.453 12.2822">
                    <path d={svgPaths.p127456e0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
              <p className="leading-[1.5]">Save Changes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PromptModal() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white content-stretch flex flex-col h-[729px] items-center left-1/2 max-w-[768px] overflow-clip rounded-[4px] top-[calc(50%-0.5px)] w-[745px]" data-name="prompt-modal">
      <Frame14 />
      <Frame37 />
      <Frame42 />
    </div>
  );
}

function Overlay1() {
  return (
    <div className="-translate-x-1/2 absolute bg-[rgba(0,0,0,0.8)] h-[912px] left-[calc(50%+0.5px)] top-0 w-[1441px]" data-name="overlay">
      <PromptModal />
    </div>
  );
}

export default function Component32IndividualStoryPromptModalFromInlineAttachment() {
  return (
    <div className="bg-white relative size-full" data-name="3-2_individual-story-prompt-modal-from-inline-attachment">
      <Container />
      <div className="absolute content-stretch flex h-[912px] items-center left-0 top-0" data-name="sidebar">
        <Sidebar />
        <ArtifactsSidebarDrawer />
      </div>
      <Overlay1 />
    </div>
  );
}