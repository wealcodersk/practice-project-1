import Image from "next/image";
import FooterColumn from "./footerCommon/FooterColumn";
import { footerLinks } from "@/constants";

export default function Footer() {
  return (
    <footer className="flexStart footer">
      <div className="flex flex-col gap-12 w-full">
        <div className="flex item-start flex-col">
          <Image src="logo-purple.svg" width={115} height={38} alt="Logo" />
          <p className="text-start text-sm font-normal mt-5 max-w-xs">
            This is a practice project for learning purpose.
          </p>
        </div>
        <div className="flex flex-wrap gap-12">
          <FooterColumn
            title={footerLinks[0].title}
            links={footerLinks[0].links}
          />
          <div className="flex-1 flex flex-col gap-4">
            <FooterColumn
              title={footerLinks[1].title}
              links={footerLinks[1].links}
            />
            <FooterColumn
              title={footerLinks[2].title}
              links={footerLinks[2].links}
            />
          </div>

          <FooterColumn
            title={footerLinks[3].title}
            links={footerLinks[3].links}
          />

          <div className="flex-1 flex flex-col gap-4">
            <FooterColumn
              title={footerLinks[4].title}
              links={footerLinks[4].links}
            />
            <FooterColumn
              title={footerLinks[5].title}
              links={footerLinks[5].links}
            />
          </div>

          <FooterColumn
            title={footerLinks[6].title}
            links={footerLinks[6].links}
          />
        </div>
      </div>
      <div className="flexBetween footer_copyright">
        <p>@ Practice. All rights reserved</p>
        <p className="text-gray">
          <span className="text-black font-semibold">Wealcoder</span>world best
          company
        </p>
      </div>
    </footer>
  );
}
