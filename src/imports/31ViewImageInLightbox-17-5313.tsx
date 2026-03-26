import svgPaths from "./svg-a5s52xxhte";
import imgChatPanelHeader from "figma:asset/f7871b4bf2ee7b42af8de7e542550b71e24756bf.png";
import imgSidebar from "figma:asset/8e3e1fd8b3f03cf0772a7984ed845c3add4284b6.png";
import imgImage35 from "figma:asset/c8a7f6c2b20128533909f7856cb68046c9ef6047.png";

function Frame() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p3a89f880} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0">
      <Frame />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0050c9] text-[16px] whitespace-nowrap">
        <p className="leading-[1.5]">3-1_screen-prompt-artifact_prompt-modal</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame3 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[28px] top-[-539px] w-[484px]">
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[32px] not-italic relative shrink-0 text-[0px] text-black w-full" style={{ fontFeatureSettings: "'kern' 0" }}>
        <p className="font-['Inter:Bold',sans-serif] font-bold mb-[12px] text-[24px]">{`Epic 3: Screen Prompts, File Upload & Pitch (r1.2)`}</p>
        <p className="text-[16px]">Goal: Add file/image upload, AI-generated screen prompts, screen-epic association, and the BD agent Pitch workflow with embedded screen designs and slides-format PDF export.</p>
      </div>
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[32px] not-italic relative shrink-0 text-[0px] text-black w-full" style={{ fontFeatureSettings: "'kern' 0" }}>
        <p className="font-['Inter:Bold',sans-serif] font-bold mb-[8px] text-[18px]">Story 3.1: Image Upload via Slash Command</p>
        <p className="text-[16px]">As a user, I want the system to generate AI-powered screen prompts derived from my UX Spec, PRD, and Epics, So that I have actionable descriptions for creating screen designs for each feature.</p>
      </div>
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[0px] text-[16px] text-black w-full" style={{ fontFeatureSettings: "'kern' 0" }}>
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
      <Frame4 />
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[32px] not-italic relative shrink-0 text-[0px] text-black w-full" style={{ fontFeatureSettings: "'kern' 0" }}>
        <p className="font-['Inter:Bold',sans-serif] font-bold mb-[8px] text-[18px]">Story 3.2: AI Screen Prompts Generation</p>
        <p className="text-[16px]">As a user, I want the system to generate AI-powered screen prompts derived from my UX Spec, PRD, and Epics, So that I have actionable descriptions for creating screen designs for each feature.</p>
      </div>
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[0px] text-[16px] text-black w-full" style={{ fontFeatureSettings: "'kern' 0" }}>
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
    <div className="bg-white h-[1525px] relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full" data-name="editor-body">
      <div className="overflow-auto size-full">
        <div className="content-stretch flex flex-col items-start p-[28px] relative size-full">
          <Frame6 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e7e7e7] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-bl-[8px] rounded-br-[8px]" />
    </div>
  );
}

