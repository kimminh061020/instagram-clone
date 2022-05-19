CarrierWave.configure do |config|
      config.storage = :fog

      config.fog_credentials = {
        :provider               => 'AWS',                        # required
        :aws_access_key_id      => 'AKIA6FBNZ55SYVCKCM72',                        # required
        :aws_secret_access_key  => '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',                        # required
        :region                 => 'us-east-1',
      }
      config.fog_directory  = 'mark-test-0101'                     # required
end
