class CreateSearchInfos < ActiveRecord::Migration[5.2]
  def change
    create_table :search_infos do |t|
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
      t.integer :last_year_seen
      t.string :they_are_to_you
      t.string :you_are_to_them
      t.string :reason_for_separation
      t.belongs_to :account, foreign_key: true

      t.timestamps
    end
  end
end
