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
          {/* <link rel='stylesheet' type='text/css' href='/css/index.css' /> */}
          <link
            rel='stylesheet'
            href='https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css'
          />
          <link
            href='https://fonts.googleapis.com/css?family=Crimson+Pro:300,400,600,700&display=swap'
            rel='stylesheet'
          />
          <link rel='stylesheet' href='https://use.fontawesome.com/releases/v5.4.1/css/all.css' /> 
          {/* Jou tohle je na ikony socialni */}

          <link rel='stylesheet' type='text/css' href='/css/welcome/font-awesome.min.css' />
          <link rel='stylesheet' type='text/css' href='/css/welcome/toggle.css' />
          <link rel='stylesheet' type='text/css' href='/css/welcome/icon.css' />
          <link rel='stylesheet' type='text/css' href='/css/welcome/form.css' />
          <link rel='stylesheet' type='text/css' href='/css/welcome/index.css' />
          {/* <link rel='stylesheet' type='text/css' href='/css/loading.css' />
          <link rel='stylesheet' type='text/css' href='/css/nprogress.css' />
          <link rel='stylesheet' type='text/css' href='/css/toggle.css' />
          <link rel='stylesheet' type='text/css' href='/css/button.css' />
          <link rel='stylesheet' type='text/css' href='/css/root/navigation.css' />
          <link rel='stylesheet' type='text/css' href='/css/root/modal.css' /> */}
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
