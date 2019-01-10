class Account < ApplicationRecord
    has_many :search_infos
    has_many :user_infos
end
