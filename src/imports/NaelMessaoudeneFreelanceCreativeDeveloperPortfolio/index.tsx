import svgPaths from "./svg-gyit3r5ctg";
import imgImageCoverImageOfTheLaNouvelleProject from "./99e5c1eea6e9f1ee0484191a091c67fa3b9f17fd.png";
import imgImageLaNouvelleWebsiteImageCaseStudy from "./06e55e717932e32c76660df779f23c0f5a63449d.png";
import imgImageLaNouvelleWebsiteImageCaseStudy1 from "./6a894693e3f12a9fcb034a396dffdddc9f293031.png";
import imgImageLaNouvelleWebsiteImageCaseStudy2 from "./b4e7f65440d0b6948802ae2a7dea4dcab818e5ec.png";
import imgContainer from "./6989ccba11b13a5e0bb58700fc3175f265c1905c.png";

function ContainerTranslation() {
  return <div className="h-[403.188px] relative shrink-0 w-full" data-name="Container (translation)" />;
}

function ImageCoverImageOfTheLaNouvelleProject() {
  return (
    <div className="h-[1440px] relative shrink-0 w-[2560px]" data-name="Image (Cover image of the la nouvelle project)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageCoverImageOfTheLaNouvelleProject} />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute bg-[rgba(0,160,0,0.5)] content-stretch flex h-[1440px] items-start left-0 top-[151.2px] w-[2560px]" data-name="Container">
      <ImageCoverImageOfTheLaNouvelleProject />
    </div>
  );
}

function ContainerTranslation1() {
  return (
    <div className="h-[1440px] relative shrink-0 w-full" data-name="Container (translation)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container />
      </div>
    </div>
  );
}

function ContainerTranslation2() {
  return <div className="h-[40.313px] relative shrink-0 w-full" data-name="Container (translation)" />;
}

function ContainerMargin() {
  return (
    <div className="h-[21px] relative shrink-0 w-[1519.375px]" data-name="Container (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[20px] relative size-full">
        <ContainerTranslation2 />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col h-[23px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[22.68px] relative shrink-0 text-[15.12px] text-white uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        informations
      </p>
    </div>
  );
}

function TextMargin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[10.08px] relative size-full">
        <Text />
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[20.16px] w-[49.797px]" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[33.264px] relative shrink-0 text-[22.176px] text-white uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        2021
      </p>
    </div>
  );
}

function ListItem() {
  return (
    <div className="absolute h-[33.25px] left-[504.16px] top-[20.16px] w-[133.453px]" data-name="List Item">
      <p className="[word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal leading-[33.264px] left-0 text-[22.176px] text-white top-0 uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Wordpress
      </p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="absolute h-[33.25px] left-[688px] top-[20.16px] w-[101.172px]" data-name="List Item">
      <p className="[word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal leading-[33.264px] left-0 text-[22.176px] text-white top-0 uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Three.js
      </p>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="absolute h-[33.25px] left-[839.56px] top-[20.16px] w-[57.547px]" data-name="List Item">
      <p className="[word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal leading-[33.264px] left-0 text-[22.176px] text-white top-0 uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        GSAP
      </p>
    </div>
  );
}

function Section1() {
  return (
    <div className="h-[53.41px] relative shrink-0 w-full" data-name="Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph />
        <p className="[word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal leading-[33.264px] left-[100.19px] text-[22.176px] text-white top-[20.16px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          apprenticeship
        </p>
        <p className="[word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal leading-[33.264px] left-[332.84px] text-[22.176px] text-white top-[20.16px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          Front End
        </p>
        <ListItem />
        <ListItem1 />
        <ListItem2 />
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[46px] relative shrink-0 w-[42px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] left-[0.14px] text-[35.28px] text-white top-[-0.93px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          As
        </p>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-0 overflow-clip top-[20.16px] w-[41.719px]" data-name="Paragraph">
      <Text1 />
    </div>
  );
}

function Text2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] relative shrink-0 text-[35.28px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          part
        </p>
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-[51.8px] overflow-clip top-[20.16px] w-[63.406px]" data-name="Paragraph">
      <Text2 />
    </div>
  );
}

function Text3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] relative shrink-0 text-[35.28px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          of
        </p>
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-[125.28px] overflow-clip top-[20.16px] w-[32.078px]" data-name="Paragraph">
      <Text3 />
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[46px] relative shrink-0 w-[49px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] left-[0.2px] text-[35.28px] text-white top-[-0.93px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          my
        </p>
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-[167.44px] overflow-clip top-[20.16px] w-[48.594px]" data-name="Paragraph">
      <Text4 />
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[46px] relative shrink-0 w-[77px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] left-[0.02px] text-[35.28px] text-white top-[-0.93px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          work
        </p>
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-[226.11px] overflow-clip top-[20.16px] w-[76.953px]" data-name="Paragraph">
      <Text5 />
    </div>
  );
}

function Text6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] relative shrink-0 text-[35.28px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          study
        </p>
      </div>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-[313.14px] overflow-clip top-[20.16px] w-[87.266px]" data-name="Paragraph">
      <Text6 />
    </div>
  );
}

function Text7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] relative shrink-0 text-[35.28px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          program
        </p>
      </div>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-[410.48px] overflow-clip top-[20.16px] w-[134.438px]" data-name="Paragraph">
      <Text7 />
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[46px] relative shrink-0 w-[31px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] left-[0.22px] text-[35.28px] text-white top-[-0.93px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          at
        </p>
      </div>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-[555px] overflow-clip top-[20.16px] w-[30.563px]" data-name="Paragraph">
      <Text8 />
    </div>
  );
}

