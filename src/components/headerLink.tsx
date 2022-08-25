import { UrlObject } from "url";

import { css } from "@emotion/react";
import Link from "next/link";

import bp from "@/styles/config/breakpoint";
import dg4Color from "@/styles/config/color";

const headerLinkStyle = css`
  display: block;
  width: 100%;
  height: fit-content;
  padding: 10px 20px;

  :hover {
    opacity: 0.5;
  }
`;

const linkEN = css`
  font-family: "Dont", sans-serif;
  font-size: 14px;
  line-height: 14px;
  color: #fff;
  opacity: 0.5;

  margin-left: 2px;
`;

const linkJA = css`
  font-weight: bold;
  font-size: 24px;
  line-height: 35px;
  color: #fff;

  @media (${bp.sp}) {
    font-size: 20px;
  }
`;

const externalLinkStyle = css`
  display: block;
  width: 360px;
  height: 80px;

  padding: 15px 20px;
  background-color: #fff;
  border: 3px solid ${dg4Color.cyan};

  position: relative;

  @media (${bp.sp}) {
    width: 290px;
    height: 70px;

    padding: 10px 20px;
  }

  ::before {
    content: "";
    position: absolute;
    display: block;
    width: 0;
    height: 100%;
    background-color: ${dg4Color.cyan};

    top: 0;
    left: 0;
  }

  :hover {
    opacity: 1;
  }

  :hover::before {
    width: 100%;
  }

  :hover .en {
    color: #fff;
    opacity: 0.5;
  }

  :hover .ja {
    color: #fff;
  }

  :hover .ja::after {
    background-image: url("/images/icon-ext-white.svg");
  }
`;

const extLinkEN = css`
  position: relative;
  color: ${dg4Color.cyan};
  opacity: 0.5;
`;

const extLinkJA = css`
  color: ${dg4Color.cyan};
  position: relative;
  width: fit-content;
  ::after {
    content: "";
    position: absolute;
    width: 13px;
    height: 13px;

    right: -18px;
    top: 0;
    bottom: 0;

    margin: auto 0;

    background-image: url("/images/icon-ext.svg");
    background-size: contain;
    background-repeat: no-repeat;
  }
`;

type Props = {
  href: string | UrlObject;
  en: string;
  ja: string;
  ext?: Boolean;
};

const HeaderLink = ({ href, en, ja, ext = false }: Props) => {
  return ext ? (
    <a css={externalLinkStyle} href={`${href}`} target="_blank" rel="noopener noreferrer">
      <div className="en" css={[linkEN, extLinkEN]}>
        {en}
      </div>
      <div className="ja" css={[linkJA, extLinkJA]}>
        {ja}
      </div>
    </a>
  ) : (
    <Link href={href} passHref>
      <a css={headerLinkStyle}>
        <div className="en" css={linkEN}>
          {en}
        </div>
        <div className="ja" css={linkJA}>
          {ja}
        </div>
      </a>
    </Link>
  );
};

export default HeaderLink;
