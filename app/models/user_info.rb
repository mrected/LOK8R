class UserInfo < ApplicationRecord
  belongs_to :account
  has_many :search_infos, through: :account
end