function Link() {
  return (
    <div className="h-[46px] relative shrink-0 w-[196px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] left-[0.25px] text-[35.28px] text-white top-[-0.93px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          Pistil Studio,
        </p>
      </div>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-[595.64px] overflow-clip top-[20.16px] w-[195.5px]" data-name="Paragraph">
      <Link />
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[46px] relative shrink-0 w-[10px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] left-[0.05px] text-[35.28px] text-white top-[-0.93px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          I
        </p>
      </div>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-[801.22px] overflow-clip top-[20.16px] w-[9.906px]" data-name="Paragraph">
      <Text9 />
    </div>
  );
}

function Text10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] relative shrink-0 text-[35.28px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          had
        </p>
      </div>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-[821.2px] overflow-clip top-[20.16px] w-[59.297px]" data-name="Paragraph">
      <Text10 />
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[46px] relative shrink-0 w-[50px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] left-[0.09px] text-[35.28px] text-white top-[-0.93px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          the
        </p>
      </div>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-[890.58px] overflow-clip top-[20.16px] w-[49.813px]" data-name="Paragraph">
      <Text11 />
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[46px] relative shrink-0 w-[182px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] left-[0.18px] text-[35.28px] text-white top-[-0.93px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          opportunity
        </p>
      </div>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-[950.47px] overflow-clip top-[20.16px] w-[181.641px]" data-name="Paragraph">
      <Text12 />
    </div>
  );
}

function Text13() {
  return (
    <div className="h-[46px] relative shrink-0 w-[31px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] left-[0.06px] text-[35.28px] text-white top-[-0.93px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          to
        </p>
      </div>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-[1142.19px] overflow-clip top-[20.16px] w-[30.875px]" data-name="Paragraph">
      <Text13 />
    </div>
  );
}

function Text14() {
  return (
    <div className="h-[46px] relative shrink-0 w-[77px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] left-[0.02px] text-[35.28px] text-white top-[-0.93px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          work
        </p>
      </div>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-[1183.14px] overflow-clip top-[20.16px] w-[76.953px]" data-name="Paragraph">
      <Text14 />
    </div>
  );
}

function Text15() {
  return (
    <div className="h-[46px] relative shrink-0 w-[40px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] left-[0.02px] text-[35.28px] text-white top-[-0.93px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          on
        </p>
      </div>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-[1270.17px] overflow-clip top-[20.16px] w-[39.969px]" data-name="Paragraph">
      <Text15 />
    </div>
  );
}

function Text16() {
  return (
    <div className="h-[46px] relative shrink-0 w-[50px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] left-[0.09px] text-[35.28px] text-white top-[-0.93px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          the
        </p>
      </div>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-[1320.22px] overflow-clip top-[20.16px] w-[49.813px]" data-name="Paragraph">
      <Text16 />
    </div>
  );
}

function Text17() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] relative shrink-0 text-[35.28px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>{`"`}</p>
      </div>
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-[1380.11px] overflow-clip top-[20.16px] w-[11.297px]" data-name="Paragraph">
      <Text17 />
    </div>
  );
}

function Text18() {
  return (
    <div className="h-[46px] relative shrink-0 w-[39px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] left-[0.19px] text-[35.28px] text-white top-[-0.93px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          La
        </p>
      </div>
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-[1401.48px] overflow-clip top-[20.16px] w-[38.625px]" data-name="Paragraph">
      <Text18 />
    </div>
  );
}

function Text19() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] relative shrink-0 text-[35.28px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          Nouvelle
        </p>
      </div>
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-0 overflow-clip top-[71.05px] w-[137.25px]" data-name="Paragraph">
      <Text19 />
    </div>
  );
}

function Text20() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] relative shrink-0 text-[35.28px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>{`"`}</p>
      </div>
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-[147.33px] overflow-clip top-[71.05px] w-[11.297px]" data-name="Paragraph">
      <Text20 />
    </div>
  );
}

function Text21() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] relative shrink-0 text-[35.28px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          project,
        </p>
      </div>
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-[168.7px] overflow-clip top-[71.05px] w-[116.344px]" data-name="Paragraph">
      <Text21 />
    </div>
  );
}

function Text22() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] relative shrink-0 text-[35.28px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          an
        </p>
      </div>
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-[295.13px] overflow-clip top-[71.05px] w-[39.313px]" data-name="Paragraph">
      <Text22 />
    </div>
  );
}

function Text23() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] relative shrink-0 text-[35.28px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          agency
        </p>
      </div>
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-[344.52px] overflow-clip top-[71.05px] w-[114.219px]" data-name="Paragraph">
      <Text23 />
    </div>
  );
}

function Text24() {
  return (
    <div className="h-[46px] relative shrink-0 w-[188px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] left-[0.2px] text-[35.28px] text-white top-[-0.93px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          specializing
        </p>
      </div>
    </div>
  );
}

function Paragraph25() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-[468.81px] overflow-clip top-[71.05px] w-[187.594px]" data-name="Paragraph">
      <Text24 />
    </div>
  );
}

function Text25() {
  return (
    <div className="h-[46px] relative shrink-0 w-[29px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] left-[0.13px] text-[35.28px] text-white top-[-0.93px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          in
        </p>
      </div>
    </div>
  );
}

function Paragraph26() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-[666.48px] overflow-clip top-[71.05px] w-[28.734px]" data-name="Paragraph">
      <Text25 />
    </div>
  );
}

function Text26() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] relative shrink-0 text-[35.28px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          communications
        </p>
      </div>
    </div>
  );
}

function Paragraph27() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-[705.3px] overflow-clip top-[71.05px] w-[265.484px]" data-name="Paragraph">
      <Text26 />
    </div>
  );
}

function Text27() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] relative shrink-0 text-[35.28px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          for
        </p>
      </div>
    </div>
  );
}

function Paragraph28() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-[980.86px] overflow-clip top-[71.05px] w-[44.391px]" data-name="Paragraph">
      <Text27 />
    </div>
  );
}

function Text28() {
  return (
    <div className="h-[46px] relative shrink-0 w-[112px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] left-[0.06px] text-[35.28px] text-white top-[-0.93px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          beauty,
        </p>
      </div>
    </div>
  );
}

function Paragraph29() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-[1035.33px] overflow-clip top-[71.05px] w-[111.875px]" data-name="Paragraph">
      <Text28 />
    </div>
  );
}

function Text29() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] relative shrink-0 text-[35.28px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          food
        </p>
      </div>
    </div>
  );
}

function Paragraph30() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-[1157.28px] overflow-clip top-[71.05px] w-[72.047px]" data-name="Paragraph">
      <Text29 />
    </div>
  );
}

function Text30() {
  return (
    <div className="h-[46px] relative shrink-0 w-[22px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] left-[0.03px] text-[35.28px] text-white top-[-0.93px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>{`&`}</p>
      </div>
    </div>
  );
}

function Paragraph31() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-[1239.41px] overflow-clip top-[71.05px] w-[21.938px]" data-name="Paragraph">
      <Text30 />
    </div>
  );
}

function Text31() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] relative shrink-0 text-[35.28px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          corporate
        </p>
      </div>
    </div>
  );
}

function Paragraph32() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-[1271.42px] overflow-clip top-[71.05px] w-[152.359px]" data-name="Paragraph">
      <Text31 />
    </div>
  );
}

function Text32() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] relative shrink-0 text-[35.28px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          brands.
        </p>
      </div>
    </div>
  );
}

function Paragraph33() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-0 overflow-clip top-[121.94px] w-[119.25px]" data-name="Paragraph">
      <Text32 />
    </div>
  );
}

