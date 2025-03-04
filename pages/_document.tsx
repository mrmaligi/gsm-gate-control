import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
          <meta name="theme-color" content="#00bfff" />
          <meta name="description" content="GSM Gate Control - Manage your GSM relay" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
          <meta name="apple-mobile-web-app-title" content="Gate Control" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
          <link rel="shortcut icon" href="/icons/icon-72x72.png" />
        </Head>
        <body>
          <div
            id="splash-screen"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100vh',
              backgroundColor: '#00bfff',
              color: 'white',
              textAlign: 'center'
            }}
          >
            <img
              src="/icons/icon-192x192.png"
              alt="GSM Gate Control Logo"
              style={{ width: '128px', height: '128px', marginBottom: '20px' }}
            />
            <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>
              GSM Gate Control
            </h1>
            <p style={{ fontSize: '16px', marginBottom: '20px' }}>Loading application...</p>
            <button
              id="install-button"
              onClick={() => window.installPWA()}
              style={{
                display: 'none',
                marginTop: '10px',
                padding: '10px 20px',
                backgroundColor: 'white',
                color: '#00bfff',
                border: 'none',
                borderRadius: '5px',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              Install App
            </button>
          </div>
          <div
            id="offline-alert"
            style={{
              display: 'none',
              position: 'fixed',
              bottom: '20px',
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: '#ff4500',
              color: 'white',
              padding: '10px 20px',
              borderRadius: '5px',
              zIndex: '1000',
              boxShadow: '0 2px 10px rgba(0,0,0,0.2)'
            }}
          >
            You are currently offline. Some features may be limited.
          </div>
          <Main />
          <NextScript />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.addEventListener('load', function() {
                  setTimeout(function() {
                    document.getElementById('splash-screen').style.display = 'none';
                  }, 1000);
                });
                window.addEventListener('online', function() {
                  document.getElementById('offline-alert').style.display = 'none';
                });
                window.addEventListener('offline', function() {
                  document.getElementById('offline-alert').style.display = 'block';
                });
              `
            }}
          />
          <script src="/pwa.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
