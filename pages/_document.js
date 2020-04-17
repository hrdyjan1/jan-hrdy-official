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
          <link
            rel='stylesheet'
            href='https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css'
          />

          <link rel='stylesheet' type='text/css' href='/css/welcome/toggle.css' /> {/* Independent*/}
          <link rel='stylesheet' type='text/css' href='/css/welcome/form.css' /> {/* Almost independent*/}
          <link rel='stylesheet' type='text/css' href='/css/welcome/index.css' /> 

          <link rel='stylesheet' type='text/css' href='/css/loading.css' /> {/* Independent*/}
          <link rel='stylesheet' type='text/css' href='/css/nprogress.css' /> {/* Independent*/}
          <link rel='stylesheet' type='text/css' href='/css/toggle.css' /> {/* Independent*/}
          <link rel='stylesheet' type='text/css' href='/css/button.css' /> {/* Independent*/}
          <link rel='stylesheet' type='text/css' href='/css/root/modal.css' />  {/* Independent*/}

          <link rel='stylesheet' type='text/css' href='/css/pages/about.css' />  {/* Independent*/}
          <link rel='stylesheet' type='text/css' href='/css/pages/projects.css' />  {/* Independent*/}

          <link rel='stylesheet' type='text/css' href='/css/projects/kanban/index.css' />  {/* Independent*/}
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