function Text33() {
  return (
    <div className="h-[46px] relative shrink-0 w-[60px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] left-[0.19px] text-[35.28px] text-white top-[-0.93px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          The
        </p>
      </div>
    </div>
  );
}

function Paragraph34() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-[129.33px] overflow-clip top-[121.94px] w-[59.625px]" data-name="Paragraph">
      <Text33 />
    </div>
  );
}

function Text34() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] relative shrink-0 text-[35.28px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          agency
        </p>
      </div>
    </div>
  );
}

function Paragraph35() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-[199.03px] overflow-clip top-[121.94px] w-[114.219px]" data-name="Paragraph">
      <Text34 />
    </div>
  );
}

function Text35() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] relative shrink-0 text-[35.28px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          offers
        </p>
      </div>
    </div>
  );
}

function Paragraph36() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-[323.33px] overflow-clip top-[121.94px] w-[93.031px]" data-name="Paragraph">
      <Text35 />
    </div>
  );
}

function Text36() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] relative shrink-0 text-[35.28px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          a
        </p>
      </div>
    </div>
  );
}

function Paragraph37() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-[426.44px] overflow-clip top-[121.94px] w-[19.344px]" data-name="Paragraph">
      <Text36 />
    </div>
  );
}

function Text37() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] relative shrink-0 text-[35.28px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          variety
        </p>
      </div>
    </div>
  );
}

function Paragraph38() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-[455.86px] overflow-clip top-[121.94px] w-[105.297px]" data-name="Paragraph">
      <Text37 />
    </div>
  );
}

function Text38() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] relative shrink-0 text-[35.28px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          of
        </p>
      </div>
    </div>
  );
}

function Paragraph39() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-[571.23px] overflow-clip top-[121.94px] w-[32.078px]" data-name="Paragraph">
      <Text38 />
    </div>
  );
}

function Text39() {
  return (
    <div className="h-[46px] relative shrink-0 w-[132px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] left-[0.18px] text-[35.28px] text-white top-[-0.93px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          services
        </p>
      </div>
    </div>
  );
}

function Paragraph40() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-[613.39px] overflow-clip top-[121.94px] w-[131.641px]" data-name="Paragraph">
      <Text39 />
    </div>
  );
}

function Text40() {
  return (
    <div className="h-[46px] relative shrink-0 w-[145px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] left-[0.09px] text-[35.28px] text-white top-[-0.93px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          including
        </p>
      </div>
    </div>
  );
}

function Paragraph41() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-[755.11px] overflow-clip top-[121.94px] w-[144.828px]" data-name="Paragraph">
      <Text40 />
    </div>
  );
}

function Text41() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] relative shrink-0 text-[35.28px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          branding,
        </p>
      </div>
    </div>
  );
}

function Paragraph42() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-[910.02px] overflow-clip top-[121.94px] w-[147.219px]" data-name="Paragraph">
      <Text41 />
    </div>
  );
}

function Text42() {
  return (
    <div className="h-[46px] relative shrink-0 w-[120px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] left-[0.17px] text-[35.28px] text-white top-[-0.93px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          content
        </p>
      </div>
    </div>
  );
}

function Paragraph43() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-[1067.31px] overflow-clip top-[121.94px] w-[119.656px]" data-name="Paragraph">
      <Text42 />
    </div>
  );
}

function Text43() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] relative shrink-0 text-[35.28px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          creation,
        </p>
      </div>
    </div>
  );
}

function Paragraph44() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-[1197.05px] overflow-clip top-[121.94px] w-[135.422px]" data-name="Paragraph">
      <Text43 />
    </div>
  );
}

function Text44() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] relative shrink-0 text-[35.28px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          advertising
        </p>
      </div>
    </div>
  );
}

function Paragraph45() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-[1342.55px] overflow-clip top-[121.94px] w-[175.281px]" data-name="Paragraph">
      <Text44 />
    </div>
  );
}

function Text45() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] relative shrink-0 text-[35.28px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          and
        </p>
      </div>
    </div>
  );
}

function Paragraph46() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-0 overflow-clip top-[172.83px] w-[59.297px]" data-name="Paragraph">
      <Text45 />
    </div>
  );
}

function Text46() {
  return (
    <div className="h-[46px] relative shrink-0 w-[94px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] left-[0.07px] text-[35.28px] text-white top-[-0.93px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          social
        </p>
      </div>
    </div>
  );
}

function Paragraph47() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-[69.38px] overflow-clip top-[172.83px] w-[93.859px]" data-name="Paragraph">
      <Text46 />
    </div>
  );
}

function Text47() {
  return (
    <div className="h-[46px] relative shrink-0 w-[98px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] left-[0.22px] text-[35.28px] text-white top-[-0.93px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          media
        </p>
      </div>
    </div>
  );
}

function Paragraph48() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-[173.31px] overflow-clip top-[172.83px] w-[97.563px]" data-name="Paragraph">
      <Text47 />
    </div>
  );
}

function Text48() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] relative shrink-0 text-[35.28px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          management.
        </p>
      </div>
    </div>
  );
}

function Paragraph49() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-[280.95px] overflow-clip top-[172.83px] w-[218.109px]" data-name="Paragraph">
      <Text48 />
    </div>
  );
}

function Text49() {
  return (
    <div className="h-[46px] relative shrink-0 w-[49px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] left-[0.2px] text-[35.28px] text-white top-[-0.93px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          My
        </p>
      </div>
    </div>
  );
}

function Paragraph50() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-[509.14px] overflow-clip top-[172.83px] w-[48.609px]" data-name="Paragraph">
      <Text49 />
    </div>
  );
}

function Text50() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] relative shrink-0 text-[35.28px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          role
        </p>
      </div>
    </div>
  );
}

function Paragraph51() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-[567.83px] overflow-clip top-[172.83px] w-[59.281px]" data-name="Paragraph">
      <Text50 />
    </div>
  );
}

function Text51() {
  return (
    <div className="h-[46px] relative shrink-0 w-[154px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] left-[0.03px] text-[35.28px] text-white top-[-0.93px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          consisted
        </p>
      </div>
    </div>
  );
}

function Paragraph52() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-[637.19px] overflow-clip top-[172.83px] w-[153.938px]" data-name="Paragraph">
      <Text51 />
    </div>
  );
}

function Text52() {
  return (
    <div className="h-[46px] relative shrink-0 w-[29px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] left-[0.13px] text-[35.28px] text-white top-[-0.93px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          in
        </p>
      </div>
    </div>
  );
}

