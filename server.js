const assetPrefix = '/static/robofriends-user9';

const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handle = app.getRequestHandler();

// Handle the asset and rewrite the pathname
const handleAppAssets = (assetRegexp, handle) => (req, res) => {
  const parsedUrl = parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const assetMatch = assetRegexp.exec(pathname);
  const [, asset] = assetMatch;
  req.url = format({
    ...parsedUrl,
    pathname: asset,
  });

  return handle(req, res);
};

app.prepare().then(() => {
  // Set the asset prefix
  app.setAssetPrefix(assetPrefix);

  const server = express();

  // Handle the app assets and route them
  server.get(
    `${assetPrefix}/*`,
    handleAppAssets(new RegExp(`^${assetPrefix}(/.*$)`), handle),
  );

  server.all('*', (req, res) => handle(req, res));
  server.listen(3000, error => {
    if (error) throw error;
    console.log('Server started.');
  });
});