const environments = {
  production: '.prod.env',
  development: '.env',
};

export function getEnvironments(env) {
  return environments[env] || environments.development;
}