function Paragraph53() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-[801.2px] overflow-clip top-[172.83px] w-[28.734px]" data-name="Paragraph">
      <Text52 />
    </div>
  );
}

function Text53() {
  return (
    <div className="h-[46px] relative shrink-0 w-[172px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] left-[0.09px] text-[35.28px] text-white top-[-0.93px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          developing
        </p>
      </div>
    </div>
  );
}

function Paragraph54() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-[840.02px] overflow-clip top-[172.83px] w-[171.828px]" data-name="Paragraph">
      <Text53 />
    </div>
  );
}

function Text54() {
  return (
    <div className="h-[46px] relative shrink-0 w-[50px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] left-[0.09px] text-[35.28px] text-white top-[-0.93px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          the
        </p>
      </div>
    </div>
  );
}

function Paragraph55() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-[1021.92px] overflow-clip top-[172.83px] w-[49.813px]" data-name="Paragraph">
      <Text54 />
    </div>
  );
}

function Text55() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] relative shrink-0 text-[35.28px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          various
        </p>
      </div>
    </div>
  );
}

function Paragraph56() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-[1081.81px] overflow-clip top-[172.83px] w-[116.156px]" data-name="Paragraph">
      <Text55 />
    </div>
  );
}

function Text56() {
  return (
    <div className="h-[46px] relative shrink-0 w-[104px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] left-[0.13px] text-[35.28px] text-white top-[-0.93px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          blocks
        </p>
      </div>
    </div>
  );
}

function Paragraph57() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-[1208.05px] overflow-clip top-[172.83px] w-[103.734px]" data-name="Paragraph">
      <Text56 />
    </div>
  );
}

function Text57() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] relative shrink-0 text-[35.28px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          of
        </p>
      </div>
    </div>
  );
}

function Paragraph58() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-[1321.86px] overflow-clip top-[172.83px] w-[32.078px]" data-name="Paragraph">
      <Text57 />
    </div>
  );
}

function Text58() {
  return (
    <div className="h-[46px] relative shrink-0 w-[50px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] left-[0.09px] text-[35.28px] text-white top-[-0.93px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          the
        </p>
      </div>
    </div>
  );
}

function Paragraph59() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-[1364.02px] overflow-clip top-[172.83px] w-[49.813px]" data-name="Paragraph">
      <Text58 />
    </div>
  );
}

function Text59() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] relative shrink-0 text-[35.28px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          front
        </p>
      </div>
    </div>
  );
}

function Paragraph60() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-[1423.91px] overflow-clip top-[172.83px] w-[75.25px]" data-name="Paragraph">
      <Text59 />
    </div>
  );
}

function Text60() {
  return (
    <div className="h-[46px] relative shrink-0 w-[59px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] left-[0.22px] text-[35.28px] text-white top-[-0.93px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          end
        </p>
      </div>
    </div>
  );
}

function Paragraph61() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-0 overflow-clip top-[223.72px] w-[58.563px]" data-name="Paragraph">
      <Text60 />
    </div>
  );
}

function Text61() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] relative shrink-0 text-[35.28px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          part
        </p>
      </div>
    </div>
  );
}

function Paragraph62() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-[68.64px] overflow-clip top-[223.72px] w-[63.406px]" data-name="Paragraph">
      <Text61 />
    </div>
  );
}

function Text62() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] relative shrink-0 text-[35.28px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          of
        </p>
      </div>
    </div>
  );
}

function Paragraph63() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-[142.13px] overflow-clip top-[223.72px] w-[32.078px]" data-name="Paragraph">
      <Text62 />
    </div>
  );
}

function Text63() {
  return (
    <div className="h-[46px] relative shrink-0 w-[50px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] left-[0.09px] text-[35.28px] text-white top-[-0.93px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          the
        </p>
      </div>
    </div>
  );
}

function Paragraph64() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-[184.28px] overflow-clip top-[223.72px] w-[49.813px]" data-name="Paragraph">
      <Text63 />
    </div>
  );
}

function Text64() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] relative shrink-0 text-[35.28px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          website
        </p>
      </div>
    </div>
  );
}

function Paragraph65() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-[244.17px] overflow-clip top-[223.72px] w-[122.234px]" data-name="Paragraph">
      <Text64 />
    </div>
  );
}

function Text65() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] relative shrink-0 text-[35.28px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          and
        </p>
      </div>
    </div>
  );
}

function Paragraph66() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-[376.48px] overflow-clip top-[223.72px] w-[59.297px]" data-name="Paragraph">
      <Text65 />
    </div>
  );
}

function Text66() {
  return (
    <div className="h-[46px] relative shrink-0 w-[129px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] left-[0.25px] text-[35.28px] text-white top-[-0.93px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          creating
        </p>
      </div>
    </div>
  );
}

function Paragraph67() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-[445.86px] overflow-clip top-[223.72px] w-[128.5px]" data-name="Paragraph">
      <Text66 />
    </div>
  );
}

function Text67() {
  return (
    <div className="h-[46px] relative shrink-0 w-[50px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] left-[0.09px] text-[35.28px] text-white top-[-0.93px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          the
        </p>
      </div>
    </div>
  );
}

function Paragraph68() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-[584.44px] overflow-clip top-[223.72px] w-[49.813px]" data-name="Paragraph">
      <Text67 />
    </div>
  );
}

function Text68() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] relative shrink-0 text-[35.28px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          various
        </p>
      </div>
    </div>
  );
}

function Paragraph69() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-[644.33px] overflow-clip top-[223.72px] w-[116.156px]" data-name="Paragraph">
      <Text68 />
    </div>
  );
}

function Text69() {
  return (
    <div className="h-[46px] relative shrink-0 w-[177px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] left-[0.19px] text-[35.28px] text-white top-[-0.93px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          animations
        </p>
      </div>
    </div>
  );
}

function Paragraph70() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-[770.56px] overflow-clip top-[223.72px] w-[176.625px]" data-name="Paragraph">
      <Text69 />
    </div>
  );
}

function Text70() {
  return (
    <div className="h-[46px] relative shrink-0 w-[31px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] left-[0.06px] text-[35.28px] text-white top-[-0.93px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          to
        </p>
      </div>
    </div>
  );
}

function Paragraph71() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-[957.27px] overflow-clip top-[223.72px] w-[30.875px]" data-name="Paragraph">
      <Text70 />
    </div>
  );
}

function Text71() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] relative shrink-0 text-[35.28px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          enrich
        </p>
      </div>
    </div>
  );
}

function Paragraph72() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-[998.22px] overflow-clip top-[223.72px] w-[98.266px]" data-name="Paragraph">
      <Text71 />
    </div>
  );
}

