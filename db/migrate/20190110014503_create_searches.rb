class CreateSearches < ActiveRecord::Migration[5.2]
  def change
    create_table :searches do |t|
      t.string :first_name
      t.string :alias
      t.string :last_name
      t.string :gender
      t.integer :birth_month
      t.integer :birth_year
      t.string :mothers_first_name
      t.string :mothers_last_name
      t.string :fathers_first_name
      t.string :fathers_last_name
      t.string :reason_seperated
      t.integer :last_year_seen
      t.string :you_are_to_them
      t.string :they_are_to_you
      t.belongs_to :account, foreign_key: true

      t.timestamps
    end
  end
end
