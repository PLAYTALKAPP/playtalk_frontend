// 페이지 새로고침시, 스타일적용 안되는 상황발생 -> 넥스트js 페이지 프리 렌더링 문제
// nextjs 공식문서 참조
// https://nextjs.org/docs/pages/building-your-application/routing/custom-document#customizing-renderpage
// https://merrily-code.tistory.com/153


// 기존 document 파일과 역할은 동일하나, 서버에서 styled-components를 적용한 문서를 내려주게 된다.
import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: any) => (props: any) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  // 여기부터는 문서 공통 정보를 다루는 기존 _document 파일의 역할과 동일합니다.
  render() {
    return (
      <Html>
        <Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Head>
      </Html>
    );
  }
}