function Text72() {
  return (
    <div className="h-[46px] relative shrink-0 w-[50px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] left-[0.09px] text-[35.28px] text-white top-[-0.93px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          the
        </p>
      </div>
    </div>
  );
}

function Paragraph73() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-[1106.56px] overflow-clip top-[223.72px] w-[49.813px]" data-name="Paragraph">
      <Text72 />
    </div>
  );
}

function Text73() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] relative shrink-0 text-[35.28px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          user
        </p>
      </div>
    </div>
  );
}

function Paragraph74() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-[1166.45px] overflow-clip top-[223.72px] w-[69.266px]" data-name="Paragraph">
      <Text73 />
    </div>
  );
}

function Text74() {
  return (
    <div className="h-[46px] relative shrink-0 w-[181px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] left-[0.01px] text-[35.28px] text-white top-[-0.93px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          experience.
        </p>
      </div>
    </div>
  );
}

function Paragraph75() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-[1245.8px] overflow-clip top-[223.72px] w-[180.984px]" data-name="Paragraph">
      <Text74 />
    </div>
  );
}

function Text75() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] relative shrink-0 text-[35.28px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          This
        </p>
      </div>
    </div>
  );
}

function Paragraph76() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-[1436.86px] overflow-clip top-[223.72px] w-[68.172px]" data-name="Paragraph">
      <Text75 />
    </div>
  );
}

function Text76() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] relative shrink-0 text-[35.28px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          project
        </p>
      </div>
    </div>
  );
}

function Paragraph77() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-0 overflow-clip top-[274.61px] w-[109.406px]" data-name="Paragraph">
      <Text76 />
    </div>
  );
}

function Text77() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] relative shrink-0 text-[35.28px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          enabled
        </p>
      </div>
    </div>
  );
}

function Paragraph78() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-[119.48px] overflow-clip top-[274.61px] w-[125.203px]" data-name="Paragraph">
      <Text77 />
    </div>
  );
}

function Text78() {
  return (
    <div className="h-[46px] relative shrink-0 w-[50px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] left-[0.25px] text-[35.28px] text-white top-[-0.93px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          me
        </p>
      </div>
    </div>
  );
}

function Paragraph79() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-[254.77px] overflow-clip top-[274.61px] w-[49.5px]" data-name="Paragraph">
      <Text78 />
    </div>
  );
}

function Text79() {
  return (
    <div className="h-[46px] relative shrink-0 w-[31px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] left-[0.06px] text-[35.28px] text-white top-[-0.93px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          to
        </p>
      </div>
    </div>
  );
}

function Paragraph80() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-[314.34px] overflow-clip top-[274.61px] w-[30.875px]" data-name="Paragraph">
      <Text79 />
    </div>
  );
}

function Text80() {
  return (
    <div className="h-[46px] relative shrink-0 w-[86px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] left-[0.13px] text-[35.28px] text-white top-[-0.93px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          apply
        </p>
      </div>
    </div>
  );
}

function Paragraph81() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-[355.3px] overflow-clip top-[274.61px] w-[85.734px]" data-name="Paragraph">
      <Text80 />
    </div>
  );
}

function Text81() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] relative shrink-0 text-[35.28px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          and
        </p>
      </div>
    </div>
  );
}

function Paragraph82() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-[451.11px] overflow-clip top-[274.61px] w-[59.297px]" data-name="Paragraph">
      <Text81 />
    </div>
  );
}

function Text82() {
  return (
    <div className="h-[46px] relative shrink-0 w-[116px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] left-[0.14px] text-[35.28px] text-white top-[-0.93px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          deepen
        </p>
      </div>
    </div>
  );
}

function Paragraph83() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-[520.48px] overflow-clip top-[274.61px] w-[115.719px]" data-name="Paragraph">
      <Text82 />
    </div>
  );
}

function Text83() {
  return (
    <div className="h-[46px] relative shrink-0 w-[49px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] left-[0.2px] text-[35.28px] text-white top-[-0.93px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          my
        </p>
      </div>
    </div>
  );
}

function Paragraph84() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-[646.28px] overflow-clip top-[274.61px] w-[48.594px]" data-name="Paragraph">
      <Text83 />
    </div>
  );
}

function Text84() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] relative shrink-0 text-[35.28px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          web
        </p>
      </div>
    </div>
  );
}

function Paragraph85() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-[704.95px] overflow-clip top-[274.61px] w-[65.281px]" data-name="Paragraph">
      <Text84 />
    </div>
  );
}

function Text85() {
  return (
    <div className="h-[46px] relative shrink-0 w-[204px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] left-[0.09px] text-[35.28px] text-white top-[-0.93px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          development
        </p>
      </div>
    </div>
  );
}

function Paragraph86() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-[780.31px] overflow-clip top-[274.61px] w-[203.813px]" data-name="Paragraph">
      <Text85 />
    </div>
  );
}

function Text86() {
  return (
    <div className="h-[46px] relative shrink-0 w-[81px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] left-[0.01px] text-[35.28px] text-white top-[-0.93px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          skills
        </p>
      </div>
    </div>
  );
}

function Paragraph87() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-[994.2px] overflow-clip top-[274.61px] w-[80.984px]" data-name="Paragraph">
      <Text86 />
    </div>
  );
}

function Text87() {
  return (
    <div className="h-[46px] relative shrink-0 w-[83px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] left-[0.11px] text-[35.28px] text-white top-[-0.93px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          while
        </p>
      </div>
    </div>
  );
}

function Paragraph88() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-[1085.27px] overflow-clip top-[274.61px] w-[82.781px]" data-name="Paragraph">
      <Text87 />
    </div>
  );
}

function Text88() {
  return (
    <div className="h-[46px] relative shrink-0 w-[126px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] left-[0.16px] text-[35.28px] text-white top-[-0.93px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          working
        </p>
      </div>
    </div>
  );
}

function Paragraph89() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-[1178.13px] overflow-clip top-[274.61px] w-[125.672px]" data-name="Paragraph">
      <Text88 />
    </div>
  );
}

function Text89() {
  return (
    <div className="h-[46px] relative shrink-0 w-[111px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] left-[0.1px] text-[35.28px] text-white top-[-0.93px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          closely
        </p>
      </div>
    </div>
  );
}

function Paragraph90() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-[1313.88px] overflow-clip top-[274.61px] w-[110.797px]" data-name="Paragraph">
      <Text89 />
    </div>
  );
}

