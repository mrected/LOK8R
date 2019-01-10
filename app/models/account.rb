class Account < ApplicationRecord
    has_many :info
    has_many :search
end
