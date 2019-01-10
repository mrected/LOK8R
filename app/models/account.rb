class Account < ApplicationRecord
    has_many :search_info
    has_many :user_info
end