function Text90() {
  return (
    <div className="h-[46px] relative shrink-0 w-[67px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] left-[0.16px] text-[35.28px] text-white top-[-0.93px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          with
        </p>
      </div>
    </div>
  );
}

function Paragraph91() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-[1434.75px] overflow-clip top-[274.61px] w-[66.672px]" data-name="Paragraph">
      <Text90 />
    </div>
  );
}

function Text91() {
  return (
    <div className="h-[46px] relative shrink-0 w-[50px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] left-[0.09px] text-[35.28px] text-white top-[-0.93px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          the
        </p>
      </div>
    </div>
  );
}

function Paragraph92() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-0 overflow-clip top-[325.5px] w-[49.813px]" data-name="Paragraph">
      <Text91 />
    </div>
  );
}

function Text92() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] relative shrink-0 text-[35.28px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          Pistil
        </p>
      </div>
    </div>
  );
}

function Paragraph93() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-[59.89px] overflow-clip top-[325.5px] w-[78.359px]" data-name="Paragraph">
      <Text92 />
    </div>
  );
}

function Text93() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] relative shrink-0 text-[35.28px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          Studio
        </p>
      </div>
    </div>
  );
}

function Paragraph94() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-[148.33px] overflow-clip top-[325.5px] w-[101.484px]" data-name="Paragraph">
      <Text93 />
    </div>
  );
}

function Text94() {
  return (
    <div className="h-[46px] relative shrink-0 w-[125px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] left-[0.21px] text-[35.28px] text-white top-[-0.93px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          creative
        </p>
      </div>
    </div>
  );
}

function Paragraph95() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-[259.89px] overflow-clip top-[325.5px] w-[124.578px]" data-name="Paragraph">
      <Text94 />
    </div>
  );
}

function Text95() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] relative shrink-0 text-[35.28px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          team
        </p>
      </div>
    </div>
  );
}

function Paragraph96() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-[394.55px] overflow-clip top-[325.5px] w-[80.063px]" data-name="Paragraph">
      <Text95 />
    </div>
  );
}

function Text96() {
  return (
    <div className="h-[46px] relative shrink-0 w-[31px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] left-[0.06px] text-[35.28px] text-white top-[-0.93px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          to
        </p>
      </div>
    </div>
  );
}

function Paragraph97() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-[484.69px] overflow-clip top-[325.5px] w-[30.875px]" data-name="Paragraph">
      <Text96 />
    </div>
  );
}

function Text97() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] relative shrink-0 text-[35.28px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          meet
        </p>
      </div>
    </div>
  );
}

function Paragraph98() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-[525.64px] overflow-clip top-[325.5px] w-[79.313px]" data-name="Paragraph">
      <Text97 />
    </div>
  );
}

function Text98() {
  return (
    <div className="h-[46px] relative shrink-0 w-[50px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] left-[0.09px] text-[35.28px] text-white top-[-0.93px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          the
        </p>
      </div>
    </div>
  );
}

function Paragraph99() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-[615.03px] overflow-clip top-[325.5px] w-[49.813px]" data-name="Paragraph">
      <Text98 />
    </div>
  );
}

function Text99() {
  return (
    <div className="h-[46px] relative shrink-0 w-[123px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] left-[0.22px] text-[35.28px] text-white top-[-0.93px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          specific
        </p>
      </div>
    </div>
  );
}

function Paragraph100() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-[674.92px] overflow-clip top-[325.5px] w-[122.563px]" data-name="Paragraph">
      <Text99 />
    </div>
  );
}

function Text100() {
  return (
    <div className="h-[46px] relative shrink-0 w-[96px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] left-[0.23px] text-[35.28px] text-white top-[-0.93px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          needs
        </p>
      </div>
    </div>
  );
}

function Paragraph101() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-[807.56px] overflow-clip top-[325.5px] w-[95.531px]" data-name="Paragraph">
      <Text100 />
    </div>
  );
}

function Text101() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] relative shrink-0 text-[35.28px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          of
        </p>
      </div>
    </div>
  );
}

function Paragraph102() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-[913.17px] overflow-clip top-[325.5px] w-[32.078px]" data-name="Paragraph">
      <Text101 />
    </div>
  );
}

function Text102() {
  return (
    <div className="h-[46px] relative shrink-0 w-[50px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] left-[0.09px] text-[35.28px] text-white top-[-0.93px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          the
        </p>
      </div>
    </div>
  );
}

function Paragraph103() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-[955.33px] overflow-clip top-[325.5px] w-[49.813px]" data-name="Paragraph">
      <Text102 />
    </div>
  );
}

function Text103() {
  return (
    <div className="h-[46px] relative shrink-0 w-[39px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] left-[0.19px] text-[35.28px] text-white top-[-0.93px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          La
        </p>
      </div>
    </div>
  );
}

function Paragraph104() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-[1015.22px] overflow-clip top-[325.5px] w-[38.625px]" data-name="Paragraph">
      <Text103 />
    </div>
  );
}

function Text104() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] relative shrink-0 text-[35.28px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          Nouvelle
        </p>
      </div>
    </div>
  );
}

function Paragraph105() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-[1063.92px] overflow-clip top-[325.5px] w-[137.25px]" data-name="Paragraph">
      <Text104 />
    </div>
  );
}

function Text105() {
  return (
    <div className="h-[46px] relative shrink-0 w-[122px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal leading-[45.864px] left-[0.17px] text-[35.28px] text-white top-[-0.93px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          agency.
        </p>
      </div>
    </div>
  );
}

function Paragraph106() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.859px] items-start left-[1211.25px] overflow-clip top-[325.5px] w-[121.656px]" data-name="Paragraph">
      <Text105 />
    </div>
  );
}

