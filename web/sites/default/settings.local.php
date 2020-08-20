<?php
  

$settings['trusted_host_patterns'] = [
'^glen\.build$',
];

$settings['file_private_path'] = '/Users/glenshewchuck/Sites/glen/private';

$settings['skip_permissions_hardening'] = TRUE;

$settings['config_sync_directory'] = '/Users/glenshewchuck/Sites/glen/sync';

# this sets the color for the environmental_indicator module
$config['environment_indicator.indicator']['bg_color'] = 'green';
$config['environment_indicator.indicator']['fg_color'] = 'black';
$config['environment_indicator.indicator']['name'] = 'Local';

$databases['default']['default'] = array (
  'database' => 'glen',
  'username' => 'glen',
  'password' => 'glen',
  'prefix' => '',
  'host' => 'localhost',
  'port' => '',
  'namespace' => 'Drupal\\Core\\Database\\Driver\\mysql',
  'driver' => 'mysql',
);

