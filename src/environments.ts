const environments = {
  development: '.env',
  stage: 'stage.env',
  production: 'prod.env',
};

export function getEnvironment(env: string) {
  return environments[env] || '.env';
}
