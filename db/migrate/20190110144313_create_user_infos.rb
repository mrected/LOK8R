class CreateUserInfos < ActiveRecord::Migration[5.2]
  def change
    create_table :user_infos do |t|
      t.string :first_name
      t.string :alias
      t.string :last_name
      t.string :gender
      t.integer :birth_year
      t.integer :birth_month
      t.integer :birth_day
      t.string :birth_state
      t.string :mothers_first
      t.string :mothers_last
      t.string :fathers_first
      t.string :fathers_last
      t.belongs_to :account, foreign_key: true

      t.timestamps
    end
  end
end
