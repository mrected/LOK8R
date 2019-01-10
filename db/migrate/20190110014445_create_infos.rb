class CreateInfos < ActiveRecord::Migration[5.2]
  def change
    create_table :infos do |t|
      t.string :first_name
      t.string :alias
      t.string :last_name
      t.string :gender
      t.integer :birth_month
      t.integer :birth_year
      t.integer :birth_day
      t.string :mothers_first_name
      t.string :mothers_last_name
      t.string :fathers_first_name
      t.string :fathers_last_name
      t.belongs_to :account, foreign_key: true

      t.timestamps
    end
  end
end