function Editor1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px relative" data-name="editor">
      <div className="bg-[#fbfbfb] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full" data-name="editor-header">
        <div aria-hidden="true" className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-tl-[12px] rounded-tr-[12px]" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center justify-between px-[20px] py-[16px] relative w-full">
            <div className="content-stretch flex items-center p-[4px] relative rounded-[4px] shrink-0">
              <div className="overflow-clip relative shrink-0 size-[20px]" data-name="panel-icons">
                <div className="absolute inset-[12.5%]" data-name="Vector">
                  <div className="absolute inset-[-5%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 16.5">
                      <path d={svgPaths.p379b6900} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    </svg>
                  </div>
                </div>
                <div className="absolute inset-[12.5%_62.5%_12.5%_37.5%]" data-name="Vector">
                  <div className="absolute inset-[-5%_-0.75px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.5 16.5">
                      <path d="M0.75 0.75V15.75" id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
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
              <div className="relative shrink-0 size-[20px]" data-name="SVG">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <g id="SVG">
                    <path d={svgPaths.p368a700} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                    <path d={svgPaths.p23d2fa00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                    <path d={svgPaths.p1df71300} id="Vector_3" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
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
              <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Container">
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
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                  <div className="h-[12px] relative shrink-0 w-[7.5px]" data-name="SVG">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.5 12">
                      <g id="SVG">
                        <path d={svgPaths.p2d6f8600} fill="var(--fill-0, #9CA3AF)" id="Vector" />
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
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
                </div>
              </div>
            </div>
          </div>
        </div>
        <Editor />
      </div>
      <div aria-hidden="true" className="absolute border-[#ccc] border-r border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start not-italic p-[12px] relative text-[14px] w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#374151] w-full">
          <p className="leading-[20px]">{`Based on your Product Brief [1], I can see you've laid out a comprehensive vision for MindSpace. Let me extract what I understand:`}</p>
        </div>
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#111827] w-full">
          <p>
            <span className="leading-[20px]">{`What you're building:`}</span>
            <span className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic text-[#374151]">{` An AI-powered mental health app that provides daily emotional support through evidence-based practices, designed to intercept users at trigger moments and prevent them from falling into "functional freeze" states.`}</span>
          </p>
        </div>
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#111827] w-full">
          <p>
            <span className="leading-[20px]">Problem it solves:</span>
            <span className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic text-[#374151]">{` Addresses the critical gap where people needing daily mental health support turn to unregulated, unreliable apps that may provide harmful guidance during vulnerable moments, perpetuating disconnection from their lives rather than providing meaningful help.`}</span>
          </p>
        </div>
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#111827] w-full">
          <p>
            <span className="leading-[20px]">Target users:</span>
            <span className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic text-[#374151]">{` Tech-savvy Gen Z and Millennial adults who are proactive about mental health - specifically those on therapy waitlists or between sessions who need ongoing daily guidance and are open to AI-powered interactions.`}</span>
          </p>
        </div>
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#111827] w-full">
          <p>
            <span className="leading-[20px]">What makes it special:</span>
            <span className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic text-[#374151]">{` Your proprietary empathy engine trained on crisis worker data, evidence-based foundation with consulting psychologist oversight, and the focus on preventing functional freeze states rather than just general wellness.`}</span>
          </p>
        </div>
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[20px] relative shrink-0 text-[#374151] w-full">
          <p className="mb-0">How does this align with your vision? Should we refine any of these points</p>
          <p>before we move forward with the PRD structure?</p>
        </div>
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[20px] relative shrink-0 text-[#374151] w-full">
          <p className="mb-0">{`Also, I want to understand - what's driving the urgency around this project`}</p>
          <p className="mb-0">{`right now? Is there a specific timeline or market opportunity you're`}</p>
          <p>responding to?</p>
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[8px] items-start pl-[20px] pr-[80px] relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[12px] w-[98.412px]">
          <p className="leading-[16px]">Product Manager</p>
        </div>
        <Container2 />
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">16 Jan 2026, 17:17</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-[#541b1f] relative rounded-[10px] shrink-0 w-[298px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[12px] relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white w-full">
          <p className="leading-[20px]">What is the current status of this project?</p>
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-end size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-end pl-[80px] pr-[20px] relative w-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">
            <p className="leading-[16px]">Me</p>
          </div>
          <Container4 />
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">25 Feb 2026, 12:08</p>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[26px] items-start left-0 right-0 top-[-95px]">
      <Container1 />
      <Container3 />
    </div>
  );
}

function Chat() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-auto relative w-full" data-name="chat">
      <Frame2 />
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
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Spryn logo">
                <div className="absolute left-0 overflow-clip size-[24px] top-0" data-name="logo_transparent.svg fill">
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[24px] top-1/2" data-name="logo_transparent.svg">
                    <div className="absolute inset-[6.32%]" data-name="Vector">
                      <img alt="" className="absolute block max-w-none size-full" height="20.964" src={imgChatPanelHeader} width="20.964" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black w-[46.551px]">
                <p className="leading-[24px]">Spryn</p>
              </div>
            </div>
            <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
              <div className="bg-white h-[32px] relative rounded-[6px] shrink-0 w-[114.77px]" data-name="Button">
                <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
                <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[14.5px] justify-center leading-[0] left-[calc(50%+0.17px)] not-italic text-[12px] text-black text-center top-[calc(50%-0.25px)] w-[89.107px]">
                  <p className="leading-[16px]">Send Feedback</p>
                </div>
              </div>
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
            <div className="relative rounded-[8px] shrink-0 w-full">
              <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[8px]" />
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center justify-between p-[8px] relative w-full">
                  <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="active-workflow">
                    <div className="bg-[#f2f2f2] relative rounded-[9999px] shrink-0 size-[40px]" data-name="workflow-icons">
                      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[20px] top-1/2" data-name="SVG">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                          <g id="SVG">
                            <path d={svgPaths.p23feab80} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                            <path d={svgPaths.p1a9c7f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0">
                      <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">
                          <p className="leading-[20px]">Product Brief</p>
                        </div>
                      </div>
                      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(115,115,115,0.8)] whitespace-nowrap">
                        <p className="leading-[20px]">Capture project goals and requirements</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center relative shrink-0">
                    <div className="-scale-y-100 flex-none rotate-180">
                      <div className="relative size-[20px]" data-name="chevron">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                          <g id="chevron">
                            <path d="M5 7.5L10 12.5L15 7.5" id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[76px] relative shrink-0 w-full" data-name="workflow-stepper">
        <div className="absolute bg-[#fafafa] content-stretch flex flex-col gap-[8px] items-start left-0 px-[16px] py-[12px] right-0 top-0" data-name="Workflow Stepper">
          <div aria-hidden="true" className="absolute border-[#ccc] border-b border-solid inset-0 pointer-events-none" />
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black w-full">
            <p className="leading-[20px]">{`Step 2 of 7: Problem & Goals`}</p>
          </div>
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
            <div className="bg-[#d20f1f] relative rounded-[9999px] shrink-0 size-[24px]" data-name="Background">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[14px] top-1/2" data-name="SVG">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                  <g id="SVG">
                    <path d={svgPaths.p3de7e600} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                  </g>
                </svg>
              </div>
            </div>
            <div className="bg-[rgba(210,15,31,0.8)] relative rounded-[9999px] shrink-0 size-[24px]" data-name="Overlay">
              <div className="-translate-y-1/2 absolute bg-[rgba(255,255,255,0)] left-0 rounded-[9999px] shadow-[0px_0px_0px_2px_rgba(210,15,31,0.3)] size-[24px] top-1/2" data-name="Overlay+Shadow" />
              <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] left-[calc(50%+0.19px)] not-italic text-[12px] text-center text-white top-[calc(50%-0.5px)] w-[7.77px]">
                <p className="leading-[16px]">2</p>
              </div>
            </div>
            <div className="bg-[#f2f2f2] relative rounded-[9999px] shrink-0 size-[24px]" data-name="Background">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] left-[calc(50%+0.18px)] not-italic text-[#737373] text-[12px] text-center top-[calc(50%-0.5px)] w-[7.893px]">
                <p className="leading-[16px]">3</p>
              </div>
            </div>
            <div className="bg-[#f2f2f2] relative rounded-[9999px] shrink-0 size-[24px]" data-name="Background">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] left-[calc(50%+0.19px)] not-italic text-[#737373] text-[12px] text-center top-[calc(50%-0.5px)] w-[8.252px]">
                <p className="leading-[16px]">4</p>
              </div>
            </div>
            <div className="bg-[#f2f2f2] relative rounded-[9999px] shrink-0 size-[24px]" data-name="Background">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] left-[calc(50%+0.17px)] not-italic text-[#737373] text-[12px] text-center top-[calc(50%-0.5px)] w-[7.586px]">
                <p className="leading-[16px]">5</p>
              </div>
            </div>
            <div className="bg-[#f2f2f2] relative rounded-[9999px] shrink-0 size-[24px]" data-name="Background">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] left-[calc(50%+0.18px)] not-italic text-[#737373] text-[12px] text-center top-[calc(50%-0.5px)] w-[7.924px]">
                <p className="leading-[16px]">6</p>
              </div>
            </div>
            <div className="bg-[#f2f2f2] relative rounded-[9999px] shrink-0 size-[24px]" data-name="Background">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] left-[calc(50%+0.16px)] not-italic text-[#737373] text-[12px] text-center top-[calc(50%-0.5px)] w-[7.207px]">
                <p className="leading-[16px]">7</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Chat />
      <div className="bg-white relative shrink-0 w-full" data-name="chat-input">
        <div aria-hidden="true" className="absolute border-[#ccc] border-solid border-t inset-0 pointer-events-none" />
        <div className="content-stretch flex gap-[12px] items-start p-[16px] relative w-full">
          <div className="bg-white flex-[1_0_0] h-[40px] min-h-px min-w-px relative rounded-[8px]" data-name="Textarea - Chat message input">
            <div className="overflow-auto relative size-full">
              <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] left-[13px] not-italic text-[#737373] text-[14px] top-[19px] w-[118.513px]">
                <p className="leading-[20px]">Type something...</p>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[8px]" />
          </div>
          <div className="bg-[#d1d5db] overflow-clip relative rounded-[9999px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0 size-[40px]" data-name="Button - Send message">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2" data-name="SVG">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <g id="SVG">
                  <path d={svgPaths.p1b0900} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d="M8 12.6663V3.33301" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex h-[1005px] items-center justify-between left-[312px] right-0 top-0" data-name="Container">
      <EditorPanel />
      <ChatPanel />
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute h-[1005px] left-0 top-0 w-[312px]">
      <div className="absolute content-stretch flex h-[1005px] items-center left-0 top-0" data-name="sidebar">
        <div className="bg-[#541b1f] h-full relative shrink-0 w-[56px]" data-name="Sidebar">
          <div className="flex flex-col items-center size-full">
            <div className="content-stretch flex flex-col gap-[16px] items-center px-[8px] py-[16px] relative size-full">
              <div className="aspect-[32/32] overflow-clip relative shrink-0 w-full" data-name="Spryn logo">
                <div className="absolute left-0 overflow-clip size-[32px] top-0" data-name="logo_transparent.svg fill">
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[32px] top-1/2" data-name="logo_transparent.svg">
                    <div className="absolute inset-[6.32%]" data-name="Vector">
                      <img alt="" className="absolute block max-w-none size-full" height="27.953" src={imgSidebar} width="27.953" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                <div className="h-[40px] relative rounded-[6px] shrink-0 w-full" data-name="Projects">
                  <div className="absolute inset-[20%]" data-name="Frame">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <g id="Frame">
                        <path d={svgPaths.p3ce5e700} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="h-[40px] relative rounded-[6px] shrink-0 w-full" data-name="Artifacts">
                  <div className="absolute inset-[20%]" data-name="Frame">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <g id="Frame">
                        <path d={svgPaths.p20ee5200} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        <path d={svgPaths.pb4bb020} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        <path d={svgPaths.p138e0700} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="bg-[#ffb0b3] h-[40px] relative rounded-[6px] shrink-0 w-full" data-name="Assets">
                  <div className="absolute inset-[20%]" data-name="Frame">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <g id="Frame">
                        <path d={svgPaths.p3d7cb000} id="Vector" stroke="var(--stroke-0, #D10F19)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        <path d="M8 17L12 13L16 17" id="Vector_2" stroke="var(--stroke-0, #D10F19)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white content-stretch flex flex-col h-full items-start relative shrink-0 w-[256px]" data-name="Artifacts Sidebar Drawer">
          <div aria-hidden="true" className="absolute border-[#e5e5e5] border-r border-solid inset-0 pointer-events-none" />
          <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
            <div aria-hidden="true" className="absolute border-[#e5e5e5] border-b border-solid inset-0 pointer-events-none" />
            <div className="content-stretch flex flex-col gap-[4px] items-start px-[16px] py-[12px] relative w-full">
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[14px] w-[76.648px]">
                  <p className="leading-[20px]">Assets</p>
                </div>
              </div>
              <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full not-italic overflow-hidden relative shrink-0 text-[#737373] text-[12px] text-ellipsis w-[min-content] whitespace-nowrap">
                <p className="leading-[20px] overflow-hidden">Uploaded files</p>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-full" data-name="Container">
            <div className="overflow-auto size-full">
              <div className="content-stretch flex flex-col gap-[4px] items-start px-[16px] py-[18px] relative w-full">
                <div className="bg-[#d20f1f] relative rounded-[6px] shrink-0 w-full" data-name="Button dialog">
                  <div className="flex flex-col items-center justify-center size-full">
                    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative w-full">
                      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[81.415px]">
                        <p className="leading-[20px]">Upload File</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-full" data-name="Container">
            <div className="overflow-auto size-full">
              <div className="content-stretch flex flex-col gap-[4px] items-start px-[16px] py-[12px] relative w-full">
                <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[6px] relative rounded-[4px] shrink-0 w-[224px]" data-name="drawer-item">
                  <div className="overflow-clip relative shrink-0 size-[16px]" data-name="drawer-icon">
                    <div className="absolute inset-[8.33%_9.76%_8.33%_12.5%]" data-name="Vector">
                      <div className="absolute inset-[-4.88%_-5.23%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.7374 14.6331">
                          <path d={svgPaths.p19ef7280} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#404040] text-[14px] text-ellipsis whitespace-nowrap">
                    <p className="leading-[20px] overflow-hidden">3-2_[screen-description]</p>
                  </div>
                </div>
                <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[6px] relative rounded-[4px] shrink-0 w-[224px]" data-name="drawer-item">
                  <div className="overflow-clip relative shrink-0 size-[16px]" data-name="drawer-icon">
                    <div className="absolute inset-[8.33%_9.76%_8.33%_12.5%]" data-name="Vector">
                      <div className="absolute inset-[-4.88%_-5.23%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.7374 14.6331">
                          <path d={svgPaths.p19ef7280} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#404040] text-[14px] text-ellipsis whitespace-nowrap">
                    <p className="leading-[20px] overflow-hidden">3-2_[screen-description]</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p3fc2fbc0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M7 10L12 15L17 10" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[rgba(0,0,0,0.4)] content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[33554400px] shrink-0 size-[40px]" data-name="Button">
      <Frame1 />
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d="M13 1L1 13" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d="M1 1L13 13" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[rgba(0,0,0,0.4)] content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[33554400px] shrink-0 size-[40px]" data-name="Button">
      <Icon />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[24px] items-center justify-end relative shrink-0">
      <Button />
      <div className="flex h-[35px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[35px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 1">
                <line id="Line 27" stroke="var(--stroke-0, white)" x2="35" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Button1 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-0 p-[20px] top-0 w-[1441px]">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[32px] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap" style={{ fontFeatureSettings: "'kern' 0" }}>
        [Asset Name]
      </p>
      <Frame5 />
    </div>
  );
}

function Overlay() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.8)] h-[1005px] left-0 top-0 w-[1441px]" data-name="overlay">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[867px] left-[calc(50%-7px)] shadow-[4px_4px_8px_0px_rgba(0,0,0,0.14)] top-[calc(50%+11px)] w-[213px]" data-name="image 35">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[99.97%] left-0 max-w-none top-[-0.01%] w-full" src={imgImage35} />
        </div>
      </div>
      <Frame8 />
    </div>
  );
}

export default function Component31ViewImageInLightbox() {
  return (
    <div className="bg-white relative size-full" data-name="3-1_view-image-in-lightbox">
      <Container />
      <Frame7 />
      <Overlay />
    </div>
  );
}