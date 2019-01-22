class AddDobMonthYearToUserInfo < ActiveRecord::Migration[5.2]
  def change
    add_column :user_infos, :dob_month_year, :string
    remove_column :user_infos, :birth_month
    remove_column :user_infos, :birth_day
    remove_column :user_infos, :birth_year
  end     
end