function Section2() {
  return (
    <div className="h-[391.516px] relative shrink-0 w-full" data-name="Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph1 />
        <Paragraph2 />
        <Paragraph3 />
        <Paragraph4 />
        <Paragraph5 />
        <Paragraph6 />
        <Paragraph7 />
        <Paragraph8 />
        <Paragraph9 />
        <Paragraph10 />
        <Paragraph11 />
        <Paragraph12 />
        <Paragraph13 />
        <Paragraph14 />
        <Paragraph15 />
        <Paragraph16 />
        <Paragraph17 />
        <Paragraph18 />
        <Paragraph19 />
        <Paragraph20 />
        <Paragraph21 />
        <Paragraph22 />
        <Paragraph23 />
        <Paragraph24 />
        <Paragraph25 />
        <Paragraph26 />
        <Paragraph27 />
        <Paragraph28 />
        <Paragraph29 />
        <Paragraph30 />
        <Paragraph31 />
        <Paragraph32 />
        <Paragraph33 />
        <Paragraph34 />
        <Paragraph35 />
        <Paragraph36 />
        <Paragraph37 />
        <Paragraph38 />
        <Paragraph39 />
        <Paragraph40 />
        <Paragraph41 />
        <Paragraph42 />
        <Paragraph43 />
        <Paragraph44 />
        <Paragraph45 />
        <Paragraph46 />
        <Paragraph47 />
        <Paragraph48 />
        <Paragraph49 />
        <Paragraph50 />
        <Paragraph51 />
        <Paragraph52 />
        <Paragraph53 />
        <Paragraph54 />
        <Paragraph55 />
        <Paragraph56 />
        <Paragraph57 />
        <Paragraph58 />
        <Paragraph59 />
        <Paragraph60 />
        <Paragraph61 />
        <Paragraph62 />
        <Paragraph63 />
        <Paragraph64 />
        <Paragraph65 />
        <Paragraph66 />
        <Paragraph67 />
        <Paragraph68 />
        <Paragraph69 />
        <Paragraph70 />
        <Paragraph71 />
        <Paragraph72 />
        <Paragraph73 />
        <Paragraph74 />
        <Paragraph75 />
        <Paragraph76 />
        <Paragraph77 />
        <Paragraph78 />
        <Paragraph79 />
        <Paragraph80 />
        <Paragraph81 />
        <Paragraph82 />
        <Paragraph83 />
        <Paragraph84 />
        <Paragraph85 />
        <Paragraph86 />
        <Paragraph87 />
        <Paragraph88 />
        <Paragraph89 />
        <Paragraph90 />
        <Paragraph91 />
        <Paragraph92 />
        <Paragraph93 />
        <Paragraph94 />
        <Paragraph95 />
        <Paragraph96 />
        <Paragraph97 />
        <Paragraph98 />
        <Paragraph99 />
        <Paragraph100 />
        <Paragraph101 />
        <Paragraph102 />
        <Paragraph103 />
        <Paragraph104 />
        <Paragraph105 />
        <Paragraph106 />
      </div>
    </div>
  );
}

function Text106() {
  return (
    <div className="absolute h-[30px] left-[15.3px] top-[33.37px] w-[119px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal leading-[30.24px] left-[0.14px] text-[20.16px] text-white top-[-0.12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        View website
      </p>
    </div>
  );
}

function Link1() {
  return (
    <div className="h-[30.234px] relative shrink-0 w-[149.594px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal leading-[30.24px] left-[5.08px] text-[20.16px] text-white top-0 whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          [
        </p>
        <Text106 />
        <p className="[word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal leading-[30.24px] left-[139.16px] text-[20.16px] text-white top-0 whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          ]
        </p>
      </div>
    </div>
  );
}

function Article() {
  return (
    <div className="content-stretch flex flex-col h-[528.922px] items-start max-w-[1600px] px-[40.32px] relative shrink-0 w-[1600px]" data-name="Article">
      <ContainerMargin />
      <TextMargin />
      <Section1 />
      <Section2 />
      <Link1 />
    </div>
  );
}

function ArticleMargin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Article (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[201.6px] relative size-full">
        <Article />
      </div>
    </div>
  );
}

function ImageLaNouvelleWebsiteImageCaseStudy() {
  return (
    <div className="h-[1221.797px] relative shrink-0 w-full" data-name="Image (La nouvelle website image case study)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageLaNouvelleWebsiteImageCaseStudy} />
    </div>
  );
}

function ImageLaNouvelleWebsiteImageCaseStudy1() {
  return (
    <div className="h-[1220.234px] relative shrink-0 w-full" data-name="Image (La nouvelle website image case study)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageLaNouvelleWebsiteImageCaseStudy1} />
    </div>
  );
}

function ImageLaNouvelleWebsiteImageCaseStudy2() {
  return (
    <div className="h-[1212.797px] relative shrink-0 w-full" data-name="Image (La nouvelle website image case study)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageLaNouvelleWebsiteImageCaseStudy2} />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[40.32px] items-start relative shrink-0 w-[2479.375px]" data-name="Container">
      <ImageLaNouvelleWebsiteImageCaseStudy />
      <ImageLaNouvelleWebsiteImageCaseStudy1 />
      <ImageLaNouvelleWebsiteImageCaseStudy2 />
    </div>
  );
}

function ContainerMargin1() {
  return (
    <div className="relative shrink-0" data-name="Container (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[40.32px] py-[80.64px] relative size-full">
        <Container1 />
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="h-[6389.781px] relative shrink-0 w-full" data-name="Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <ContainerTranslation />
        <ContainerTranslation1 />
        <ArticleMargin />
        <ContainerMargin1 />
      </div>
    </div>
  );
}

function PlaceholderForFooter() {
  return <div className="h-[663.984px] relative shrink-0 w-full" data-name="Placeholder for Footer" />;
}

function Body() {
  return (
    <div className="relative shrink-0 w-full" data-name="Body">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Section />
        <PlaceholderForFooter />
      </div>
    </div>
  );
}

function Text107() {
  return (
    <div className="absolute h-[22.172px] left-0 top-[1.83px] w-[75.984px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal leading-[22.176px] left-0 text-[20.16px] text-black top-0 whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Linkedin
      </p>
    </div>
  );
}

function Text108() {
  return (
    <div className="h-[22px] relative w-[76px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal leading-[22.176px] left-[0.01px] text-[20.16px] text-black top-[-0.09px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Linkedin
      </p>
    </div>
  );
}

function Link2() {
  return (
    <div className="absolute h-[24px] left-0 overflow-clip top-[-1px] w-[75.984px]" data-name="Link">
      <Text107 />
      <div className="absolute flex h-[40.921px] items-center justify-center left-[-1.56px] top-[18.23px] w-[79.104px]">
        <div className="-rotate-15 flex-none">
          <Text108 />
        </div>
      </div>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="h-[22.172px] relative shrink-0 w-full" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Link2 />
      </div>
    </div>
  );
}

function Text109() {
  return (
    <div className="absolute h-[22.172px] left-0 top-[1.83px] w-[59.516px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal leading-[22.176px] left-0 text-[20.16px] text-black top-0 whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Github
      </p>
    </div>
  );
}

function Text110() {
  return (
    <div className="h-[22px] relative w-[60px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal leading-[22.176px] left-[0.24px] text-[20.16px] text-black top-[-0.09px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Github
      </p>
    </div>
  );
}

