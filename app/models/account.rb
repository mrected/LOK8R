class Account < ApplicationRecord
    has_many :search_infos
    has_many :user_infos

    def self.from_auth_hash(payload)
        Account.find_or_create_by(auth_sub: payload["sub"]) do |account|
          # This code will be called whenever we create a account for the first time.
      
          # This code would save a account's avatar as a URL
          # account.avatar_url = payload["picture"]
      
          # This code would attach an ActiveStorage profile image by downloading the account's profile and storing it locally
          # If you do this, you must also run `bundle add down` to add the `down` gem
          #
          # begin
          #   picture = Down.download(payload["picture"])
          #   account.profile_image.attach(io: picture, filename: picture.original_filename)
          # rescue Down::Error => exception
          #   Rails.logger.info exception
          # end
      
          # This code would store their email address
          # p ["this is the profile", profile]
          account.email = payload["email"]
          # account.name = payload["name"]
        end
      end
end
