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
          <link rel='stylesheet' type='text/css' href='/css/toggle.css' />
          <link rel='stylesheet' type='text/css' href='/css/button.css' />
          <link rel='stylesheet' type='text/css' href='/css/root/navigation.css' />
          <link rel='stylesheet' type='text/css' href='/css/root/modal.css' />
          <link
            href='https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@200;300;400;500;600;700;800;900&display=swap'
            rel='stylesheet'
          />
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