function Link3() {
  return (
    <div className="absolute h-[24px] left-0 overflow-clip top-[-1px] w-[59.516px]" data-name="Link">
      <Text109 />
      <div className="absolute flex h-[36.78px] items-center justify-center left-[-2.07px] top-[20.3px] w-[63.65px]">
        <div className="-rotate-15 flex-none">
          <Text110 />
        </div>
      </div>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="h-[22.172px] relative shrink-0 w-full" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Link3 />
      </div>
    </div>
  );
}

function Text111() {
  return (
    <div className="absolute h-[22.172px] left-0 top-[1.83px] w-[38.719px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal leading-[22.176px] left-0 text-[20.16px] text-black top-0 whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Mail
      </p>
    </div>
  );
}

function Text112() {
  return (
    <div className="h-[22px] relative w-[39px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal leading-[22.176px] left-[0.14px] text-[20.16px] text-black top-[-0.09px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Mail
      </p>
    </div>
  );
}

function Link4() {
  return (
    <div className="absolute h-[24px] left-0 overflow-clip top-[-1px] w-[38.719px]" data-name="Link">
      <Text111 />
      <div className="absolute flex h-[31.344px] items-center justify-center left-[-2.32px] top-[23.02px] w-[43.365px]">
        <div className="-rotate-15 flex-none">
          <Text112 />
        </div>
      </div>
    </div>
  );
}

function ListItem5() {
  return (
    <div className="h-[22.172px] relative shrink-0 w-full" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Link4 />
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="h-[86.672px] relative shrink-0 w-[75.984px]" data-name="List">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[10.08px] items-start overflow-clip relative rounded-[inherit] size-full">
        <ListItem3 />
        <ListItem4 />
        <ListItem5 />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative size-[14.109px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.1094 14.1094">
        <g id="Icon">
          <path d={svgPaths.p2df70880} fill="var(--fill-0, black)" id="Vector" stroke="var(--stroke-0, black)" strokeWidth="0.54632" />
        </g>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative size-[14.109px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.1094 14.1094">
        <g id="Icon">
          <path d={svgPaths.p2df70880} fill="var(--fill-0, black)" id="Vector" stroke="var(--stroke-0, black)" strokeWidth="0.54632" />
        </g>
      </svg>
    </div>
  );
}

function Text113() {
  return (
    <div className="h-[18.141px] relative shrink-0 w-full" data-name="Text">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pr-[20.16px] relative size-full">
          <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[18.144px] relative shrink-0 text-[18.144px] text-black whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>{`Back to top `}</p>
          <div className="absolute flex items-center justify-center left-[94.44px] size-[19.954px] top-[1.11px]">
            <div className="-rotate-45 flex-none">
              <Icon />
            </div>
          </div>
          <div className="absolute flex items-center justify-center left-[94.44px] size-[19.954px] top-[21.06px]">
            <div className="-rotate-45 flex-none">
              <Icon1 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0 w-[111.469px]" data-name="Container">
      <Text113 />
    </div>
  );
}

function ContainerAutoMarginAlignment() {
  return (
    <div className="flex-[1_0_0] h-[86.672px] min-w-px relative" data-name="Container (auto margin alignment)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-end relative size-full">
        <Container2 />
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="relative shrink-0 w-[2560px]" data-name="Navigation">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pb-[40.32px] pt-[100.8px] px-[40.32px] relative size-full">
        <List />
        <ContainerAutoMarginAlignment />
      </div>
    </div>
  );
}

function Container4() {
  return <div className="bg-black h-px relative shrink-0 w-[2479.375px]" data-name="Container" />;
}

function Container3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[40.32px] relative size-full">
        <Container4 />
      </div>
    </div>
  );
}

function Text114() {
  return (
    <div className="absolute content-stretch flex flex-col h-[512px] items-start left-[-576.76px] top-0 w-[2560px]" data-name="Text">
      <p className="[word-break:break-word] font-['hkgros:Black',sans-serif] leading-[512px] not-italic relative shrink-0 text-[512px] text-black uppercase whitespace-nowrap">{`LET'S TALK`}</p>
    </div>
  );
}

function TextTransform() {
  return (
    <div className="absolute h-[512px] left-0 top-0 w-[2560px]" data-name="Text (transform)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Text114 />
      </div>
    </div>
  );
}

function TextTransformNegativeMargin() {
  return (
    <div className="h-[435.2px] relative shrink-0 w-full" data-name="Text (transform) (negative margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <TextTransform />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-[#dbf2bd] h-[663.984px] left-0 top-[630.41px] w-[2560px]" data-name="Footer">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Navigation />
        <Container3 />
        <TextTransformNegativeMargin />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute h-[1553px] left-0 opacity-50 top-[-0.1px] w-[2560px]" data-name="Container">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[32.2%] left-[14.55%] max-w-none top-[11.94%] w-[19.53%]" src={imgContainer} />
      </div>
    </div>
  );
}

function Container7() {
  return <div className="h-[129.391px] relative shrink-0 w-full" data-name="Container" />;
}

function Container8() {
  return <div className="h-[129.391px] relative shrink-0 w-full" data-name="Container" />;
}

function Container9() {
  return <div className="h-[129.391px] relative shrink-0 w-full" data-name="Container" />;
}

function Container10() {
  return <div className="h-[129.391px] relative shrink-0 w-full" data-name="Container" />;
}

function Container11() {
  return <div className="h-[129.391px] relative shrink-0 w-full" data-name="Container" />;
}

function Container12() {
  return <div className="h-[129.391px] relative shrink-0 w-full" data-name="Container" />;
}

function Container13() {
  return <div className="h-[129.391px] relative shrink-0 w-full" data-name="Container" />;
}

function Container14() {
  return <div className="h-[129.391px] relative shrink-0 w-full" data-name="Container" />;
}

function Container15() {
  return <div className="h-[129.391px] relative shrink-0 w-full" data-name="Container" />;
}

function Container16() {
  return <div className="h-[129.391px] relative shrink-0 w-full" data-name="Container" />;
}

function Container6() {
  return (
    <div className="absolute h-[1294px] left-0 top-0 w-[2560px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Container7 />
        <Container8 />
        <Container9 />
        <Container10 />
        <Container11 />
        <Container12 />
        <Container13 />
        <Container14 />
        <Container15 />
        <Container16 />
      </div>
    </div>
  );
}

export default function NaelMessaoudeneFreelanceCreativeDeveloperPortfolio() {
  return (
    <div className="bg-[#191414] content-stretch flex flex-col items-start relative size-full" data-name="Nael Messaoudene - Freelance Creative Developer Portfolio">
      <Body />
      <Footer />
      <Container5 />
      <Container6 />
    </div>
  );
}