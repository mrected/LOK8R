class SearchInfo < ApplicationRecord
  belongs_to :account
  has_many :user_infos, through: :account
end
