import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel='stylesheet' type='text/css' href='/css/index.css' />
          <link rel='stylesheet' type='text/css' href='/css/loading.css' />
          <link rel='stylesheet' type='text/css' href='/css/nprogress.css' />
          <link rel='stylesheet' type='text/css' href='/css/root/navigation.css' />
          <link rel='stylesheet' href='/fonts/CroissantOne-Regular.ttf' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
